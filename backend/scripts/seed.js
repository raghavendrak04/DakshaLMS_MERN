import { seedData } from './seedHelper.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

/* App Config */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/library";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log("Connected to MongoDB for seeding...");
    await seedData();
    console.log("Seeding process finished.");
    process.exit(0);
}).catch((err) => {
    console.error("Failed to connect for seeding:", err);
    process.exit(1);
});
