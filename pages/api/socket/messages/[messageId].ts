import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";
import { NextApiResponseServerIo } from "@/types";
import { MemberRole } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== "DELETE" && req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const profile = await currentProfilePages(req);
    const { messageId, serverId, channelId } = req.query;
    const { content } = req.body;

    if (!profile) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (!messageId) {
      return res.status(400).json({ error: "Message ID missing" });
    }
    if (!serverId) {
      return res.status(400).json({ error: "Server ID missing" });
    }
    if (!channelId) {
      return res.status(400).json({ error: "Channel ID missing" });
    }

    const server = await db.server.findFirst({
      where: {
        id: serverId as string,
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
      include: {
        members: true,
      },
    });

    if (!server) {
      return res.status(401).json({ error: "Server not found" });
    }

    const channel = await db.channel.findFirst({
      where: {
        id: channelId as string,
        serverId: serverId as string,
      },
    });

    if (!channel) {
      return res.status(401).json({ error: "Channel not found" });
    }

    const member = server.members.find(
      (member) => member.profileId === profile.id
    );

    if (!member) {
      return res.status(401).json({ error: "Member not found" });
    }

    let message = await db.message.findFirst({
      where: { id: messageId as string, channelId: channelId as string },
      include: {
        member: {
          include: {
            Profile: true,
          },
        },
      },
    });
    if (!message || message?.deleted) {
      return res.status(401).json({ error: "Message not found" });
    }

    const isMessageOwner = message.memberId === member.id;
    const isAdmin = member.role === MemberRole.ADMIN;
    const isModerator = member.role === MemberRole.MODERATOR;

    const canModify = isModerator || isAdmin || isMessageOwner;

    if (!canModify) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if ((req.method === "DELETE")) {
        message = await db.message.update({
            where: {
              id: messageId as string,
            },
            data: {
              fileUrl: null,
              content: "This message has been deleted.",
              deleted: true,
            },
            include: {
              member: {
                include: {
                  Profile: true,
                },
              },
            },
        });
    }

    if ((req.method === "PATCH")) {
      if (!isMessageOwner) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      message = await db.message.update({
        where: {
          id: messageId as string,
        },
        data: {
          content,
        },
        include: {
          member: {
            include: {
              Profile: true,
            },
          },
        },
      });
    }

    const updateKey = `chat:${channelId}:messages:update`;
    res?.socket?.server?.io?.emit(updateKey, message);

    return res.status(200).json(message);
  } catch (error) {
    console.log("[MESSAGE_ID", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
