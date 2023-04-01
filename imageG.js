const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function runImageGenerate() {
    const response = await openai.createImage({
        prompt: "a white siamese cat",
        n: 1,
        size: "1024x1024",
    });
    image_url = response.data.data[0].url;
    console.log(image_url)
}
runImageGenerate()