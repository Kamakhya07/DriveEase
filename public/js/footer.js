document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("global-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <span>@kamakhya © 2025</span>
    </footer>
  `;
});
