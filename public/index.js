// mobile menu
const hamBtn = document.querySelector('#hamburger-btn');
const hamMenu = document.querySelector('#hamburger-menu');
const hamClose = document.querySelector('#hamburger-close');
const hamOverlay = document.querySelector('#hamburger-overlay');

hamBtn.addEventListener('click', () => {
  hamMenu.classList.add('menuOpen');
  hamOverlay.classList.add('overlayOpen');
});

hamClose.addEventListener('click', () => {
  hamMenu.classList.remove('menuOpen');
  hamOverlay.classList.remove('overlayOpen');
});

hamOverlay.addEventListener('click', () => {
  hamMenu.classList.remove('menuOpen');
  hamOverlay.classList.remove('overlayOpen');
});

// zadzwon do nas btn
const callUsBtn = document.querySelectorAll('.call-us');

if(window.innerWidth > 767) {
  callUsBtn.forEach(callUs => {
    callUs.addEventListener('mouseover', () => {
      callUs.innerHTML = "+48 123-123-123";

      callUs.addEventListener('click', () =>{
        callUs.innerHTML = '&#10004; Skopiowano';
        navigator.clipboard.writeText('+48 123-123-123');
      });
    }); 

    callUs.addEventListener('mouseout', () => 
      callUs.innerHTML = "Zadzwoń do nas");

  });
} 

else {
  callUsBtn.forEach(callUs =>
  callUs.addEventListener('click', () =>
      callUs.href = 'tel: +48 123-123-123')
  );
}


//Galeria/typ samochodu
const typePassenger = document.querySelector('#type-passenger');
const typeCargo = document.querySelector('#type-cargo');

typePassenger.addEventListener('click', () => {
  typePassenger.classList.add('type-active');
  typeCargo.classList.remove('type-active');
});

typeCargo.addEventListener('click', () => {
  typeCargo.classList.add('type-active');
  typePassenger.classList.remove('type-active');
});

// Karuzela zdjec
const carousel = document.querySelector('#carousel');
const carImage = document.querySelector('.carousel-flex-image');
const dots = document.querySelectorAll('.dot');

const getCarImageFlexBasis = () => {
  const style = window.getComputedStyle(carImage);
  return parseInt(style.width, 10);
};

const getCarouselFlexGap = () => {
  const style = window.getComputedStyle(carousel);
  return parseInt(style.gap, 10);
};

dots.forEach(dot => {
  const flexBasis = getCarImageFlexBasis();
  const gap = getCarouselFlexGap();
  dot.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-index');
    const offset = index * (flexBasis + gap);
    carousel.style.transform = 'translateX(-'+ offset +'px)';

    dots.forEach(d =>
    d.classList.remove('text-tertiary'));

    e.target.classList.add('text-tertiary');
    
  });
});

// rozwin/zwin FaQ  
const faqCon = document.querySelectorAll('.faq-content');
const faqUnfold = document.querySelectorAll('.faq-unfold');
const faqFold = document.querySelectorAll('.faq-fold');
const faqBox = document.querySelectorAll('.faq-box');



faqUnfold.forEach((unfoldBtn, index) => {
  unfoldBtn.addEventListener('click', () => {
    faqCon[index].classList.remove('line-clamp-2');
    faqUnfold[index].classList.add('hidden');
    faqFold[index].classList.remove('hidden');
    faqBox[index].style.marginBottom = '2rem';
  });
});

faqFold.forEach((foldBtn, index) => {
  foldBtn.addEventListener('click', () => {
    faqCon[index].classList.add('line-clamp-2');
    faqFold[index].classList.add('hidden');
    faqUnfold[index].classList.remove('hidden');
    faqBox[index].style.marginBottom = '5rem';
  });
});



