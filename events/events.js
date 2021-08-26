function createMatrixTable(tableSize) {
    let tableContainer = "";
    tableContainer += "<table id='table'>";

    for (let i = 1; i <= tableSize; i++) {
        tableContainer += "<tr>";
        for (let j = 1; j <= tableSize; j++) {
            tableContainer += `<td id="${i * j}">` + (i * j) + "\n</td>";
        }
        tableContainer += "</tr>";
    }
    tableContainer += "</table>";

    return document.write(tableContainer);
}


createMatrixTable(100);

document.getElementById('table').addEventListener('click', (event) => {
    alert(`ID: ${event.target.id} Value: ${event.target.innerHTML}`);
})