module.exports = {
	config: {
		name: "adc",
		aliases: ["adc"],
		version: "1.2",
		author: "Loid Butter",//Follow Loid Senpai FB https://www.facebook.com/loidofficiaI
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "",
			en: "adc command"
		},
		longDescription: {
			vi: "",
			en: "only bot owner"
		},
		category: "Bot account", 
		guide: {
			en: "{pn}"
		}
	},
	
onStart: async function({ api, event, args }) {
  const permission = ["100008698744166"];
 if (!permission.includes(event.senderID))
 return api.sendMessage("❌ | You aren't allowed to use this command.", event.threadID, event.messageID);
    const axios = require('axios');
    const fs = require('fs');
    const request = require('request');
    const cheerio = require('cheerio');
    const { join, resolve } = require("path");
    const { senderID, threadID, messageID, messageReply, type } = event;
    var name = args[0];
    if (type == "message_reply") {
        var text = messageReply.body;
    }
    if(!text && !name) return api.sendMessage('Please reply to the link you want to apply the code to or write the file name to upload the code to pastebin!', threadID, messageID);
