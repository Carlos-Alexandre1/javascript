//let valores = [8, 4, 3, 2, 9]
let valores =[]
let c = 1
let y = 2
valores.push(c)
valores.push(y)

if (valores.includes(c) == true){
    console.log`sei`
} 

console.log(valores)
valores.sort()
for (let pos in valores){
    console.log(valores[pos])
}







// for(let pos=0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }