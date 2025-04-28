const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "main",
    version: "1.0",
    author: "Samuel Kâñèñgeè",
    countDown: 5,
    category:"admin",
    role: 2
  },

  onStart: async function({ api, args, message, event }) {
    const threadID = event.threadID;
    const approvedIDsPath = path.join(__dirname, "assist_json", "approved_main.json");
    const pendingIDsPath = path.join(__dirname, "assist_json", "pending_main.json");

    if (args[0] === "approve" && args[1]) {
      const id = args[1];
      const messageFromAdmin = args.slice(2).join(" ");

      let approvedIDs = JSON.parse(fs.readFileSync(approvedIDsPath));
      if (approvedIDs.includes(id)) {
        message.reply("╔════ஜ۩۞۩ஜ═══╗\n\nThis thread ID is already approved to use main cmds from bot\n\n╚════ஜ۩۞۩ஜ═══╝");
      } else {
        approvedIDs.push(id);
        fs.writeFileSync(approvedIDsPath, JSON.stringify(approvedIDs));
        api.sendMessage(`╔════ஜ۩۞۩ஜ═══╗\n\n📌 Request Accepted📌\nMain Cmds Unlocked\n\nyour request for use main cmds from bot has been approved by BotAdmin\nNow all locked commands will work for this thread.\n\nMessage from admin: ${messageFromAdmin} \n\n If you don't know how to use this bot then join the Marin support Box \nType : $support \nto join.\n\n╚════ஜ۩۞۩ஜ═══╝`, id);

