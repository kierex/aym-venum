const fs = require("fs");
const path = require("path");
const { config } = global.GoatBot;

const pendingIDsPath = path.join(__dirname, "assist_json", "pending_main.json");
const approvedIDsPath = path.join(__dirname, "assist_json", "approved_main.json");

module.exports = {
	config: {
		name: "requestMAIN",
		version: "1.1",
		author: "SiAM",
		countDown: 5,
		category: "Utility",
    role: 0,
    guide: {
      en: "{pn} Your <message for admin> "
    }
	},

	onStart: async function ({ api, args, event, threadsData }) {
    const { getPrefix } = global.utils;
       const p = getPrefix(event.threadID);
		const threadID = event.threadID;
		const senderID = event.senderID;
		const threadInfo = await api.getThreadInfo(threadID);

		// Check if the thread ID is already approved
		if (fs.existsSync(approvedIDsPath)) {
			const approvedIDs = JSON.parse(fs.readFileSync(approvedIDsPath));
			if (approvedIDs.includes(threadID)) {
				const approvalMsg = "No need for approval. This thread is already approved to use all main  command from the bot.\n\n If you don't know how to use this bot then join the Marin support Box \nType : $support \nto join.";
