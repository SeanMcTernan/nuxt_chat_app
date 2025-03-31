import OpenAI from 'openai';

interface Message {
    role: 'assistant' | 'user' | 'system'
    message: string
}

export default defineEventHandler(async (event) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    // let messages: Message[] = [];
    const previousMessages = await readBody(event);
    // messages = messages.concat(previousMessages);
    console.log(previousMessages);
    // const completion = await openai.chat.completions.create({
    //     model: "gpt-4o-mini",
    //     input: messages
    // });

    return {
        // message: completion.choices[0].message.content
        message: "Hey!"
    };
});
