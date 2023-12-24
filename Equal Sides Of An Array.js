/* DESCRIPTION:
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers 
to the left of N is equal to the sum of the integers to the right of N. If there is no
index that would make this happen, return -1.
*/

function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}


function findEvenIndex(arr)
{
  //Code goes here!
  let res
  if(arr.slice(1,arr.length).reduce((a,c)=>a+=c,0)===0) return 0;
  if(arr.slice(0,-1).reduce((a,c)=>a+=c,0)===0) return arr.length-1
  
  for(let i=1;i<arr.length-1;i++){
  if(arr.slice(0,i).reduce((a,c)=>a+=c,0)==
    arr.slice(i+1,arr.length).reduce((a,c)=>a+=c,0)) res= i
  }
  console.log(222,res)
  return res ? res : -1
}
