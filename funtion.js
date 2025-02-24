const Prime=(no)=>
{
    let c=-1;
    for(i=2;i<no-1;i++)
    { 
       
        if(no%i==0)
        {
            c++;
        }
    }
    if(c==-1)
        {
       console.log(no," is prime")
        }
     else 
     {
      console.log(no," is not prime")
   }
}


const evenOdd=()=>
    {
        
        for(i=0;i<10;i++)
        { 
           
            if(i%2==0)
            {
                console.log("even no : ",i)
            }
            else
            {
            
                console.log("odd no : ",i,"\n")
            }
        }    
    }


    const factNo=(no)=>
        {
           let f=1;   
            for(i=1;i<=no;i++)
            { 
               
               f*=i;     
            }  
            console.log("factorila of no  : ",f)  
        }


const fibSeries=(term)=>
            {
                let sum=0,a=0,b=1;
                for(i=0;i<term;i++)
                { 
                   console.log(a,"\t")
                   sum=a+b
                   a=b;
                   b=sum;
            
                }    
            }
 const lcmOfNo=(n1,n2)=>
       {
                
         for(i=2;i<n1*n2;i++)
             { 
                if(i%n1==0  && i%n2==0)
                {
                    console.log("lcm of ",n1," and ",n2," : ",i);
                    
                }
                
            }    
       }

 const hcfOfNo=(n1,n2)=>
     {
        let ans=0;           
          for(i=2;i<n1*n2;i++)
              { 
                 if(n1%i==0  && n2%i==0)
                 {
                      ans=i;
                      console.log("hcf of ",n1," and ",n2," : ",ans); 
                 }
                 
             }   
          
    }


const isPrime=(no)=>
{
    let c=-1,i=2;
    for(i=2;i<no;i++)
    { 
       
        if(no%i==0)
        {
            c++;
        }
    }
    
    if(c==-1)
        {
            
        return true;
        }
      else
      {
        return false;
      }
}

function prime(num){
    console.log(num);
    for(i=2; i<num; i++){
        if(num%i==0){
            return false;
        }
        return true;
    }
}

 const twinPrimeFind=()=>
        {
              console.log("twin prime no : ")      
             for(i=2;i<=100;i++)
                 { 
                    if(prime(i) && prime(i+2))
                    {
                        console.log(i," , ",(i+2));
                    }
                    
                }    
       }
   
const primeNoSeries=(term)=>
        {
                console.log("prime no series : ")    
             for(i=0;i<=term;i++)
                 { 
                    if(prime(i))
                    {
                        console.log(i);
                    }
                    
                }    
       }

          
const revNo=(no)=>
    {
        let rem=0,rev=0;
        let temp=no;
        while(no>0)
        {
           rem=no%10;
            rev=(rev*10)+rem;
            no=Math.floor(no/10);
           
        }
          
        console.log("reverse of no : ",rev);
        if(temp==rev)
        {
            console.log("no is palindrome");
        }
        else
        {
            console.log("no is not palindrome");
        }
           
   }
   

 let no=7,n1=232;
 const term=10;
//  Prime(no);
//  evenOdd();
//  factNo(no);
// fibSeries(term);
// const n1=2,n2=4;
// lcmOfNo(n1,n2);
// hcfOfNo(n1,n2);
// twinPrimeFind();
// primeNoSeries(term);
// revNo(no);
console.log("twin prime no : ")      
for(i=2;i<=10;i++)
    { 
       if(prime(i) && prime(i+2))
       {
           console.log(i," , ",(i+2));
       }
       
   }    


