const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `

   *BOT NAME: ${settings.botName || 'BWB-XMD'}*  
   VERSION: *${settings.version || '2.0.5'}*
   OWNER: ${settings.botOwner || 'PRINCETECH'}
   
    ━━━━`GENERAL COMMANDERS` ━━━━━
 ➤help or .menu
 ➤ping
 ➤alive
 ➤tts <text>
 ➤owner
 ➤joke
 ➤quote
 ➤fact
 ➤weather <city>
 ➤news
 ➤attp <text>
 ➤lyrics <song_title>
 ➤8ball <question>
 ➤groupinfo
 ➤staff or .admins 
 ➤vv
 ➤trt <text> <lang>
 ➤ss <link>
 ➤jid

     ━━━*ADMIN COMMANDERS*:━━━
 ➤ban @user
 ➤promote @user
 ➤demote @user
 ➤mute <minutes>
 ➤unmute
 ➤delete or .del
 ➤kick @user
 ➤warnings @user
 ➤warn @user
 ➤antilink
║ ➤antibadword
║ ➤clear
║ ➤tag <message>
║ ➤tagall
║ ➤chatbot
║ ➤resetlink
║ ➤welcome <on/off>
║ ➤goodbye <on/off>


╔═══════════════════
   *OWNER COMMANDERS*
║ ➤mode
║ ➤autostatus
║ ➤clearsession
║ ➤antidelete
║ ➤cleartmp
║ ➤setpp <reply to image>
║ ➤autoreact


╔═══════════════════╗
  *IMAGE/STICKER COMMANDEES*:
║ ➤blur <image>
║ ➤simage <reply to sticker>
║ ➤sticker <reply to image>
║ ➤tgsticker <Link>
║ ➤meme
║ ➤take <packname> 
║ ➤emojimix <emj1>+<emj2>


╔═══════════════════╗
    *GAME COMMANDS*:
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare


╔═══════════════════╗
   *AI COMANDS*:
║ ➤ .gpt <question>
║ ➤ .gemini <question>
║ ➤ .imagine <prompt>
║ ➤ .flux <prompt>


╔═══════════════════╗
  *FUN COMMANDS*:
║ ➤compliment @user
║ ➤insult @user
║ ➤flirt 
║ ➤shayari
║ ➤goodnight
║ ➤roseday
║ ➤character @user
║ ➤wasted @user
║ ➤ship @user
║ ➤simp @user
║ ➤stupid @user [text]


╔═══════════════════╗
   *TEXT MAKER*:
║ ➤metallic <text>
║ ➤ice <text>
║ ➤snow <text>
║ ➤impressive <text>
║ ➤matrix <text>
║ ➤light <text>
║ ➤neon <text>
║ ➤devil <text>
║ ➤purple <text>
║ ➤thunder <text>
║ ➤leaves <text>
║ ➤1917 <text>
║ ➤arena <text>
║ ➤hacker <text>
║ ➤sand <text>
║ ➤blackpink <text>
║ ➤glitch <text>
║ ➤fire <text>


╔═══════════════════╗
   *DOWNLODERS*:
║ ➤play <song_name>
║ ➤song <song_name>
║ ➤instagram <link>
║ ➤facebook <link>
║ ➤tiktok <link>
║ ➤video <song name>
║ ➤ytmp4 <Link>


╔═══════════════════╗
  *GITHUB COMMANDERS:*
║ ➤git
║ ➤github
║ ➤sc
║ ➤script
║ ➤repo


Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398106360290@newsletter',
                        newsletterName: 'BWB XMD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398106360290@newsletter',
                        newsletterName: 'BWB XMD by Princetech',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
