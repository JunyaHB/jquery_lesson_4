$(function() {
  // 「#hide-btn」要素のclickイベントをつくってください
  //$('#hide-btn').click(function(){ 
  //  $('.slide').eq(1).fadeOut();
  //   });
  
　//次へ、前へボタンを隠す処理
function toggleChangeBtn() {
  var slideIndex = $('.slide').index($('.active'));
  $('.change-btn').show();
  if (slideIndex == 0) {
    $('.prev-btn').hide();
  } else if (slideIndex == $('.slide').length-1) {
    $('.next-btn').hide();
  }
}



  //index-btnに対応するスライド表示
  $('.index-btn').click(function(){ 
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
  
    toggleChangeBtn()  
  });

  $('.change-btn').click(function() {  
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
  
    toggleChangeBtn()
  });  
});
