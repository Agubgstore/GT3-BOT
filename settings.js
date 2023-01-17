const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6285730659421''6288708212091']
global.ownerName = 'AgungGt and Seven'
global.packname = 'GTLD BOT'
global.author = 'GTLD | 62 857 306 594 21' //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'session'
global.footerbot = 'GTLD private server'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Sabar ya kontol...',
done: 'Done!'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
