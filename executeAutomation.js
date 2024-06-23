var tableBody = document.querySelector('.k-grid-content .k-selectable tbody');

if (tableBody) {
    
    var rows = tableBody.querySelectorAll('tr');
    rows.forEach(function(row) {
        
        var docName = (row.children[2]).innerText;
        
        // console.log(docName);
        var policyNum = (docName.split(" ")[0]).trim();
        row.children[3].innerText = policyNum;
        row.children[4].innerHTML = '<span class="k-dirty"></span>Notices and Statements';
        row.children[5].innerHTML = '<span class="k-dirty"></span>Statement';
        row.children[6].innerText = 'Return Mail';
        // console.log(policyNum);
        
        })}
