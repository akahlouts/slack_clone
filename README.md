# 🤖 Slack Clone

This Slack clone is a real-time messaging platform built with **Next.js 14**, **Convex**, and **ShadCN UI**, inspired by Slack's workspaces, channels, and messaging system. The app allows users to create workspaces, join channels, send messages, and react to conversations with real-time updates.

## ⚙️ Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Convex**
- **Convex Auth**
- **React Hook Form**

## 🔋 Features

👉 **Authentication (CRUD) with Convex**: Secure user authentication and management, allowing users to sign up, log in, and manage their profiles.

👉 **Workspaces (CRUD)**: Create, join, update, and manage different workspaces for team communication.
   
- **Create Workspaces**: Start new workspaces by generating unique join codes.
- **Join Workspaces**: Users can join existing workspaces using a workspace code.
- **Update Workspaces**: Modify workspace settings as needed.
- **Delete Workspaces**: Remove unwanted workspaces.

👉 **Channels (CRUD)**: Organize conversations within workspaces by creating and managing channels.
  
- **Create Channels**: Set up communication channels within a workspace.
- **Manage Channels**: Update or delete channels as needed.

👉 **Messaging (CRUD)**: Send, edit, and delete real-time messages within channels.

- **Send Messages**: Post messages in the relevant channels.
- **Edit Messages**: Update existing messages to correct or add more information.
- **Delete Messages**: Remove messages when no longer needed.

👉 **Reactions (CRUD)**: React to messages with emojis, encouraging user engagement.

- **Add Reactions**: Express yourself using emojis or other icons.
- **Remove Reactions**: Remove reactions to keep things organized.

👉 **Real-Time Updates**: All user actions, including messaging and reactions, are reflected instantly thanks to Convex's real-time backend.

👉 **Role Management**: Admins have the power to manage workspace members and generate new join codes.

👉 **Responsive Design**: Fully responsive UI, built with Tailwind CSS, ensures a smooth experience across desktops, tablets, and mobile devices.

...and many more features designed for scalability and seamless collaboration.

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/akahlouts/slack_clone.git

   ```

   2. **Install dependencies**:

   ```bash
   cd slack-clone
   npm install

   ```

3. **Set up environment variables: # Create a .env.local file and add the necessary environment variables as specified in the .env.example file.

4. **Run the development server**:

   ```bash
   npm run dev
   
   ```

   Open http://localhost:3000 to see your app.
