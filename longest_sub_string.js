

/* This function to check if string is distince character */

function isDistince(str){
let count = str.length;
let result = true;
for (let i =0; i < count; i ++)
  {
    if(str.split(str[i]).length > 2)
      result = false;
  }
return result
  
}

/* This is main function */
function main ()
{
  
  /* Sample data , expect longest substring is 7
  orgData = "GEEKSFORGEEKS"
  
  let count = orgData.length;

  maxlength =0;

  for (let i =0; i < count; i ++){
     for (let j =i; j < count; j ++ )
       {
         substr = orgData.substring(i,j)
         if(isDistince(substr)){
             temp = substr.length
             if(temp > maxlength)
                maxlength = temp
           }
      }

  }

  console.log(maxlength);
}

main();
