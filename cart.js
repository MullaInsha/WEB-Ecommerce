let oneUser=JSON.parse(localStorage.getItem("oneuser"));
let cartItems=oneUser.cartItems;
let data=JSON.parse(localStorage.getItem("deta"));

// console.log(oneuser,cartItem);


let main=document.querySelector("main");



function display(){
    main.innerHTML=""
    cartItems.map((e)=>{
        main.innerHTML+=`
        <div id="${e.productId}">
         <div>
         <img src="${e.productImageURLs[0]}">
         </div>
         <div>
         <h3>"${e.name}"</h3>
         <h2>"${e.price}"</h2>                 
         </div>
        <div>
        <button>Delete</button>
        </div>
        </div>
        `;
    })
    del();
    //payment();
}
display();


function del(){
    let delbutton=main.querySelectorAll("button");
    delbutton.forEach((e)=>{
        e.addEventListener("click",()=>{
        let con=confirm("Are you sure you want to delete");


        if(con){
          //  e.parentElement.parentElement.remove()
          cartItems=cartItems.filter((btn)=>{
           if(e.parentElement.parentElement.id!=btn.productId){
            return btn;
           }
          })
          display();
          
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
         
        }

    
        })
    })

    
}
del();

function payment(){
    let sum=0;
    cartItems.map((e)=>{
        sum+=e.price;
    })
    
    
    let totals=document.querySelector("#total");
    // console.log(totals);
    
    totals.innerHTML=`${sum}`;

}
payment();