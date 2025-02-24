let ar=[1,4,3,10,5]
let ar1=[3,'a',1,'b','c']
console.log("SORT : ",ar1.sort());
console.log("LENGTH : ",ar.length);
console.log("POP : ",ar.pop(),"   ,          ARR : ",ar);
console.log("PUSH : ",ar.push(0),"     ,       ARR : ",ar);
console.log("UNSHIFT : ",ar.unshift(9),"    ,     ARR : ",ar);
console.log("SHIFT : ",ar.shift(),"   ,        ARR : ",ar);

console.log("INCLUDES : ",ar.includes(1));
console.log("SLICE(+ve) : ",ar.splice(1,3));
console.log("INDEXOF : ",ar.indexOf(1));
console.log("JOIN : ",ar1.join());
console.log("ISARRAY : ",Array.isArray(ar));
// console.log("REMOVE : ",ar.remove());
console.log("REVERSE : ",ar1.reverse());
console.log("FROM : ",Array.from("hello"));
let a=1,b=2,c=3;
console.log("OF : ",Array.of(a,b,c));
console.log("SPLICE(-VE): ",ar1.splice(0,1,"d"));
console.log("CONCAT : ",ar1.concat(ar));
let ar2=[1,2,3,4,5]
let ar3=['a','b','c','d','e']
let d=[...ar2,...ar3];
console.log("SPREAD : ",d);