$(function(){
  $('.box2 li:nth-child(1)').click(function(){
    $('.box1_img3, .box1_img1').fadeOut();
  });/*img2축소를 클릭하면 3번1번이 안보임*/
  $('.box2 li:nth-child(2)').click(function(){
    $('.box1_img3').fadeIn();
    $('.box1_img1').fadeOut();
  });/*img3축소를 클릭하면 3번이보이고 1번이 안보임 2번은밑에깔려잇음*/
  $('.box2 li:nth-child(3)').click(function(){
    $('.box1_img1').fadeIn();
    $('.box1_img3').fadeOut();
  });/*img1축소를 클릭하면 3번이 안보임 1번이보임 2번은깔려잇음*/
});