 $(document).ready(function () {
           <!--  tabs jQuery -->
		$('.menu li a').click(function () {
				$('.container').css('display','none');
				$('#'+$(this).attr('name')).css('display','block');
				$('nav li a').removeClass('active');
				$(this).addClass('active');
            });
			 $('.tabs .inner-li li a').click(function () {
				$('.show-image').css('display','none');
				$('#'+$(this).attr('name')).css('display','block');
				$('nav li a').removeClass('active');
				$(this).addClass('active');
            });
			$('.tabs .inner-li1 li a').click(function () {
				$('.show-image1').css('display','none');
				$('#'+$(this).attr('name')).css('display','block');
				$('nav li a').removeClass('active');
				$(this).addClass('active');
            });
			//custom radio button //	
		$('.checkbox-btn').click( function() {
			if($(this).hasClass('checked')) {
				$(this).removeClass('checked');
			}
			else {
				$(this).parent().find(".checkbox-btn").removeClass("checked");
				$(this).addClass('checked');
			}
		});

//------------------------------//
        });