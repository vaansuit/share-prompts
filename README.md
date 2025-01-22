
# 🌍 Language Switch / Trocar Idioma

[English](./README.md) | [Português](./README-pt-br.md)

# 🚀 PromptMania

Welcome to the **PromptMania**! 📝✨ This platform allows users to share creative prompts with others, explore a variety of user-generated ideas, and interact with profiles. You can log in, create prompts, edit or delete them, and search for prompts by username or hashtags. Click on any user profile to see all of their shared prompts!

## 🔑 Features

- **🔒 User Authentication**: Log in using your Google account via `next-auth` 🌐.
- **📝 Create and Share Prompts**: Users can create new prompts and share them with the community.
- **✏️ Edit & Delete**: Modify or remove your prompts anytime.
- **🔍 Search**: Easily find prompts by searching for a username or hashtags.
- **👤 User Profiles**: Visit profiles to view all the prompts shared by a specific user.

## ⚙️ Technologies Used

- **Next.js** for the frontend 🌟
- **React** for building UI components ⚛️
- **MongoDB** for storing user data and prompts 📦
- **bcrypt** for authentication and security 🔑
- **Tailwind CSS** for stylish and responsive design 🎨
- **next-auth** for Google authentication ✨

---

## 🛠️ Setup Instructions

To get this project running on your local machine, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/prompt-sharing-website.git
```

### 2. Install dependencies

Navigate into the project folder and install the required dependencies:

```bash
cd prompt-sharing-website
npm install
```

### 3. Create a `.env` file

In the root directory, create a `.env` file and add the following environment variables:

```bash
GOOGLE_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your-next-auth-secret
```

Make sure to replace `your-google-client-id`, `your-google-client-secret`, and `your-next-auth-secret` with your actual credentials.

### 4. Run the project locally

After setting up the `.env` file, run the following command to start the server:

```bash
npm run dev
```

This will start the app on [http://localhost:3000](http://localhost:3000). 🎉

---

## 📚 How to Use

1. **Log in with Google**: Use the Google login button to authenticate.
2. **Create a Prompt**: Once logged in, click the "Create Prompt" button and share your ideas.
3. **Search for Prompts**: Use the search bar to find prompts by hashtags or usernames.
4. **View User Profiles**: Click on any user profile to view all the prompts they have shared.

---

## 🖥️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📝
