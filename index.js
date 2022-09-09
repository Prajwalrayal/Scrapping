const axios = require('axios');
const cheerio = require('cheerio');

// let message_El=document.getElementById("stats");
let scrape = async (url) => {
    let result = await axios.get(url)
    fn = cheerio.load(result.data);
    console.log(fn('._UserActivityFrame_counter').text());
}

scrape('https://codeforces.com/profile/Prajwalrayal')