/*
Problem: 
Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 
*/

function checkExistedPair(arr,sum){
    let map = new Map();
    let existed = false;
    // Create a map with key is value of item, value is index of item in array
    for(let i =0; i < arr.length; i ++)
    {
        map[arr[i]] = i; 
    }
    for(let j =0; j < arr.length; j ++)
    {
        let temp = sum - arr[j];
        if(map[temp])
        {
            console.log(arr[map[temp]],arr[j])
            existed = true;
        }
    }
    return existed;
}

/* This is main function */
function main ()
{
  const given_arr = [1,3,5,6,7,8,2];
  const give_sum = 12;
  
  let ret = checkExistedPair(given_arr,give_sum);
  console.log(ret)
}

main();
