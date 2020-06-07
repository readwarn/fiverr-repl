
            $(document).scroll(function () {
                var $nav = $("#navbar");                
                $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
              $("#list").toggleClass("show", $(this).scrollTop() > 200);
               $("#find").toggleClass("showf", $(this).scrollTop() > $nav.height());
               
            });

                  
      var a="<p class=\"mb-0\">Build Your Brand</p> <h5 style=\"font-size: 1.4rem;\">Logo Design</h5>";

var b="<p class=\"mb-0\">Customize Your Site</p> <h5 style=\"font-size: 1.41rem;\">Wordpress</h5>";

var c="<p class=\"mb-0\">Share Your Message</p> <h5 style=\"font-size: 1.41rem;\">Voice Over</h5>";

var d="<p class=\"mb-0\">Engage Your Audience</p> <h5 style=\"font-size: 1.41rem;\">Whiteboard</h5>";

var e="<p class=\"mb-0\">Reach More Customers</p> <h5 style=\"font-size: 1.41rem;\">Social Media</h5>";

var f="<p class=\"mb-0\">Unlock Growth Online</p> <h5 style=\"font-size: 1.4rem;\">SEO</h5>";

var g="<p class=\"mb-0\">Color Your Dreams</p> <h5 style=\"font-size: 1.41rem;\">Illustration</h5>";

var h="<p class=\"mb-0\">Go Global</p> <h5 style=\"font-size: 1.41rem;\">Translation</h5>";

var i="<p class=\"mb-0\">Learn Your Business</p> <h5 style=\"font-size: 1.41rem;\">Data Entry</h5>";

var j="<p class=\"mb-0\">Showcase Your Story</p> <h5 style=\"font-size: 1.41rem;\">Book covers</h5>";




$("#arrowL").click(function(){
  $(".img1").animate({left: '1100px'}, 0);
  $(".img1").animate({left: '0px'}, "fast");
   if($(".img1").html()===f){
        $(".img1").html(a);
   }else{
    $(".img1").html(f);
   }
   $(".img1").toggleClass("seo");

  $(".img2").animate({left: '1100px'}, 0);
  $(".img2").animate({left: '0px'}, "fast");
   if($(".img2").html()===g){
        $(".img2").html(b);
   }else{
    $(".img2").html(g);
   }
   $(".img2").toggleClass("mug");

  $(".img3").animate({left: '1100px'}, 0);
  $(".img3").animate({left: '0px'}, "fast");
   if($(".img3").html()===h){
        $(".img3").html(c);
   }else{
    $(".img3").html(h);
   }
   $(".img3").toggleClass("book");

  $(".img4").animate({left: '1100px'}, 0);
  $(".img4").animate({left: '0px'}, "fast");
 if($(".img4").html()===i){
        $(".img4").html(d);
   }else{
    $(".img4").html(i);
   }
    $(".img4").toggleClass("data");

  $(".img5").animate({left: '1100px'}, 0);
  $(".img5").animate({left: '0px'}, "fast");
  if($(".img5").html()===j){
        $(".img5").html(e);
   }else{
    $(".img5").html(j);
   }
   $(".img5").toggleClass("books2");
})



$("#arrowR").click(function(){
  $(".img1").animate({left: '-1100px'}, 0);
  $(".img1").animate({left: '0px'}, "fast");
   if($(".img1").html()===f){
        $(".img1").html(a);
   }else{
    $(".img1").html(f);
   }
   $(".img1").toggleClass("seo");

  $(".img2").animate({left: '-1100px'}, 0);
  $(".img2").animate({left: '0px'}, "fast");
   if($(".img2").html()===g){
        $(".img2").html(b);
   }else{
    $(".img2").html(g);
   }
   $(".img2").toggleClass("mug");

  $(".img3").animate({left: '-1100px'}, 0);
  $(".img3").animate({left: '0px'}, "fast");
   if($(".img3").html()===h){
        $(".img3").html(c);
   }else{
    $(".img3").html(h);
   }
    $(".img3").toggleClass("book");

  $(".img4").animate({left: '-1100px'}, 0);
  $(".img4").animate({left: '0px'}, "fast");
 if($(".img4").html()===i){
        $(".img4").html(d);
   }else{
    $(".img4").html(i);
   }
   $(".img4").toggleClass("data");

  $(".img5").animate({left: '-1100px'}, 0);
  $(".img5").animate({left: '0px'}, "fast");
  if($(".img5").html()===j){
        $(".img5").html(e);
   }else{
    $(".img5").html(j);
   }
    $(".img5").toggleClass("books2");
})



