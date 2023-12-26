# Discord Clone

A full-stack Discord clone built using Next.js, React, Socket.io, Prisma, Tailwind, and MySQL.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

## Introduction

This project is a Discord clone that replicates the core functionalities of the popular communication platform. It is developed using a modern tech stack, including Next.js for the frontend, React for UI components, Socket.io for real-time communication, Prisma as the database ORM, and Tailwind for styling.

## Features

- Real-time messaging using Socket.io
- User authentication and authorization
- Server and channel management
- Emoji support with Emoji Mart
- File uploads with Uploadthing
- Interactive UI components with Radix UI
- LiveKit integration for video and audio features

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [Prisma](https://prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MySQL](https://www.mysql.com/)

## Getting Started

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/discord-clone.git
   cd discord-clone
Save to grepper
Install dependencies.

bash
Copy code
npm install
Set up the database using Prisma.

bash
Copy code
npx prisma db push --force-reset
Run the development server.

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Scripts
dev: Run the Next.js development server.
build: Build the Next.js application.
start: Start the Next.js production server.
lint: Lint the project files.
db:reset: Reset the database using Prisma.
Dependencies
List of production dependencies from package.json.
Dev Dependencies
List of development dependencies from package.json.
Feel free to contribute and make this Discord clone even more awesome!
