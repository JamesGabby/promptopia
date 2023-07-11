import { connectionToDB } from "@/utils/database";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()

    try {
        await connectionToDB()
    } catch (error) {
        
    }
}