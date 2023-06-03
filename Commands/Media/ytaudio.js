const YT = require("../../lib/ytdl-core.js");
const fs=require("fs")

module.exports = {
  name: "ytad",
  alias:["mp3","ytmp3","ytmusic"],
  desc: "To download a song as mp4 from YouTube link",
  category: "Media",
  usage: `ytad <song link>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {

    if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a YouTube Video link !` },
          { quoted: m }
        );
    if(!args[0].includes("youtube.com"))
        return Miku.sendMessage(
            m.from,
            { text: `Please provide a valid YouTube Video link !\n\nOr use ${prefix}play to play through song name.` },
            { quoted: m }
          );
          const ytaud= await YT.mp3(text);
          const aud=await Miku.sendMessage(m.from,{
            audio: fs.readFileSync(ytaud.path),
            mimetype: 'audio/mpeg',
            
        },{quoted:m})
        await fs.unlinkSync(ytaud.path);
        
            }
        }