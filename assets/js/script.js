const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.mobile-menu .col-1 svg');
const openIcom = document.querySelector('figure.hamburger-nav-icon');

if(closeIcon){
    closeIcon.addEventListener('click', function(){
    mobileMenu.classList.toggle('is-hidden');
    mobileMenu.classList.toggle('is-visible');
    document.body.classList.toggle('no-scroll')
})
}

if(openIcom){
    openIcom.addEventListener('click', function(){
    mobileMenu.classList.toggle('is-hidden');
    mobileMenu.classList.toggle('is-visible');
    document.body.classList.toggle('no-scroll')
})
}

const edge = document.querySelector('.smart-nav .edge');
const smartNav = document.querySelector('.smart-nav');

if(edge){
    edge.addEventListener('click', function(){
    smartNav.classList.toggle('right')
})
}




// slider nav functions

const next = document.querySelector('section.events .slider .slider-nav .next');
const prev = document.querySelector('section.events .slider .slider-nav .prev');
const slider = document.querySelector('section.events .slider .card-wrapper');
const sliderCards = document.querySelector('section.events .slider .card-wrapper .card');

if(next){
    next.addEventListener('click', function(){
    let clientWidth = sliderCards.clientWidth;
    slider.scrollBy({left: `${clientWidth}`, right: 0, behavior: 'smooth'});

    console.log(clientWidth)
})

}

if(prev){
    prev.addEventListener('click', function(){
    let clientWidth = sliderCards.clientWidth;
    // smartNav.classList.toggle('right')
     slider.scrollBy( {left: `-${clientWidth}`, right: 0, behavior: 'smooth'});
    console.log(clientWidth)
})
}



// Courses more details toggle
const courseCard = Array.from(document.querySelectorAll('section.courses .courses-wrapper .course'));


if(courseCard){

    courseCard.forEach((card)=>{

    card.style.minHeight = `${card.clientHeight}px`;
    let detailsIsOpen = false;

    card.querySelector('.nav-text').addEventListener('click', function(event){
        let cardDetailsCont = card.querySelector('.details');
        let moreDetailsCont = card.querySelector('.more-details');
        let moreDetailsPara = card.querySelector('.more-details p');
        let navText = card.querySelector('.nav-text');


        if(!detailsIsOpen){
            card.style.minHeight = `${cardDetailsCont + moreDetailsPara.clientHeight}px`;
            moreDetailsCont.style.height = `${moreDetailsPara.clientHeight}px`;
            navText.innerHTML = '<span>＞</span>とじる';
            card.querySelector('.nav-text span').style.transform = 'rotate(-90deg)';
            detailsIsOpen = true;

        }
        else{
            card.style.minHeight = `${cardDetailsCont - moreDetailsPara.clientHeight}px`;
            moreDetailsCont.style.height = '0px';
            navText.innerHTML = '<span>＞</span>さらに詳しく';
            card.querySelector('.nav-text span').style.transform = 'rotate(0deg)';
            detailsIsOpen = false;
        }
    })
})
}


// Paginations
const noticesContainer = document.querySelector('section.notices .notices-wrapper');
const paginationWrapper = document.querySelector('section.notices .pagination');
const prevNotice = document.querySelector('section.notices .pagination .prev');
const nextNotice = document.querySelector('section.notices .pagination .next');
const num1 = document.querySelector('section.notices .pagination .num1');
const num2 = document.querySelector('section.notices .pagination .num2');
// const newContent = '<div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div><div class="notice flx-row"><h4>2025.08.08</h4><div class="notice-content flx-col"><span class="h4">【玄品45周年】記念キャンペーン第2弾予告！</span><span>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span></div></div>';


if(nextNotice){
    nextNotice.addEventListener('click', function(){
        let totalChildren = noticesContainer.querySelectorAll('.notice');
        

        // if(totalChildren.length < 30){
        //     paginationWrapper.insertAdjacentHTML('beforebegin', newContent);
        // }
        // console.log(totalChildren.length)
        window.location.reload()
    })
}


if(prevNotice){
    prevNotice.addEventListener('click', function(){
        window.location.reload()
    })
}


if(num1){
    num1.addEventListener('click', function(){
        window.location.reload()
    })
}

if(num2){
    num2.addEventListener('click', function(){
        window.location.reload()

        
    })
}


// Fixed positioned homepage Header
const homeHeader = document.querySelector('section.hero  .language-toggle');
const headerLogo = document.querySelector('section.hero .logo-wrapper img');


if(homeHeader && headerLogo){
    document.addEventListener('scroll', function(){
        let cords = document.body.getBoundingClientRect();
        
        if(cords.top <= -300){
            homeHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.822)'
            headerLogo.style.width = '35px';
            headerLogo.style.height = '35px';
            headerLogo.style.mixBlendMode = 'difference'
        }
        else if(cords.top >= -300){
            homeHeader.style.backgroundColor = 'transparent';
            headerLogo.style.width = '80px';
            headerLogo.style.height = '80px';
            headerLogo.style.mixBlendMode = 'normal'
        }
    })
    
}

// Fixed general page header
const generalHeader = document.querySelector('header');
const breadcrumbs = generalHeader.querySelector('.boxed-width.breadcrumbs-text');


if(generalHeader){
    console.log('found', generalHeader);
    document.addEventListener('scroll', function(){
        let cords = document.body.getBoundingClientRect();
        
        if(cords.top <= -300){
            // homeHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.822)'
            breadcrumbs.style.overflow = 'clip';
            breadcrumbs.style.height = '0px';
            breadcrumbs.style.paddingTop = '0px';
            console.log(cords.top)
        }
        else if(cords.top >= -300){
            breadcrumbs.style.overflow = 'unset';
            breadcrumbs.style.height = 'unset';
            breadcrumbs.style.paddingTop = '24px';
        }
    })
    
}


// Slider nav for Announcement Page
const next1 = document.querySelector('section.campaign-cards .slider .slider-nav .next');
const prev1 = document.querySelector('section.campaign-cards .slider .slider-nav .prev');
const slider1 = document.querySelector('section.campaign-cards .slider .card-wrapper');
const sliderCards1 = document.querySelector('section.campaign-cards .slider .card-wrapper .card');

if(next1){
    next1.addEventListener('click', function(){
    let clientWidth = sliderCards1.clientWidth;
    slider1.scrollBy({left: `${clientWidth}`, right: 0, behavior: 'smooth'});

    console.log(clientWidth)
})

}

if(prev1){
    prev1.addEventListener('click', function(){
    let clientWidth = sliderCards1.clientWidth;
    // smartNav.classList.toggle('right')
     slider1.scrollBy( {left: `-${clientWidth}`, right: 0, behavior: 'smooth'});
    console.log(clientWidth)
})
}