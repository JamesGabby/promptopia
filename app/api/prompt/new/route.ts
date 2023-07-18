import { connectionToDB } from "@/utils/database"
import Prompt from "@/models/prompt"

export const POST = async (request: { json: () => PromiseLike<{ userId: number, prompt: string, tag: string }> | { userId: number, prompt: string, tag: string } }) => {
    const { userId, prompt, tag } = await request.json()

    try {
        await connectionToDB()

        const newPrompt = new Prompt({ 
            creator: userId,
            prompt, 
            tag 
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}