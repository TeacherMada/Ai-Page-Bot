const axios = require('axios');

function callGeminiAPI(prompt) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://liaspark.chatbotcommunity.ltd/@unregistered/api/0.5894690218095953?key=j86bwkwo-8hako-12C&query=${encodeURIComponent(prompt)}`;
    
    axios.get(apiUrl)
      .then(response => {
        resolve(response.data.response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = { callGeminiAPI };
