const URL="https://catfact.ninja/fact";

const btn=document.querySelector("#btn");
const getpara=document.querySelector("#para");



// const getFacts= async ()=>{
//     let response= await fetch(URL);
//     console.log(response);  //response is a object
//     // console.log(response.status);  //response is a object
//     let data=await response.json();
//     getpara.innerText=data.fact;

// }

function getFacts(response){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        getpara.innerText=data.fact;
    });
}

btn.addEventListener("click",getFacts);

