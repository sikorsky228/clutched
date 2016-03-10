$(document).ready(function() {
	$ ('.js_comments').click(function () { 
		$('.js_comments').toggleClass('open');
	});
$('html')
    .on('click', '.js_comments', function(event){
            event.preventDefault()
        $('.wr_commentary').slideToggle();
        $('.fotcom_corr').slideToggle();
    })
    
});
