const YT = require("../../lib/ytdl-core.js");

module.exports = {
  name: "ytvd",
  alias:["mp4","ytmp4","ytvideo"],
  desc: "To download a song as mp4 from YouTube link",
  category: "Media",
  usage: `ytvd <song link>`,
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
          const vid= await YT.mp4(text);
        const vidname = vid.title;
        await Miku.sendMessage(m.from,{
            video: {url:vid.videoUrl},
            caption: vidname + " By: *Miku Nakano*"
        },{quoted:m})
        
            }
        }