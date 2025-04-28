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
