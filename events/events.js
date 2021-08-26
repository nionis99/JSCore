function createMatrixTable(tableSize) {
    let tableContainer = "";
    tableContainer += "<table>";

    for (let i = 1; i <= tableSize; i++) {
        tableContainer += "<tr>";
        for (let j = 1; j <= tableSize; j++) {
            tableContainer += "<td>" + (i * j) + "\n</td>";
        }
        tableContainer += "</tr>";
    }
    tableContainer += "</table>";

    return document.write(tableContainer);
}


createMatrixTable(100);