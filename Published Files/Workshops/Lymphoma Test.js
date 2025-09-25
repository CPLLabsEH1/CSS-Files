// Lymphoma Test
// Script to email Lymphoma AOs to Heme and send a copy to Scanning.
var LymphomaAO = app.trustedFunction(function(){
    
    if (this.getField("LymphomaFormsv1") === null){

         var LymphomaAlert = app.alert ("You are using the incorrect form for this button \n\n" + "The correct Lymphoma AO Form will open from the Blank Forms Button",0,0);

        if (LymphomaAlert == 1){
            // this.closeDoc(true);
            app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Lymphoma Forms.pdf");
        };       
    } else {
        // setting all variables 
        var Original_Accession = this.getField("Acsn Label").value;
        var HemeFlow = "disthemellp@cpllabs.com";
        var FlowSmRvAOSubLine = "STAT FLOW/SMRV AO " + Original_Accession;

        // Sending a copy to scanning
	    app.beginPriv();
	    this.saveAs("/uscplatxdfs002p/ePHI/Customer Service/Scanning Folder/"  + Original_Accession + " Lymphoma Flow/SMRV AO " + getLoginName() +" " + myDateString()+" .pdf");
	    // this.saveAs("/uscplatxdfs002p/ePHI/Scanning/ " + Original_Accession +" STAT AO " + getLoginName() +" " + myDateString() +" .tif","com.adobe.acrobat.tiff");
	    app.endPriv();

        // setting up the email
        this.mailDoc({bUI: true, cTo: HemeFlow, cSubject: FlowSmRvAOSubLine});

        //Closes the file so not to be left open.
        this.closeDoc(true);
    }
});

app.addToolButton({
    cName: "TestBtn",
    cLabel: "Test Button",
//    oIcon: BlankFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "LymphomaAO();"
});