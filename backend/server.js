import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

import path from "path";
import { fileURLToPath } from 'url';

/* App Config */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const port = process.env.PORT || 5000;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

/* MongoDB connection */
const connectDB = async () => {
  console.log("Starting DB connection process...");
  try {
    console.log("Attempting local MongoDB connection...");
    await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // Ensure it fails quickly if local is down
    });
    console.log("MONGODB CONNECTED SUCCESSFULLY (LOCAL)");
  } catch (err) {
    console.log("Local MongoDB connection failed. Error:", err.message);
    console.log("Starting MongoDB Memory Server fallback...");
    try {
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      console.log("Creating MongoMemoryServer instance...");
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      console.log("Memory Server started at:", mongoUri);

      await mongoose.connect(mongoUri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MONGODB CONNECTED SUCCESSFULLY (MEMORY SERVER)");

      // Seed demo data
      console.log("Seeding demo data...");
      const { seedData } = await import('./scripts/seedHelper.js');
      await seedData();
      console.log("Seeding complete.");
    } catch (memErr) {
      console.error("FATAL: COULD NOT START ANY DATABASE:", memErr);
    }
  }
};

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running in PORT ${port}`);
});
