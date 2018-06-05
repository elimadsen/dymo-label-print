// HANDLES

function onload() {

    var labelFile = document.getElementById('labelFile');
    var printersSelect = document.getElementById('printersSelect');
    var printButton = document.getElementById('printButton');

    printButton.disabled = true;

    loadLabel();
    loadPrinters();

    printButton.onclick = function () {

        try {
    
            if (!label) {
    
                alert("Load label before printing");
                return;
    
            }
    
            label.print(printersSelect.value);
            
        } catch (e) {
    
            alert(e.message || e);
    
        }
    }

}

function initTests() {

    if(dymo.label.framework.init) {

        dymo.label.framework.init(onload);

    } else {

        onload();

    }
}

function loadPrinters() {

    var printers = dymo.label.framework.getPrinters();

    if (printers.length == 0) {

        alert("No DYMO printers are installed. Install DYMO printers.");
        return;

    }

    for (var i = 0; i < printers.length; i++) {

        var printer = printers[i];

        if (printer.printerType == "LabelWriterPrinter") {

            var printerName = printer.name;

            var option = document.createElement('option');
            option.value = printerName;
            option.appendChild(document.createTextNode(printerName));
            printersSelect.appendChild(option);

        }
    }
}

function loadLabel() {

    label = dymo.label.framework.openLabelXml(generatedLabel);

    updatePreview();
    printButton.disabled = false;
}

function updatePreview() {

    if (!label){

        return;

    }

    var pngData = label.render();
    
    var labelImage = document.getElementById('labelImage');
    labelImage.src = "data:image/png;base64," + pngData;

}

// MAIN SCRIPT

var label;

if (window.addEventListener) {

    window.addEventListener("load", initTests, false);

} else if (window.attachEvent) {

    window.attachEvent("onload", initTests);

} else {

    window.onload = initTests;

}