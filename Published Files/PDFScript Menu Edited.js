// PDFScript Menu Edited
function PrintArray(lstMenu,rptMenu, oProg)
{
	var nMenuCnt = 0;
	rptMenu.indent();
	for(var i=0;i<lstMenu.length;i++)
	{
		 if(oProg != null)
		 {
				oProg.value++;
				oProg.text = "Menu" +  lstMenu[i].cName;
				if(oProg.cancelled) return nMenuCnt;
		 }

		 if((lstMenu[i].oChildren != null) && (lstMenu[i].oChildren.length > 0))
		 {
				rptMenu.writeText( lstMenu[i].cName);
				nMenuCnt += PrintArray(lstMenu[i].oChildren,rptMenu);
		 }
		 else
		 {
				rptMenu.writeText("** " +  lstMenu[i].cName);
				nMenuCnt++;
		 }
     PrintArray.nLineCnt++;
     if(PrintArray.nLineCnt >= 60)
     { 
      rptMenu.breakPage();
      PrintArray.nLineCnt = 0;
     }
  }
	rptMenu.outdent();
	return nMenuCnt;
}

function BuildList(rsltList, srcList)
{
   for(var i=0;i<srcList.length;i++)
   {
		 if((srcList[i].oChildren != null) && (srcList[i].oChildren.length > 0))
       rsltList.push( BuildList([srcList[i].cName], srcList[i].oChildren) );
     else
       rsltList.push(srcList[i].cName);
   }
   return rsltList;
}

function GetListItems(cType)
{
  var itemList = [];
  var theList = [];
  if(cType == "Menu")
  {
    itemList = ["Menu Item Names"];
    theList = app.listMenuItems();
  }
  else if(cType == "Toolbar")
  {
    itemList = ["Toolbar Button Names"];
    theList = app.listToolbarButtons();
  }
    
  BuildList(itemList, theList);

  return itemList;
}

var DoMenuItemReport = app.trustedFunction(function()
{
   app.beginPriv();

   var bUseMenu = true;
  // Use this to find the menu item names you need to run
   var cRtn = app.popUpMenu("Create Menu Item Report", GetListItems("Menu"), "Create Toobar Button Report", GetListItems("Toolbar"));

   if(cRtn)
   {
     if(cRtn == "Create Menu Item Report")
         lstMenu = app.listMenuItems();
     else if(cRtn == "Create Toobar Button Report")
     {
        lstMenu = app.listToolbarButtons();
        bUseMenu = false;
     }
     else
     {
        console.show();
        console.println("Selected Item: " + cRtn);
        return;
     }
   }
   else
     return;

   var rptMenu = new Report();

   rptMenu.size = 2;
   var strSubject = "Adobe\xAE Acrobat\xAE "+ app.viewerVersion + " " + app.viewerType;
   strSubject += bUseMenu?" Menu Items":"Toolbar Buttons";
   
   rptMenu.writeText(strSubject);
   rptMenu.writeText("Variation: " + app.viewerVariation);
   rptMenu.divide();
   rptMenu.size = 1;
   rptMenu.writeText(bUseMenu?"** - Menu Item":"** - Toolbar Button");
   rptMenu.writeText(" ");
   rptMenu.writeText(" ");

   var oProgMon = app.thermometer; // acquire a thermometer object
   oProgMon.duration = lstMenu.length;
   oProgMon.begin();
   PrintArray.nLineCnt = 8;
   var nMCnt = PrintArray(lstMenu,rptMenu,oProgMon);
   oProgMon.end();
   rptMenu.writeText(" ");
   rptMenu.writeText(" ");
   rptMenu.writeText("\n\n #of " + (bUseMenu?"Menu Items":"Toolbar Buttons") + " = " + nMCnt);

   var docMenu = rptMenu.open(bUseMenu?"AcrobatMenu": "AcrobatButtons");
   docMenu.info.title = bUseMenu?"Acrobat Menu Items":"Acrobat Toolbar Buttons";
   docMenu.info.subject = strSubject;
   docMenu.info.author = "Windjack Solutions";
   
});


var oIconAddArchiveFields = null;

oIconAddArchiveFields = {count: 0, width: 20, height: 20,
read: function(nBytes){return strData7AddArchiveFields.slice(this.count, this.count += nBytes);}};

var oButObjAddArchiveFields = 
{cName: "AddArchiveFields",
cExec: "DoMenuItemReport()",
cEnable: "event.rc = (app.doc != null)",
cMarked: "event.rc = false",
cTooltext: "Creates a report of all menu item or toolbar button names",
oIcon: oIconAddArchiveFields,
cLabel: "Menu List"};


try{app.removeToolButton("AddArchiveFields");}catch(e){}

try
{
    app.addToolButton(oButObjAddArchiveFields);
}catch(e){}

