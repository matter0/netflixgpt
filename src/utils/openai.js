import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true,
});

export default openai;