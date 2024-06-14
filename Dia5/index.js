let userA = Number(prompt("Digite seu numero:"))
let userB = Number(prompt("Digite seu numero:"))
let opcao = prompt("Escolha a operação que deseja realizar: /, *, +, - ")
let resultado

switch (opcao) {
    case "+":
     resultado = userA + userB 
        console.log(" você somou "+userA+" + "+userB+ " que é igual a = "+resultado )
    break;
    case "-":
     resultado = userA - userB 
        console.log(" você diminuiu "+userA+"- "+userB+ " que é igual a = "+resultado )
    break;
    case "/":
     resultado = userA / userB 
        console.log(" você dividiu"+userA+" / "+userB+ " que é igual a = "+resultado )
    break;
    case "*":
     resultado = userA * userB 
        console.log(" você multiplicou "+userA+" * "+userB+ " que é igual a = "+resultado )
    break;
    default:
        console.log("Você não escolheu uma operação")
    break    
}
