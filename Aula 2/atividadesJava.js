document.write("Atividade 1")

const idade = Number(prompt("Digite a sua idade"))

document.write("<h1>Minha idade é: " , idade," anos <h1> <br>")

document.write(`<br>`)
alert("ATIVIDADE 2")

document.write("<h4>Atividade 2</h4>")

const x= Number(prompt("Vamos fazer a soma de dois valores digite o primeiro valor"))
const y= Number(prompt("Digite o segundo Valor"))
let z 

z=x+y

document.write(`<h1> O resultado de ${x} + ${y}é: ${z} <h1>`)

document.write(`<br>`)
alert("ATIVIDADE 3")

document.write("<h4>Atividade 3</h4>")

let total= Number(prompt("Vamos saber quanto vai dar cada parcela de sua compra, digite o valor total de sua compra"))
let parcelas= Number(prompt("Digite quantas vezes voce vai parcelar"))
const valueP= total/parcelas
document.write(`<h1> A valor total de sua compra é: R$ ${total} <h1>`)
document.write(`Forma de pagamento ${parcelas} x de R$ ${valueP}`)

document.write(`<br>`)
alert("ATIVIDADE 4")

document.write("<h4>Atividade 4</h4>")

let minutos= Number(prompt("Digite um valor em minutos, para saber o resultado em segundos "))
let segundos= minutos*60
document.write(` <h1> ${minutos} minutos equivalem à ${segundos} segundos <h1>`)

document.write(`<br>`)
alert(`ATIVIDADE 5 
 Digite 3 valores de notas e somares a media desses valores`)

document.write("<h4>Atividade 5</h4>")

const nome = prompt("Digite o nome do aluno")
const nota1 = Number(prompt("Digite a primeira nota"))
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota"))
let media = nota1 + nota2 + nota3 / 3

document.write(`<h1>O Aluno ${nome}, teve as notas ${nota1}, ${nota2}, ${nota3}. <br> E a média é: ${media}<h1>`)
