const check = (a) =>
{
    if(a%2==0)
    {
        // return true
        return 'even'
    }
    else
    {
        // return false
         return 'odd'
    }
}

 
console.log( res=check(56))
let res=check(56)
if(res)
{
    console.log("even")
}
else
{
    console.log("odd")
// }
function a()
{
    console.log(this);
}
let a = () =>
{
    console.log(this);
}
a();
