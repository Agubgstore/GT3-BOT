const fs = require('fs')
const chalk = require('chalk')

exports.menubot = (prefix, pushname) => {
	return `Mau liat bokep *${pushname}* 👋😁
   
╔════════
╠══ *GROUP MENU*
╠ ${prefix}antilink
╠ ${prefix}antivirtex
╠ ${prefix}Antidelete
╠ ${prefix}antiviewone
╠ ${prefix}linkgroup
╠ ${prefix}revoke
╠ ${prefix}kick
╠ ${prefix}add
╠ ${prefix}promote
╠ ${prefix}demote
╠ ${prefix}setname
╠ ${prefix}setdesk
╠ ${prefix}setppgrup
╠ ${prefix}tagall
╠ ${prefix}hidetag
╠ ${prefix}ephemeral
╚════════
  
╔════════
╠══ *MAKER MENU*
╠ ${prefix}sticker
╠ ${prefix}toimg
╠ ${prefix}tomp4
╠ ${prefix}toaudio
╠ ${prefix}tomp3
╠ ${prefix}tovn
╠ ${prefix}togif
╠ ${prefix}tourl
╠ ${prefix}removebg
╠ ${prefix}estetik
╠ ${prefix}ktpmaker
╠ ${prefix}jpeg
╠ ${prefix}emojimix
╠ ${prefix}tourl
╚════════

╔════════
╠══ *DOWNLOAD MENU*
╠ ${prefix}play
╠ ${prefix}yts
╠ ${prefix}ytmp3
╠ ${prefix}ytmp4
╚════════

╔════════
╠══ *RANDOM MENU*
╠ ${prefix}pinterest
╠ ${prefix}wallpaper
╠ ${prefix}quotesanime
╠ ${prefix}wikimedia
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}fetch
╠ ${prefix}jpeg
╚════════

╔════════
╠══ *GROWTOPIA MENU*
╠ ${prefix}gtserver
╠ ${prefix}gtrender
╠ ${prefix}sdata
╠ ${prefix}hostmaker
╠ ${prefix}rhostmaker
╠ ${prefix}owner
╚════════

╔════════
╠══ *GTPS MENU*
╠ ${prefix}count
╠ ${prefix}status
╠ ${prefix}up
╠ ${prefix}down
╠ ${prefix}delplayer
╠ ${prefix}delworld
╠ ${prefix}whois
╠ ${prefix}worldinfo
╠ ${prefix}cekworld
╠ ${prefix}cekguild
╠ ${prefix}givelevel
╠ ${prefix}givegems
╠ ${prefix}takelevel
╠ ${prefix}givevip
╠ ${prefix}givemod
╠ ${prefix}givedev
╠ ${prefix}givesdev
╚════════

╔════════
╠══ *OWNER MENU*
╠ ${prefix}bc
╠ ${prefix}bcgc
╠ ${prefix}join
╠ ${prefix}leave
╠ ${prefix}block
╠ ${prefix}unblock
╠ ${prefix}setppbot
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}eval
╚════════`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
