//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJ0U3Z6aXBQNG03M0NOWXdlM2pyQ0wrbjdZaFNZUnZMVlUyNGZ0NzdGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEVZRVVKNW9xaTVNVUt5ZlVYT3JUQmxlNEVJem9PN1V1Ukt3ZGlCZGREMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUDZXV1p3Z25BUDdjZ2Q0Q2pHLzYvZlNMSGZBYy9vRUdFdS9RQ3RabmwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmTy9wL0dGQVRVaTJjZWtZRlZMSnkvUGZuQ0FQMHp3TUVSSFJkOGFLWFRzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPdzUwanRDQUhWOWg3ODRTVmdFWXNNZnFHVzhkSERIWktnZkpJT1M4MWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKTWNUdklLM1dkVGZWY1FkbmdjSzNSdDdhYTFpdENXb1BNWG1WcU1GVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUYybzZXYkI0NVFKbFkvVURnY2E3RDQ2Qks2YVRuVXJacTBNRnQwVVZVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnNIRnpxZVFCOGpKODd1blFraFVJY0xyaXhIb0NmK0VUSmNBQisyUHZBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVpYW5WZlFPUStQTUJiam5UL2FqZVd4Zy95VU56TGlMUmU3THM1Y3pWRGpWUmh1SnJqcGkzYkdaY2REOU5DNmpiT0hUTDVSckFTU0RoNVo0L0RrSUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiIzeEJGcDdxeVFBV1IyektJQmY3Y0pFYlNwQlZFTjN0eEVVVEpGNVlxZ1RRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUxMjU3MjAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdBRkM0MjhERTdBNDk1M0MzRjg0NUFBMTAwNjA4RkJFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5MTEwMTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUxMjU3MjAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE5OUI1NjlBOEQzMzZERjg0MTAzMDhENUMzNDUzMkNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5MTEwMTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUxMjU3MjAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ4NEZGNkE3Njg5RTRBRUJCQTdDMTExMDREMzc5NTIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5MTEwMjF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUxMjU3MjAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMwMDY3RTRFMjJCRjFBNDM4MjdDOUIwNDc4RUMzMTU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5MTEwMjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZLLThZeHdDVHNxM09hWldWck9URFEiLCJwaG9uZUlkIjoiNzM4NDBmZjItNjQ2YS00MjViLTgzODgtODRiMDU0YmRhMjY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImszYms5VWM4aWgyeS80S1R6Sm9OQnFSRXRyZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNHBEb2VBUWRMYzI5eGw0QnozUlhON3RNM2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjNZMzVNRE0iLCJtZSI6eyJpZCI6Ijk0NzUxMjU3MjAwOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2hhbiBDcmVhdGlvbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlAxL2ZjRUVOMkVqN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieTZvYXFLcDlWbFZ1anptY0YzZ1lIRVNISkRpdnlEaTRBY3gxQzNUWExUbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic056WmVCRUwrbG1sTm5rU3hsaXNSaUZWejJsUHlyWVg2RHM3aXZxdWUvOXlyeUJuT2dPbFV5WHY4YVN0YktHUHJvK1RyZ0wwREQxcG91cGczNjcwQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImU4bEd1bU1jcFVnOHNFYjNhQTdvUVJUaUVBbmFrWWo3SVlWK0Y3cGROYm9oWXZXUjhNY2I5b25mdHRJcVdFY3pEYlJpTy8wcE1vckJNZ3pyb0UrNEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTEyNTcyMDA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjdXFHcWlxZlZaVmJvODVuQmQ0R0J4RWh5UTRyOGc0dUFITWRRdDAxeTA2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTExMDE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh6UyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
