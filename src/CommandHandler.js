const Discord = require('discord.js');
const CommandExecuter = require('./CommandExecuter.js');
const fs = require('fs');

class CommandHandler {
  constructor(bot) {
    this.bot = bot;
    this.commandExecuter = new CommandExecuter(this.bot);
  }

  handle(message) {
    if (!message.content.startsWith(this.bot.basic.command_prefix)){
      return;
    }

    const splitmessage = message.content.split(" ");
    const command_prefix = this.bot.basic.command_prefix;
  	const command = splitmessage[0].slice(command_prefix.length).toLowerCase();;
    const body = message.content.substring(message.content.indexOf(" ") + 1);
  	const arg1 = splitmessage[1];
  	const arg2 = splitmessage[2];
  	const arg3 = splitmessage[3];

    if (command === "addsong"){
      this.commandExecuter.addsongCommand(message, body);
    }else if (command === "addsound"){
      this.commandExecuter.addsoundCommand(message, body);
    }else if (command === "about"){
      this.commandExecuter.aboutCommand(message);
    }else if (command === "console"){
      this.commandExecuter.consoleCommand(message, body);
    }else if (command === "help"){
      this.commandExecuter.helpCommand(message);
    }else if (command === "pause"){
      this.commandExecuter.pauseCommand(message);
    }else if (command === "play"){
      this.commandExecuter.playCommand(message, arg1, body);
    }else if (command === "playmusic" || command === "pm"){
      this.commandExecuter.playmusicCommand(message, arg1, arg2, body);
    }else if (command === "playsound" || command === "ps"){
      this.commandExecuter.playsoundCommand(message, arg1, arg2, body);
    }else if (command === "purgemusic"){
      this.commandExecuter.purgemusicCommand(message, arg1);
    }else if (command === "purgesounds"){
      this.commandExecuter.purgesoundsCommand(message, arg1);
    }else if (command === "removesong"){
      this.commandExecuter.removesongCommand(message, arg1);
    }else if (command === "removesound"){
      this.commandExecuter.removesoundCommand(message, arg1);
    }else if (command === "resume"){
      this.commandExecuter.resumeCommand(message);
    }else if (command === "say"){
      this.commandExecuter.sayCommand(message);
    }else if (command === "setbotactivity"){
      this.commandExecuter.setbotactivityCommand(message, arg1, arg2, arg3);
    }else if (command === "setbotavatar"){
      this.commandExecuter.setbotavatarCommand(message);
    }else if (command === "setbotstatus"){
      this.commandExecuter.setbotstatusCommand(message, arg1);
    }else if (command === "showusersounds"){
      this.commandExecuter.showusersoundsCommand(message);
    }else if (command === "songinfo"){
      this.commandExecuter.songinfoCommand(message, body);
    }else if (command === "soundinfo"){
      this.commandExecuter.soundinfoCommand(message, body);
    }else if (command === "stop"){
      this.commandExecuter.stopCommand(message);
    }else if (command === "updatemusic"){
      this.commandExecuter.updatemusicCommand(message);
    }else if (command === "updatesounds"){
      this.commandExecuter.updatesoundsCommand(message);
    }else if (command === "ytdl"){
      this.commandExecuter.ytdlCommand(message, arg1);
    }else{
      message.author.send("Sorry. I do not recognize that command. Use **" + command_prefix + "help** for a list of commands.");
      this.bot.util.cleanupMessage(message);
    }
  }
}

module.exports = CommandHandler;
