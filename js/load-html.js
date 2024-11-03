function loadHTML(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data)
      .catch(error => console.error('Error:', error));
  }
  
  // Automatikusan betölti a navigációt és a láblécet, ha megtalálja azokat az oldalon
  document.addEventListener("DOMContentLoaded", function() {
    const elementsToLoad = [
      { id: "navbar", url: "navbar.html" },
      { id: "footer", url: "footer.html" }
    ];
  
    elementsToLoad.forEach(element => {
      if (document.getElementById(element.id)) {
        loadHTML(element.id, element.url);
      }
    });
  });
  