let pronombre = ['the', 'our'];
let adjetivo = ['great', 'big'];
let objeto = ['jogger', 'racoon'];
let ending = ['.net', '.us', '.cl', '.com']

console.log('Primero van utilizando el for')

for(i=0;i<pronombre.length;i++){
    let pro = pronombre[i];
    for(y=0;y<adjetivo.length;y++){
        let adj = adjetivo[y];
        for(j=0;j<objeto.length;j++){
            let obje = objeto[j];
            for(z=0;z<ending.length;z++){
                let end = ending[z];
                console.log(pro + adj + obje + end)
            }
        }
    }
}
console.log(" ")
console.log('Ahora va con forEach');
console.log(" ")

pronombre.forEach(function(item1, index1){
    adjetivo.forEach (function(item2, index2){
        objeto.forEach(function(item3, index3){
            ending.forEach(function(item4, index4){
                console.log(item1+item2+item3+item4)
            })
        })
    })
})