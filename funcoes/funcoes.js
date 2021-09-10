function parimpar(n) {
    if(n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }

}

let res = parimpar(3)
console.log(res)

//soma

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(7,3))

//Numero x ele

let v = function(x) {
    return x*2
}

console.log(v(5))

//Fatorial
/*
function fatorial(n) {
    let fat = 1
    for(let c = n; c >1; c--){
        fat *= c
    }
      return fat
}

console.log(fatorial(5))

//5! = 5 x 4 x 3 x 2 x 1 = 120
*/

//recursividade
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
 console.log(fatorial(5))







