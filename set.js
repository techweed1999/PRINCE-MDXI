
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61V25KqRhT9l37VijRXsWqqAggjXgYBUcZUHlpoLsrNpkH0lP+ewpnJmUpOTiZV4anpy+611l579zdQlGmNF/gKJt9ARdIWUdwP6bXCYALUJoowAUMQIorABNTzs2o3RRpX240pHhyNnd06fjRYHxXTELTYWC4YFOVJk1+ewH0IquaQpcFPArZN9ZxcipGXM1cHu7slK6d7oTovxABCayZPM3GGyLqdw9MTuPcRUUrSItarBOeYoGyBr2uUkq/BN9f5ojzv7HMbV+uXDHEDtxlMT2yqtKdZwjq+Qfduw6Y3T/ka/MFuxFJ1o4zE0fxgQF9xZ548uDRj57XahabN58wIUslY+O/w6zQucGiGuKApvX5Z9521lcJ2zUtrJ56O8q3AmcR6dTU9UbuKmxbhVbh6PpvvC+9rwLXzjPPRIjjjwfnSZC3L0lUqiY2zPrjeEV4sci58s1zCi/4Z+Jp8eOX0X3S39ejiHfRCU14E1O3dJPSIKViO9swWRts03u1oHGejlvNOX4MvlpRfRTGj3MblbenqRsZo+Jn1Vn699+uaF6FvFDLj4u6T7og25GcoLePknG1uneQHBnJmsateWrbtBpdTy9xIkkezAu7QvLKEvcxkzinq4CG2RGkVTa+ira4qm0Wdp26elZVm85LfLrlKU54ejE74aoZgAu9DQHCc1pQgmpbFY06ShgCFrYsDgulDXnA8lc1NVOxZJI79zQBxo3aNWnXXua/VAcZ5nBvxbcXbRqw/gSGoSBngusbhLK1pSa4rXNcoxjWY/PbIVE+a4LykeJ6GYAIERubHHBR5Tv61/uWSIFqjqvqlwBQMQUTKfIXBhJIGD8FjP6/rPDeGmqFokBcYWeR0lZUFWRIYKIrKtGeYv925SXNcU5RXPTGBG3NQ4sT78H+BoUFJFkTdYAWO1XmFUXUW8rwoylCRRZ0T/wWGdP99CArc0TcX99pzcAiilNTUK5oqK1H4YfGPRRQEZVNQ91oEWj/ABEw+TWNK0yKue2JNgUiQpC3Weh5gEqGsxn+mGxMcfnB5b2FaGfYu9FfMBi4NEfTY+0B/lWYisX9Xp0D9ZrDDOCxLMATZ4xRk4RiOJRHyLDPm+f5kv3D/E3AfP8QUpVnd62lJMm+9GvpCvFaB/fysvMaKFivgO8GPsnmzpW+crKmjtu5Uy1aENMJtPE1fKZ90DBvtW2uru14tbG9ED55+EARMwLztGl2EC2MRb3TYIeuIb9vNQNGKw+riavLLuM6WjHYbK4lNfIsdB8vDFPIza2cG2Jmrm80OZQ45Rj6rH9XRTPBWzjR+6m8LcZsG+PNl5SARAtX1llN+Ja5Nmy26DSeNk9WyEpnlhuO2AZez2aBGzYkPYcJ2+HiaXribnPKH5RyfaxQmsdsoednajjBPtUZT7LeCfjSU7L2Rp++llj5+oxQ/+uJ7jv4tlW+4e8Mx9+GnEO+N9h+albrt9tOYsQ9MfKk2C1FqgpHC50tsBuFLwR5umaNnS2sbiN0M3HvnVxmiUUny/hnPDwgMASmb3r5mEZU/eyoUxlTfWWeopsr3kvhRlfFvu9akrGaoTsAEsGv4mkS9v69KVbkU0Y8KA0r/GS9XcP8Dxxs81IoIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
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
