$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleCLass('fa-times');
        $('header').toggleCLass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});