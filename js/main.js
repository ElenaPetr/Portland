$(function(){

	var menu = document.getElementById('toggler');
    var title = menu.querySelector('.li');

    title.onclick = function() {
      menu.classList.toggle('open');
    };

	
});
   

