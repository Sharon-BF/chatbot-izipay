import OpenAIApi from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAIApi({
    apiKey, dangerouslyAllowBrowser: true
});

export async function response ( text: string ) {

    // const messages = [
    //     {
    //         role: 'system',
    //         content: 'You are an AI that translates text from Spanish to English. Do not answer, just translate the text.'
    //     },
    //     {
    //         role: 'user',
    //         content: 'Hola mundo'
    //     },
    //     {
    //         role: 'assistant',
    //         content: 'Hello world'
    //     }
    // ]

    
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'system',
                content: 'You are an AI that translates text from Spanish to English. Do not answer, just translate the text.'
            },
            {
                role: 'user',
                content: 'Hola mundo'
            },
            {
                role: 'assistant',
                content: 'Hello world'
            },
            {
                role: 'user',
                content: text
            }
        ],
      });

      return chatCompletion.choices[0].message.content;
}
