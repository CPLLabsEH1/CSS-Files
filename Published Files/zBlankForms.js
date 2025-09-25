// Open Files
// Toolbar Icon Data
var BlankFormsIconData = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000073000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000b90000002e0000002d000000aa00000096000000110000000000000000000000000000000000000081000000ff000000d200000088000000880000008800000088000000880000008800000088000000f000000060000000d6000000bd000000db0000009500000000000000000000000000000081000000f8000000d60000009f00000000000000000000000000000000000000000000000000000000000000df00000060000000ff00000074000000a2000000bf000000000000000000000073000000ff000000d2000000d90000009f00000000000000000000000000000000000000000000000000000000000000df00000060000000ff000000ff000000ff000000bf0000000000000000000000bf000000cc0000009900000099000000460000000000000000000000050000005c000000660000003b00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf00000080000000000000001a0000002200000022000000160000003c000000ff000000ea000000dc00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf0000008000000024000000ff000000ff000000ff000000f90000004a000000ff000000aa000000df00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf00000080000000000000001a0000002200000022000000160000001a000000b5000000bb0000008900000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf0000008000000000000000000000000000000000000000000000001200000094000000990000006d00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf00000080000000050000005c00000066000000660000005500000040000000ff000000bf000000df00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf000000800000001f000000d6000000dd000000dd000000d000000048000000ff000000d5000000de00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf0000008000000000000000000000000000000000000000000000000b0000007d000000880000005500000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf00000080000000000000000000000000000000000000000000000022000000d6000000dd000000a600000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf00000080000000120000009400000099000000990000008e00000044000000ff0000009f000000df00000000000000df00000060000000ff0000004000000080000000bf0000000000000000000000bf00000080000000120000009400000099000000990000008e0000003d000000ff000000ff000000d800000000000000df00000060000000ff000000ff000000ff000000bf0000000000000000000000bf000000800000000000000000000000000000000000000000000000010000003b000000440000002300000000000000df00000060000000ea000000b4000000df000000aa0000000000000000000000bf000000bb00000077000000770000007700000077000000770000007700000077000000770000007700000077000000ee0000006000000054000000ff000000f100000021000000000000000000000072000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000bb000000b90000002e000000000000007c0000004f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

var BlankFormsIcon = {count: 0,width: 20,height: 20, read: function(nBytes){return BlankFormsIconData.slice(this.count, this.count += nBytes);}};

//Open Abnormal Slide Review Form
var AbnSlideRevForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Abnormal Slide Review Form.pdf");
});

//Open Billing Correction 
var BCL = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Billing Correction (BCL).pdf");
});

//Open Transfer BCL
var TransferBCL = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Billing Correction (BCL) TRANSFER.pdf");
});

//Open Change after Release 
var CAR = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Change After Release (CAR).pdf");
});

//Open Change after Release with BCL
var CARBCL = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Change After Release (CAR) with BCL.pdf");
});

//Open Clinical Requisition 
var ClinicalReq = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Clinical Requisition.pdf");
});

//Open Cytology Requisition 
var CytoReq = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Cytology Requisition.pdf");
});

//Open Maternal Recal
var MaternalRecalForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Maternal Recalculation Form.pdf");
});

//Open Repeat Testing
var RepeatForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Repeat Testing Form.pdf");
});

//Open SRF
var SRF = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Specimen Research Form.pdf");
});

//Open Technical Issue Form
var TechIssueForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Technical Issue Form.pdf");
});

//Open Allergen Test Attachment
var Allergen = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Allergen Test Attachment.pdf");
});

//Open Blank AIS
var AIS = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Blank AIS.pdf");
});

//Open Time Correction Log
var TimeCorr = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Time Correction and Mileage Request Form.pdf");
});

//Open Clinical Clinical Resolution Ticket
var CRTForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Clinical Resolution Ticket Form.pdf");
});

//Open In Transit STAT Request Form
var InTransitSTATForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/In Transit STAT Request Form.pdf");
});

//Open Lymphoma AO Form
var LymphomaAOForm = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Lymphoma Forms.pdf");
});

//Open Courier Log
var CourierLog = app.trustedFunction(function(){
    app.openDoc("/uscplatxdfs001p/CLIENT/OPERATIONS/Customer Service/Resources/zFiles/Courier Log.pdf");
});

//ADDING MENU AND SUBMENU
app.addSubMenu({cName:"Blank Forms", cParent:"Window", nPos:1});
app.addSubMenu({cName:"Requisitions", cParent:"Blank Forms", nPos:1});
app.addMenuItem({cName:"Clinical Req", cParent:"Requisitions", cExec:"ClinicalReq();"});
app.addMenuItem({cName:"Cytology Req", cParent:"Requisitions", cExec:"CytoReq();"});
app.addMenuItem({cName:"Abnormal Slide Form", cParent:"Requisitions", cExec:"AbnSlideRevForm();"});
app.addMenuItem({cName:"Allergen Attachment", cParent:"Requisitions", cExec:"Allergen();"});
app.addMenuItem({cName:"Lymphoma AO Req", cParent:"Requisitions", cExec:"LymphomaAOForm();"});
app.addMenuItem({cName:"CRT", cParent:"Blank Forms", cExec:"CRTform();"});
app.addMenuItem({cName:"SRF", cParent:"Blank Forms", cExec:"SRF();"});
app.addSubMenu({cName:"CARs & BCLs", cParent:"Blank Forms"});
app.addMenuItem({cName:"CAR with BCL", cParent:"CARs & BCLs", cExec:"CARBCL();"});
app.addMenuItem({cName:"BCL", cParent:"CARs & BCLs", cExec:"BCL();"});
app.addMenuItem({cName:"Transfer BCL", cParent:"CARs & BCLs", cExec:"TransferBCL();"});
app.addMenuItem({cName:"CAR", cParent:"CARs & BCLs", cExec:"CAR();"});
app.addMenuItem({cName:"In Transit STAT", cParent:"Blank Forms", cExec:"InTransitSTATForm();"});
app.addMenuItem({cName:"Repeat", cParent:"Blank Forms", cExec:"RepeatForm();"});
app.addMenuItem({cName:"Maternal Recal", cParent:"Blank Forms", cExec:"MaternalRecalForm();"});
app.addSubMenu({cName:"Misc Forms", cParent:"Blank Forms"});
app.addMenuItem({cName:"Time Correction and Mileage Form", cParent:"Misc Forms", cExec:"TimeCorr();"});
app.addMenuItem({cName:"Technical Issue Form", cParent:"Misc Forms", cExec:"TechIssueForm();"});
app.addMenuItem({cName:"Account Information Sheet", cParent:"Misc Forms", cExec:"AIS();"});
app.addMenuItem({cName:"Courier Log", cParent:"Blank Forms", cExec:"CourierLog();"});


//Popup Menu for the tool bar
var BlankFormsMenu = app.trustedFunction(function(){
    var cRtn = app.popUpMenu(["Requisitions","Clinical Req","Cytology Req","Abnormal Slide Form","Allergen Attachment","Lymphoma AO Req"],"CRT","SRF",["CARs & BCLs","CAR w/ BCL","BCL","Transfer BCL","CAR"],"In Tranist STAT","Repeat","Maternal Recal",["Misc Forms","Time Correction and Mileage Form","Technical Issue Form","Account Information Sheet"],"Courier Log");
    if(cRtn){
        if(cRtn == "Clinical Req"){
            ClinicalReq();
        }else if(cRtn == "Cytology Req"){
            CytoReq();
        }else if(cRtn == "CAR w/ BCL"){
            CARBCL();
        }else if(cRtn == "BCL"){
            BCL();
        }else if(cRtn == "Transfer BCL"){
            TransferBCL();
        }else if(cRtn == "SRF"){
            SRF();
        }else if(cRtn == "Repeat"){
            RepeatForm();
        }else if(cRtn == "Maternal Recal"){
            MaternalRecalForm();
        }else if(cRtn == "Technical Issue Form"){
            TechIssueForm();   
        }else if(cRtn == "Abnormal Slide Form"){
            AbnSlideRevForm(); 
        }else if(cRtn == "Allergen Attachment"){
            Allergen();  
        }else if(cRtn == "Account Information Sheet"){
            AIS();  
        }else if(cRtn == "CAR"){
            CAR(); 
        }else if(cRtn == "Time Correction and Mileage Form"){
            TimeCorr(); 
        }else if(cRtn == "CRT"){
            CRTForm(); 
        }else if(cRtn == "In Tranist STAT"){
            InTransitSTATForm(); 
        }else if(cRtn == "Lymphoma AO Req"){
            LymphomaAOForm(); 
        }else if(cRtn == "Courier Log"){
            CourierLog(); 
        }else{
            return;
        }
    }else return;
});

//THE SECTION BELOW IS FOR ALL THE BUTTONS AND FILE OPTIONS FOR THE ABOVE FUNCTIONS
// Add To Be DE button to toolbar
app.addToolButton({
    cName: "BlankFormsMenuBtn",
    cLabel: "Blank Forms",
    oIcon: BlankFormsIcon,
    cEnable: "event.rc = (app.doc != null);",
    cExec: "BlankFormsMenu();"
});