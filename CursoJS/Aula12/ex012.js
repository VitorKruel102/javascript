var agora = new Date()
var hora = agora.getHours()

if (hora > 5 && hora < 12) {
    console.log(`Bom Diaa!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde!`)
} else if (hora <= 24){
    console.log(`Boa Noite!`)
} else {
    console.log(`Boa Madrugada!`)
}