const toast = document.querySelector("#toast");
const shareButton = document.querySelector("#shareButton");
const saveContactButton = document.querySelector("#saveContact");

let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "SLAY'LAD — Healthy Meal Kitchen",
    text: "Order single healthy meals on Zomato or connect with Slay'lad on WhatsApp for bulk orders.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    showToast("Card link copied");
  } catch (error) {
    if (error.name !== "AbortError") {
      showToast("Unable to share right now");
    }
  }
});

saveContactButton.addEventListener("click", () => {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:SLAY'LAD Healthy Meal Kitchen",
    "ORG:SLAY'LAD",
    "TEL;TYPE=CELL:+919999498579",
    "URL:https://www.slaylad.com",
    "X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/slaylad_india",
    "NOTE:Single meals on Zomato. Bulk meal orders via WhatsApp.",
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = downloadUrl;
  downloadLink.download = "slaylad-contact.vcf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(downloadUrl);
  showToast("Contact card downloaded");
});
