
$(document).ready(function() {

  $('.nav ul li a').click(function () {

    const targetIndex = ($('.nav ul li a').index(this));
    console.log(targetIndex)

    const sectionArray = $('.section');
    console.log(sectionArray[targetIndex])

    $('.section').addClass('hidden');
    $('.section').removeClass('active-section')
    $(sectionArray[targetIndex]).removeClass('hidden').addClass('active-section');

  })

})
