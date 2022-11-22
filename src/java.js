// // function getData1(cb) {
// //   setTimeout(() => cb(5), 1000);
// // }

// // function getData2(cb) {
// //   setTimeout(() => cb(6), 3000);
// // }
// // function getData3(cb) {
// //   setTimeout(() => cb(12), 1000);
// // }
// // getData1((value) => {
// //   getData2((data2) => {
// //     console.log("pashu")
// //     console.log(value + data2)
// //     getData3((numb) => {
// //       console.log(value + data2+numb);
// //       console.log("third call back finished")
// //     });
// //     console.log("second call back finished")
// //   });
// //   console.log("first call back finished")
// // });

// // getData2((vaue) => {
// //     console.log("the value",vaue)
// //   })


// //   getData3((numb) => {
    
// //     console.log("thirgd",numb)
// //   })



 
// //   const prms=new Promise((resolve,reject)=>{
// //     resolve(12)

// //   })

// //   var cv=prms.then((response)=>console.log(response))
// //   console.log(cv)

// function getDataApi(numb){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(numb),1000)
//     })

// }
//  function getDataApi2(numb2){
//     return new Promise((resolve,rejecct)=>
//     setTimeout(()=>resolve(numb2),1000)
//     )

//  }

//  getDataApi(4).then((data)=>{console.log("succesful",data);return(getDataApi2(data))}).then((response)=>console.log(response+5))
var lengthOfLastWord = function(s) {
    
    const words=s.split(' ')
     const word=words.filter((itm,key)=>words.indexOf(itm)===words.length-1)
   return (word[0].length)
};

console.log(lengthOfLastWord('Hello World'))
