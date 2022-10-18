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
// button more info
let modal = document.querySelector(".modal");
let moreDetails = document.querySelectorAll(".more-details")
let btnClose = document.querySelector(".btn-close");
function showModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
};
function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
};
moreDetails.forEach((item) => {
item.addEventListener("click", showModal)
})
btnClose.addEventListener("click", closeModal);
//click modal
modal.addEventListener("click", function(event){
    console.log(event)
    console.log(event.target) 
    if(event.target === modal){
        closeModal();
    }
})
//slide
$(".slide").slick({
        dots: true
});
//scroll
function scrollFunction() {
    if (window.pageYOffSet > document.body.scrollHeight / 2 ) { 
        showModal();
        window.removeEventListener("scroll", scrollFunction);
    }
}
window.addEventListener("scroll", scrollFunction);
//animation 
AOS.init();
//change product quantity
// let audi = {
//     year: "2020",
//     color: "blue",
//     model: "A4",
// }
// функція конструктор
let incrementButh = document.querySelectorAll(".increment");
let decrementButh = document.querySelectorAll(".decrement");
let productQuantity = document.querySelectorAll(".product-quantity input");
function Counter(incrementButton,
    decrementButton,
    inputField, 
    minCount = 1, 
    maxCount = 5) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    };
    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
    }
    this.toggleButtonState();
    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    }
    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    }
    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
}
let counters = [];
productQuantity.forEach(
    (item,i) =>
    (counters[i] = new Counter(incrementButh[i], decrementButh[i], item))
);

  
 




   


