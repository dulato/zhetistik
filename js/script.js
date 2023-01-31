// Меню бургер открыть и закрыть при клике
$(document).ready(function() {
    $('.menu_icon, .menu_link, .icon_item').click(function(event){
        $('.menu_icon, .header_burger_menu').toggleClass('_active');
    });
});

// Адаптивное меню

$(window).resize(function (event) {
    adaptive_function();
});
function adaptive_header(w, h) {
    var headerMenu=$('.header_burger_menu');
    // var headerLang=$('.header_language');
    // if (w<992) {
    //     if(!headerLang.hasClass('done')){
    //         headerLang.addClass('done').appendTo(headerMenu);
    //     }
    // } else {
    //     if(headerLang.hasClass('done')) {
    //         headerLang.removeClass('done').prependTo($('.head_ln'));
    //     }
    // }

    if (w<993) {
        if(!$('.menu_header_1').hasClass('done')){
            $('.menu_header_1').addClass('done').appendTo(headerMenu);
        }
    } else {
        if($('.menu_header_1').hasClass('done')) {
            $('.menu_header_1').removeClass('done').prependTo($('.menu_part_1'));
        }
    }

    if (w<993) {
        if(!$('.menu_header_2').hasClass('done')){
            $('.menu_header_2').addClass('done').appendTo(headerMenu);
        }
    } else {
        if($('.menu_header_2').hasClass('done')) {
            $('.menu_header_2').removeClass('done').prependTo($('.menu_part_2'));
        }
    }

    if (w<993) {
        if(!$('.header_icons').hasClass('done')){
            $('.header_icons').addClass('done').appendTo(headerMenu);
        }
    } else {
        if($('.header_icons').hasClass('done')) {
            $('.header_icons').removeClass('done').prependTo($('.icons_head'));
        }
    }
    if (w<1061) {
        $('.double_1_part_2_title').appendTo($('.sixth_block_content_title'));
    } else {
            $('.double_1_part_2_title').prependTo($('.double_1_part_2'));
    }
    if (w<681) {
        $('.footer_list').appendTo($('.new_footer'));
    } else {
            $('.footer_list').prependTo($('.footer_menu'));
    }
}

function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();


// Отправка номер тел

$(document).ready(function () {
    var element = document.getElementById('number');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
  
    var mask = IMask(element, maskOptions);
	$('.body_request_content').submit(function(e){
		e.preventDefault();

    // $('.body_request_content').on('submit', function(event) {
    //   event.preventDefault();
  
      if($("#number").val().length < 18){
        console.log($("#number").val().length)
        // alert("Пожалуйста, заполните номер правильно!")
  
        $(".label_notice").css('display','block')        
        return;
      }
	  else{
		// event.preventDefault();
		let th = $(this);

		$.ajax({
			type: "POST",
			url: "index.php",
			data: "data",
			dataType: th.serialize(),
			success: function () {
				$('.popup_result').fadeIn();
				
				$('.popup-close').click(function() {
					$(this).parents('.popup_result').fadeOut();
					return false;
				});		
			
				$(document).keydown(function(e) {
					if (e.keyCode === 27) {
						e.stopPropagation();
						$('.popup_result').fadeOut();
					}
				});
				
				$('.popup_result').click(function(e) {
					if ($(e.target).closest('.result_body').length == 0) {
						$(this).fadeOut();		
					}
				});
			}
		});
	  }
    //   this.submit()
    });
  });


$(document).ready(function () {
    var elementi = document.getElementById('tel');
    var maskOptionsi = {
      mask: '+{7} (000) 000-00-00'
    };
  
    var mask = IMask(elementi, maskOptionsi);
	$('.popup_form').submit(function(e){
		e.preventDefault();

  
      if($("#tel").val().length < 18){
        console.log($("#tel").val().length)  
        $(".label_notice").css('display','block')        
        return;
      }
	  else{
		// event.preventDefault();
		let th = $(this);

		$.ajax({
			type: "POST",
			url: "index.php",
			data: "data",
			dataType: th.serialize(),
			success: function () {
				$('.popup_result').fadeIn();
				
				$('.popup-close').click(function() {
					$(this).parents('.popup_result').fadeOut();
					return false;
				});		
			
				$(document).keydown(function(e) {
					if (e.keyCode === 27) {
						e.stopPropagation();
						$('.popup_result').fadeOut();
					}
				});
				
				$('.popup_result').click(function(e) {
					if ($(e.target).closest('.result_body').length == 0) {
						$(this).fadeOut();		
					}
				});
			}
		});
	  }
    });
  });




// Модельное окно

$(document).ready(function($) {
	$('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();		
		}
	});

	// $('.popup_form').submit(function(e){
	// 	e.preventDefault();
	// 	let th = $(this);

	// 	$.ajax({
	// 		type: "POST",
	// 		url: "index.php",
	// 		data: "data",
	// 		dataType: th.serialize(),
	// 		success: function () {
	// 			$('.popup-fade').fadeOut();
	// 			$('.popup_result').fadeIn();
				
	// 			$('.popup-close').click(function() {
	// 				$(this).parents('.popup_result').fadeOut();
	// 				return false;
	// 			});		
			
	// 			$(document).keydown(function(e) {
	// 				if (e.keyCode === 27) {
	// 					e.stopPropagation();
	// 					$('.popup_result').fadeOut();
	// 				}
	// 			});
				
	// 			$('.popup_result').click(function(e) {
	// 				if ($(e.target).closest('.result_body').length == 0) {
	// 					$(this).fadeOut();		
	// 				}
	// 			});
	// 		}
	// 	});
	// });
});

// $(document).ready(function () {
// 	$('.body_request_content').submit(function(e){
// 		e.preventDefault();
// 		let th = $(this);
	
// 		$.ajax({
// 			type: "POST",
// 			url: "index.php",
// 			data: "data",
// 			dataType: th.serialize(),
// 			success: function () {
// 				$('.popup_result').fadeIn();
				
// 				$('.popup-close').click(function() {
// 					$(this).parents('.popup_result').fadeOut();
// 					return false;
// 				});		
			
// 				$(document).keydown(function(e) {
// 					if (e.keyCode === 27) {
// 						e.stopPropagation();
// 						$('.popup_result').fadeOut();
// 					}
// 				});
				
// 				$('.popup_result').click(function(e) {
// 					if ($(e.target).closest('.result_body').length == 0) {
// 						$(this).fadeOut();		
// 					}
// 				});
// 			}
// 		});
// 	});
// });




// dfsafafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

// var modal = document.getElementById("myModal");

// var btn = document.querySelector(".myBtn, .myBtn1, .myBtn2, .myBtn3, .myBtn4");

// var span = document.getElementsByClassName("close")[0];


$(document).ready(function($) {
	$('.myBtn').click(function() {
		$('.modal').fadeIn();
		return false;
	});	
	
	$('.close').click(function() {
		$(this).parents('.modal').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').fadeOut();
		}
	});
	
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal-content').length == 0) {
			$(this).fadeOut();					
		}
	});
});

$(document).ready(function($) {
	$('.myBtn1').click(function() {
		$('.modal1').fadeIn();
		return false;
	});	
	
	$('.close1').click(function() {
		$(this).parents('.modal1').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal1').fadeOut();
		}
	});
	
	$('.modal1').click(function(e) {
		if ($(e.target).closest('.modal-content1').length == 0) {
			$(this).fadeOut();					
		}
	});
});

$(document).ready(function($) {
	$('.myBtn2').click(function() {
		$('.modal2').fadeIn();
		return false;
	});	
	
	$('.close2').click(function() {
		$(this).parents('.modal2').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal2').fadeOut();
		}
	});
	
	$('.modal2').click(function(e) {
		if ($(e.target).closest('.modal-content2').length == 0) {
			$(this).fadeOut();					
		}
	});
});

$(document).ready(function($) {
	$('.myBtn3').click(function() {
		$('.modal3').fadeIn();
		return false;
	});	
	
	$('.close3').click(function() {
		$(this).parents('.modal3').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal3').fadeOut();
		}
	});
	
	$('.modal3').click(function(e) {
		if ($(e.target).closest('.modal-content3').length == 0) {
			$(this).fadeOut();					
		}
	});
});

$(document).ready(function($) {
	$('.myBtn4').click(function() {
		$('.modal4').fadeIn();
		return false;
	});	
	
	$('.close4').click(function() {
		$(this).parents('.modal4').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal4').fadeOut();
		}
	});
	
	$('.modal4').click(function(e) {
		if ($(e.target).closest('.modal-content4').length == 0) {
			$(this).fadeOut();					
		}
	});
});


// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// dfsafafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff



// swiper

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//   });


// scroll 

$(document).ready(function(){
    $(".menu_link, .btn_submit_3, .btn_submit_1, .footer_link").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });
  



  
  //   kasipker_info_text._active_
  
  $(document).ready(function($) {
    $(".kasipker_info_title_1").on('click', function(event) {
        $('.kasipker_info_text_1, .kasipker_info_title_1').toggleClass('_active_');
    });
    $(".kasipker_info_title_2").on('click', function(event) {
        $('.kasipker_info_text_2, .kasipker_info_title_2').toggleClass('_active_');
    });
    $(".kasipker_info_title_3").on('click', function(event) {
        $('.kasipker_info_text_3, .kasipker_info_title_3').toggleClass('_active_');
    });
    $(".kasipker_info_title_4").on('click', function(event) {
        $('.kasipker_info_text_4, .kasipker_info_title_4').toggleClass('_active_');
    });
    $(".kasipker_info_title_5").on('click', function(event) {
        $('.kasipker_info_text_5, .kasipker_info_title_5').toggleClass('_active_');
    });
});


