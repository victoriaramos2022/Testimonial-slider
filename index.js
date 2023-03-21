const testimonials=[
    {
        name:"Hyun Bin",
        photo:"HyunBin.jpg",
        text: "I am really satisfied with my app. App was worth a fortune to my company. It fits our needs perfectly. App was the best investment I ever made.",
    },

    {
        name:"Park Hae Jin",
        photo:"ParkHaeJin.jpg",
        text: "Great job, I will definitely be ordering again! I wish I would have thought of it first. Web app is worth much more than I paid.",
    },

    {
        name:"So Ji Sub",
        photo:"So Ji Sub.jpg",
        text: "Not able to tell you how happy I am with web app. It really saves me time and effort. web app is exactly what our business has been lacking.",
    },

    {
        name:"Song Joong Ki",
        photo:"Song Joong Ki.jpg",
        text: "Really good. I would be lost without web app. Web app impressed me on multiple levels. Web app did exactly what you said it does.",
    },
]

const  imgEl = document.querySelector("img");
const  textEl = document.querySelector(".text");
const  usernameEl = document.querySelector(".username");


let idx = 0

updateTes()

function updateTes(){
    const {name, photo, text} = testimonials [idx]
    imgEl.src=photo;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if (idx===testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTes()
    },2000);
}