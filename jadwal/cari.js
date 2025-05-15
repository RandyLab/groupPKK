function cariDokter() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#jadwalTable tbody tr");
    let hasResults = false;

    rows.forEach(row => {
        let dokter = row.cells[0].textContent.toLowerCase();
        if (dokter.includes(input)) {
            row.style.display = "";
            hasResults = true;
        } else {
            row.style.display = "none";
        }
    });

    
    document.querySelector(".jadwal-section").style.minHeight = hasResults ? "400px" : "400px";
}


const originalRows = Array.from(
  document.querySelectorAll("#jadwalTable tbody tr")
);
function sortTable() {
  const tableBody = document.querySelector("#jadwalTable tbody");
  const rows = Array.from(tableBody.rows);
  const sortValue = document.getElementById("sortSelect").value;

  let sortedRows;

  if (sortValue === "az") {
    sortedRows = [...rows].sort((a, b) =>
      a.cells[0].textContent.localeCompare(b.cells[0].textContent)
    );
  } else if (sortValue === "za") {
    sortedRows = [...rows].sort((a, b) =>
      b.cells[0].textContent.localeCompare(a.cells[0].textContent)
    );
  } else {
    sortedRows = originalRows;
  }

  tableBody.innerHTML = "";
  sortedRows.forEach((row) => tableBody.appendChild(row));
}
