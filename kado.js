const { Client } = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const Config = require('./ayarlar.json');
const request = require("request");

client.on("ready", async() => {
    client.user.setPresence({ activity: { name: Config.KadoStatus }, status: "idle" });
    setInterval(() => {
        request({
            url: `https://discord.com/api/guilds/${Config.Serverİd}/vanity-url`,
            method: "PATCH",
            json: { code: Config.Url },
            headers: { "Authorization": `Bot ${Config.Token}` },
        });
    }, 1 * 1000)
});

client.login(Config.Token).then(c => console.log(`${client.user.tag} Bağlandım usta`)).catch(err => console.error("Bağlanamadım usta"));