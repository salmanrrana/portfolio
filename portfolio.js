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


  // Get the modal
  var modal = document.getElementById('myModal');
  var modal2 = document.getElementById('myModal2');
  var modal3 = document.getElementById('myModal3');
  var modal4 = document.getElementById('myModal4');
  var modal5 = document.getElementById('myModal5');
  var modal6 = document.getElementById('myModal6');
  var modal7 = document.getElementById('myModal7');
  var modal8 = document.getElementById('myModal8');
  var modal9 = document.getElementById('myModal9');


  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var img2 = document.getElementById('myImg2');
  var img3 = document.getElementById('myImg3');
  var img4 = document.getElementById('myImg4');
  var img5 = document.getElementById('myImg5');
  var img6 = document.getElementById('myImg6');
  var img7 = document.getElementById('myImg7');
  var img8 = document.getElementById('myImg8');
  var img9 = document.getElementById('myImg9');


  var modalImg = document.getElementById("img01");
  var modalImg2 = document.getElementById("img02");
  var modalImg3 = document.getElementById("img03");
  var modalImg4 = document.getElementById("img04");
  var modalImg5 = document.getElementById("img05");
  var modalImg6 = document.getElementById("img06");
  var modalImg7 = document.getElementById("img07");
  var modalImg8 = document.getElementById("img08");
  var modalImg9 = document.getElementById("img09");


  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }

  img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
  }

  img3.onclick = function(){
      modal3.style.display = "block";
      modalImg3.src = this.src;
  }

  img4.onclick = function(){
      modal4.style.display = "block";
      modalImg4.src = this.src;
  }

  img5.onclick = function(){
      modal5.style.display = "block";
      modalImg5.src = this.src;
  }

  img6.onclick = function(){
      modal6.style.display = "block";
      modalImg6.src = this.src;
  }

  img7.onclick = function(){
      modal7.style.display = "block";
      modalImg7.src = this.src;
  }

  img8.onclick = function(){
      modal8.style.display = "block";
      modalImg8.src = this.src;
  }

  img9.onclick = function(){
      modal9.style.display = "block";
      modalImg9.src = this.src;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close2")[0];
  var span3 = document.getElementsByClassName("close3")[0];
  var span4 = document.getElementsByClassName("close4")[0];
  var span5 = document.getElementsByClassName("close5")[0];
  var span6 = document.getElementsByClassName("close6")[0];
  var span7 = document.getElementsByClassName("close7")[0];
  var span8 = document.getElementsByClassName("close8")[0];
  var span9 = document.getElementsByClassName("close9")[0];


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  span2.onclick = function() {
      modal2.style.display = "none";
  }

  span3.onclick = function() {
      modal3.style.display = "none";
  }

  span4.onclick = function() {
      modal4.style.display = "none";
  }

  span5.onclick = function() {
      modal5.style.display = "none";
  }

  span6.onclick = function() {
      modal6.style.display = "none";
  }

  span7.onclick = function() {
      modal7.style.display = "none";
  }

  span8.onclick = function() {
      modal8.style.display = "none";
  }

  span9.onclick = function() {
      modal9.style.display = "none";
  }

});
