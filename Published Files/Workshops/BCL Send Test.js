//BCL Send Test

//THE SECTION BELOW WILL BE ALL THE COMMON FUNCTIONS THAT ALL FILE TYPES WILL REQUIRE 
//Returns users login intiails
var getLoginName = app.trustedFunction(
function () {
    app.beginPriv();
    return identity.loginName;
    app.EndPriv();
});
    
//Create Random number for pdf files without the field Original Accession from AO form
function myIdString(){
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
    
//Create Date and Timestamp for file names 
function myDateString(){
    return util.printd("mm.dd-H.MM.ss", new Date()).toUpperCase();
}


var BCLTest = app.trustedFunction(function(){

    // Sets up app alert to send file
    var nBCLTest = app.alert("Is this a Client Error No Charge Request?",1,2);

    if (nBCLTest == 4){
        //    setting all the variables 
        var BCLAccession = this.getField("Text1").value;
        var BCLAcctNum = this.getField("Client Number").value;
        var BCLEmail = "jcruz@cpllabs.com; swylie@cpllabs.com; DISTAUSTINCSLEAD@cpllabs.com";
        var BCLSubLine = "No Charge BCL for " + BCLAccession + " Acct " + BCLAcctNum;

        //    emailing the doc
        this.mailDoc({bUI: true, cTo: BCLEmail, cSubject: BCLSubLine});

        // This saves it to folder
        app.beginPriv();
        this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/BCLs/Emailed/" + this.getField("Text1").value +" No Charge BCL " + getLoginName() +" "+ myDateString()+".pdf");
        app.endPriv();
        this.closeDoc(true);
    } else {
        var mBCLTest = app.alert("Submit BCL to folder \n\n" + "\\\\uscplatxdfs002p\\ePHI\\Customer Service\\BCLs",3,2);

        if (mBCLTest == 4){
            // This saves it to folder
            app.beginPriv();
            this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/BCLs/" + this.getField("Text1").value +" BCL " + getLoginName() +" "+ myDateString()+".pdf");
            app.endPriv();
            this.closeDoc(true);
        }
    }

});

app.addToolButton({
    cName: "Test3Btn",
    cLabel: "Test3 Button",
//    oIcon: BlankFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "BCLTest();"
});