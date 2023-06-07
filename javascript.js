let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

function portBtn() {
    alert("Coming soon!");
}

/* Animasi Scroll */
window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
		var revealbot = reveals[i].getBoundingClientRect().bottom;
        var revealpoint = 200;
		var revealbawah = 400;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
		if(revealbot < windowheight - revealbawah){
			reveals[i].classList.remove('active');
		}
      }
    }


window.addEventListener('scroll', kiri);

    function kiri(){
      var kiris = document.querySelectorAll('#kiri');

      for(var i = 0; i < kiris.length; i++){

        var windowheight = window.innerHeight;
        var kiritop = kiris[i].getBoundingClientRect().top;
        var kiribot = kiris[i].getBoundingClientRect().bottom;
        var kiripoint = 150;
        var kiribawah = 400;

        if(kiritop < windowheight - kiripoint){
          kiris[i].classList.add('active');
        }
        else{
			kiris[i].classList.remove('active');
        } 

		if(kiribot < windowheight - kiribawah){
			kiris[i].classList.remove('active');
		}
      }
    }


window.addEventListener('scroll', kanan);

    function kanan(){
      var kanans = document.querySelectorAll('#kanan');

      for(var i = 0; i < kanans.length; i++){

        var windowheight = window.innerHeight;
        var kanantop = kanans[i].getBoundingClientRect().top;
        var kananbot = kanans[i].getBoundingClientRect().bottom;
        var kananpoint = 150;
        var kananbawah = 400;

        if(kanantop < windowheight - kananpoint){
          kanans[i].classList.add('active');
        }
        else{
			kanans[i].classList.remove('active');
        } 

		if(kananbot < windowheight - kananbawah){
			kanans[i].classList.remove('active');
		}
      }
    }
