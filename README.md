# BlogApp 

![React](https://img.shields.io/badge/react-61DBFB?style=for-the-badge&logo=react&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

A blog application with a **React** frontend and an **Express.js** backend connected to **MongoDB** via **Mongoose**.  
It allows users to register, log in, and publish personal blogs.

---

### 🧩 Prerequisites

- Node.js >= 18  
- npm or yarn  

---

### ⚙️ How to run the app

1. Clone the repository:
   ```bash
   git clone https://github.com/MMalpassi/BlogApp.git

2. Install dependencies in both directories:
   ```bash
   cd BlogApp/bloglist-backend
   npm install

   cd ../bloglist-frontend
   npm install

3. Go to the backend folder and create a .env file with the following content::
   ```bash
   cd /bloglist-backend
   PORT=3001
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>?retryWrites=true&w=majority
   SECRET=<your_secret>
   
   If you don’t have a MongoDB Atlas account, you can create a free one here:
   https://www.mongodb.com/cloud/atlas
  

3. Run both servers (backend and frontend):
   ```bash
   npm run dev

4. Open your browser at:
   ```bash
   http://localhost:5173
