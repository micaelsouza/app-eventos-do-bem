window.fbAsyncInit = function() {
 FB.init({
   appId      : '883987378348167',
   xfbml      : true,
   version    : 'v2.4'
 });

 document.querySelector('button.share').addEventListener('click', function () {
   FB.ui({
     method: 'share',
     href: window.location.origin,
   }, function(response){
     console.log(response);
   });
 });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
