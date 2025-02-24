let a=13.34;
let b=16;
console.log("FLOOR  : "+Math.floor(a))
console.log("ROUND  : "+Math.round(a))
console.log("MIN  : "+Math.min(1,2,3,4,5))
console.log("MAX  : "+Math.max(1,2,3,4,5))
console.log("CEIL  : "+Math.ceil(a))
console.log("SQRT  : "+Math.sqrt(b))
console.log("CBRT  : "+Math.cbrt(a))
console.log("RANDOM  : "+Math.random())
console.log("ABS  : "+Math.abs(a))
console.log("LOG  : "+Math.log(a))
 console.log("POWER  : "+Math.pow(a,2))
// console.log("PI  : "+Math.PI())
let min=100000
let max=230000
console.log(Math.floor(Math.random()*((max-min+1)+min)))
let d=123456;
let ans=0;
for(i=0;i<5;i++)
{
  ans=Math.floor(Math.random()*d)
}
console.log("ans : "+ans)
