$(document).ready(function(){
    setTimeout(function(){$('body').addClass('loaded');},2000);});

$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    var top = $(window).width() > 767 ? '35px' : '50px';
    if(scroll < 35){
        // $(".header").removeClass('mt-0').addClass("mt-3");
        $(".header").css('top', top);
        $('.sub-menu').css('top', '115px');
        // top: 115px;
        // $('.top-bar').show();
    }
    else {
        // $(".header").removeClass("mt-3").addClass('mt-0');
        $(".header").css('top', '0');
        $('.sub-menu').css('top', '80px');
        // $('.top-bar').hide();
    }
    // var be = $(".boxnew");
    // var be_top = be.offset().top;
    // if(scroll > be_top) {
    //     be.addClass('fixed-be');
    // } else {
    //     be.removeClass("fixed-be");
    // }

    if ($(window).width() > 800) {
      if ($(window).scrollTop() > 450) {
        $(".boxnew").addClass("fixed-be");
        // $(".boxnew").show();
      } else if ($(window).scrollTop() > -450) {
        $(".boxnew").removeClass("fixed-be");
        // $(".boxnew").hide();
      }
    }
});


$(function() {
        $('#eZ_chkin, #eZ_chkout').datepicker({
            dateFormat: 'dd-mm-yy',
            minDate: new Date()
        });

        $('#eZ_chkin').datepicker('option', {
            onSelect: function(selectedDate) {
                var nxt = $(this).datepicker('getDate');
                nxt.setDate(nxt.getDate() + 1);
                $('#eZ_chkout').datepicker('option', 'minDate', nxt);
            }
        });

        $('#eZ_chkout').datepicker('option', {
            onSelect: function() {
                
            }
        });

        if($('#eZ_chkin').length) {
            $('#eZ_chkin').datepicker('setDate', new Date());
            var nxt = $('#eZ_chkin').datepicker('getDate');
            nxt.setDate(nxt.getDate() + 1);
            $('#eZ_chkout').datepicker('option', 'minDate', nxt);
            $('#eZ_chkout').datepicker('setDate', nxt);
        }


        $('.tabs').on('click', function() {
            if($(this).hasClass('active'))
              return false;
            
            $(".tab2").removeClass('active');
            $(".tab-content").hide();
            $('.tabs').removeClass('active');
            $(this).addClass('active');
            $('.tabBox').hide();
            $($(this).data('target')).slideDown();
        });
        $('.tab2').on('click', function() {
            $('.tab2').removeClass('active');
            $(this).addClass('active');
            $(".tab-content").hide();
            $($(this).data('tab')).fadeIn();
        });

    });

