import express from "express"
import Book from "../models/Book.js"
import BookTransaction from "../models/BookTransaction.js"

const router = express.Router()

router.post("/add-transaction", async (req, res) => {
    try {
        if (req.body.isAdmin === true) {
            const newtransaction = await new BookTransaction({
                bookId: req.body.bookId,
                borrowerId: req.body.borrowerId,
                bookName: req.body.bookName,
                borrowerName: req.body.borrowerName,
                transactionType: req.body.transactionType,
                fromDate: req.body.fromDate,
                toDate: req.body.toDate
            })
            const transaction = await newtransaction.save()
            const book = await Book.findById(req.body.bookId)
            await book.updateOne({
                $push: { transactions: transaction._id },
                $inc: { bookCountAvailable: -1 }
            })
            res.status(200).json(transaction)
        }
        else {
            return res.status(403).json("You are not allowed to add a Transaction")
        }
    }
    catch (err) {
        console.error(err);
        return res.status(504).json(err)
    }
})

router.get("/all-transactions", async (req, res) => {
    try {
        const transactions = await BookTransaction.find({}).sort({ _id: -1 })
        res.status(200).json(transactions)
    }
    catch (err) {
        return res.status(504).json(err)
    }
})

router.put("/update-transaction/:id", async (req, res) => {
    try {
        if (req.body.isAdmin) {
            const oldTransaction = await BookTransaction.findById(req.params.id);
            const updatedTransaction = await BookTransaction.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });

            // If transaction is marked as completed or deleted, increment book count
            if (req.body.transactionStatus === "Completed" && oldTransaction.transactionStatus !== "Completed") {
                await Book.findByIdAndUpdate(updatedTransaction.bookId, {
                    $inc: { bookCountAvailable: 1 }
                });
            }

            res.status(200).json("Transaction details updated successfully");
        }
    }
    catch (err) {
        console.error(err);
        res.status(504).json(err)
    }
})

router.delete("/remove-transaction/:id", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const transaction = await BookTransaction.findById(req.params.id);
            if (!transaction) {
                return res.status(404).json("Transaction not found");
            }

            await BookTransaction.findByIdAndDelete(req.params.id);
            const book = await Book.findById(transaction.bookId)

            // Increment book count if the deleted transaction was active
            const updates = { $pull: { transactions: req.params.id } };
            if (transaction.transactionStatus === "Active") {
                updates.$inc = { bookCountAvailable: 1 };
            }

            await book.updateOne(updates)
            res.status(200).json("Transaction deleted successfully");
        } catch (err) {
            console.error(err);
            return res.status(504).json(err);
        }
    } else {
        return res.status(403).json("You don't have permission to delete a transaction!");
    }
})

export default router