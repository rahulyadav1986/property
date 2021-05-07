window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
})

$('.mobile-menu').slicknav({
    label: '',
    prependTo: 'header .main_details',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#banner-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
	dots:false,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//When page loads...
jQuery(".tab_content").hide(); //Hide all content
jQuery("ul.tabs li:first").addClass("active").show(); //Activate first tab
jQuery(".tab_content:first").show(); //Show first tab content
//On Click Event
jQuery("ul.tabs li").click(function () {
    jQuery("ul.tabs li").removeClass("active"); //Remove any "active" class
    jQuery(this).addClass("active"); //Add "active" class to selected tab
    jQuery(".tab_content").hide(); //Hide all tab content
    var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    jQuery(activeTab).fadeIn(); //Fade in the active ID content
    return false;
});



// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
    jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  jQuery(".collapse").on('show.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });


  jQuery(".card .card-header:first").addClass("active").show(); //Activate first tab

  jQuery(".card-header").on('click', '.card-header', function(){    
    if (jQuery(this).find('.accordion-toggle').hasClass('active')) {        
    }
    

 })


 jQuery(document).ready(function () {
    size_li = jQuery(".tab_details_back .load").size();
    x=6;
    jQuery('.tab_details_back .load:lt('+x+')').show();
    
    if(x <= size_li){
        jQuery('#loadMore').show();
    }else{
        jQuery('#loadMore').hide();
    }
    
    jQuery('#loadMore').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        jQuery('.tab_details_back .load:lt('+x+')').show();
        if(x= (x+3 <= size_li) ? x+3 : size_li){
            jQuery('#showLess').show();
        }else{
            jQuery('#showlLss').hide();
        }
        
    });    
    
    jQuery('#showLess').click(function () {
        x=(x-3<0) ? 3 : x-3;
        jQuery('.tab_details_back .load').not(':lt('+x+')').hide();
        if(x= (x-3 <= size_li) ? x-3 : size_li){
            jQuery('#showLess').show();
        }else{
            jQuery('#showLess').hide();
        }
        
    });
});
  


