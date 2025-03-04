import mongoose from "mongoose";

const postItemSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        category: { type: String, required: true },
        date: { type: Date, default: Date.now },
        title: { type: String, required: true },
        breif: { type: String, default: null },
        avatar: { type: String, default: null },
        author: { type: String, default: null },
        top: { type: Boolean, default: false },
        trending: { type: Boolean, default: false }
    }, 
    {
        timestamps: true,
    }
);

// Ensure the model is correctly named and does not get re-registered
const PostItem =
    mongoose.models.PostItem || mongoose.model("PostItem", postItemSchema);

export default PostItem;
