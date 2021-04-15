$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
  });


$(document).ready(function () {
	InitSummernote("#myModalEditor #ModalContent");
});



function InitSummernote(summernoteId) {

	var initH = $(".modal-dialog>.modal-content>.modal-body").height();

	var $note = $(summernoteId).summernote({
		addclass: {
			debug: false,
			// will need to build this from the file and admin style set
			classTags: [{ title: "Button", "value": "btn btn-success" }, "jumbotron", "lead", "img-rounded", "img-circle", "img-responsive", "btn", "btn btn-success", "btn btn-danger", "text-muted", "text-primary", "text-warning", "text-danger", "text-success", "table-bordered", "table-responsive", "alert", "alert alert-success", "alert alert-info", "alert alert-warning", "alert alert-danger", "visible-sm", "hidden-xs", "hidden-md", "hidden-lg", "hidden-print"]
		},
		height: null,		// set editor height
		minHeight: null,	// set minimum height of editor
		maxHeight: null,	// set maximum height of editor
		focus: true,		// set focus to editable area after initializing summernote
		placeholder: "(Required)",
		disableDragAndDrop: true,
		toolbar: [
		  // [groupName, [list of button]]
		  ['style', ['bold', 'italic', 'underline', /*'addclass', */ 'clear']], //to enable addClass plugin
		  //['font', ['strikethrough', 'superscript', 'subscript']],
		  //['fontsize', ['fontsize']],
		  //['color', ['color']],
		  //['para', ['ul', 'ol', 'paragraph']],
		  //['height', ['height']]
		  ['misc', ['fullscreen', 'codeview']],
		],
		callbacks: {
			onPaste: function (e) {
				// convert to text and paste
				console.log('summernote onPaste');
				var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
				e.preventDefault();
				document.execCommand('insertText', false, bufferText);
			}
		}


	});


	var context = $note.data('summernote');

	return $note;
}

$('.owl-carousel').owlCarousel({
	center: true,
	loop: true,
	nav: true,
	items: 3,
	navText: ['<i class="promo-nav promo-prev fas fa-chevron-left"></i>','<i class="promo-nav promo-next fas fa-chevron-right"></i>'],
	responsive:{
	  0:{
		items: 2,
	  },
	  768:{
		items: 2.3,
	  },
	  990:{
		items: 2.6,
	  }
	},
	onInitialized: coverFlowEfx,
	onTranslate: coverFlowEfx,
  });
  
  function coverFlowEfx(e){
	if ($('.owl-dots')) {
	  $('.owl-dots').remove();
	}
	idx = e.item.index;
	$('.owl-item.big').removeClass('big');
	$('.owl-item.medium').removeClass('medium');
	$('.owl-item.mdright').removeClass('mdright');
	$('.owl-item.mdleft').removeClass('mdleft');
	$('.owl-item.smallRight').removeClass('smallRight');
	$('.owl-item.smallLeft').removeClass('smallLeft');
	$('.owl-item').eq(idx -1).addClass('medium mdleft');
	$('.owl-item').eq(idx).addClass('big');
	$('.owl-item').eq(idx + 1).addClass('medium mdright');
	$('.owl-item').eq(idx + 2).addClass('smallRight');
	$('.owl-item').eq(idx - 2).addClass('smallLeft');
  }
  
  wow = new WOW();
  
  wow.init();