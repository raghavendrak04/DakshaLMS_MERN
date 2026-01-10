
import mongoose from 'mongoose';

const mongoUrl = "mongodb://localhost:27017/library";

console.log("Connecting...");

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.error("Connection failed:", err);
        process.exit(1);
    }
    console.log("Connected locally!");

    mongoose.connection.db.listCollections().toArray().then(cols => {
        console.log("Collections:", cols.map(c => c.name));
        if (cols.length > 0) {
            // fetch first one
            const firstCol = cols[0].name;
            mongoose.connection.db.collection(firstCol).find().limit(2).toArray().then(docs => {
                console.log(`Docs from ${firstCol}:`, docs);
                process.exit(0);
            });
        } else {
            console.log("Empty DB");
            process.exit(0);
        }
    }).catch(e => {
        console.error(e);
        process.exit(1);
    });
});
