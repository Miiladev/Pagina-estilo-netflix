const animes = document.querySelectorAll('.anime');
const perfil = document.querySelectorAll(".perfil");


const barracontainer = document.querySelector("#barra-1-container");
const menu = document.querySelector("#menu-principal");
const lista = document.querySelector("#lista");
const activoperfil = document.querySelector("#activo-perfil");
const footer = document.querySelector("#footer");

const containervideo = document.querySelector("#container-video-primero");
const reproducir = document.querySelector("#reproducir");

const salir = document.querySelector("#boton-salir");

window.addEventListener("load", function () {

    reproducir.addEventListener("click", () => {
        containervideo.classList.remove("desactivar");

        barracontainer.classList.add("desactivar");
        menu.classList.add("desactivar");
        lista.classList.add("desactivar");
        footer.classList.add("desactivar");

        if (video.paused) {

            play.classList.add("desactivar")
            pausar.classList.add("activar")
            barra.classList.add("desactivar")
            ContainerElementosControles.classList.add("desactivar")
            return video.play();

        } else {
            play.classList.remove("desactivar")
            pausar.classList.remove("activar")
            barra.classList.remove("desactivar")
            ContainerElementosControles.classList.remove("desactivar")
        }
    });

    animes.forEach((a) => {
        a.addEventListener("click", function () {
            containervideo.classList.remove("desactivar");

            barracontainer.classList.add("desactivar");
            menu.classList.add("desactivar");
            lista.classList.add("desactivar");
            footer.classList.add("desactivar");
    
            if (video.paused) {
    
                play.classList.add("desactivar")
                pausar.classList.add("activar")
                barra.classList.add("desactivar")
                ContainerElementosControles.classList.add("desactivar")
                return video.play();
    
            } else {
                play.classList.remove("desactivar")
                pausar.classList.remove("activar")
                barra.classList.remove("desactivar")
                ContainerElementosControles.classList.remove("desactivar")
            }

        })
    });

    perfil.forEach((a) => {
        a.addEventListener("click", function () {
            barracontainer.classList.remove("desactivar");
            menu.classList.remove("desactivar");
            lista.classList.remove("desactivar");
            footer.classList.remove("desactivar");

            activoperfil.classList.add("desactivar");

            new Glider(document.querySelector('.lista'), {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                dots: '.dots',
                arrows: {
                    prev: '.lista-left',
                    next: '.lista-right'
                }
            });
            new Glider(document.querySelector('.lista-1'), {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                dots: '.dots',
                arrows: {
                    prev: '.lista-left-1',
                    next: '.lista-right-1'
                }
            });

        });
    })

    salir.addEventListener("click", () => {
        barracontainer.classList.remove("desactivar");
        menu.classList.remove("desactivar");
        lista.classList.remove("desactivar");
        footer.classList.remove("desactivar");

        containervideo.classList.add("desactivar");

        const video = document.getElementById("video");

        if (video.paused) {
            return;
        } else {

            return video.pause();
        }
    });
});





