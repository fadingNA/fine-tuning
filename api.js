import {Configuration, OpenAIApi} from "openai";
import process from "../venv/lib/python3.10/site-packages/matplotlib/backends/web_backend/.eslintrc.js";

const openaiApiKey = process.env.OPENAI_API_KEY
const configuration = new Configuration({
    apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)