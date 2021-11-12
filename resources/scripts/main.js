// JavaScript Document

 $(document).ready(function(){
	 
	$('.navbar-nav').localScroll({
		duration:800
		});
		
	/*$('.navbar-nav a').click(function(){
		var secao = $(this).attr('href').replace('#', '');
		var nome_secao = $(this).html()
		$.pushPath(2, "#!"+secao, ".: Uma história das movimentações políticas da PUC-SP :. - "+nome_secao);
	})*/
	
    $('#home').parallax("50%", -0.4);
    $('#episodios').parallax("50%", -0.5);
	$('.titulo_episodios').parallax("50%", -0.1);
    $('#bg_quemsomos').parallax("50%", 0.3);
    $('#bg_contato').parallax("50%", 0.3);	
	
	
	// BOX EPISÓDIOS //
	$("#boxs_episodios li a").each(function(){
		var img_url	=	$(this).find('img').attr('src')
		$(this).parent().css('background-image', 'url('+img_url+')')
		//
		$(this).find('img').remove()
		//
		// FANCYBOX //
		$(this).fancybox({
			type: 'ajax',
			closeEffect:'elastic',
			beforeClose: function(){
				//$.pushPath(2, '#!episodios', ".: Uma história das movimentações políticas da PUC-SP :. - Episódios");
			}
		});
		
		/*$(this).click(function(){
			var pagina		= $(this).attr('href').replace('paginas_episodios/', '').replace('.html', '');
			var nome_secao	= $(this).find('p').html();
			$.pushPath(2,"#!episodios/"+pagina, ".: Uma história das movimentações políticas da PUC-SP :. - "+nome_secao);
		})*/
	})

	$('#barra_footer a').fancybox({
		type: 'ajax',
		closeEffect:'elastic',
		beforeClose: function(){
				//$.pushPath(2, '#!episodios', ".: Uma história das movimentações políticas da PUC-SP :. - Episódios");
		}
	});
	
	
	// PAGINACAO
	 $("div.holder").jPages({
    	containerID : "boxs_episodios",
		previous : "←",
     	next : "→",
		perPage      : 6,
        startPage    : 1,
        startRange   : 1,
        midRange     : 3,
        endRange     : 1,
		animation: "flipInY"
 	 });
	
	
	
	// I RESIZE VIDEOS //
	
	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");
	    	
	$allVideos.each(function() {
	
	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');
	
	});
	
	$(window).resize(function() {
	
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	  
	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));
	  
	  });
	
	}).resize();
	
	$('#form_contato').validate({
		rules:{
			nome:{
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			mensagem: {
				required: true
			}
		},
		messages:{
			nome:{
				required: "O campo nome é obrigatorio.",
				minlength: "O campo nome deve conter no mínimo 3 caracteres."
			},
			email: {
				required: "O campo email é obrigatorio.",
				email: "O campo email deve conter um email válido."
			},
			mensagem: {
				required: "O campo mensagem é obrigatorio."
			}
		}
    });
	
	$( "a.bto_eviar" ).click(function() {
  		$( "#form_contato" ).submit();
		return false;
	});
	
	alterarBackground()
})

function alterarBackground()
{
	// Home
	bg_home_url = "resources/imagens/bgs/"+(Math.floor(Math.random()*6)+1)+".jpg";
	$( "#home" ).css('background-image', 'url('+bg_home_url+')')
	// Episódios
	bg_episodios_url = "resources/imagens/bgs/"+(Math.floor(Math.random()*7)+1)+"_episodios.jpg";
	$( "#episodios" ).css('background-image', 'url('+bg_episodios_url+')')
}

Galleria.loadTheme('resources/scripts/galleria/galleria.classic.min.js');