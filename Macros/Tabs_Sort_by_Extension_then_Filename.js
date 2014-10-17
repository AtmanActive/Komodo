/**
 * Sort open tabs by tab extension, then file name, case insensitive.
 *
 * Type:  On Demand
 *
 * @source        https://github.com/AtmanActive/Komodo/tree/master/Macros
 * @forum         https://community.activestate.com/forum/sorting-tabs
 * @author        toddw & r.izumita & nathan
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

for ( var i = 0;  i < childNodes.length; i++ )
{
	for ( var j = childNodes.length - 1; j > i; j-- )
	{
		sExt1 = childNodes[ j ].label.replace( /.*\./, '' );
		sExt2 = childNodes[ j - 1 ].label.replace( /.*\./, '' );
		if ( sExt1.toLowerCase() < sExt2.toLowerCase() )
		{
			tabbox._tabs.insertBefore( childNodes[ j ], childNodes[ j - 1 ] );
		}
	}
}
