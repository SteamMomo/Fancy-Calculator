let back = document.getElementById('back-img')
let title = document.getElementById('title-text')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    back.style.top = value * 0.7 + 'px';
    // title.style.top = value * 0.5 + 'px'
})

let scrollText = document.querySelector('.scroll-text p');
scrollText.innerHTML = scrollText.innerHTML.split("").map(
    (char, i) => (
        `<span style = "transform:rotate(${i*18}deg)">${char}</span>`
    )
).join("");