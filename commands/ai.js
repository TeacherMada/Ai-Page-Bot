async function callAI(query) {
    const apiKey = 'j86bwkwo-8hako-12C';
    const encodedQuery = encodeURIComponent(query);
    const apiUrl = `https://liaspark.chatbotcommunity.ltd/@unregistered/api/0.5894690218095953?key=${apiKey}&query=${encodedQuery}`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling AI API:', error);
        throw error;
    }
}

module.exports = {
    callAI
};
