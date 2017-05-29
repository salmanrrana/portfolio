$(function() {

  function openNav() {
    $('.navbar-sign').on('click', function() {
      $('#the-side-nav').removeClass('sidenav').addClass('sidenav-activated');
      console.log('nav bar open works');
    });
  }
  openNav();

  function closeNav() {
    $('.close-btn').on('click', function() {
      $('#the-side-nav').removeClass('sidenav-activated').animate({width:'210px'}, 1000).addClass('sidenav');
    })
  }
  closeNav();


  $('.background-image').animate({
    opacity: 1
  }, {duration: 3000});
  $('.projects').animate({
    opacity: 1
  }, {duration: 2000});
  $('.therow').animate({
    opacity: 1
  }, {duration: 3000});
  $('.contact-list').animate({
    opacity: 1
  }, {duration: 2000});
});
