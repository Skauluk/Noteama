jQuery(
function($) {
	$(".swap").click(function (){
		$(".side").toggle();
		return false;
	});
	$(".1").click(function (){
		$('html,body').animate({
        scrollTop: $(".theme1").offset().top - 10},
        'slow');
	});
	$(".2").click(function (){
		$('html,body').animate({
        scrollTop: $(".theme2").offset().top + 30},
        'slow');
	});
	$(".3").click(function (){
		$('html,body').animate({
        scrollTop: $(".theme3").offset().top + 30},
        'slow');
	});
	$(".vidos").click(function () {
		$('iframe').css("z-index",10);
		$('.hid').css("z-index",10);
	});
	$(".hid").click(function () {
		$('iframe').css("z-index",-10);
		$('.hid').css("z-index",-10);
	});
	$(".side h1 img").click(function () {
		$('li img').css("width", "65%");
		$('li img').css("position", "fixed");
		$('li img').css("top", "-450px");
		$('li img').css("left", "0px");
	    $('li img').css("border", "0px");
	})
	setTimeout(function() {
		$(".img1").attr("src","11.jpg");
	}, 20000);
	setTimeout(function() {
		$(".img2").attr("src","12.jpg");
	}, 40000);
	setTimeout(function() {
		$(".img3").attr("src","13.jpg");
	}, 60000);
	var grey = false;

	$(".swap").click(function () {
		if (grey == false) {
		$('.hd').css("z-index",10);
		$('.hd').css("visibility", "visible");
		$('.side').css("z-index",10);
		grey = true;
	} else if (grey == true) {
		$('.hd').css("z-index", -10);
		$('.hd').css("visibility", "hidden");
		$('.side').css("z-index",-10);
		grey = false;
	}

	})
})
