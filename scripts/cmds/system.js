const si = require('systeminformation');
module.exports = {
	config: {
		name: "system",
		aliases: [],
		version: "1.0",
		author: "",
		countDown: 5,
		role: 0,
		shortDescription: "System",
		longDescription: "",
		category: "",
		guide: "{pn}"
	},

	onStart: function(bytes) {
		const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		let l = 0, n = parseInt(bytes, 10) || 0;
		while (n >= 1024 && ++l) n = n / 1024;
		return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)}${units[l]}`;
	},

	onStart: async function ({ api, event }) {
		const { cpu, cpuTemperature, currentLoad, memLayout, diskLayout, mem, osInfo } = si;
		const timeStart = Date.now();
		const axios = require ("axios");
		const request = require ("request");
		const fs = require ("fs-extra");

		try {
			var { manufacturer, brand, speed, physicalCores, cores } = await cpu();
			var { main: mainTemp } = await cpuTemperature();
			var { currentLoad: load } = await currentLoad();
			var diskInfo = await diskLayout();
			var memInfo = await memLayout();
			var { total: totalMem, available: availableMem } = await mem();
