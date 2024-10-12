let form=document.querySelector("form");
let userName=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let euser=document.querySelectorAll("span")[0];
let epass=document.querySelectorAll("span")[1];
let eform=document.querySelectorAll("span")[2];
let dataFromStorage=JSON.parse(localStorage.getItem("deta"))
console.log(dataFromStorage);



console.log(form,userName,password,euser,epass,eform);

form.addEventListener("submit",(e)=>{
    euser.innerHTML="";
    epass.innerHTML="";
    eform.innerHTML="";

    //matching details
    let matchData=dataFromStorage.find((e)=>{
    if((e.email==userName.value || e.phone==userName.value) && e.password==password.value){
         return e;
    }
    })
    if(userName.value=="" && password.value==""){
        euser.innerHTML="Enter Email or Mobile Number";
        epass.innerHTML="Enter the password";
        e.preventDefault();

    }
    else if(userName.value==""){
        euser.innerHTML="Enter Email or Mobile Number";
        e.preventDefault();



    }
    else if(password.value==""){
        epass.innerHTML="Enter the password";
        e.preventDefault();


    }
    else  if(matchData){
        
        alert("welcome to page")
        localStorage.setItem("oneuser",JSON.stringify(matchData))
    }
    else{
        eform.innerHTML="Match Not Found"
        e.preventDefault();
    }

    
})
let h3=document.querySelector("h3");
  
    h3.addEventListener("click",()=>{
        if(h3.innerHTML=="show"){
            password.type="text";
            h3.innerHTML="hide"
        }
        else{
            h3.innerHTML="show";
            password.type="password"
        }
    })
