# Discord Clone

<p align="center">
  Welcome to Discord Clone, a full-stack application built with Next.js, React, Socket.io, Prisma, Tailwind, and MySQL. This project aims to replicate the popular Discord platform, providing real-time messaging, server management, and other essential features.
</p>
<p align="center">
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
</p>

## Technologies Used

### Front-end
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [Tailwind CSS](https://tailwindcss.com/)

### Back-end
- [Prisma](https://prisma.io/)
- [MySQL](https://www.mysql.com/)

### Additional Libraries
- [Clerk](https://docs.clerk.dev/)
- [Emoji Mart](https://github.com/missive/emoji-mart)
- [LiveKit](https://livekit.io/)

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

## Introduction

This Discord Clone is a feature-rich platform that includes real-time messaging, server management, and various interactive components. It leverages Next.js for the front-end, React for UI components, Socket.io for real-time communication, Prisma as the database ORM, and Tailwind CSS for styling.

## Installation and Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/discord-clone.git
    cd discord-clone
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up the database using Prisma:**
    ```bash
    npx prisma db push --force-reset
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser to explore the Discord Clone.**

6. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Scripts

- **dev:** Run the Next.js development server.
- **build:** Build the Next.js application.
- **start:** Start the Next.js production server.
- **lint:** Lint the project files.
- **db:reset:** Reset the database using Prisma.

## Dependencies

- List of production dependencies from `package.json`.

## Dev Dependencies

- List of development dependencies from `package.json`.

Feel free to contribute and enhance the Discord Clone! 🚀
