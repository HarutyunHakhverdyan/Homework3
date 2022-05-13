/*
//2. Write a JavaScript function to get all possible subsets of given length of the given
//array.
 function a(arr,n,newArr=[],firstI=0,nextI=1,curentI=2){    
  if(newArr.length!=n){
    newArr[0]=arr[firstI];
  }
  if(newArr.length!=n){
    newArr[1]=arr[nextI]
  }
  if(newArr.length!=n){
    newArr.push(arr[curentI])
  }
  if(newArr.length==n){
    console.log(newArr)
    if(curentI!=arr.length-1){
      curentI=arr.indexOf(newArr[2])
    }
    if(arr.indexOf(newArr[1])==-1){
      nextI=arr.length
    }
    newArr=[]
  }
   if(curentI==-1){
    curentI=arr.length
  }
   if(curentI<arr.length-1){
    curentI++;
    a(arr,n,newArr,firstI,nextI,curentI)
  }else if(nextI<arr.length-n+1){
    nextI++;
    a(arr,n,newArr,firstI,nextI,nextI+1)
  }else if(arr.length>n){
    arr.shift();
    a(arr,n)
  }
 }

 a([1,2,3,4],1)
//3. Write a recursive function to determine whether all digits of the number are odd or
//not.
function odd(num){
  if((num%10)%2==1){
    num =(num-num%10)/10
    return odd(num)
  }
  return num==0
};
let result=odd(7);
console.log(result)

//4 Given an array of numbers. Write a recursive function to find its minimal positive element. (if
//such element does not exist, return -1)․
function minPositiv(arr,i=0,minEl=-1){
   if(i!=arr.length){
     if(arr[i]>=0){
       if(arr[i]<minEl||minEl<0){
      minEl=arr[i]
      i++
       return minPositiv(arr,i,minEl)
     }
   }
     i++
     return minPositiv(arr,i,minEl)
 }
 return minEl
};
let result=minPositiv([-1,-2,-3,-2,-4,-5,6]);
console.log(result)
*/
function treeObj(arr,i=0,obj={}){
    if(i!=arr.length){
      let {parent:p,id}=arr[i];
      if(p==null){
        obj[id]={}
      }
      function objRec(obj,p,id,t=1){
        for(let key1 in obj){
          if(key1==p){
            obj[key1][id]={}
            t=0
          }
          for(let key2 in obj[key1]){
            if(p==key2){
              obj[key1][key2][id]={}
              t=0
            }
          }
        
        if(t){
          objRec(obj[key1],p,id)
        }
       }
      }
     objRec(obj,p,id)
      i++
      treeObj(arr,i,obj)
    }
    return obj
};
let result=treeObj( [
{ parent: null, id: 0 },
{parent: 0, id: 1 },
{parent: 0, id: 2 }, 
{parent: 1, id: 3 },
{parent: 1, id: 4 },
{parent: 2, id: 5 },
{parent: 4, id: 6 },
{parent: 5, id: 7 }
]);
console.log(result)