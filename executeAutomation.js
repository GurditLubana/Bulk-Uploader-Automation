var tableBody = document.querySelector('.k-grid-content .k-selectable tbody');

// Check if tableBody is found
if (tableBody) {
    // Select all rows within the table body
    var rows = tableBody.querySelectorAll('tr');

    // Loop through each row
    rows.forEach(function(row) {
        // Log the row (or perform any action)
        var docName = (row.children[2]).innerText;
        
        // console.log(docName);
        var policyNum = (docName.split(" ")[0]).trim();
        console.log(policyNum);
        
        })
                 }
