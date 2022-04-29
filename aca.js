
//1 Given an array. Write a recursive function that removes the first element and returns the given
//array. (without using arr.unshift(),assign second element to first, third element to second...)

function funcShift(array,i=0){
    arr[i]=arr[i+1];
    if(i==array.length-1){
        array.length=array.length-1
        i=0
        return array
      } 
    if(i!=array.length-1){
        i++
        funcShift(array,i)
    };
    return array
};
let arr=[1,2,3,5,'k','j',9]
let result = funcShift(arr);
console.log(result)

// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
//that concats arrays).
 
 function arrConcat(arr,i=0,arr2=[]){
    //debugger
    if(i!=arr.length){
    if(typeof(arr[i])=='object'){
     for(let j=0;j<arr[i].length;j++){
        if(typeof(arr[i][j])=='object'){
            arrConcat(arr[i][j],0,arr2)
        }else{
        arr2.push(arr[i][j])
        }
     } 
     i++;
     arrConcat(arr,i,arr2) 
    }else{
      arr2.push(arr[i]);
      i++;
      arrConcat(arr,i,arr2)
    }
   }
return arr2
 };
 let arr1=[1,[[123123],3,7,8],6,[98],[2,[4,[8]]]];
 let result= arrConcat(arr1);
 console.log(result)

// 3 Given an array and a number N.  Write a recursive function that rotates an array N places to the
//left. (Hint: to add element to the beginning use arr.unshift())
function arrRotat(arr,N){
    if(N>0){
        arr.push(arr.shift())
        N--
        arrRotat(arr,N)
    };
    return arr
};
let arr1 = [1,2,3,4,5,6,7];
let result = arrRotat(arr1,2);
console.log(result)

/* 4. Given the list of the following readers:
 [
{ book:'Catcher in the Rye', readStatus: true, percent: 40},
{ book:'Animal Farm', readStatus: true, percent: 20},
{ book:'Solaris', readStatus: false, percent: 90 },
{ book:'The Fall', readStatus: true, percent: 50 },
{ book:'White Nights', readStatus: false, percent: 60 } ,
{ book:'After Dark', readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.
*/
let arr1 = [
{ book:'Catcher in the Rye', readStatus: true, percent: 40},
{ book:'Animal Farm', readStatus: true, percent: 20},
{ book:'Solaris', readStatus: false, percent: 90 },
{ book:'The Fall', readStatus: true, percent: 50 },
{ book:'White Nights', readStatus: false, percent: 60 } ,
{ book:'After Dark', readStatus: true, percent: 70 }
];
function sortBooks(arr){
    arr=arr.filter(function(el){
        if(el.readStatus==true){
            return true
        }
    }) 
    arr=arr.sort(function(a,b){
            if(a.percent>b.percent){
                return -1
            }
        })
    return arr
};
let result = sortBooks(arr1);
console.log(result)

// 5 Implement “map” method for plain objects (same as Array map method.);

function mapForObj(fn,thisValue){
    let newObj={}
    fn.apply()
          for(let k in this){
            if(k!='mapForObj'){
              if(thisValue){
            newObj[k] = fn.apply(thisValue,[this[k],k,this])
             } else {
            newObj[k]=fn(this[k],k,this)
          }
        }
      }
   return newObj  
};
let obj3={
    name:'Haik'
}
let obj1={
    name1:'Suren',
    name2:'Garik'
}
obj1['mapForObj']=mapForObj;
let result=obj1.mapForObj(function(value,key,obj){
    return this.name+'anush'
},obj3)
console.log(result)