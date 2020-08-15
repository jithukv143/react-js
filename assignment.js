//                             VERY EASY

/* Q1. Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.*/

function convert(p) 
{

    var sec=p*60;
    return sec;

}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


//Q2

function evenly(k,p)
{
    var e=k/p;
    var j=Math.round(e);
    if(e===j)
        {

        return "true";
        }
    else
        {
        return "false";
        }

}
console.log(evenly(85,4));
console.log(evenly(98,7));


//                               EASY

//Q1.

function charr(l,p)
{
var po=0;
 for(var i=0;i<p.length;i++)
 {
    if(l==p[i])
    {
         po=po+1;

    }

 }
 return "string" +" '" +p+ "' "+"contains " + po +" '" +l+"'" ;
}

console.log(charr("c","Chamber of secrets"));
console.log(charr("b","big fat bubble"));
console.log(charr("a","edabit"));

//Q2.

function add(k)
{
    var p=0;
    while(k>0)
    {
        p=p+k;
        k--;
    }   
   return "The sum up to the number "+ j +" is "+p
}
console.log(add(4));
console.log(add(13));
console.log(add(600));

//Q3.


function charr(p)
{
    var n=p;
     n = n.replace(/a/g, 1);
     n = n.replace(/e/g, 2);
     n = n.replace(/i/g, 3);
     n = n.replace(/o/g, 4);
     n = n.replace(/u/g, 5);

 
 return "string "+"'" + p + "'" +" is " + "'" + n + "'";
}

console.log(charr("karachi"));
console.log(charr("chembur"));
console.log(charr("khandbari"));


//Question 1 (medium)
testarr = (strin,x) => {
    strin1=strin.split(' ')
    strin2=[]
    for (let i in strin1){
      if(strin1[i][0]===x){
        c=strin1[i].split('').reverse().join('')
        strin2.push(c)
      }
      else
      {
        strin2.push(strin1[i])
      }
    }
    return (strin2.join(" "))
  }
  console.log(testarr("word searches are super fun",'s'))
  console.log(testarr("peter piper picked pickled peppers",'p'));
  
  
  
  //Question 2 (Medium)
  let testJackpot= (arr) => {
    let a =new Set(arr);
    if (a.size>1){
      return false
    }
    else{
      return true
    }
  }
  
  console.log(testJackpot (["@", "@", "@", "@"]))
  console.log(testJackpot (["abc", "abc", "abc", "abc"])) 
  console.log(testJackpot (["SS", "SS", "SS", "SS"]))
  console.log(testJackpot (["&&", "&", "&&&", "&&&&"])) 
  console.log(testJackpot (["SS", "SS", "SS", "Ss"]))
  
  
  
  //Question 3 (Medium)
  
  let removeDups= (arr) => {
    arr1=[]
    let a =new Set(arr);
    for (let i of a){
        arr1.push(i)
    }
    return arr1
  }
  
  console.log(removeDups ([1, 0, 1, 0]))  
  console.log(removeDups (["The", "big", "cat"])) 
  console.log(removeDups (["John", "Taylor", "John"]))
  
  
  
  //Question 1 (Hard)
  let realType = (data) => {
    if (data===null){
         return "null"
     }
     else if(Array.isArray(data)){
         return "array"
     }
     else{
       return typeof(data)
     }
  };
  
  console.log(realType (1)) 
  console.log(realType("a")) 
  console.log(realType(true)) 
  console.log(realType ([])) 
  console.log(realType(null))
  
  
  
  //Question 2 (Hard)
  let exp=/[0-9]+/
  
  let numInStr = (arr) => {
      arr1=[]
      for (let i in arr){
        if (arr[i].match(exp)!==null){
          arr1.push(arr[i])
        }
      }
      return arr1
  };
  
  
  console.log(numInStr (["1a", "a", "2b", "b"]))
  console.log(numInStr (["abc", "abc10"])) 
  console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"])) 
  console.log(numInStr (["this is a test", "test1"])) 
  