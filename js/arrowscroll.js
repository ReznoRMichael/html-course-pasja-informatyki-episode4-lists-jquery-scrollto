jQuery(function($)
{
    // reset scroll
    $.scrollTo(0);
    $('.scrollup').click(function(e) { e.preventDefault(); /* anti-double in Chrome */ $.scrollTo($('body'), 700); });

    $('#link1').click(function(){ $.scrollTo($('#crt-budowa'), 500); });
    $('#link2').click(function(){ $.scrollTo($('#crt-zasada'), 500); });
    $('#link3').click(function(){ $.scrollTo($('#crt-maski'), 500); });
    $('#link4').click(function(){ $.scrollTo($('#crt-wady-zalety'), 500); });
    $('#link5').click(function(){ $.scrollTo($('#crt-dobor-parametrow'), 500); });

    $('#link6').click(function(){ $.scrollTo($('#lcd-budowa'), 500); });
    $('#link7').click(function(){ $.scrollTo($('#lcd-zasada'), 500); });
    $('#link8').click(function(){ $.scrollTo($('#lcd-matryce'), 500); });
    $('#link9').click(function(){ $.scrollTo($('#lcd-wady-zalety'), 500); });
    $('#link10').click(function(){ $.scrollTo($('#lcd-dobor-parametrow'), 500); });

    $('#link11').click(function(){ $.scrollTo($('#dsub'), 500); });
    $('#link12').click(function(){ $.scrollTo($('#dvi'), 500); });
    $('#link13').click(function(){ $.scrollTo($('#displayport'), 500); });

    $('#link14').click(function(){ $.scrollTo($('#przyszlosc'), 500); });
    $('#link15').click(function(){ $.scrollTo($('#zrodla'), 500); });

    $('#link-c1').click(function(){ $.scrollTo($('#crt-budowa'), 500); });
    $('#link-c2').click(function(){ $.scrollTo($('#lcd-budowa'), 500); });
    $('#link-c3').click(function(){ $.scrollTo($('#dsub'), 500); });
    $('#link-c4').click(function(){ $.scrollTo($('#przyszlosc'), 500); });
}
);

// show scroll
$(window).scroll(function()
{
    if ( $(this).scrollTop()>300 ) $('.scrollup').fadeIn(200);
    else $('.scrollup').fadeOut(200);
}
);