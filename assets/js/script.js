$(document).ready(function(){


    $('.hero-slider').slick({
      infinite: true,
      autoplay: true,
      dots: false,
      arrows: false,
      autoplaySpeed: 1000,
      speed: 1000,
    });
$('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
$('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

 

  $('.all').click(function(){
    $('.see-all2').css("display","block")
});

  var mixer = mixitup('.box-list');
  
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 250){  
      $('.menu').addClass("sticky");
  }
  else{
      $('.menu').removeClass("sticky");
  }
});


  document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
               
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            
        });

        //button
    
  const catButtons = document.querySelectorAll('.cat-btn');
const productCards = document.querySelectorAll('.product-card');

// By default, show only the first category products on page load
window.addEventListener('DOMContentLoaded', () => {
  const defaultCategory = document.querySelector('.cat-btn.active').getAttribute('data-category');
  productCards.forEach(card => {
    if(card.getAttribute('data-category') === defaultCategory) {
      card.classList.remove('d-none');
    } else {
      card.classList.add('d-none');
    }
  });
});

// Button click logic (same as before)
catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const selectedCategory = btn.getAttribute('data-category');
    productCards.forEach(card => {
      if(card.getAttribute('data-category') === selectedCategory) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  });
});


//counter

  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    const startCounting = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000; // milliseconds
        const increment = Math.ceil(target / (duration / 16)); // ~60fps
        let count = 0;

        const updateCounter = () => {
          count += increment;
          if (count < target) {
            counter.innerText = count.toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target.toLocaleString() + (target === 100 ? '%' : '+');
          }
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            startCounting();
            started = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    const section = document.querySelector(".inside-company");
    if (section) {
      observer.observe(section);
    }
  });

