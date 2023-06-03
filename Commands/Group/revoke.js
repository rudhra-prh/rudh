require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "revoke",
  alias: ["resetlink","resetgclink","resetlinkgroup","resetlinkgc"],
  desc: "Reset group link",
  category: "Group",
  usage: "revoke",
  react: "🍁",
  start: async (
    Miku,
    m,
    { prefix, isBotAdmin, isAdmin}
  ) => {
  
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    try {
      await Miku.groupRevokeInvite(m.from).then(
        (res) =>
          Miku.sendMessage(
            m.from,
            { text: `Group link has been *Updated* Successfully!` },
            { quoted: m }
          )
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
