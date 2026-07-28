async function loadComponent(elementId, filePath) {
    const response = await fetch(filePath);

    if (!response.ok) {
        throw new Error(`Unable to load ${filePath}`);
    }

    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}

function highlightCurrentPage() {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    highlightCurrentPage();

});