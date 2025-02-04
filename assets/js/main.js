const itemsWithAnimation = document.querySelectorAll('.animation')
window.addEventListener('scroll', function () {
    itemsWithAnimation.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) { //  عندما يكون العنصر مرئي جزئيًا
            element.classList.add('fadeup-animation');
        }

    });

})

const latestNews=document.querySelector('.container-news');
window.addEventListener('scroll',function(){
    if(window.innerHeight > latestNews.getBoundingClientRect().top ){
      latestNews.classList.add('pop-animation');
    }
})
