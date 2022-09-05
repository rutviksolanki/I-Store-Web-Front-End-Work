/* NAVBAR */
$(document).on('click', '#menu-btn', function(event) {
	event.preventDefault();
	$(this).toggleClass('active-close');
	if ($(this).hasClass('active-close')) {
		$(this).html('close');
		$('.mobile-nav-wrapper').slideDown(300);
	}else{
		$(this).html('menu');
		$('.mobile-nav-wrapper').slideUp(300);
	}
	$('.mobile-drop-down').toggleClass('active-nav');
});
$(document).on('click', '.mobile-drop-down .material-icons-outlined', function(event) {
	event.preventDefault();
	$(this).parent().next().slideToggle(300);
});
$(document).on('click', '.product-card-container abbr[title="Wishlist"] span', function(event) {
	event.preventDefault();
	if ($(this).html() == 'favorite_border') {
		$(this).html('favorite');
	}else{
		$(this).html('favorite_border');
	}
});
/* / NAVBAR */
/* LOGIN FORGET PASSWORD */
$(document).on('click', '#goto-forget-pass', function(event) {
	event.preventDefault();
	$('.forget-pass-form').fadeIn(300);
	$('.login-form').hide();
});
$(document).on('click', '#goto-login', function(event) {
	event.preventDefault();
	$('.login-form').fadeIn(300);
	$('.forget-pass-form').hide();
});
/* /LOGIN FORGET PASSWORD */
/* OWL CAROUSEL*/
$('.product-first-row,.product-second-row').owlCarousel({
    loop:true,
    margin:10,
    navText: ['<span class="material-icons-outlined">chevron_left</span>','<span class="material-icons-outlined">chevron_right</span>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        468:{
        	items:2,
            nav:true	
        },
        768:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
$('.optional-img-carousel').owlCarousel({
    loop:true,
    margin:15,
    navText: ['<span class="material-icons-outlined">chevron_left</span>','<span class="material-icons-outlined">chevron_right</span>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        468:{
        	items:3,
            nav:true	
        },
        768:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('.related-product-carousel,.costom-product-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText: ['<span class="material-icons-outlined">chevron_left</span>','<span class="material-icons-outlined">chevron_right</span>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        468:{
        	items:2,
            nav:true	
        },
        768:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
/* /OWL CAROUSEL*/
/* RATTING STARS*/
$(document).on('click', '.ratting-stars .material-icons-outlined', function(event) {
	event.preventDefault();
	if($(this).html() == 'star_border') {
		$(this).prevAll().html('star');
		$(this).html('star');
	}
	if ($(this).html() == 'star') {
		$(this).nextAll().html('star_border');
	}
});
$(document).on('click', '#write-review', function(event) {
	event.preventDefault();
	$('.review-form').slideToggle(300);
});
/* RATTING STARS*/
/* IMAGE MAGNIFIRE */
$(document).on('mouseenter', '.example', function(event) {
    $('.example').izoomify();
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}
/* /IMAGE MAGNIFIRE */
/* CHANGE IMAGE PRODUCT PREVIEW PAGE */
$(document).on('click', '.optional-img-carousel .item img', function(event) {
    event.preventDefault();
    var preview_img = $(this).data('img')
    if ($('.preview-img img').attr('src',preview_img)) {
        $('.example').izoomify();
    }
});

/* / CHANGE IMAGE PRODUCT PREVIEW PAGE */ 