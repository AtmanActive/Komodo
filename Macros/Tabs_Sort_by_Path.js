/**
 * Sort open tabs by full path, case insensitive.
 *
 * Type:  On Demand
 *
 * @source        https://github.com/AtmanActive/Komodo/tree/master/Macros
 * @forum         https://community.activestate.com/forum/sorting-tabs
 * @author        toddw & r.izumita & nathan & AtmanActive
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
		if ( childNodes[ j ].tooltipText.toLowerCase() < childNodes[ j - 1 ].tooltipText.toLowerCase() )
		{
			tabbox._tabs.insertBefore( childNodes[ j ], childNodes[ j - 1 ] );
		}
	}
}
