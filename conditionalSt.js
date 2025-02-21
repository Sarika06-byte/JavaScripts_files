// const isleapyear=(year)=>
// {
//     if(year%4==0)
//     {
//         console.log(year," is leap year")
//     }
//     else
//     {
//         console.log(year," is not leap year")
//     }
// }

// const isposneg=(no)=>
//     {
//         if(no>0)
//         {
//             console.log(no," is positive")
//         }
//         else if(no==0)
//         {
//             console.log(no," is 0")
//         }
//         else
//         {
//             console.log(no," is negative")
//         }
//     }
// const year=2023;
// isleapyear(year);  
// const no=-2;
// isposneg(no);

const bmi_calc=(wght,hght)=>
{
    const bmi=wght/(hght*hght);
    if(bmi>18.25)
    {
        console.log(" underweight")
    }
   else if(bmi<=18.25 && bmi>=24.5)
        {
            console.log(" normal")
        }
     else if(bmi<=25 && bmi>=29.9)
         {
             console.log(" overweight")
        }
    else if( bmi>=30.0)
         {
            console.log(" obe")
        }
        
    else
    {
        console.log("wrong input ")
    }
}

const salCom_calc=(amt)=>
    {
     
        if(amt<6500)
        { 
            
            console.log(`GST : no gst and comission : no comission`)
        }
       else if(amt>=6500 && amt<=8900)
            {
                const gst=(amt*6.5)/100,rem=amt-gst;
                const com=(rem*7.2)/100;
            console.log(`GST : ${gst} and comission : ${com}`)
            }
         else if(amt<=8900 && amt<=13000)
             {
                const gst=(amt*8.2)/100,rem=amt-gst;
                const com=(rem*1.0)/100;
            console.log(`GST : ${gst} and comission : ${com}`)
            }
        else if( amt>=13000 && amt<=18000)
             {
                const gst=(amt*12.5)/100,rem=amt-gst;
            const com=(rem*13.0)/100;
                console.log(`GST : ${gst} and comission : ${com}`)
            }
            
        else if(amt>18000)
        {
            const gst=(amt*18.8)/100,rem=amt-gst;
            const com=(rem*20.0)/100;
            console.log(`GST : ${gst} and comission : ${com}`)
        }
        else
        {
            console.log("wrong input")
        }
    }


const quard_root=(a,b,c)=>
{
    const d=(b*b) -(4*a*c);
    if(d>0)
    {
        const r1=(-b+Math.sqrt(d))/(2*a);
        const r2=(-b-Math.sqrt(d))/(2*a);
        console.log( `r1 : ${r1} and r2  ${r2} ,roots are  real and unequal`)
    }
    else if(d==0)
        {
            const r1=-b/(2*a);
            const r2=r1;
            console.log( `r1 : ${r1} and r2  ${r2} ,roots are  real and equal`)
        }
    else
    {
        const r2=(-b-Math.sqrt(d))/(2*a),r1=r2;
        console.log( `r1 : ${r1} and r2  ${r2} ,roots are  imaginary`)
    }
}

const a=6,b=-7,c=-1;
quard_root(a,b,c);
// const amt1=15000;
// salCom_calc(amt1);
// const wght=50,hght=1;
// bmi_calc(wght,hght);
