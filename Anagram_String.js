/* This function to check if 2 strings are anangram srtring */
function isAnagram(a,b)
{  
  let str1 = a.split("");
  let str2 = b.split("");
  
   if(str1.length != str2.length)
   {
     return false;
   }

   let str_temp1 = str1.sort();
   let str_temp2 = str2.sort();

   for(let i =0; i < str_temp1.length ; i ++)
   {
        if(str_temp1[i]!=str_temp2[i])  
         return false;
   }
  
   return true;
}


/* This is main function */
function main ()
{
  let a = "abcd";

  let b = "bcad";

  let c = "aabb"
  
  /* Expect the result should be true */
  console.log(isAnagram(a,b));
  
  /* Expect the result should be false */
  console.log(isAnagram(a,c));
}

main();
