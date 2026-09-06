// Sample remains available through October 4, 2026, Eastern time.
(function () {
  const closesAt = Date.parse("2026-10-05T00:00:00-04:00");
  function checkAvailability() {
    if (Date.now() < closesAt) return;
    document.documentElement.style.display = "none";
    window.location.replace(new URL("sample-closed.html", window.location.href).href);
  }
  checkAvailability();
  window.setInterval(checkAvailability, 30000);
  window.addEventListener("pageshow", checkAvailability);
  document.addEventListener("visibilitychange", checkAvailability);
})();
