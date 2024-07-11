let nome = prompt("Digite seu nome:")
let idade = Number(prompt("Digite sua idade:"))
let altura = Number(prompt("Digite sua altura:"))
let peso = Number(prompt("Digite seu peso:"))
let profisao = prompt("Digite sua profisão:")

console.log("Ola! "+ nome+" ,você tem "+ idade+" anos, é "+profisao+" ,tem "+altura+"M de altura e pesa "+peso)

//validação para saber se pode tomar uma
if(idade >= 18){
    console.log('está liberado para tomar umas geladas')
}
else if(idade < 18){
    console.log("sem geladas pra vc amigo")
}

let dias = idade * 365
let semanas = dias / 7
let mes = dias / 30

console.log(nome+ " você tem "+idade+ " anos, "+ dias+" dias, "+mes+" meses, "+semanas+" semanas.")