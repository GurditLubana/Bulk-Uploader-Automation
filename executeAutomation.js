javascript: (function () {
  function extractPolicyNumber(fileName) {
    return fileName.split(" ")[0];
  }

  var tableBody = document.querySelector(".k-grid-content .k-selectable tbody");

  if (tableBody) {
    var rows = tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {
      console.log(row);
    });
  }
})();
