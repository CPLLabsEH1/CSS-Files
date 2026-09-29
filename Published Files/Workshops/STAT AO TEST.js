//STAT AO TEST
// Script to email Stat AOs to EH and send a copy to Scanning.
var StatAO = app.trustedFunction(function(){
	if (this.getField("Original Accession") !== null){
		// setting all variables 
    	var Original_Accession = this.getField("Original Accession").value;
    	var ExceptionHandling = "AustinExceptionHandling@cpllabs.com";
    	var StatAOSubLine = "STAT AO for " + Original_Accession;

    	// Sending a copy to scanning
		app.beginPriv();
		this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Scanning Folder/"  + Original_Accession + " STAT AO " + getLoginName() +" " + myDateString()+" .pdf");
		app.endPriv();

		// setting up the email
    	this.mailDoc({bUI: true, cTo: ExceptionHandling, cSubject: StatAOSubLine});
	}else{
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
	}

    //Closes the file so not to be left open.
    this.closeDoc(true);
});

app.addToolButton({
    cName: "TestBtn",
    cLabel: "Test Button",
//    oIcon: BlankFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "StatAO();"
});