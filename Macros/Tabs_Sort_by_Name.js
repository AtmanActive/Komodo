/**
 * Sort open tabs by tab name, case insensitive.
 * This functionality is already present in current Komodo v8.5,
 * kept here for educational purposes.
 *
 * Type:  On Demand
 *
 * @source        https://github.com/AtmanActive/Komodo/tree/master/Macros
 * @forum         https://community.activestate.com/forum/sorting-tabs
 * @author        toddw & r.izumita
 * @version       0.1
 */

var view = ko.views.manager.currentView;
var tabbox = view.parentNode;
while ( tabbox && tabbox.nodeName != "tabbox" && tabbox.nodeName != "xul:tabbox" )
{
	tabbox = tabbox.parentNode;
}

var index = 1;
var childNodes = tabbox._tabs.childNodes;
for ( var i = 0;  i < childNodes.length; i++ )
{
	for ( var j = childNodes.length - 1; j > i; j-- )
	{
		if ( childNodes[ j ].label.toLowerCase() < childNodes[ j - 1 ].label.toLowerCase() )
		{
			tabbox._tabs.insertBefore( childNodes[ j ], childNodes[ j - 1 ] );
		}
	}
}
