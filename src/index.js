
//Função para calcular o número de vitórias do jogador 
function game (win, defeat){
    let rank = win - defeat
    return rank
}
let difference = game(60, 0)
 
​
let level = ""
​
if(difference < 10){
    level = "Ferro"
}else if(difference >= 11 && difference <= 20){
    level = "Bronze"
}else if(difference >= 21 && difference <= 50){
    level = "Prata"
}else if(difference >= 51 && difference <= 80){
    level = "Ouro"
}else if(difference >= 81 && difference <= 90){
    level = "Diamente"
}else if(difference >= 91 && difference <= 100){
    level = "Lendário" 
}else{
    level = "Imortal"
} 
    
​
console.log(`O Herói tem de saldo ${difference} vitórias e está ocupando o nível ${level}`)