var printers = dymo.label.framework.getPrinters();
var messageText = document.getElementById("messageText");
var labelImageElement = document.getElementById("labelImage")

if (printers.length == 0){
    console.log("No printers found");
    messageText.textContent = "No printers found";
}
else {
    var printerName = printers[0].name;
}

console.log("Printer name...........");
console.log(printerName);

if (printers.length > 0){
    
    try {

        var labelXML = dymo.label.framework.openLabelXml(generatedLabel);
        var labelXMLRender = dymo.label.framework.renderLabel(generatedLabel)
        
        var pngData = labelXML.render();
        labelImageElement.src = "data:image/png;base64," + labelXML;

        var labelXml = labelXML.toString();
        labelXML.print(printerName);

        messageText.textContent = "Print Successful";

    } catch (err) {

        messageText.textContent = err;

    }
}