(function(){
  "use strict";

/*efeito surgir */
  window.sr = ScrollReveal();
  sr.reveal('.bloco-skills1', { duration: 2000 }, 50);

  sr.reveal('.bloco-portfolio', { duration: 2000 }, 50);

  sr.reveal('.bloco-curiosidades', { duration: 2000 }, 50);

/*Adicionando class no  para ficar borrado ao abrir o menu mobile */
  jQuery('input#menu').on('change', function () {
    var isChecked = jQuery(this).is(':checked');
    console.log('isChecked: ', isChecked);
    if (isChecked) {
        jQuery('body').addClass('menu-aberto');
    } else {
        jQuery('body').removeClass('menu-aberto');
    }
  });

/*Fazendo topo ficar visível ao rolar a página*/
  var $ = jQuery;
  jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() < 200) {
      jQuery('.topo').addClass('transparent');
    } else {
      jQuery('.topo').removeClass('transparent');
    }
  }).trigger('scroll');

/*Digitando texto automatico banner topo*/
  var textoTitulo = jQuery('.texto-banner .titulo').data('texto');
  var typed = new Typed('.texto-banner .titulo', {
    strings: [textoTitulo],
    typeSpeed: 50,
    startDelay: 750,
  });

  var textoTitulo = jQuery('.texto-banner .subtitulo').data('texto');
  var typed = new Typed('.texto-banner .subtitulo', {
    strings: [textoTitulo],
    typeSpeed: 50,
    startDelay: 2250,
  });

  /*Contador seção skills */
  jQuery(window).scroll(function () {
    if (jQuery('.grafico .contador.inativo').length > 0) {
      var PosicaoGraficoSkills = jQuery('.grafico').offset().top;
      PosicaoGraficoSkills = PosicaoGraficoSkills - (jQuery(window).height() / 2);
      if (jQuery(window).scrollTop() > PosicaoGraficoSkills) {
        jQuery('.grafico .contador.inativo').removeClass('inativo');
        jQuery('.counter').counterUp({ delay: 10, time: 1000 });
      }
    }
  });

  jQuery(document).ready(function () {
		jQuery(document).on("scroll", onScroll);
 
		jQuery('.menu a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			jQuery(document).off("scroll");
 
			jQuery('.menu a').each(function () {
				jQuery(this).removeClass('active');
			})
			jQuery(this).addClass('active');
 
			var target = this.hash;
			var jQuerytarget = jQuery(target);
			jQuery('html, body').stop().animate({
				'scrollTop': jQuerytarget.offset().top-40
			}, 500, 'swing', function () {
				// window.location.hash = target;
				jQuery(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
    var scrollPosition = jQuery(document).scrollTop();
    var headerHeight = jQuery('.topo').height() + 20;
		jQuery('.menu a').each(function () {
      var currentLink = jQuery(this);
      var href = currentLink.attr("href");
      if (href.indexOf('#') == 0) {
        var refElement = jQuery(href);
        var elementPosition = refElement.offset().top - headerHeight;

        if (elementPosition <= scrollPosition && elementPosition + refElement.height() > scrollPosition) {
          jQuery('.menu a').removeClass("active");
          currentLink.addClass("active");
        }
        else{
          currentLink.removeClass("active");
        }
      }
		});
	}

})(); 