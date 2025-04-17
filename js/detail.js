const API_KEY_OMDB = "7baced43"; // OMDb için
const API_KEY_YOUTUBE = ""; // YouTube için

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const OMDB_URL = `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY_OMDB}`;

// Film detaylarını al
fetch(OMDB_URL)
  .then(res => res.json())
  .then(data => {
    document.getElementById('title').innerText = data.Title;
    document.getElementById('year').innerText = data.Year;
    document.getElementById('plot').innerText = data.Plot;
    document.getElementById('actors').innerText = data.Actors;
    document.getElementById('director').innerText = data.Director;
    document.getElementById('poster').src = data.Poster;

    // Şimdi fragman için YouTube API ile film adını aratalım
    const searchQuery = encodeURIComponent(`${data.Title} official trailer`);
    const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY_YOUTUBE}&maxResults=1&type=video`;

    return fetch(YOUTUBE_API);
  })
  .then(res => res.json())
  .then(youtubeData => {
    const videoId = youtubeData.items[0]?.id?.videoId;
    if (videoId) {
      const iframe = document.createElement('iframe');
      iframe.width = "100%";
      iframe.height = "400";
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.title = "YouTube Trailer";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      document.getElementById('video-container').appendChild(iframe);
    } else {
      document.getElementById('video-container').innerText = "Fragman bulunamadı.";
    }
  })
  .catch(err => {
    console.error('Hata:', err);
  });
