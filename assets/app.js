// Закодированные части почты (Base64)
const SUPPORT_CONFIG = {
  u: "cy56aW5rZXdpY3o=",       // Результат btoa("имя_до_собаки")
  d: "Z21haWwuY29t"    // Результат btoa("домен_после_собаки")
};

function initSupportButton(appName) {
  const btn = document.getElementById("contact-btn");
  const status = document.getElementById("copy-status");
  if (!btn) return;

  btn.addEventListener("click", function() {
    // Декодирование и сборка происходят только в момент клика
    const target = atob(SUPPORT_CONFIG.u) + String.fromCharCode(64) + atob(SUPPORT_CONFIG.d);
    const subject = encodeURIComponent(appName + " — Support Request");

    window.location.href = "mailto:" + target + "?subject=" + subject;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(target).then(function() {
        if (status) {
          status.textContent = "Support address copied to clipboard!";
          status.style.display = "block";
        }
      });
    }
  });
}
