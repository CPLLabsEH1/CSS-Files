// Custom Icons
var ClinicalFormsIconData = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002f000000bb000000bb000000bb000000bb000000bb000000bb0000009700000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000ff00000088000000880000008800000088000000d2000000ff000000a4000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000ff000000000000000000000000000000000000009f000000cc000000c9000000980000000100000000000000000000000000000000000000000000000000000000000000000000000000000020000000ed000000000000000000000000000000000000009f000000e6000000ab000000ff000000810000000000000000000000bf000000ff000000ff000000ff000000ff000000ff000000ff000000920000003200000000000000000000000000000000000000600000009900000099000000cc000000bf0000000000000000000000bf000000a20000004400000044000000440000005b000000ff000000fb000000790000000000000000000000000000000000000000000000000000000000000080000000bf0000000000000000000000bf0000008000000000000000000000000000000020000000ff0000006d000000ec00000060000000000000003c0000007700000077000000770000001e00000080000000bf0000000000000000000000bf0000008000000000000000000000000000000020000000ff000000d9000000e7000000fa0000002a0000005e000000bb000000bb000000bb0000002f00000080000000bf0000000000000000000000bf000000800000000000000000000000000000000d000000660000006600000066000000ff00000040000000000000000000000000000000000000000000000080000000bf0000000000000000000000bf0000008000000000000000000000000000000000000000000000000000000000000000ff0000004000000080000000ff000000ff000000ff0000004000000080000000bf0000000000000000000000bf000000800000002f000000bb000000bb000000bb000000bb0000008c00000000000000ff00000040000000220000004400000044000000440000001100000080000000bf0000000000000000000000bf0000008000000022000000880000008800000088000000880000006600000000000000ff00000040000000000000000000000000000000000000000000000080000000bf0000000000000000000000bf0000008000000011000000440000004400000044000000440000003300000000000000ff000000400000002200000044000000440000004400000044000000a2000000bf0000000000000000000000bf0000008000000040000000ff000000ff000000ff000000ff000000bf00000000000000ff0000004000000080000000ff000000ff000000ff000000ff000000ff000000bf0000000000000000000000bf0000008000000000000000000000000000000000000000000000000000000000000000ff00000040000000000000000000000000000000000000000000000000000000000000000000000000000000bf0000008000000000000000000000000000000000000000000000000000000000000000ff00000040000000000000000000000000000000000000000000000000000000000000000000000000000000bf000000bb00000077000000770000007700000077000000770000007700000077000000ff000000400000000000000000000000000000000000000000000000000000000000000000000000000000008c000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb0000002f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

var ClinicalFormsIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return ClinicalFormsIconData.slice(this.count, this.count += nBytes);}};

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
    
// The fuction to send the files to appropriate locations and type.
var ConfirmAction = function(){
    //App alert to send to scanning
    var nConfirm = app.alert("Submit form to Scanning? \n\n" + "\\\\uscplatxdfs002p\\ePHI\\Scanning\\Change after Release & Repeats",2,2);

    if (nConfirm == 4){
        app.beginPriv();
        this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/CAR & Repeat Back Copies/" + this.getField("TheNumber").value +" Repeat " + getLoginName() +" " + myDateString()+".pdf");
        this.saveAs("/uscplatxdfs002p/ePHI/Scanning/Change after Release & Repeats/" + this.getField("TheNumber").value +" Repeat " + getLoginName() +" " + myDateString()+".tif","com.adobe.acrobat.tiff");
        app.endPriv();
        this.closeDoc(true);
    }

};

var SendBackAction = function(){
    //App alert to send to scanning
    var nSendBack = app.alert("Prepare form for CAR? \n\n" + "A copy of the repeat has been submitted to your Documents folder with the below name. \n\n" + this.getField("TheNumber").value +" Repeat " + getLoginName() +" " + myDateString()+".pdf",2,2);
    
    if (nSendBack == 4){
        app.beginPriv();
        this.saveAs("/US/USData/CompanyShare/Redirected/CPL/USERNAME/Documents/" + this.getField("TheNumber").value +" Repeat " + getLoginName() +" " + myDateString()+".pdf");
        app.endPriv();
        this.closeDoc(true);
    }

}

//THE SECTION BELOW WILL BE FOR THE UNIQUE FUNCTIONS THAT WILL BE ASSIGNED TO BUTTONS AND MENUS
//This is for the Repeat processes. 
//Repeat Done
var Repeat = app.trustedFunction(function()
{
// Dialog Definition
var oDlg ={

    DoDialog: function(){
        return app.execDialog(this)
    },

    // When you open the dialog box what is written there
    Acc: "",
    Called: "",
    Date: util.printd("mm/dd/yy", new Date()),
    Time: util.printd("hh:MM tt", new Date()),
    Caller: "",
    initialize: function(dialog)
    {
       var DiagInit = 
       {
        "Acce":this.Acc,
        "cald":this.Called,
        "date":this.Date,
        "time":this.Time,
        "calr":this.Caller,
       }; 
       dialog.load(DiagInit);
    },
    commit: function(dialog)
    {
       var data = dialog.store();
       this.Acc = data["Acce"];
       this.Called = data["cald"];
       this.Date = data["date"];
       this.Time = data["time"];
       this.Caller = data["calr"];
    },
    description:
    {
       name: "Client Contact",
       elements:
       [
          {
             type: "view",
             elements:
             [
                {
                   name: "Accession:",
                   type: "static_text",
                },
                {
                    item_id: "Acce",
                    type: "edit_text",
                    char_width: 15
                },
                {
                    name: "Called to:",
                    type: "static_text",
                },
                {
                    item_id: "cald",
                    type: "edit_text",
                    char_width: 15
                },
                {
                    name: "Date:",
                    type: "static_text",
                },
                {
                    item_id: "date",
                    type: "edit_text",
                    char_width: 15
                },
                {
                    name: "Time:",
                    type: "static_text",  
                },
                {
                    item_id: "time",
                    type: "edit_text",
                    char_width: 15
                },
                {
                    name: "Caller's Name:",
                    type: "static_text",
                },
                {
                    item_id: "calr",
                    type: "edit_text",
                    char_width: 15
                },
                {
                   type: "ok_cancel",
                },
             ]
          },
       ]
    }
 };

// activates the dialog box

// gets field coordinates to place box always top right corner
var aRect=this.getPageBox();
var width = aRect[2] - aRect[0];
var height = aRect[1] - aRect[3];
var AFdL = width - 165;
var AFdT = height - 52;
var AFdR = width - 42;
var AFdB = height - 72;
var BFdL = width - 165;
var BFdT = height - 17;
var BFdR = width - 42;
var BFdB = height - 57;

// creates fields for barcode and accession
for (var p=0; p<this.numPages; p++){
    var AFd = this.addField({cName:"TheNumber", cFieldType:"text", nPageNum:p, oCoords:[AFdL,AFdT,AFdR,AFdB]});
    AFd.readonly = true;
    AFd.textSize=0;
    AFd.textFont = "Helvetica-Bold";
    AFd.fillColor = color.white;
    AFd.alignment = "center";
    var BFd = this.addField({cName:"TheAccession", cFieldType:"text", nPageNum:p, oCoords:[BFdL,BFdT,BFdR,BFdB]});
    BFd.readonly = true;
    BFd.textSize=0;
    BFd.textFont = "Free3of9";
    BFd.fillColor = color.white;
}
// creates fields for all others
var CalledFd = this.addField({cName:"rCalled", cFieldType:"text", nPageNum:0, oCoords:[89,147,203,123]});
CalledFd.readonly = true;
CalledFd.textSize=0;
CalledFd.textFont = "Helvetica-Bold";

var DateFd = this.addField({cName:"rDate", cFieldType:"text", nPageNum:0, oCoords:[244,147,292,123]});
DateFd.readonly = true;
DateFd.textSize=0;
DateFd.textFont = "Helvetica-Bold";

var TimeFd = this.addField({cName:"rTime", cFieldType:"text", nPageNum:0, oCoords:[330,147,384,123]});
TimeFd.readonly = true;
TimeFd.textSize=0;
TimeFd.textFont = "Helvetica-Bold";

var CallerFd = this.addField({cName:"rCaller", cFieldType:"text", nPageNum:0, oCoords:[472,147,568,123]});
CallerFd.readonly = true;
CallerFd.textSize=0;
CallerFd.textFont = "Helvetica-Bold";

//Add confirmation button
// button cordinates will be bottom right but will use the left and right cords of the accession and barcode
var ButtonTop = height - 720;
var ButtonBot = height - 750;
var ScanLButton = width - 102;
var EHRButton = width - 152;
var EHLButton = width - 212;

// this will populate the fields
if("ok" == oDlg.DoDialog()){
    this.getField("rCalled").value = oDlg.Called;
    this.getField("rDate").value = oDlg.Date;
    this.getField("rTime").value = oDlg.Time;
    this.getField("rCaller").value = oDlg.Caller;
    this.getField("TheNumber").value = oDlg.Acc;
    if(this.getField("TheNumber").value = oDlg.Acc){
        this.getField("TheAccession").value = "*"+oDlg.Acc+"*";
    }else{
        this.getField("TheAccession").value = "";
    }

    // validation checks
    var myRegExp = /^([A-Za-z]{1}\d{7}|[A-Za-z]{2}\d{6})$/;
    var myTextInput = oDlg.Acc;
    event.rc = true;
    if ( !myRegExp.test(myTextInput) && oDlg.Acc.value != "")
    {
        app.alert("Invalid Accession");
        event.rc = false;
        this.removeField("TheAccession");
        this.removeField("TheNumber");	 
        this.removeField("rCalled");	
        this.removeField("rDate");	
        this.removeField("rTime");	
        this.removeField("rCaller");
        this.removeField("actionField");		   
    }
}else{
    this.removeField("TheAccession");
    this.removeField("TheNumber");	 
    this.removeField("rCalled");	
    this.removeField("rDate");	
    this.removeField("rTime");	
    this.removeField("rCaller");	
    this.removeField("actionField");	
}

    // button functions first is to send to scanning the second to send to documents folder
    var ButtonConfirm = this.addField({cName:"ScanAction", cFieldType:"button", nPageNum:0, oCoords:[ScanLButton,ButtonTop,BFdR,ButtonBot]});
    ButtonConfirm.setAction("MouseUp", "ConfirmAction()");
    ButtonConfirm.delay = false;
    ButtonConfirm.fillColor = color.green;
    ButtonConfirm.buttonSetCaption("Scanning");
    ButtonConfirm.borderStyle = border.s;
    ButtonConfirm.display = display.visible;
    ButtonConfirm.lineWidth = 1;
    ButtonConfirm.strokeColor = color.black;
    ButtonConfirm.highlight = highlight.o;
    ButtonConfirm.delay = false;

    var ButtonConfirm = this.addField({cName:"EHAction", cFieldType:"button", nPageNum:0, oCoords:[EHLButton,ButtonTop,EHRButton,ButtonBot]});
    ButtonConfirm.setAction("MouseUp", "SendBackAction()");
    ButtonConfirm.delay = false;
    ButtonConfirm.fillColor = color.yellow;
    ButtonConfirm.buttonSetCaption("Exception Handling");
    ButtonConfirm.borderStyle = border.s;
    ButtonConfirm.display = display.visible;
    ButtonConfirm.lineWidth = 1;
    ButtonConfirm.strokeColor = color.black;
    ButtonConfirm.highlight = highlight.o;
    ButtonConfirm.delay = false;

});

// Repeat Send
var RepeatSend = app.trustedFunction(function(){
    // setting all variables from grabing the accession and emails and the subject line
    var RepeatAccession = this.getField("Accession").value;
    var RepeatEmail = "AustinExceptionHandling@cpllabs.com";
    var RepeatSubLine = "Repeat " + RepeatAccession;

    // the act of emailing the document
    this.mailDoc({bUI: true, cTo: RepeatEmail, cSubject: RepeatSubLine});

    //Closes the file so not to be left open.
	this.closeDoc(true);
});

// Saving Maternal Recal Files
var MaternalRecal = app.trustedFunction(function(){
    if ( this.getField("Accession") === null){
        var mDlg ={

            DoDialog: function(){
                return app.execDialog(this)
            },
            Acc: "",
            initialize: function(dialog){
                var mDlgInit = {
                    "Acce":this.Acc,
                };
                dialog.load(mDlgInit);
            },
            commit: function(dialog){
                var mdata = dialog.store();
                this.Acc = mdata["Acce"];
            },
            description: {
                name: "Enter the Accession Number",
                elements:[
                    {
                        type: "view",
                        elements:[
                            {
                                name: "Accession:",
                                type: "static_text",
                            },
                            {
                                item_id: "Acce",
                                type: "edit_text",
                                char_width: 15
                            },
                            {
                                type: "ok_cancel",
                            }
                        ]
                    },
                ]
            }
        };
    
        // gets field coordinates to place box always top right corner
        var aRect=this.getPageBox();
        var width = aRect[2] - aRect[0];
        var height = aRect[1] - aRect[3];
        var AFdL = width - 165;
        var AFdT = height - 52;
        var AFdR = width - 42;
        var AFdB = height - 72;
        var BFdL = width - 165;
        var BFdT = height - 17;
        var BFdR = width - 42;
        var BFdB = height - 57;
    
        // creates fields for barcode and accession
        for (var p=0; p<this.numPages; p++){
            var AFd = this.addField({cName:"Accession", cFieldType:"text", nPageNum:p, oCoords:[AFdL,AFdT,AFdR,AFdB]});
            AFd.readonly = true;
            AFd.textSize=0;
            AFd.textFont = "Helvetica-Bold";
            AFd.fillColor = color.white;
            AFd.alignment = "center";
            var BFd = this.addField({cName:"TheAccession", cFieldType:"text", nPageNum:p, oCoords:[BFdL,BFdT,BFdR,BFdB]});
            BFd.readonly = true;
            BFd.textSize=0;
            BFd.textFont = "Free3of9";
            BFd.fillColor = color.white;
        }
    
        // this will populate the fields
        if("ok" == mDlg.DoDialog()){
            this.getField("Accession").value = mDlg.Acc;
            if(this.getField("Accession").value = mDlg.Acc){
                this.getField("TheAccession").value = "*"+mDlg.Acc+"*";
            }else{
                this.getField("TheAccession").value = "";
            }
    
            // validation checks for a valid formated accession
            var myRegExp = /^([A-Za-z]{1}\d{7}|[A-Za-z]{2}\d{6})$/;
            var myTextInput = mDlg.Acc;
            event.rc = true;
            if (!myRegExp.test(myTextInput) && mDlg.Acc.value != ""){
                    app.alert("Invalid Accession");
                    event.rc = false;
                    this.removeField("TheAccession");
                    this.removeField("Accession");	 	   
            }

            // sets up app alert to save file
            var nMaternalRecal = app.alert("Submit form to Maternal Recal Folder? \n\n" + "\\\\uscplatxdfs002p\\ePHI\\Customer Service\\Maternal Recal",2,2);

            if (nMaternalRecal == 4){
                // This saves file to folder.
                app.beginPriv();
                this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Maternal Recal/" + this.getField("Accession").value +" Recal " + getLoginName() +" " + myDateString()+" .pdf");
                app.endPriv();
                this.closeDoc(true);
            }
        }else{
            this.removeField("TheAccession");
            this.removeField("Accession");	 
        }   
    }else{
        // sets up app alert to save file
        var nMaternalRecal = app.alert("Submit form to Maternal Recal Folder? \n\n" + "\\\\uscplatxdfs002p\\ePHI\\Customer Service\\Maternal Recal",2,2);

        if (nMaternalRecal == 4){
            app.beginPriv();
            this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Maternal Recal/" + this.getField("Accession").value +" Recal " + getLoginName() +" " + myDateString()+" .pdf");
            app.endPriv();
            this.closeDoc(true);
        }

    }   
});

// Emailing BCLs
var BCLSend = app.trustedFunction(function(){
    // setting all the variables 
    var BCLAccession = this.getField("Text1").value;
    var BCLEmail = "distBCLsubmission@sonichealthcareusa.com";
    var BCLSubLine = "BCL for " + BCLAccession;

    //emailing the doc
    this.mailDoc({bUI: true, cTo: BCLEmail, cSubject: BCLSubLine});

    this.closeDoc(true);
});

// Faxing BCLs past 10/1
var BCLXFin = app.trustedFunction(function(){
//    setting all the variables 
//    var BCLAccession = this.getField("Text1").value;
//    var BCLEmail = "8442673272@fax.sonichealthcareusa.com";
//    var BCLSubLine = "BCL for " + BCLAccession;

//    emailing the doc
//    this.mailDoc({bUI: true, cTo: BCLEmail, cSubject: BCLSubLine});
    // Sets up app alert to send file
    var nBCLXfin = app.alert("Submit a BCL? \n\n" + "\\\\uscplatxdfs002p\\ePHI\\Customer Service\\BCLs",2,2);

    if (nBCLXfin == 4){
        // This saves it to folder
        app.beginPriv();
        this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/BCLs/" + this.getField("Text1").value +" BCL " + getLoginName() +" "+ myDateString()+".pdf");
        app.endPriv();
        this.closeDoc(true);
    }

});

// Emailing SRFs
var SRFSend = app.trustedFunction(function(){

    // checking if a fields exists, if it doesn't it will create a dialog box
    if ( this.getField("Check Box1") === null){
        // Dialog Definition
        var SRFDlg ={
            
            DoDialog: function(){
                return app.execDialog(this)
            },

            // initializing dialog box fields as blank
            SRFAcc: "",
            initialize: function(dialog)
            {
                var DiagInit = {
                    "SAcc":this.SRFAcc,
                }; 
                dialog.load(DiagInit);
            },

            // committing dialog fields to variables 
            commit: function(dialog)
            {
                var SRFdata = dialog.store();
                var tickedItems = [];
                if (SRFdata["pCK1"])
                    tickedItems.push("AustinExceptionHandling@cpllabs.com");
                if (SRFdata["pCK2"])
                    tickedItems.push("distAustinReferral@cpllabs.com");
                if (SRFdata["pCK3"])
                    tickedItems.push("microexceptionhandling@cpllabs.com");
                this.SRFdata = tickedItems.join(";");
                var SRFDAcc = dialog.store();
                this.SRFAcc = SRFDAcc["SAcc"];
            },

            // The dialog box description and fields
            description:
            {
                name: "Complete Entry",
                elements:
                [
                    {
                        type: "view",
                        elements:
                        [
                            {
                                name: "Accession",
                                type: "static_text",
                            },
                            {
                                item_id: "SAcc",
                                type: "edit_text",
                                char_width: 15
                            },
                            {
                                name: "Select the Correct Department",
                                type: "static_text",
                            },
                            {
                                name: "Exception Handling",
                                type: "check_box",
                                item_id: "pCK1",
                            },
                            {
                                name: "Referral",
                                type: "check_box",
                                item_id: "pCK2",
                            },
                            {
                                name: "Microbiology",
                                type: "check_box",
                                item_id: "pCK3",
                            },
                            {
                                type: "ok_cancel",
                            },
                        ]
                    },
                ]
            }
        };

        // when selecting OK enter in the dialog fields and email
        if("ok" == SRFDlg.DoDialog()){
            var SRFAccession = SRFDlg.SRFAcc;
            var SRFEmail = SRFDlg.SRFdata;
            SRFSubLine = "SRF for " + SRFAccession;
            this.mailDoc({bUI: true, cTo: SRFEmail, cSubject: SRFSubLine});
        }

    // If fillable fields exists it will check the fillable fields for all relevant information
    }else {
        // setting all the variables 
        var SRFAccession = this.getField("Accession Number").value;
        var SRFEmail = "";
        var SRFSubLine = "SRF for " + SRFAccession;
        var cCK1 = this.getField("Check Box1").valueAsString;
        var cCK2 = this.getField("Check Box2").valueAsString;
        var cCK3 = this.getField("Check Box3").valueAsString;
    
        if(cCK1 === null && cCK2 === null && cCK3 === null){
            SRFEmail = "AustinExceptionHandling@cpllabs.com;";
        }else (cCK1 > 0 || cCK2 > 0 || cCK3 > 0);{
            if(cCK1 != "Off")
            SRFEmail = "AustinExceptionHandling@cpllabs.com;";
            if(cCK2 != "Off")
            SRFEmail += "distAustinReferral@cpllabs.com;";
            if(cCK3 != "Off")
            SRFEmail += "microexceptionhandling@cpllabs.com;";
        }

        this.mailDoc({bUI: true, cTo: SRFEmail, cSubject: SRFSubLine});
    }

    this.closeDoc(true);
});

// Emailing Change after Releases
var CARSend = app.trustedFunction(function(){

    // checking if a fields exists, if it doesn't it will create a dialog box
    if ( this.getField("Accession Number") === null){
        // Dialog Definition
        var CARDlg ={
            
            DoDialog: function(){
                return app.execDialog(this)
            },

            // initializing dialog box fields as blank
            CARAcc: "",
            initialize: function(dialog)
            {
                var DiagInit = {
                    "CAcc":this.CARAcc,
                }; 
                dialog.load(DiagInit);
            },

            // committing dialog fields to variables 
            commit: function(dialog)
            {
                // committing check boxes for the department emails
                var CARdata = dialog.store();
                var tickedItems = [];
                if (CARdata["rCK1"])
                    tickedItems.push("AustinExceptionHandling@cpllabs.com");
                if (CARdata["rCK2"])
                    tickedItems.push("microexceptionhandling@cpllabs.com");
                if (CARdata["rCK3"])
                    tickedItems.push("distAustinReferral@cpllabs.com");
                if (CARdata["rCK4"])
                    tickedItems.push("DistQATeam@cpllabs.com");
                this.CARdata = tickedItems.join(";");
                // committing check boxes for subject line
                var CARSub = dialog.store();
                var ticketSubItems = [];
                if (CARSub["rCK8"])
                    ticketSubItems.push("STAT");
                if (CARSub["rCK5"])
                    ticketSubItems.push("ARDF for ");
                if (CARSub["rCK6"])
                    ticketSubItems.push("CRDF for ");
                if (CARSub["rCK7"])
                    ticketSubItems.push("Transfer for ");
                this.CARSub = ticketSubItems.join(" ");
                // committing varriable for the accession
                var CARDAcc = dialog.store();
                this.CARAcc = CARDAcc["CAcc"];
            },

            // The dialog box description and fields
            description:
            {
                name: "Complete Entry",
                elements:
                [
                    {
                        type: "view",
                        elements:
                        [
                            {
                                name: "Accession",
                                type: "static_text",
                            },
                            {
                                item_id: "CAcc",
                                type: "edit_text",
                                char_width: 15
                            },
                            {
                                name: "STAT Request?",
                                type: "check_box",
                                item_id: "rCK8",
                            },
                            {
                                type: "gap",
                                height: 5
                            },
                            {
                                name: "Select the Correct Department",
                                type: "static_text",
                            },
                            {
                                name: "Exception Handling",
                                type: "check_box",
                                item_id: "rCK1",
                            },
                            {
                                name: "Microbiology",
                                type: "check_box",
                                item_id: "rCK2",
                            },
                            {
                                name: "Referral",
                                type: "check_box",
                                item_id: "rCK3",
                            },
                            {
                                name: "Quality Assurance",
                                type: "check_box",
                                item_id: "rCK4",
                            },
                            {
                                type: "gap",
                                height: 5
                            },
                            {
                                name: "Select the CAR Type",
                                type: "static_text",
                            },
                            {
                                name: "Amended Report",
                                type: "check_box",
                                item_id: "rCK5",
                            },
                            {
                                name: "Corrected Report",
                                type: "check_box",
                                item_id: "rCK6",
                            },
                            {
                                name: "Transfer",
                                type: "check_box",
                                item_id: "rCK7",
                            },
                            {
                                type: "gap",
                                height: 5
                            },
                            {
                                type: "ok_cancel",
                            },
                        ]
                    },
                ]
            }
        };

        // when selecting OK enter in the dialog fields and email
        if("ok" == CARDlg.DoDialog()){
            var CARAccession = CARDlg.CARAcc;
            var CAREmail = CARDlg.CARdata;
            CARSubLine = CARDlg.CARSub + CARAccession;
            this.mailDoc({bUI: true, cTo: CAREmail, cSubject: CARSubLine});
        }

    // If fillable fields exists it will check the fillable fields for all relevant information
    }else {
        // setting all the variables 
        var CARAccession = this.getField("Accession Number").value;
        var CAREmail = "";
        var CARSubLine = "";
        var cCK1 = this.getField("EH").valueAsString;
        var cCK2 = this.getField("Microbiology").valueAsString;
        var cCK3 = this.getField("Referral").valueAsString;
        var cCK4 = this.getField("QA").valueAsString;
        var cCK5 = this.getField("Amended").valueAsString;
        var cCK6 = this.getField("Corrected").valueAsString;
        var cCK7 = this.getField("Transfer").valueAsString;
        var cCK8 = this.getField("STAT Request").valueAsString;
    
        // add email depending on what was selected
        if (cCK1 > 0 || cCK2 > 0 || cCK3 > 0 || cCK4 > 0);{
            if(cCK1 != "Off")
            CAREmail += "AustinExceptionHandling@cpllabs.com;";
            if(cCK2 != "Off")
            CAREmail += "microexceptionhandling@cpllabs.com;";
            if(cCK3 != "Off")
            CAREmail += "distAustinReferral@cpllabs.com;";
            if(cCK4 != "Off")
            CAREmail += "DistQATeam@cpllabs.com;";
        }

        // adding subject line prefixes
        if (cCK5 > 0 || cCK6 > 0 || cCK7 > 0 || cCK8 > 0);{
            if(cCK8 != "Off")
                CARSubLine += "STAT ";
            if(cCK5 != "Off")
                CARSubLine += "ARDF for ";
            if(cCK6 != "Off")
                CARSubLine += "CRDF for ";
            if(cCK7 != "Off")
                CARSubLine += "Transfer for ";
        }

        // defining the subject line
        var CARSubLine2 = CARSubLine + CARAccession;

        // emailing the pdf
        this.mailDoc({bUI: true, cTo: CAREmail, cSubject: CARSubLine2});
    }

    this.closeDoc(true);
});

// Emailing CRT Forms
var CRTSend = app.trustedFunction(function(){

    // If fillable fields exists it will check the fillable fields for all relevant information
        // setting all the variables 
        var CRTAccession = this.getField("Accession").value;
        var CRTPTName = this.getField("Patient Name").value;
        var CRTEmail = "ClinicalResolutionTeam@int.sonichealthcare";
        var CARSubLine = "";
        var crtCK1 = this.getField("CAR").valueAsString;
        var crtCK2 = this.getField("BCL").valueAsString;
        var crtCK3 = this.getField("Repeat").valueAsString;
        var crtCK4 = this.getField("Missing").valueAsString;
        var crtCK5 = this.getField("Pathologist").valueAsString;

        // adding subject line prefixes
        if (crtCK1 > 0 || crtCK2 > 0 || crtCK3 > 0 || crtCK4 > 0 || crtCK5 > 0);{
            if(crtCK1 != "Off")
                CARSubLine += "Change After Release request for";
            if(crtCK2 != "Off")
                CARSubLine += "BCL Request for";
            if(crtCK3 != "Off")
                CARSubLine += "Repeat testing request for";
            if(crtCK4 != "Off")
                CARSubLine += "Specimen Research for";
            if(crtCK5 != "Off")
                CARSubLine += "Pathologist Call Request for";
        }

        // defining the subject line
        var CARSubLine2 = CARSubLine + " " + CRTAccession + " " + CRTPTName;

        // emailing the pdf
        this.mailDoc({bUI: true, cTo: CRTEmail, cSubject: CARSubLine2});
   

    this.closeDoc(true);
});

//ADDING MENU AND SUBMENU
app.addSubMenu({cName:"Submit Clinical Forms", cParent:"File", nPos:1});
app.addMenuItem({cName:"CRT", cParent:"Submit Clinical Forms", cExec:"CRTSend();"});
app.addMenuItem({cName:"BCL", cParent:"Submit Clinical Forms", cExec:"BCLXFin();"});
//app.addMenuItem({cName:"Before 10/1/24", cParent:"BCL", cExec:"BCLSend();"});
//app.addMenuItem({cName:"After 10/1/24", cParent:"BCL", cExec:"BCLXFin();"});
app.addMenuItem({cName:"SRF", cParent:"Submit Clinical Forms", cExec:"SRFSend();"});
app.addMenuItem({cName:"CAR", cParent:"Submit Clinical Forms", cExec:"CARSend();"});
app.addSubMenu({cName:"Repeats", cParent:"Submit Clinical Forms"});
app.addMenuItem({cName:"Start Repeat", cParent:"Repeats", cExec:"RepeatSend();"});
app.addMenuItem({cName:"Finish Repeat", cParent:"Repeats", cExec:"Repeat();"});
app.addMenuItem({cName:"Maternal Recal", cParent:"Submit Clinical Forms", cExec:"MaternalRecal();"});

var ClinicalFormsMenu = app.trustedFunction(function(){
    var cRtn = app.popUpMenu("BCL","CRT","SRF","CAR",["Repeats","Start Repeat","Finish Repeat"],"Maternal Recal");
    if(cRtn){
        if(cRtn == "Start Repeat"){
            RepeatSend();
        }else if(cRtn == "Finish Repeat"){
            Repeat();
        }else if(cRtn == "Maternal Recal"){
            MaternalRecal();
        }else if(cRtn == "SRF"){
            SRFSend();
        }else if(cRtn == "CAR"){
            CARSend();
        }else if(cRtn == "BCL"){
            BCLXFin();
        }else if(cRtn == "CRT"){
            CRTSend();
        }else{
            return;
        }
    }else return;
});

//THE SECTION BELOW IS FOR ALL THE BUTTONS AND FILE OPTIONS FOR THE ABOVE FUNCTIONS
// Add To Be DE button to toolbar
app.addToolButton({
    cName: "ClinicalFormsMenuBtn",
    cLabel: "Submit Clinical Forms",
    oIcon: ClinicalFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "ClinicalFormsMenu();"
});
