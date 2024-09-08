import { DEAFULT_PROJECT_SERVICE_ACCOUNT_KEY } from './secrets.js';
import * as util from 'node:util';

const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEAFULT_PROJECT_SERVICE_ACCOUNT_KEY}`,
    },
    body: JSON.stringify({
        "model": "gpt-4o-mini",
        "messages": [{ "role": "user", "content": "Say this is a test!" }],
        "temperature": 0.7
    }),
});

console.log(util.inspect(await response.json(), { showHidden: true, depth: null, colors: true }));
