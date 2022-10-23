// var niz = [
//     [1,2,1,24],
//     [8,11,9,4],
//     [7,0,7,27]

//for(var index = 0;index < niz.length; index++) {
// for (var indexKolona = 0; indexKolona < niz[index].length; indexKolona++){
//  console.log(niz[index][indexKolona])
//  }
//}

// for(var i = 0; i < 5; i++) {
// console.log(i);
// for(var a = 0; a < 3; a++)
// }

// a = [4,6,2,8,2,2]
// e = 2
// b = []
// for(i=0,j=0;i<a.length;i++) {       
//     if (a[i] !== e) {
//         b[j] = a[i]
//         j++
//     }
// }
// console.log(b)

// a = [4,5,6,2]
// b = [3,8,11,9]
// var n = a.length
// for (i=0;i<b.length;i++) {
//     a[n + i] = b[i]
// }
// console.log(a);

// var e = 78;
// var p = 3;
// var a = [2, -2, 33, 12, 5, 8];

// if (p > a.length) console.log("error");

// for (var i = a.length - 1; i > p - 1; i--) {
//   a[i + 1] = a[i];
// }
// a[p] = e;
// console.log(a);

// var a = [1, 2, 3, 4];
// var b = [5, 6, 7, 8];
// var c = [];
// for(var i = 0; i < a.length; i++ ){
//   c[i] = a[i];
//   c[i + a.length] = b[i];
// }
// console.log(c)

// var a = [1, 2, 3, 4];
// a[a.lenght] = 5
// console.log(a)

// var a = 5;
// var b = ++a;

// console.log(a, b)


// function dino (a, b){
//   var s = a + b;
//   return s
// }
// console.log(dino(4, 6)); 

// // var suma = 10

// // function Milos (a, b){
// //   var suma = a + b
// //   return suma;
// // }
// // console.log(Milos(2, 10))

// function milos(a, b){
//   return a - b;
// }
// console.log(milos(54, 50))

// function djak(a, b){
//   return a - b;

// }
// console.log(djak(20, 10))

// function milosi(a, b){
//   var c = a - b;
//   return c
// }
// var result = milosi(4212, 4212)
// console.log(result)

// var max;
// function izracunatiMax(broj1, broj2){
//   if(broj1 < broj2) {
//     max = broj2;
//   }else{
//     max = broj1;
//   }
//   return max;
// }
// console.log(izracunatiMax(5 , 10))

// var even = "";
// function odd(broj1){
//   if(broj1 % 2 === 0) {
//     even = "Paran je broj";
//   }else {
//     even = "Nije paran broj";
//   }
//   return even;
// } console.log(odd(25))

// var result = "" ;
// function trocifreniBroj(broj){
//   if(broj <= 999 && broj > 99){
//     result = "resultat je trocifreni broj";
//   }else{
//     result = "rezultat nije trocifreni broj";
//   }
//   return result;
// }
// console.log(trocifreniBroj(150));


// var rezultat = '' ;

// function trocifreniBroj(broj1){
//   if(broj1 <= 99 || broj1 > 999){
//     rezultat = "broj nije trocifren";
//   }else {
//     rezultat = 'broj je trocifren';
//   }
//   return rezultat;
// }
// console.log(trocifreniBroj(4000))


// function cetiriBroja(br1, br2, br3, br4){
//   var zbir = (br1 + br2 + br3 + br4) / 4 ;
//   return zbir;
// }
// console.log(cetiriBroja(35, 55, 75, 155))


// var rezultat ;
// function broj(br1){
//   rezultat = (br1 + "").length;
//   return rezultat;
// }
// console.log(broj(9423142))


// var niz = [2,4 ,7 ,8, 7, 7, 1];
// var e = 7;
// var brojac = 0;
// function pon (niz){
//   for(var i = 0; i< niz.length; i++){
//     if(niz[i] == e){
//       brojac += 1;
//     }
//   }return brojac;
// }
// console.log(pon(niz))
