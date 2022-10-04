// add to cart
let productsCount = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".two");
addToCartBtns.forEach((item) => {
    item.addEventListener("click",function () {
        let pCount = productsCount.textContent;
        productsCount.textContent = +pCount + 1;
        
    });
});

//
let zoom = document.querySelectorAll(".zoom");
let like = document.querySelectorAll(".like");

zoom.forEach((item) => {
    item.addEventListener("click", function() {
        if(item.classList("liked")){
            item.classList.remove("liked")
        } else {
            item.classList.add("liked")
        }
    })
})




   


