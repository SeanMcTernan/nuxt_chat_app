import OpenAI from 'openai';

interface Message {
    role: 'assistant' | 'user' | 'system'
    content: string
}

export default defineEventHandler(async (event) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    // let messages: Message[] = [];
    // const previousMessages = await readBody(event);
    // messages = JSON.parse(previousMessages);
    // const completion = await openai.chat.completions.create({
    //     model: "gpt-4o-mini",
    //     messages
    // });

    // return {
    //     message: completion.choices[0].message.content
    // };
    // Set a timeout of 5 seconds before returning hello
    console.log('Waiting 5 seconds before returning hello...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                message: 'Hello'
            });
        }, 1000);
    });
});
