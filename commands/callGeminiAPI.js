const request = require('request');

function callGeminiAPI(prompt) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://liaspark.chatbotcommunity.ltd/@unregistered/api/0.5894690218095953?key=j86bwkwo-8hako-12C&query=${encodeURIComponent(prompt)}`;
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
