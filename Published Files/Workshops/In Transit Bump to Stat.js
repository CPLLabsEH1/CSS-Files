// In Transit Bump to Stat
var InTransitSTATSend = app.trustedFunction(function(){

    if (this.getField("InTransitSTATRequestv1") === null){
         var InTransitSTATAlert = app.alert ("You are using the incorrect form for this button \n\n" + "This button is to transmit in transit bump to STAT requests not in transit add ons \n\n" + "The correct In Transit STAT Request Form will open from the Blank Forms Button",0,0);

        if (InTransitSTATAlert == 1){
            app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/In Transit STAT Request Form.pdf");
        };    
    } else {
        //    setting all the variables 
        var InTransitSTATPatient = this.getField("PatientName").value;
        var InTranistSTATAcct = this.getField("ClientAccount").value;
        var InTransitSTATEmail = "DistCPLMainStatLab@cpllabs.com; distcplprocessingleaders@cpllabs.com; DistAustinClinicalCustomerService@cpllabs.com";
        var InTransitSTATSubLine = "Incoming ";
        var InTransitSTATSpec = this.getField("SpecimenType").value;
        var InTransitSTATArrival = this.getField("ArrivalTime").value
        var InTransitSTATBody = "See attached \n\n" + "Please be on the look out for " + InTransitSTATSpec + " for patient " + InTransitSTATPatient + ". \n\n" + "The samples should be arriving today at around " + InTransitSTATArrival + " from " + InTranistSTATAcct + ".";

        var InTransitCK1 = this.getField("MissedStat").valueAsString;
        var InTranistCK2 = this.getField("BumpStat").valueAsString;
        var InTransitCK3 = this.getField("IncommingStat").valueAsString;

        if(InTransitCK1 === null && InTranistCK2 === null && InTransitCK3 === null){
            InTransitSTATSubLine += "In Transit STAT";
        }else if (InTransitCK1 == "Off" && InTranistCK2 == "Off" && InTransitCK3 == "Off") {
            InTransitSTATSubLine += "In Transit STAT"; 
        }else (InTransitCK1 > 0 || InTranistCK2 > 0 || InTransitCK3 > 0);{
            if(InTransitCK1 != "Off")
            InTransitSTATSubLine += "Missed STAT";
            if(InTranistCK2 != "Off")
            InTransitSTATSubLine += "Bump to STAT";
            if(InTransitCK3 != "Off")
            InTransitSTATSubLine += "STAT";
        }
        //    emailing the doc
        this.mailDoc({bUI: true, cTo: InTransitSTATEmail, cSubject: InTransitSTATSubLine, cMsg: InTransitSTATBody,});
        // this.closeDoc(true);
    }

});

app.addToolButton({
cName: "TestBtn",
cLabel: "Test Button",
//    oIcon: BlankFormsIcon,
cEnable: "event.rc = (app.doc != null);",
cExec: "InTransitSTATSend();",
});