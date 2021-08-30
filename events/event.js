// const onCellClick = (event) => alert(`ID: ${event.id} Value: ${event.innerHTML}`);
const onTableClick = (event) => alert(`ID: ${event.target.id} Value: ${event.target.innerHTML}`);

const createMatrixTable = (tableSize) => {
    let counter = 0;
    let tableContainer = "";
    tableContainer += "<table id='table'>";

    for (let i = 1; i <= tableSize; i++) {
        counter += 1;
        tableContainer += "<tr>";
        for (let j = 1; j <= tableSize; j++) {
            tableContainer += `<td id="${counter}" draggable="true">` + i * j + "</td>";
            // tableContainer += `<td id="${counter}" draggable="true" onclick="onCellClick(this)">` + i * j + "</td>";
            counter += 1;
        }
        tableContainer += "</tr>";
    }
    tableContainer += "</table>";

    return document.write(tableContainer);
}


createMatrixTable(100);

document.getElementById('table').addEventListener('click', onTableClick);

const dragAndDropTableCells = (() => {
    let draggedCell;

    const onDragStart = ({target}) => draggedCell = target;
    const onDragOver = (e) => e.preventDefault();

    const onDrop = (e) => {
        e.preventDefault();
        document.getElementById(draggedCell.id).outerHTML = e.target.outerHTML;
        e.target.outerHTML = draggedCell.outerHTML;
    }

    document.querySelector('table').addEventListener('dragstart', onDragStart, false);
    document.querySelector('table').addEventListener('dragover', onDragOver, false);
    document.querySelector('table').addEventListener('drop', onDrop, false);
})();

