// Courier Send
//Create Name ID
var getLoginName = app.trustedFunction(
function () {
    app.beginPriv();
    return identity.loginName;
    app.EndPriv();
});

var getUserName = app.trustedFunction(
function () {
         //Get and return the user's name
        app.beginPriv();
        return identity.name;
        app.EndPriv();
});

//Create Date and Timestamp for file names 
function myDateString(){
    return util.printd("yy.mm.dd-H.MM.ss ddd", new Date()).toUpperCase();
}

var CourierSend = app.trustedFunction(function(){

    if (this.getField("DATERow1") === null){
        var CourierAlert = app.alert ("You are using the incorrect form for this button \n\n" + "Please complete the Courier Log from the Blank Forms button \n\n" + "Would you like to use the correct file now?",2,2);
        if (CourierAlert == 4){
            app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Courier Log.pdf");
            };
    } else {
        // sets up app alert to save file
        var CourierAlert = app.alert("Submit form to Austin Dispatch Folder? \n\n" + "T:\\SHARED\\Austin Daily Courier After Hours Pickup Log",2,2);

        if (CourierAlert == 4){
            app.beginPriv();
            this.saveAs("/uscplatxdfs001p/CLIENT/SHARED/Austin Daily Courier After Hours Pickup Log/" + myDateString() +" Courier Log " + getUserName() +" .pdf");
            app.endPriv();
            this.closeDoc(true);
        }
    }
});

app.addToolButton({
    cName: "Test2Btn",
    cLabel: "Test2 Button",
//    oIcon: BlankFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "CourierSend();"
});