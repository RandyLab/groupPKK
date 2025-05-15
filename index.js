const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const authButtons = document.getElementById("auth-buttons");
const logoutBtn = document.getElementById("logout-button");

if (isLoggedIn) {
  authButtons.style.display = "none";
  logoutBtn.style.display = "block";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("nik");
  alert("Anda telah logout.");
  window.location.href = "/index.html";
}

document
  .querySelector("a[href='/jadwal/index.html']")
  .addEventListener("click", function (e) {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Silakan login untuk mengakses Jadwal Dokter.");
    }
  });

document
  .querySelector("a[href='/contact/index.html']")
  .addEventListener("click", function (e) {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Silakan login untuk melihat kontak.");
    }
  });
