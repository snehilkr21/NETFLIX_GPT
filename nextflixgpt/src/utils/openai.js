import OpenAI from 'openai';
import {OPENAI_KEY} from '../utils/constant'

//it is just like autorization over here
const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true //it is basically because we want to make gptapi call from clientside
});

export default openai