module.exports = {
  name: 'wizardfrog',
  description: 'Sends a random Wizardfrog quote',
  aliases: ['wf'],
  usage: ' ',
  no1uw: true,
  async run(client, message, args, Discord) {
    const random = Math.ceil(Math.random() * 59);

    const embed = new Discord.RichEmbed()
      .setAuthor('Wizardfrog Quote')
      .setTimestamp()
      .setFooter(`Created and Maintained by Phoenix#0408 | ${client.version}`, client.user.displayAvatarURL)
      .setColor('#4199c2');

    function wizardfrog(image) {
      embed.setImage(image);
      message.channel.send(embed);
    }

    switch (random) {
      default:
        message.reply('Something went wrong...');
        break;
      case 1:
        wizardfrog('https://i.imgur.com/H6Z7L7F.jpg');
        break;
      case 2:
        wizardfrog('https://i.imgur.com/dTMnqrN.jpg');
        break;
      case 3:
        wizardfrog('https://i.imgur.com/tyVsYKO.jpg');
        break;
      case 4:
        wizardfrog('https://i.imgur.com/G9AFP53.jpg');
        break;
      case 5:
        wizardfrog('https://i.imgur.com/tvLAHdi.jpg');
        break;
      case 6:
        wizardfrog('https://i.imgur.com/8UnqQJT.jpg');
        break;
      case 7:
        wizardfrog('https://i.imgur.com/8VuHtJL.jpg');
        break;
      case 8:
        wizardfrog('https://i.imgur.com/optTQS7.jpg');
        break;
      case 9:
        wizardfrog('https://i.imgur.com/A0o9FKY.jpg');
        break;
      case 10:
        wizardfrog('https://i.imgur.com/JHM2COl.jpg');
        break;
      case 11:
        wizardfrog('https://i.imgur.com/WHSz9vu.jpg');
        break;
      case 12:
        wizardfrog('https://i.imgur.com/VkWI4Yn.jpg');
        break;
      case 13:
        wizardfrog('https://i.imgur.com/78gyTFL.jpg');
        break;
      case 14:
        wizardfrog('https://i.imgur.com/hDw04NI.jpg');
        break;
      case 15:
        wizardfrog('https://i.imgur.com/UGcbSas.jpg');
        break;
      case 16:
        wizardfrog('https://i.imgur.com/fmdRorh.jpg');
        break;
      case 17:
        wizardfrog('https://i.imgur.com/89rAYRr.jpg');
        break;
      case 18:
        wizardfrog('https://i.imgur.com/XInZFnY.jpg');
        break;
      case 19:
        wizardfrog('https://i.imgur.com/UakzPFf.jpg');
        break;
      case 20:
        wizardfrog('https://i.imgur.com/2J1Br4t.jpg');
        break;
      case 21:
        wizardfrog('https://i.imgur.com/jt8LLLo.jpg');
        break;
      case 22:
        wizardfrog('https://i.imgur.com/qDSmXoz.jpg');
        break;
      case 23:
        wizardfrog('https://i.imgur.com/mcPAKY8.jpg');
        break;
      case 24:
        wizardfrog('https://i.imgur.com/WKHnnP6.jpg');
        break;
      case 25:
        wizardfrog('https://i.imgur.com/0ZbWNle.jpg');
        break;
      case 26:
        wizardfrog('https://i.imgur.com/vnf8SLG.jpg');
        break;
      case 27:
        wizardfrog('https://i.imgur.com/bxEHXOg.jpg');
        break;
      case 28:
        wizardfrog('https://i.imgur.com/VgPQAKo.jpg');
        break;
      case 29:
        wizardfrog('https://i.imgur.com/JRbl6n1.jpg');
        break;
      case 30:
        wizardfrog('https://i.imgur.com/y3R1Zzd.jpg');
        break;
      case 31:
        wizardfrog('https://i.imgur.com/VtmILmS.jpg');
        break;
      case 32:
        wizardfrog('https://i.imgur.com/6LOp7sb.jpg');
        break;
      case 33:
        wizardfrog('https://i.imgur.com/eenYK3N.jpg');
        break;
      case 34:
        wizardfrog('https://i.imgur.com/VxWJOhV.jpg');
        break;
      case 35:
        wizardfrog('https://i.imgur.com/O2a9yEh.jpg');
        break;
      case 36:
        wizardfrog('https://i.imgur.com/KTZAPWT.jpg');
        break;
      case 37:
        wizardfrog('https://i.imgur.com/q8qSRgr.jpg');
        break;
      case 38:
        wizardfrog('https://i.imgur.com/iGQHQOn.jpg');
        break;
      case 39:
        wizardfrog('https://i.imgur.com/iGQHQOn.jpg');
        break;
      case 40:
        wizardfrog('https://i.imgur.com/RJe0mrr.jpg');
        break;
      case 41:
        wizardfrog('https://i.imgur.com/IWBhOPv.jpg');
        break;
      case 42:
        wizardfrog('https://i.imgur.com/J2wuQof.jpg');
        break;
      case 43:
        wizardfrog('https://i.imgur.com/7zNnl4P.jpg');
        break;
      case 44:
        wizardfrog('https://i.imgur.com/1WYVvTb.jpg');
        break;
      case 45:
        wizardfrog('https://i.imgur.com/gqVXGdc.jpg');
        break;
      case 46:
        wizardfrog('https://i.imgur.com/mQ6hauQ.png');
        break;
      case 47:
        wizardfrog('https://i.imgur.com/fT8J947.jpg');
        break;
      case 48:
        wizardfrog('https://i.imgur.com/19TOcXo.jpg');
        break;
      case 49:
        wizardfrog('https://i.imgur.com/9QCM1F6.jpg');
        break;
      case 50:
        wizardfrog('https://i.imgur.com/unFQzgi.jpg');
        break;
      case 51:
        wizardfrog('https://i.imgur.com/YtgpRmp.jpg');
        break;
      case 52:
        wizardfrog('https://i.imgur.com/YtgpRmp.jpg');
        break;
      case 53:
        wizardfrog('https://i.imgur.com/1xbVKvF.jpg');
        break;
      case 54:
        wizardfrog('https://i.imgur.com/8fNMQzs.jpg');
        break;
      case 55:
        wizardfrog('https://i.imgur.com/AdnlZlT.jpg');
        break;
      case 56:
        wizardfrog('https://i.imgur.com/AHT8HjQ.jpg');
        break;
      case 57:
        wizardfrog('https://i.imgur.com/XI6o3pC.jpg');
        break;
      case 58:
        wizardfrog('https://i.imgur.com/RDszfYe.jpg');
        break;
      case 59:
        wizardfrog('https://i.imgur.com/SmTkJoh.jpg');
        break;
    }
  },
};