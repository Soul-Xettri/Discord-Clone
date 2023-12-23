"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/member-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal copy";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal/>
      <CreateChannelModal/>
      <LeaveServerModal/>
      <DeleteServerModal/>
    </div>
  );
};
