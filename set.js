
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW5OiOBT+L3nVGrkJSFVXDdB4AVFuovbWPAQISCsXk6DClP99C7t7ph92Z3t5CknqnO98l/wEZZUTZKEWKD9BjfMLpKhf0rZGQAFak6YIgyFIIIVAAdvpLa6z5TncjM5CZlH3kK9H0WFnby9J4Abt3JsYN9ZweGbxBO5DUDfRKY//UNC2TeG2lwYT4tM5dNIos9X11HTWur3RVu6+EJg5D8/m5Hn/BO59RZjjvMyM+oAKhOHJQq0Dc/w1+Hu9sgYN05RQctl56DWvAj9aycFV5/RVbOQ5qWW50SJ9Y38NvmuitZGpxV69RJ7QmEy8FC/15uUsyL7QTUaixU7x4ChHWfUGn+RZiZJFgkqa0/bLvM8sS7po8vWI2aLJwtDM1vOVaB6mVyMJYpvxJEHrdo4/LoyvAd8e07WZburxLgpm3jN0LjNjv99c8Jmigc0y25XdLOe3lGzlz8Ad/OGV4//hPXNgy+4s49WT0Usl5vYIXx1r3A2CgC+DMOG0OV8yL5m4Fb4G/5YwVjI/N2bI3TR1A12+mqlkpkp7xqjtxcBa8c2l4Etm8wk+pA3+E0qk4vgWSMGBpH7o1ORMDFeFsSoSNIv87jkTdFbORUsOp47qubo6m2zVo+1mlNtyry+udyhM2+G73CW38nx1MQ2i5+vTY6IjahcJUNj7EGCU5YRiSPOq7Pf4IYDJxUcxRvRBLqBNpVoJhmHFb7qJc/H2YyqbjbtGZbWJlifozoRGzjp9sX8CQ1DjKkaEoGSeE1rh1kaEwAwRoPz1YwhKdKNvsj2asUOQ5pjQTdnUpwomH5p+HMI4rpqS+m0Z6/0CYaAwv7cRpXmZkZ7FpoQ4PuQXpB8gJUBJ4YmgX/MhjBKgUNygX5nVq6SnfWW5vr3ypmAIiocceQIUMGYmPCez8oQTFPk7+Xbti8K6/lYiCobg9LjEjkWG48WJKAhjQeQU+Xu/f/8Fr6+WIArzEwEK0FfPTGvaU8PcvRayO5upRqbqmQp+j/Phijfeo1e3ZKf20TOm8zSN0sl8tEpWO6rV5eV14EvntvVbleGDGXn6hyJAAepV2K624dFfWNNKPd2InbM7FoljmFqjRo/L2bVpwnU2IuMUB+HcP2HdRwZ/Gnf6S7YVbb/q6MDYm+URLSWj62SueVaf+m4JuuQx+tzMt/AtcYmkOeNa1zvXDefktpYbPRJmS6kkwrMcGGkkL5DNc12zbIqpUBWi1I623CiO00NeVINNN3hJWIZsZom73m60d78+8nJ6f6fyh5d6ofrfNEeP2Jewl++/hHuD3buLuQ8/VXh/Rv4litpWYMyJF5iGp3k8z/Ejb9TtglBy4YskjI6NSMiRZKsVc8Pgfv8xBPUJ0rTCBVAALBNc5QkYAlw1vV0XZVr9oZmuLRaa+zb3CRKq/o5AkBeIUFjUQGGlMS9KAitwb7ccXNVzSA5AAWXBa1Fv51ata59C+hEooPbfkgvB/W8mXXbBagcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
PACK_AUTHOR: process.env.PACK_AUTHOR || " « GOD-OF-MxLTI-FXCE/ALI-MD » ", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
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
