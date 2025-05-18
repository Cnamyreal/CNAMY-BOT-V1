async function githubCommand(sock, chatId) {
    const repoInfo = `*😘 CNAMY-BOT-V1*

*📂 GitHub Repository:*
https://github.com/Cnamyreal/CNAMY-BOT-V1.git

*📢 Official Channel:*
https://whatsapp.com/channel/0029Vb6AYn8CcW4pDk4lcI2e
Subscribe Ryu028 Music
https://youtube.com/@ryu028-b5t?si=U3BLz2UjbDRLS4yH

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'CNAMY-BOT-V1',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
