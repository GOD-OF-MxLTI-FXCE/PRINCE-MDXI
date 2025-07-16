
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUXY+jNhT9K5VfiTbhIyRBGqmEJIQQAhnyOdU+GDDgCWAPmABZRaq0faj6tO37/sf9CRUzOzuzUrud+snHtu4999xz/QFkBBfIRA1QPgCa4zNkqN2yhiKggHEZhigHHRBABoECVGvbG/h7uJwHnG5ojhvu+eY8GFrxZJMgoVgfejC57WIt692AawfQ0kuw/4OAJzqYhat8diuSSbAt+9KSldq5e6qOhcd11xU9eFW/ng1PlX8Drm1EiHOcRVMaoxTlMDFR40Ccv43+0eZ0AUVmQW65kRx0Q+L1kynft45ndHxQT04aG5zWODTZvo3+gt6XRN3ZGy2Wi2yKuIu3S2lWY85ZB/bd/ughe3VZmpSvnugXOMpQYAQoY5g1b9Y9neDJwTDv6HmTNUbMebjJc+TUa+zsVwHNk+5hP9+mp2RL3ka8CUjRz/vcymrqORPno4hXpfIQVnNxojm1nezXFm8fDmyjvibu5M9eOf0f3S2HbbSwaHYnjeTLoEc3MFlOLzMiZWN7qx4ovFv7VNcbQXob/e356A6r6TE1ez3RkOpTd0ed0WVbWpNZVzU1Lj8Fg8OcGD3yQh+yMv8Ry1V3V3eDaOJs7GzX7C/3VjTybxkmWz2+W8w33vLOzRKXrEIjmZ/Leb0astlGDVbWSbAx9CarqtmH03RpktGCLhYLXX+I1ZvHik6oMQKg8NcOyFGEC5ZDhknWngnioANgcHaRnyP2KC+Y+cWI8yrzGM8mbrgZ1avI14tyNLwd1dUSztI+ssX4tkuGxg3oAJoTHxUFCua4YCRvLFQUMEIFUH553wEZqtlT49p0It8BIc4Lts1KmhAYPHf1+RL6Pikz5jaZr7UblAOl93KMGMNZVLQ6lhnM/RifkRZDVgAlhEmBvlWIchQAheUl+ja1Ggla4Xf8WNKGmzvQAeljQ3AAFNDvjURhyA9HgqQMhZ+Ld1UbFVL6LkMMdEAG28fgy+dPH396Xl8+f/r1Nfjzp9foj+/QX9+h375Dv78GH0EHJI+U+L7cE0R5JEtSX5KFllZ7cf2mRks+QAzipAAK0BYalgxfny5lWbQsXVdJpGqRCl7Ue7bhU5vl7qqaSIY8vvPTSq1Wg6P8UNTkMKN7M64wvxhY1HCbe1uf3vxDEKCAqn9hG8y2xuF+mlF3WLveoYq86FSaxNXmKVaXi6grWpGAQo7Qkbxa6M14Mk7dSBs7NV9JC6Mn63HG6XkV1LKb6bzWerYDAnTGPnqdrLYHHsULEy389JYLYkdNVmc95o+9xo/XTHgwxYeeOSh1TucOYzWTZANzjn0aL+C9cxYRJaYo8MemUVlGU3eeJbP4PnoakMcBTb5+jPjRuq0vWhhi9PjPfDXAf/nkiXfr5t618yrE14/rX4Z/jM4XX+U0O9ofFoVqTZBgP+QWnNVwh4lvMBddTHdakEscg+v1fQfQBLKQ5ClQQJF6EHRATsp2NowsJD/IpI0NY7x+qjqBBVNf5m2DU1QwmFKg8IO+IIvyQBKfXjk5oXNYxEABWSqOPXD9G5Yq86i8BwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "50932818924", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "50932818924", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "#",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
