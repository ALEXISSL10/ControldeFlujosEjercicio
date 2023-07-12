
// Parte1



function horariolaboral(ndia, nhr){
    if ( (ndia>=1) && (ndia<=5) &&
    (nhr>=9) && (nhr<=18)
    ){
        return true;
    } else {
        return false;
    }
}

//parte 2



function numerodeldia(janfirtdayn, yeardayn){
   return (janfirtdayn+(yeardayn-1))%7;
}
console.log(numerodeldia (0, 10));


// Parte 3
function parte3(yeardayn, nhr){
   let day = numerodeldia(0, yeardayn);
return horariolaboral(day, nhr)
} 
console.log(parte3(23,20));








