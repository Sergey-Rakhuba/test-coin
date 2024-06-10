const buttonMenu = document.querySelector(".menu");
const menuWindow = document.querySelector(".burger-menu");
const buttonMenuItem = document.querySelectorAll(".button-menu");
const wrap = document.getElementById("burger-menu__close-btn");
const bodyWindow = document.getElementById('body');
buttonMenu.addEventListener("click", function () {
  menuWindow.classList.add("active");
  bodyWindow.classList.add("active");
});

buttonMenuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    menuWindow.classList.remove("active");
    bodyWindow.classList.remove("active");
  });
});

wrap.addEventListener("click", function () {
  menuWindow.classList.remove("active");
});

// open SingIn window
const buttonSingIn = document.querySelectorAll(".button-sing-in");
const singInWindow = document.querySelector(".sing-in");
const wrapSingIn = document.querySelectorAll(".close-btn");

buttonSingIn.forEach(function (item) {
  item.addEventListener("click", function () {
    singInWindow.classList.add("active");
    bodyWindow.classList.add("active");
  });
});

wrapSingIn.forEach(function (item) {
  item.addEventListener("click", function () {
    singInWindow.classList.remove("active");
    bodyWindow.classList.remove("active");
  })
});

// Learn more

const buttonLearn = document.querySelectorAll(".button-learn");
const learnWindow = document.querySelector(".learn");
const wrapLearn = document.querySelectorAll(".close-btn");

buttonLearn.forEach(function (item) {
  item.addEventListener("click", function () {
    learnWindow.classList.add("active");
    bodyWindow.classList.add("active");
  });
});

wrapLearn.forEach(function (item) {
  item.addEventListener("click", function () {
    learnWindow.classList.remove("active");
    bodyWindow.classList.remove("active");
  })
});

// open Credit window
// const button// open SingIn window
const buttonCredit = document.querySelectorAll(".button-credit");
const creditWindow = document.querySelector(".credit");
const wrapCredit = document.querySelectorAll(".close-btn");

buttonCredit.forEach(function (item) {
  item.addEventListener("click", function () {
    creditWindow.classList.add("active");
    bodyWindow.classList.add("active");
  });
});

wrapCredit.forEach(function (item) {
  item.addEventListener("click", function () {
    creditWindow.classList.remove("active");
    bodyWindow.classList.remove("active");
  })
}); 


// Slider
let wq = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
 
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});



let qw= new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 160,
  slidesPerView: 1.2,

  centeredSlides: true,
  
  navigation: {
    nextEl: ".mySwiper-next",
    prevEl: ".mySwiper-prev",
  },
  pagination: {
    el: ".mySwiper-pagination",
    // type: "fraction",
  },
});
// animate from scroll

const animItems = document.querySelectorAll("._anime-items");

if (animItems.length > 0) { 
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) { 
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    
  }
}

// typeCreditCalendar
const btnCredCalc = document.getElementById('btnCredCalc');

btnCredCalc.addEventListener("click", function () {
  const creditInterest = Number(document.getElementById('creditInterest').value);
   
  const typeCreditCalendar = document.getElementById('typeCreditCalendar');
  const summaCredit = Number(document.getElementById('summaCredit').value);
  const loanTerm = Number(document.getElementById('loanTerm').value);
  let totalCredit = 0;
  console.log("summaCredit = " + summaCredit)
  console.log("loanTerm = " + loanTerm);
  console.log("creditInterest = " + creditInterest);
  console.log(typeCreditCalendar.checked);
  // alert(typeof creditInterest);
  let monthCredit = (summaCredit / loanTerm);
  console.log( "місячний платіж ануїтет = " + monthCredit);
  let totalCreditBody = summaCredit;
  if (typeCreditCalendar.checked == true) {
    console.log("Річний відсоток становить - " + creditInterest + "%");
    // alert("Anuited");
    
    if ((creditInterest > 0) && (summaCredit > 0) && (loanTerm > 0)) {
      // totalCredit = 0;
      totalCredit = ((monthCredit) + ((summaCredit * (creditInterest /100)) + (monthCredit * (creditInterest /100) ) )/ 2 );
      for (let index = 0; index < loanTerm; index++) {
        console.log(totalCredit);
        const $newP = document.createElement('p');
        $newP.textContent = (index + 1) + 'monthly loan payment - | ' + totalCredit.toFixed(2) + " $ | ";
        const $creditLine = document.querySelector('#creditLine');
        $creditLine.appendChild($newP);
      }
      
    
    } else {
      alert("Enter correct information");
    };
  } else { 
    // alert("Standard");
    if ((creditInterest > 0) && (summaCredit > 0) && (loanTerm > 0)) {
      totalCredit = summaCredit;
      // monthCredit = 0;
      // let totalCreditBody = summaCredit;
      for (let index = 0; index < loanTerm; index++) {
        // monthCredit = (summaCredit / loanTerm);
        totalCredit = ((monthCredit) + ((totalCreditBody) * (creditInterest / 100)));
        console.log(totalCredit);
        const $newP = document.createElement('p');
        $newP.textContent = (index + 1) + ' monthly loan payment - ' + totalCredit.toFixed(2) + "$";
        const $creditLine = document.querySelector('#creditLine');
        $creditLine.appendChild($newP);
        totalCreditBody = totalCreditBody - monthCredit;
        
      }


    } else {
      alert("Enter correct information");
    };
    
  };
});

// ListCred

const buttonListCred = document.querySelectorAll(".button-creditList");
const listCredWindow = document.querySelector(".creditList");
const wrapListCred = document.querySelectorAll(".close-btn");

buttonListCred.forEach(function (item) {
  item.addEventListener("click", function () {
    listCredWindow.classList.add("active");
  });
});

wrapListCred.forEach(function (item) {
  item.addEventListener("click", function () {
    listCredWindow.classList.remove("active");
    const loanTerm = Number(document.getElementById('loanTerm').value);
    for (let index = 0; index < loanTerm; index++) {
      let $pAll = document.querySelector('#creditLine p');
      $pAll.parentNode.removeChild($pAll);
    }
  })
});



// Відправка листа

function sendEmail() {
  let params = {
    from_name: document.getElementById('fromName').value,
    email: document.getElementById('email').value,
    massage: document.getElementById('massage').value,
  }
  emailjs.send("service_xr5ftb5", "template_kyuocq8", params).then((res) => {
    alert("Successfully sent!" + res.status);
  })
}

