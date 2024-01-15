//Desafio Felipão
//14.01.2024

let personagem = "Kratos"
let level = 20
console.log ("Seu personagem está armado? ")
 let arma = false
  if(arma){console.log ( " Sim, ele está armado")}
else {console.log( "Não, ele  está desarmado")}

//Armado = Level 20 / Desarmado = Level 10
for(let xpAtual = 20; xpAtual >= 10; xpAtual--) 
{console.log( "Seu poder está caindo para " + xpAtual);
}
console.log ("Sua arma está por perto? ")
let estaPerto = true
console.log (estaPerto)
let perto = "Sua arma está perto "
switch (perto)
{case "Sua arma está longe":
console.log("Seu poder continuara diminuindo ") 
break;
case "Sua arma está perto ":
console.log ("Ao chama-la,seu poder começará a aumentar")
break;
} 

//Saída
console.log ("Se " +personagem + " chamar sua arma, seu poder será equivalente a " + level)
