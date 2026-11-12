const SUPPORT_CONFIG = {
  u: "cy56aW5rZXdpY3o=",
  d: "Z21haWwuY29t"
};

function bindSupportButton() {
  const btn = document.getElementById("contact-btn");
  const status = document.getElementById("copy-status");
  if (!btn) return;

  const appName = document.body.getAttribute("data-app") || "App Support";

  btn.onclick = function() {
    const target = atob(SUPPORT_CONFIG.u) + String.fromCharCode(64) + atob(SUPPORT_CONFIG.d);
    const subject = encodeURIComponent(appName + " — Support Request");

    if (status) {
      status.style.color = "#1e7e34";
      status.textContent = "Support address copied to clipboard!";
      status.style.display = "block";
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(target).catch(function() {});
    }

    window.location.href = "mailto:" + target + "?subject=" + subject;
  };
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindSupportButton);
} else {
  bindSupportButton();
}
