import OpenAI from 'openai';

export default defineEventHandler(async (event) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
            { "role": "user", "content": "write a haiku about ai" },
        ],
    });

    return {
        message: completion.choices[0].message.content
    };
});
