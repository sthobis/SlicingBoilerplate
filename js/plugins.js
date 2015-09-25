// init Namespace
var MyNamespace = MyNamespace || {};

// module namespace
MyNamespace.UIInteraction = function( customSetting ) {

	// overwrite default settings
	var settings = $.extend( {

	}, 
	customSetting || {});

    this.init = function() {

    	// init Menu Dropdown component
    	initMenuDropdown();
    }

    // dropdown click handler
    var dropdownClick = function() {
    	// function logic	
    }

    // Component responsible for menu dropdown
    var initMenuDropdown = function() {
    	$("li.has-dropdown a").click(dropdownClick);
    }

}