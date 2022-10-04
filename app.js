// add to cart
let productsCount = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".two");
addToCartBtns.forEach((item) => {
    item.addEventListener("click",function () {
        let pCount = productsCount.textContent;
        productsCount.textContent = +pCount + 1;
        
    });
});

//like
let like = document.querySelectorAll(".like");

like.forEach((item) => {
    item.addEventListener("click", function() {
       item.classList.toggle("liked")
    })
})




   


