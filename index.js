const { Client, Collection } = require("discord.js");
const fetch = require("node-fetch")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
const prefix = "-";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (message.content === '+ping') {  
    message.reply(`pong!`);
  }
});


client.on('message', message => {
  if (message.content === '+hi') {  
    message.reply(`hello!`);
  }
});
const commands = [
  new SlashCommandBuilder().setName('+ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
  .map(command => command.toJSON());



  
client.login(client.config.token);	
