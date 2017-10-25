//smooth scrolling
$('.nav').localScroll();
$('.navbar-header').localScroll();
$('#banner').localScroll();
//animated navbar
var $document = $(document),
	$element = $('.navbar'),
	navbarDefault = 'navbar-default';
	navbarTransparent = 'navbar-transparent';
	fadeInDown = 'fadeInDown';

$document.scroll(function() {
	if ($document.scrollTop() >= 100) {
		$element.addClass(navbarDefault);
		$element.removeClass(navbarTransparent);
		$element.addClass(fadeInDown);
	} else {
		$element.addClass(navbarTransparent);
		$element.removeClass(navbarDefault);
		$element.removeClass(fadeInDown);
	}
});
// for rubberband button and pulse effect
$('#clickMe').hover( function(){
	$('#clickMe').addClass('btn-success animated rubberBand');
	$('#clickMe').removeClass('btn-primary');
}
	, function() {
		$('#clickMe').addClass('btn-primary');
		$('#clickMe').removeClass('btn-success animated rubberBand');
});
$(window).ready(function(){
	$('#quote').addClass('animated pulse');
	$('#effect').addClass('animated pulse');
	$('#clickMe').addClass('animated pulse');
	$('#navbar-example').addClass('animated pulse');
	$('.navbar-brand').addClass('animated pulse')
});
