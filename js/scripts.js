// ----------------------------------------
// Heroic: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    var navigationHeight = $('.bk-nav').outerHeight();
    	    var languageAndNavigationHeight = languageSelectorHeight+navigationHeight;
    	    
			$('.bk-nav').css('top', languageSelectorHeight+'px');
			$('.bk-nav').css('margin-top', '0');
			$('.bk-header').css('margin-top', languageAndNavigationHeight+'px');
    	}
	}
	
	languageSelector();

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
    $(document).bind("DOMSubtreeModified",function(){
		languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });
});