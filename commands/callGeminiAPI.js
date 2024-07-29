const request = require('request');

function callGeminiAPI(prompt) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://hazee-gemini-ultra-c1ad28d5e422.herokuapp.com/bard?question=${encodeURIComponent(prompt)}`;
      //`https://gemini-yvcl.onrender.com/api/ai/chat?prompt=${encodeURIComponent(prompt)}&id=40`;
    
    request(apiUrl, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        try {
          const responseBody = JSON.parse(body);
          resolve(responseBody.response);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

module.exports = { callGeminiAPI };
