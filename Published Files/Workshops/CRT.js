var Transfer_CRT_Info = app.trustedFunction(function(){
    var accession = this.getField("Accession").valueAsString;
    var PT = this.getField("Patient Name").valueAsString;
    var CB = this.getField("Call Back").valueAsString;
    var Contact = this.getField("Client Contact").valueAsString;
    var Account = this.getField("Account").valueAsString;
    var CSR = this.getField("CSR").valueAsString;
    var DOC = this.getField("Date of Collection").valueAsString;
    var DOB = this.getField("Date of Birth").valueAsString;
    var TDate = this.getField("Date").valueAsString;
    var Specimen = this.getField("Specimen Types").valueAsString;
    var TestField1 = this.getField("Tests 1").valueAsString;
    var TestField2 = this.getField("Tests 2").valueAsString;
    var DetailsField1 = this.getField("Details 1").valueAsString;
    var DetailsField2 = this.getField("Details 2").valueAsString;
    var DetailsField3 = this.getField("Details 3").valueAsString;
    var PSCBox = this.getField("PSC").valueAsString;
    var ClientBox = this.getField("Client").valueAsString;


    if (this.getField("CAR").isBoxChecked(0)){
        app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Change After Release (CAR) with BCL.pdf");
        var oDoc1 = app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Change After Release (CAR) with BCL.pdf");
        oDoc1.getField("Person initiating CRDF").value = CSR;
        oDoc1.getField("Patient Name").value = PT;
        oDoc1.getField("Original Report Date").value = DOC;
        oDoc1.getField("Accession Number").value = accession;
        oDoc1.getField("1").value = TestField1 + " " + TestField2;
        oDoc1.getField("Briefly Describe Reason for Change").value = DetailsField1;
        oDoc1.getField("1_2").value = DetailsField2 + " " + DetailsField3;
    } else if (this.getField("BCL").isBoxChecked(0)){
        app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Billing Correction (BCL).pdf");
        var oDoc1 = app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Billing Correction (BCL).pdf");
        oDoc1.getField("Text1").value = accession;
        oDoc1.getField("Requested By").value = CSR;
        oDoc1.getField("Date Of Service").value = DOC;
        oDoc1.getField("Patients Name First MI Last").value = PT;
        oDoc1.getField("Client Number").value = Account;
        oDoc1.getField("Client Contact First MI Last").value = Contact;
        oDoc1.getField("Tests to No Charge").value = TestField1 + " " + TestField2;
        oDoc1.getField("Reason including any request for No Charge 1").value = DetailsField1;
        oDoc1.getField("Reason including any request for No Charge 2").value = DetailsField2 + " " + DetailsField3;
    } else if (this.getField("Missing").isBoxChecked(0)){
        app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Specimen Research Form.pdf");
        var oDoc1 = app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Specimen Research Form.pdf");
        oDoc1.getField("Accession Number").value = accession;
        oDoc1.getField("Reported to").value = CSR;
        oDoc1.getField("Name of Patient").value = PT;
        oDoc1.getField("Text4").value = DOB;
        oDoc1.getField("Client Account").value = Account;
        oDoc1.getField("Text5").value = CB;
        oDoc1.getField("Client Contact").value = Contact;
        oDoc1.getField("Date of Collection").value = DOC;
        oDoc1.getField("Specimen Types").value = Specimen;
        oDoc1.getField("Check Box6").value = PSCBox;
        oDoc1.getField("Check Box7").value = ClientBox;
    } else if (this.getField("Repeat").isBoxChecked(0)){
        app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Repeat Testing Form.pdf");
        var oDoc1 = app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Repeat Testing Form.pdf");
        oDoc1.getField("Patient Name").value = PT;
        oDoc1.getField("Accession").value = accession;
        oDoc1.getField("Client").value = Account;
        oDoc1.getField("Client Contact").value = Contact;
        oDoc1.getField("Phone").value = CB;
        oDoc1.getField("Other Reason Please Specify").value = DetailsField1 + " " + DetailsField2 + " " + DetailsField3;
    } else if (this.getField("Pathologist").isBoxChecked(0)){
        var PathSubjLine = "Pathology Call Request " + accession;
        var PathCcLine = "DISTAUSTINCSLEAD@cpllabs.com";
        var PathBody = DetailsField1 + " " + DetailsField2 + " " + DetailsField3;

        this.mailDoc({bUI: true, cCc: PathCcLine, cSubject: PathSubjLine, cMsg: PathBody});
    } else {
        var NoBoxCRT = app.alert("No Check Box was selcted");
    }
        
});

app.addToolButton({
    cName: "CRTMenuBtn",
    cLabel: "Clinical Resolution Team",
//    oIcon: ClinicalFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "Transfer_CRT_Info();"
});