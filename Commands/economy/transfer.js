const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
 const fs = require("fs");


module.exports = { 

    name: "transfer",  
    desc: "transfer gold.", 
    alias: ["give"],
    category: "Economy",  
    react: "💰", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        let value = text.trim().split(" ");
    if (value[0] === "") return m.reply(`Use ${prefix}transfer 100 @user`);
    let user = mentionByTag[0];
    if(!user) return m.reply('Please give me any user🤦‍♂️.');
    const cara = "cara"
        const user1 = m.sender
        const user2 = user
        const word = value[0];
		const code = value[1];
        let d = parseInt(word)
		if (!d)return m.reply('check your text plz u r using the command in a wrong way👀');
        const balance = await eco.balance(user1, cara);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        if(a == true) return m.reply("you dont have sufficient money to transfer👎");

        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        let buttons = [
            {
              buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet👛" },
              type: 1,
            },
            {
                buttonId: `${prefix}Bank`,
              buttonText: { displayText: "Bank🏦" },
              type: 1,

            },
          ];
          let buttonMessage = {
            text: `*📠 Transaction successful of ${word} 💰*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
