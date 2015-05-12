var $window = $(window),
  $head = $('header#header'),
  $main = $('main#main'),
  $content = $('#content'),
  $posts = $('section#posts'),
  metaWidth = -1,
  winWidth = $window.width(),
  headWidth = $head.outerWidth(),
  scrollTop = $content.scrollTop();

$.fn.reverseChildren = function() {
  return this.each(function(){
    var $this = $(this);
    $this.children().each(function(){ $this.prepend(this) });
  });
}

$(function(){   
  $main.css('width',winWidth-headWidth); 
  $posts.reverseChildren();
    
	$('.meta').each(function() {
		metaWidth = metaWidth > $(this).outerWidth() ? metaWidth : $(this).outerWidth();
	}).css('width',metaWidth);
	
	$content.prop({ scrollTop: $content.prop("scrollHeight") });
	
	
  $content.scroll(function() {
    scrollTop = $content.scrollTop();
  });
});
    