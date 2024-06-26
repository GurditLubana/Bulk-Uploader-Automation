javascript:(
    function() {
       function extractPolicyNumber(fileName) {
    return (fileName.split(' ')[0]).trim();
}

async function processRows() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    var tableBody = document.querySelector('.k-grid-content .k-selectable tbody');

    if (tableBody) {
        var rows = tableBody.children;

        var checkbox = rows[0].querySelector('input[type="checkbox"]');
            document.querySelectorAll('.k-grid-content .k-selectable tbody tr input[type="checkbox"]').forEach(cb => {
                if (cb.checked) {
                    cb.click();
                }
            });

            if (checkbox && !checkbox.checked) {
                checkbox.click();
            }

            await delay(50);

            var dropdown = rows[0].children[4];
            dropdown.click();
        await delay(50);
        var dropdownMenu = document.getElementsByClassName("k-animation-container");
        
        
        var ulContext = dropdownMenu[0].firstChild.lastChild.children[1].firstChild;
        ulContext.children[6].click();

        document.getElementById("_cascadeValuesButton_en").click();

        

        for (var i = 0; i < rows.length; i++) {
            var checkbox = rows[i].querySelector('input[type="checkbox"]');
            document.querySelectorAll('.k-grid-content .k-selectable tbody tr input[type="checkbox"]').forEach(cb => {
                if (cb.checked) {
                    cb.click();
                }
            });

            if (checkbox && !checkbox.checked) {
                checkbox.click();
            }

            await delay(50);

            var docName = (rows[i].children[2]).innerText;
            var policyNum = extractPolicyNumber(docName);

            var numberInput = document.getElementById("_number_text");
            numberInput.value = policyNum;

            var addButton = document.getElementById("_AddButton");
            addButton.click();
            await delay(50);

            var updateButton = document.getElementById("_update_selected");
            updateButton.click();
            await delay(50);

            var clearButton = document.getElementById("_ClearButton");
            clearButton.click();
            await delay(50);
        }
    } else {
        console.error('Table body not found.');
    }
}
processRows();
})();










