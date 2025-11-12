const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "hanif": "Pookie কইরে 🌚",
    "sifat": "তোর নানীরে চাই🌚🫦",
    "mitu": "Sabka boss mitu😎",
    "help": "Prefix de sala",
    "hi": "আসসালামুআলাইকুম 😊",
    "bc": "SAME TO YOU😊",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "tor ball": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "shahadat": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:Eftekhar kabir☜\nFacebook:https://www.facebook.com/share/14PyUL8oCtB/ ",
    "admin": "He is Eftekhar kabir তাকে সবাই Cyber Bot Team Saport Admin হিসেবে চিনে😘☺️",
    "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "assalamualaikum": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖",
    "fork": "https://github.com/shahadat-sahu/SHAHADAT-CHAT-BOT.git",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস শাহাদাৎ রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস শাহাদাৎ এর ইনবক্সে এখুনি গুঁতা দিন🫢😻",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "ami shahadat": "হ্যা বস কেমন আছেন..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS ─꯭─⃝‌‌Nezukoo💤",
    "diba": "blaa🌚🍷",
    "vag": "Pehli fursat mein nikal..!🥱🌝🌚",
    "Diba ke?": "Kabir এর bestie😁",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "Kabir ke??": "Alien👽+আমার owner😎",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার জামাই/বউ কে উম্মাহ 😘😽🙈"
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
  
