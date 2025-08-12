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
                CARSubLine += "Change After Release request for ";
            if(crtCK2 != "Off")
                CARSubLine += "BCL Request for ";
            if(crtCK3 != "Off")
                CARSubLine += "Repeat testing request for ";
            if(crtCK4 != "Off")
                CARSubLine += "Specimen Research for ";
            if(crtCK5 != "Off")
                CARSubLine += "Pathologist Call Request for ";
        }

        // defining the subject line
        var CARSubLine2 = CARSubLine + CRTAccession + CRTPTName;

        // emailing the pdf
        this.mailDoc({bUI: true, cTo: CRTEmail, cSubject: CARSubLine2});
   

    this.closeDoc(true);
});

