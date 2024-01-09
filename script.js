let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slide4 = document.querySelector("#slide4");
let btn1 = document.querySelector("#sliderBtn1");
let btn2 = document.querySelector("#sliderBtn2");
let btn3 = document.querySelector("#sliderBtn3");
let btn4 = document.querySelector("#sliderBtn4");
let img1 = document.querySelector("#sliderList1");
let img2 = document.querySelector("#sliderList2");
let img3 = document.querySelector("#sliderList3");
let img4 = document.querySelector("#sliderList4");
let countbtn1 = document.querySelector("#countBtn1");
let countbtn2 = document.querySelector("#countBtn2");
let countText = document.querySelector(".productCard__countText");
let silkPrice = document.querySelector("#silkPrice").textContent;
btn1.addEventListener("click", function(){
    slide1.style.transform = "translateX(0)";
    slide2.style.transform = "translateX(100%)";
    slide3.style.transform = "translateX(200%)";
    slide4.style.transform = "translateX(300%)";
})
btn2.addEventListener("click", function(){
    slide1.style.transform = "translateX(-100%)";
    slide2.style.transform = "translateX(0)";
    slide3.style.transform = "translateX(100%)";
    slide4.style.transform = "translateX(200%)";
})
btn3.addEventListener("click", function(){
    slide1.style.transform = "translateX(-200%)";
    slide2.style.transform = "translateX(-100%)";
    slide3.style.transform = "translateX(0)";
    slide4.style.transform = "translateX(100%)";
})
btn4.addEventListener("click", function(){
    slide1.style.transform = "translateX(-300%)";
    slide2.style.transform = "translateX(-200%)";
    slide3.style.transform = "translateX(-100%)";
    slide4.style.transform = "translateX(0)";
})
img1.addEventListener("click", function(){
    slide1.style.transform = "translateX(0)";
    slide2.style.transform = "translateX(100%)";
    slide3.style.transform = "translateX(200%)";
    slide4.style.transform = "translateX(300%)";
})
img2.addEventListener("click", function(){
    slide1.style.transform = "translateX(-100%)";
    slide2.style.transform = "translateX(0)";
    slide3.style.transform = "translateX(100%)";
    slide4.style.transform = "translateX(200%)";
})
img3.addEventListener("click", function(){
    slide1.style.transform = "translateX(-200%)";
    slide2.style.transform = "translateX(-100%)";
    slide3.style.transform = "translateX(0)";
    slide4.style.transform = "translateX(100%)";
})
img4.addEventListener("click", function(){
    slide1.style.transform = "translateX(-300%)";
    slide2.style.transform = "translateX(-200%)";
    slide3.style.transform = "translateX(-100%)";
    slide4.style.transform = "translateX(0)";
})
countbtn1.addEventListener("click", function(){
    if (+(countText.textContent) != 0){
        let a =  +(countText.textContent)
        a = a - 1 
        let b = +(silkPrice) 
        document.querySelector("#silkPrice").textContent = b * a
        countText.textContent = a
    }
})
countbtn2.addEventListener("click", function(){
    let a =  +(countText.textContent)
    a = a + 1 
    let b = +(silkPrice) 
    document.querySelector("#silkPrice").textContent = b * a
    countText.textContent = a
})