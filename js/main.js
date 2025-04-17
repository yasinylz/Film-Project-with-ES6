const API_KEY = "7baced43"; // Bu key çalışmıyorsa değiştir paşam

const movies = {
  "Son Çıkanlar": ["tt1745960", "tt1160419", "tt1431045"],
  "Klasikler": ["tt0110413", "tt0133093", "tt0109830"],
  "Marvel": ["tt4154796", "tt0848228", "tt2395427"]
};

const movieList = document.getElementById("movie-list");

if (movieList) {
  for (const [kategori, ids] of Object.entries(movies)) {
    const section = document.createElement("section");
    section.innerHTML = `
      <h3 class="text-white mt-4">${kategori}</h3>
      <div class="row" id="${kategori}-row"></div>
    `;
    movieList.appendChild(section);

    ids.forEach(async (id) => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const movie = await res.json();

        if (movie.Response === "True") {
          const movieCard = `
            <div class="col-md-4 mb-3">
              <div class="card bg-dark text-white h-100">
                <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                <div class="card-body">
                  <h5 class="card-title">${movie.Title}</h5>
                  <p class="card-text">${movie.Plot?.substring(0, 100)}...</p>
                  <a href="../file/detail.html?id=${movie.imdbID}" class="btn btn-outline-light btn-sm">Detay</a>
                </div>
              </div>
            </div>
          `;
          document.getElementById(`${kategori}-row`).innerHTML += movieCard;
        } else {
          console.warn("Film bulunamadı:", id);
        }
      } catch (err) {
        console.error("Hata oluştu:", err);
      }
    });
  }
}
