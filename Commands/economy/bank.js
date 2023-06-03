const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy')
 const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
 const fs = require("fs");


module.exports = { 

    name: "bank",  
    desc: "shows bank amount.", 
    alias: ["bank"],
    category: "Economy",  
    react: "💰", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        const pushname = m.pushName //|| 'NO name'
        const user = m.sender
    const cara = "cara"
    const balance = await eco.balance(user, cara);
     var role = 'brokie😭'
     if (`${balance.bank}`           <= 1000){
        role = 'broke😭'
      } else if (`${balance.bank}`   <= 10000){
            role = 'Poor😢'
        } else if (`${balance.bank}` <= 50000){
            role = 'Average💸'
        } else if (`${balance.bank}` <= 1000000){
            role = 'Rich💸💰'
        } else if (`${balance.bank}` <= 10000000){
            role = 'Millionaire🤑'
        } else if (`${balance.bank}` <= 90000000){
            role = 'Billionaire🤑🤑'
        }    
        let buttons = [
            {
              buttonId: `${prefix}slot`,
              buttonText: { displayText: "Slot🎰" },
              type: 1,
            },
            {
                buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet👛" },
              type: 1,

            },
          ];
          let buttonMessage = {
            text: `🏦 *${pushname}'s Bank*:\n\n🪙${balance.bank}/${balance.bankCapacity}\n\n\n*Wealth: ${role}*\n`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }