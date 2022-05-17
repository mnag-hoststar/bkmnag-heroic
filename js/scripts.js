// ----------------------------------------
// Heroic: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
	
	// Changes to the header when a language selector is present.
	
	function languageSelector() {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    var navigationHeight = $('.bk-nav').outerHeight();
    	    if (languageSelectorHeight==undefined) {
    	        var languageAndNavigationHeight = navigationHeight;
    	    } else {
    	        var languageAndNavigationHeight = languageSelectorHeight+navigationHeight;
    	    }
    	    
			$('.bk-nav').css('top', languageSelectorHeight+'px');
			$('.bk-nav').css('margin-top', '0');
	    	$('.bk-header').css('margin-top', languageAndNavigationHeight+'px');
	}
	
	languageSelector();

    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	
    $(document).bind("DOMSubtreeModified",function(){
		languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });

	// Hides other submenus when a main menu point with a submenu is clicked.
    
	$(".extendednavigation > ul > li").click(function() {
		$(this).siblings(".extendednavigation > ul > li.folder").removeClass("folder-open");
	});

});