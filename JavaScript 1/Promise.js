//(1)
 /*const addition=function(){
    console.log("add");
 }

 setTimeout(addition,4000);


 setTimeout(()=>{
    console.log("Hello");
 },6000);*/


// (2) Callback Hell-------------

 /*function getData(dataId,getNextdata){

    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }
    },2000)
 };

 getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5);
            });
        });
    });
 });*/


 //(3) Promises-------------------------

 /*let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    // resolve("success");
    reject("some error occured");
 });
*/

// function getDataId(dataId,getNextdata){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         if(getNextdata){
//             getNextdata();
//         }
//     },9000)
// })
// };

// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("Success");
//         reject("fail");
//     })
// }


//(4) use of res and err-----------------------------

/*let promise=getPromise();
promise.then((res)=>{
    console.log("Promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("Promise rejected",err);
})*/

//Example how to use promise
/*function asyncfunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1")
            resolve("Success");
        },4000);
    });
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2")
            resolve("Success");
        },4000);
    });
}


//promise chaning
console.log("Fetching Data1....");
let promise=asyncfunc();
promise.then((res)=>{
    console.log("Fetching Data2....");
    let promise2=asyncfunc2();
    promise2.then((res)=>{
    })
})*/

//Promise Chaining-------------------------

//----------(1)
/*function asyncfunc1(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data1");
        resolve("success");
    },4000);
})
}

function asyncfunc2(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data2");
    },4000);
})
}
console.log("Fetching Data1");
asyncfunc1().then((res)=>{
    console.log("Fetching Data2");
    asyncfunc2().then((res)=>{});
});*/

//---------(2)
/*function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },1000)
    })
     };
    console.log("Fetching Data1....")
    getData(1)
        .then(() => {
            return  getData(2)
        })
        .then(() => {
            return  getData(3)
        })
        .then(() => {
            return  getData(4)
        })*/


//Async-Await-----------------------------------

/*function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve("success");
        },2000);
    });
}

async function weatherData(){
    await api();
}*/

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
        },2000);
    })
    
}

//making it IIFE
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();