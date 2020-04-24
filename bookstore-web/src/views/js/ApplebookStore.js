

function httpGetAsync(theUrl, callback)
{
    console.log(theUrl);
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function() { 
    //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    //         callback(xmlHttp.responseText);
    // }
    // xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    // xmlHttp.send(null);
}

//https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/
function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}


var gEntreeCount = 0;
// returns a number that represents the sum of all the selected menu
// item prices.
function calculateBill(idMenuTable) {
	var fBillTotal = 0.0;
	var i=0;
// find the table tag
	var oTable = document.getElementById(idMenuTable);
	
// go through the table and add up the prices of all
// the selected items. The code takes advantage of the 
// fact that each checkbox has a corresponding row in
// the table, and the only INPUT tags are the checkboxes.
	var aCBTags = oTable.getElementsByTagName('INPUT');
	for (i=0; i < aCBTags.length; i++) {
// is this menu item selected? it is if the checkbox is checked
		if (aCBTags[i].checked) {
// get the checkbox' parent table row
			var oTR = getParentTag(aCBTags[i],'TR');
			
// retrieve the price from the price column, which is the third column in the table
			var oTDPrice = oTR.getElementsByTagName('TD')[7]; 
//take price from colum 7 TB column 
// the first child text node of the column contains the price
			fBillTotal += parseFloat(oTDPrice.firstChild.data);
		};
	};
// return the price as a decimal number with 2 decimal places
	return Math.round(fBillTotal*100.0)/100.0;
};

// This function either turns on or off the row highlighting for vegetarian
// items (depending on the value of bShowVeg)
function HighlightHorror(idTable, bShowVeg) { 
//bshow is the check box 
// if bShowVeg is true, then we're highlighting vegetarian
//	meals, otherwise we're unhighlighting them.
	var i=0;
	var oTable = document.getElementById(idTable);
	var oTBODY = oTable.getElementsByTagName('TBODY')[0];
	var aTRs = oTBODY.getElementsByTagName('TR');
// walk through each of the table rows and see if it has a 
// "vegetarian" attribute on it.
	for (i=0; i < aTRs.length; i++) {
		if (aTRs[i].getAttribute('Horror') && aTRs[i].getAttribute('Horror') == "true") {
			if (bShowVeg){
				aTRs[i].style.backgroundColor = "lightGreen";
			} else {
				aTRs[i].style.backgroundColor = "";
			};
		};
	};
};

// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
	var oParent = oNode.parentNode;
	while (oParent) {
		if (oParent.nodeName == sParentType)
			return oParent;
		oParent = oParent.parentNode;
	};
	return oParent;
};
