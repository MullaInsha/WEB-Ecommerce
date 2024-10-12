let cartItems=[];

let data=JSON.parse(localStorage.getItem("deta"));
let oneUser=JSON.parse(localStorage.getItem("oneuser"));
let count=document.querySelector("#count");


console.log(data);
if(oneUser){
    if(oneUser.cartItems){
        count.innerHTML=oneUser.cartItems.length;
        cartItems=oneUser.cartItems;
    }
     
}


function loginlogout(){
    let login=document.querySelector("#right");

    //getting one user data from localstorage
    let oneUser=JSON.parse(localStorage.getItem("oneuser"));


    //user id formation
    if(oneUser){
        //providing information inside right division
        login.innerHTML=`<span>${oneUser.first}</span><button id="logout">Log out</button>`
        
        //accessing logout button
        let logout=document.querySelector("#logout");
    
        //logout event
        logout.addEventListener("click",()=>{

            //removing one user from local storage
            localStorage.removeItem("oneuser")
            window.location.href="main.html"
        })
    }
}

loginlogout();

//fetching data from server
async function allProductsData(){
    //response object
    let dataFromServer=await fetch("https://www.shoppersstack.com/shopping/products/alpha");
    //dataObject in js format
    let convertedData=await dataFromServer.json();
    //only data property
    let allData=convertedData.data;
    console.log(allData);

    //filtered data for men
    let menData=allData.filter((e)=>{
        if(e.category=="men"){
            return e;
        }
    });
    console.log(menData);

    let WomenData=allData.filter((e)=>{
        if(e.category=="women"){
            return e;
        }
    });
    console.log(WomenData);
    

    let KidsData=allData.filter((e)=>{
        if(e.category=="kids"){
            return e;
        }
    });
    console.log(KidsData);

    let ElectronicsData=allData.filter((e)=>{
        if(e.category=="electronics"){
            return e;
        }
    });
    console.log(ElectronicsData);

    let maleoutput=document.querySelector("#maleCont");


    menData.map((e)=>{
        maleoutput.innerHTML+=`  <div id="${e.productId}">
          <img src="${e.productImageURLs[0]}" alt="" />
          <h3>Name:${e.name}</h3>
          <h2>Price:${e.price}"</h2>
          <h2>Rating:${e.rating}</h2>
          <button>Add to Cart</button>
        </div>`;
    })
    
    let femaleoutput=document.querySelector("#maleCont");


    WomenData.map((e)=>{
        femaleoutput.innerHTML+=`  <div id="${e.productId}">
          <img src="${e.productImageURLs[0]}" alt="" />
          <h3>Name:${e.name}</h3>
          <h2>Price:${e.price}"</h2>
          <h2>Rating:${e.rating}</h2>
          <button>Add to Cart</button>
        </div>`;
    })

    let kidsoutput=document.querySelector("#kidCont");


    KidsData.map((e)=>{
        kidsoutput.innerHTML+=`  <div id="${e.productId}">
          <img src="${e.productImageURLs[0]}" alt="" />
          <h3>Name:${e.name}</h3>
          <h2>Price:${e.price}"</h2>
          <h2>Rating:${e.rating}</h2>
          <button>Add to Cart</button>
        </div>`;
    })
    let electronicsoutput=document.querySelector("#elecCont");


    ElectronicsData.map((e)=>{
        electronicsoutput.innerHTML+=`  <div id="${e.productId}">
          <img src="${e.productImageURLs[0]}" alt="" />
          <h3>Name:${e.name}</h3>
          <h2>Price:${e.price}"</h2>
          <h2>Rating:${e.rating}</h2>
          <button>Add to Cart</button>
        </div>`;
    })
//search results
let input=document.querySelector("input")
let searchbtn=document.querySelector("#searchbtn")
let searchres=document.querySelector("#searchresult")

console.log(input,searchbtn,searchres);

searchbtn.addEventListener("click",(e)=>{

  searchres.innerHTML="";

  allData.map((e)=>{
    if(e.name.toLowerCase().includes(input.value.trim().toLowerCase()))
        {
           searchres.innerHTML+=` <div>
            <img src="${e.productImageURLs[0]}" alt=""/>
              <h3>${e.name}</h3>
              <h2>price: ${e.price}</h2>
              <h2>Ratings:${e.rating}</h2>
              <button>Add to Cart</button>  
       </div>`;
        }
  });   
});

//accessing btn for 
let main=document.querySelector("main")
let allbtn=main.querySelectorAll("button");
console.log(main,allbtn);

allbtn.forEach((btn)=>{
    //adding event listenier to each button
btn.addEventListener("click",()=>{
    if(oneUser)
        { console.log(btn.parentElement);
        cartItems=cartItems.filter((e)=>{
            if(e.productId!=btn.parentElement.id){
                return e;
            }
        })
        let product=allData.find((e)=>{
            if(e.productId==btn.parentElement.id)
            {
                return e;
            }
        })
        
        
       cartItems.push(product);
       oneUser.cartItems=cartItems;
       console.log(oneUser);
       localStorage.setItem("oneuser",JSON.stringify(oneUser))
       
       data=data.filter((e)=>{
        if(e.phone!=oneUser.phone){
            return e;
        }
       })
       data.push(oneUser);
       console.log(data);
    
       localStorage.setItem("deta",JSON.stringify(data));
       count.innerHTML=oneUser.cartItems.length;
    }
    else{
        alert("login first")
        window.location.href="login.html";
    }
   

   

   
   

})
})


}

allProductsData()

let cart=document.querySelector(".fa-cart-shopping")
cart.addEventListener("click",()=>{
    window.location.href="cart.html";
})