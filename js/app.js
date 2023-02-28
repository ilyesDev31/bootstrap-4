const images = document.querySelectorAll('.landing img');
const prev = document.querySelector('.chevron-left');
const next = document.querySelector('.chevron-right');
let count = 0;

function removeActive(list){
    list.forEach(function(a){
        a.classList.remove('active');
    })
}

document.body.onclick = function(e){
    if(e.target.classList.contains('fa-chevron-left')){
      if(count > 0){
        count--;

        removeActive(images)
        images[count].classList.add('active');
      }
    }else if(e.target.classList.contains('fa-chevron-right')){
if(count  < images.length-1){
    count++;
    removeActive(images);
    images[count].classList.add('active');
}
    }
}
// shuffling
const buttonList = document.querySelectorAll('.featured-work li');
const imagesList = document.querySelectorAll('.featured-work img');
buttonList.forEach(btn =>{
    btn.onclick = function(){
        removeActive(buttonList);
        btn.classList.add('active');
        let text = this.textContent.toLowerCase();
        if(text === "all"){
            imagesList.forEach(img =>{
                img.classList.add('active');
            })
        }else{
            removeActive(imagesList);
            imagesList.forEach(img =>{
                if(img.dataset.type === text){
                    img.classList.add('active');
                }
            })
        }
    }
})
// slider 2

let buttons = document.querySelectorAll('.testimonials .buttonss > div');
let slides = Array.from(document.querySelectorAll('.slider > div'));
let parentSlide = document.querySelector('.slider');
let count2 = 0;
let s = slides[0].getBoundingClientRect().width;
const bullets = document.querySelectorAll('.bullets > div');


buttons[1].onclick = function(){
    if(count2 < slides.length-1){
        count2++;
    removeActive(bullets);

    bullets[count2].classList.add('active');

    }
    slides.forEach(slide =>{
    slide.style.transform = `translateX(-${slides[0].getBoundingClientRect().width * count2}px)`;
    });
}

buttons[0].onclick = function(){
    if(count2 > 0){
        count2--;
        removeActive(bullets);
    bullets[count2].classList.add('active');

    }
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${slides[0].getBoundingClientRect().width * count2}px)`;
        });
        console.log(count2)
}


bullets.forEach((bull ,index)=>{
bull.onclick = function(){
    removeActive(bullets);
    bull.classList.add('active');
    count2 = index;
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${slides[0].getBoundingClientRect().width * count2}px)`;
    })
}
})







