
$(document).ready(function() {

  if ($(window).width() < 770) {
    //standard display
    $('.nav').css('display', 'none');
    $('.hamburger').removeClass('active');

    //if hamburger is clicked
    $('.hamburger').unbind().on('click', () => {
      if($('nav').css('display') === 'none'){
        $('.nav').slideToggle(150);
        $('.hamburger').toggleClass('active');
      }
      else {
        $('.nav').slideToggle(150);
        $('.hamburger').toggleClass('active');
      }
    })

    //if element in hamburger menu is clicked
    $('.nav ul li a').unbind().on('click', () => {
      $('.nav').slideToggle(150);
      $('.hamburger').removeClass('active');
    })

    //if logo is clicked
    $('.logo').unbind().on('click', () => {
      if($('nav').css('display') === 'none') {
        $('.hamburger').removeClass('active');
      }
      else {
        $('.nav').slideToggle(150);
        $('.hamburger').removeClass('active');
      }
    })
  }
  else {
    $('.nav').css('display', 'flex')
  }

  $(window).resize(function() {

    if ($(window).width() < 770) {
      //standard display
      $('.nav').css('display', 'none');
      $('.hamburger').removeClass('active');

      //if hamburger is clicked
      $('.hamburger').unbind().on('click', () => {
        if($('nav').css('display') === 'none'){
          $('.nav').slideToggle(150);
          $('.hamburger').toggleClass('active');
        }
        else {
          $('.nav').slideToggle(150);
          $('.hamburger').toggleClass('active');
        }
      })

      //if element in hamburger menu is clicked
      $('.nav ul li a').unbind().on('click', () => {
        $('.nav').slideToggle(150);
        $('.hamburger').removeClass('active');
      })

      //if logo is clicked
      $('.logo').unbind().on('click', () => {
        if($('nav').css('display') === 'none') {
          $('.hamburger').removeClass('active');
        }
        else {
          $('.nav').slideToggle(150);
          $('.hamburger').removeClass('active');
        }
      })
    }
    else {
      $('.nav').css('display', 'flex')
    }
  })

})
