var prevScrollPos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("myHeader").classList.remove("hidden");
  } else {
    document.getElementById("myHeader").classList.add("hidden");
  }
  
  prevScrollPos = currentScrollPos;
};

// Obtener todos los elementos de menú desplegable
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

// Agregar evento de hover a cada enlace principal
dropdownTriggers.forEach((trigger) => {
    const submenu = trigger.nextElementSibling;

    // Mostrar y ocultar el menú desplegable al hacer hover
    trigger.addEventListener('mouseenter', () => {
        submenu.classList.add('show');
    });

    trigger.addEventListener('mouseleave', () => {
        submenu.classList.remove('show');
    });

    // Ocultar el menú desplegable cuando se hace clic en cualquier lugar fuera del menú
    document.addEventListener('click', (event) => {
        if (!trigger.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove('show');
        }
    });
});


window.addEventListener("scroll", function () {
  var divChat = document.getElementById("divChat");
  var footer = document.getElementById("footer");
  var divChatHeight = divChat.offsetHeight;
  var footerOffset = footer.offsetTop;
  var scrollPosition = window.innerHeight + window.pageYOffset;

  if (scrollPosition > footerOffset) {
    divChat.style.bottom = scrollPosition - footerOffset + "px";
  } else {
    divChat.style.bottom = "10%";
  }
});

function cargarContenido(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector("main").innerHTML = data;
    })
    .catch(error => console.log(error));
}



const menu = document.querySelector(".bars-menu")

menu.addEventListener("click", animateBars);

let line1 = document.querySelector(".line1_bars-menu");
let line2 = document.querySelector(".line2_bars-menu")
let line3 = document.querySelector(".line3_bars-menu")

function animateBars() {
    line1.classList.toggle("active_line1_bars-menu");
    line2.classList.toggle("active_line2_bars-menu");
    line3.classList.toggle("active_line3_bars-menu");
}


const sectionMenu = document.querySelector(".section-menu")
const body = document.querySelector(".body")

    menu.addEventListener("click", () => {
    sectionMenu.classList.toggle("nav-menu_visible")
    body.classList.toggle("body-overflow_hidden")
    });

      if (sectionMenu.classList.contains("nav-menu_visible")) {
            menu.setAttribute("aria-label", "Cerrar menu");
      } else {
            menu.setAttribute("aria-label", "Abrir menu");
      }


      const aToggleElements = document.querySelectorAll(".a-toggle");

      aToggleElements.forEach(function(element) {
      const submenu = element.nextElementSibling;
      let colorPredeterminado = true;

        element.addEventListener("click", function(event) {
        event.preventDefault();

        submenu.classList.toggle('active');

        if (colorPredeterminado) {
        this.style.backgroundColor = "#0D2C54";
        this.style.color = "white";
      } else {
        this.style.backgroundColor = "";
        this.style.color = "";
      }

      colorPredeterminado = !colorPredeterminado;
    });
  });


  


