import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";
import { Types } from "mongoose"; // Import Types to access ObjectId

dbConnect();

export async function GET(
    request: Request,
    context: { params: { id: string } } // Ensure correct structure
) {
    const params = await context.params; // ✅ Await params

    if (!params || !params.id) {
        return new Response(JSON.stringify({ message: "ID not provided" }), {
            status: 400,
        });
    }

    const { id } = params; // ✅ Extract ID safely

    // Validate ObjectId
    if (!Types.ObjectId.isValid(id)) {
        return new Response(JSON.stringify({ message: "Invalid ID format" }), {
            status: 400,
        });
    }

    try {
        const postItem = await PostItem.findById(id).select("-__v");
        if (!postItem) {
            return new Response(
                JSON.stringify({ message: "No Item Found for this ID" }),
                { status: 404 }
            );
        }
        return new Response(JSON.stringify(postItem), { status: 200 });
    } catch (error) {
        console.error("Error fetching item:", error);
        return new Response(
            JSON.stringify({ message: "Error fetching item" }),
            { status: 500 }
        );
    }
}
