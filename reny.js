   
var text = document.querySelector("#rightt h2").textContent


var splittedText = text.split("")

var flag = ""
splittedText.forEach(function (elem) {
    flag += `<span>${elem}</sapn>`
})

document.querySelector("#rightt h2").innerHTML = flag

gsap.from("h2 span",{
    color:"grey",
    stagger: 0.3,
    duration:-1,
    scrollTrigger:{
        trigger:"h2 span",
        scrub:2,
    }
})

