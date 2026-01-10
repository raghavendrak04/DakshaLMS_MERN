
import mongoose from 'mongoose';

const mongoUrl = "mongodb://127.0.0.1:27017/library";

console.log(`Trying to connect to ${mongoUrl}...`);

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log("Connected to MongoDB successfully!");

    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();

    if (collections.length === 0) {
        console.log("No collections found in the database. It might be empty.");
    } else {
        console.log("\nCollections found:");
        for (const col of collections) {
            console.log(`- ${col.name}`);

            // Show count
            const count = await mongoose.connection.db.collection(col.name).countDocuments();
            console.log(`  Count: ${count}`);

            // Show first 3 documents
            const docs = await mongoose.connection.db.collection(col.name).find().limit(3).toArray();
            console.log(`  Sample data:`, JSON.stringify(docs, null, 2));
            console.log("------------------------");
        }
    }

    mongoose.connection.close();
}).catch(err => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
});
