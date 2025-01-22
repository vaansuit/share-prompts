import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const {id} = await params;
        const prompt = await Prompt.findById(id).populate('creator');
        if(!prompt) return new Response ("Prompt not found", { status:404 })

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response ("Failed to fetch prompt", { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();
        const { id } = await params;
        const existingPrompt = await Prompt.findById(id);
        if(!existingPrompt) return new Response ("Prompt not f0und!", { status: 404 })

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        const { id } = await params;
        await Prompt.findByIdAndDelete(id);

        return new Response("Prompt deleted! ", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete prompt", { status: 500 })
    }
}