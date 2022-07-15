let num = [5, 8, 4]
num.push(7)
num.sort()
num.push(1)
console.log(num)
console.log(`O array tem ${num.length} posições. Sendo elas ${num}`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

let pos = num.indexOf(2)

if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
