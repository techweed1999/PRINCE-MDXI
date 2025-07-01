
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU27KiOBT9l7xqtdwEpOpUDaB4QQ8iF8WpeYgSELknQcQu/32Kc+nuh5meMzyFJLX22mutne+gKBOCTNQB5TuocHKDFPVL2lUIKEBroghhMAQhpBAoQFjPvcHJZ3UT7WLROs5hqkprmqrlaKTdy4vj7aayfMANu3wBzyGomlOWnH8DGOlLv5jISzyX8RK5KhvA6YpdaQwaDyRvb8PKfpDSuAZ6D9gjwgQnRTyrLihHGGYm6rYwwV+j32ylw9Y7bWhtTfKMtHP1aERBHQtGFDbZmDqylbWnrZ/u06/Rx6KxVeMWOzEf3G+jZrU9IXF7FA1qZ814YbyaMGL2Fws7H/RJEhcoXIaooAntvqy7bcr+LaBzjXfxq7XqtGLp+w6dUKMq4QFfd3DGacx1tCiYrxFvnZ2L5a3Hhqp/Te9BmEwbbxo3TWCZC6auN3E85QapWRjpr8S3+DMr6f/RvVsf7CRY5olNNGPgoWuROg/hcLgIte4X0cAdbLtFxpsmQ75GHxWcXE6r9hDItSPI7rE8CGIya1Lp0pX5arTbk/U4b1fnrv1JH9IG/44lCs+cwa87K58N8MpYeIUBb/mSPRv7ZsRzc3aVH/kU+63vLaLTHYezcIKM9dlebxyj9KUkXC5n7eDqQvlk2fHrznO9pH156yhF3TIECvscAozihFAMaVIWb3v8eAhgeHPQGSP6Ji/I62Ag2NJK8zjEXAg/9+rcdUu5vjI1slxqdpY9t50uduQXMAQVLs+IEBQuEkJL3G0QITBGBCh//jUEBbrTd+P6cjw7BFGCCfWKpspKGH66+nkIz+eyKajTFWe9XyAMFObnNqI0KWLS69gUEJ8vyQ3pF0gJUCKYEfSjQ4RRCBSKG/RjavUy7IVnDivdObJrMAT5myFJCBTAibzEygIv8vJEEZk/yLe2h4VV9a1AFAxB9n5N4mRRYCRGZMccJ/U3+4PnD4Y9YIgoTDICFKBvzM29sO283u/aNgimjqqaqtqr9tnRZzTepb822jQwmhPWWW6it4srkfBevDKjgGnh8VqYqHvEUybUZ+0/gQAFTIMM3o+8F1+gdq+6jJgjQbpVXm0UOgxUk+Mjuhf9qHpw8+VVvj+E3YKRKvRYcGk6RRapr4eB7OodHIXxKzsS7Fusqi99tRDdkjP6tVg2cO4+5sgmkjuLLd1HNThOo6ohfBbc5/MjrB1jFcB04jDNA81yKeddEbu1d2fH3oJIu8t5NpNTZ8zJvi1Y65QboyR+D+3b0GQfj1XyFqfeq/43StDb7Bewd/C/vXsn3keMeQ5/wfh4Tf5lIrVAim1OO+ViS8ObTTRBskS2KSdb7nUzz4NxVxAiqJOFfdmA5/OvIagySKMS50ABsAhxmYRgCHDZ9JldFlH5m2K6yixnH51nkFD15xy4SY4IhXkFFFYaswIz5lj5/dYWl9UCkgtQQJHz2qnPdKdWlUMh/ZwqoPbfZs+C59/DDhb9cQcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
