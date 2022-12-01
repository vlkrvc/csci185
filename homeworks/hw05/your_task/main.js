const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";

function search(ev) {
  const term = document.querySelector("#search").value;
  console.log("search for:", term);
  // issue three Spotify queries at once...
  getTracks(term);
  getAlbums(term);
  getArtist(term);
  if (ev) {
    ev.preventDefault();
  }
}

function playsong (trackid){
    const template = ` <iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${trackid}?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>
`;

document.querySelector("#artist").innerHTML = template;

};


async function getTracks(term) {
  const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
  console.log(tracksEndpoint);
  const data = await fetch(tracksEndpoint).then((response) => response.json());
  console.log(data);

  document.querySelector("#tracks").innerHTML="";

  for (let i = 0; i < 5; i++) {
    const track = data[i];
    const template = `<section class="track-item preview" onclick="playsong('${track.id}')">
    <img alt="picture of ${track.name}" src="${track.album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>${track.name}</h2>
        <p>
            ${track.artist.name}
        </p>
    </div>
</section>`;

document.querySelector("#tracks").insertAdjacentHTML("beforeend", template);
  }
}

async function getAlbums(term) {
  const albumsEndpoint = baseURL +"?q=" + term + "&type=album";
  console.log(albumsEndpoint);
  const data = await fetch(albumsEndpoint).then((response) => response.json());
  console.log(data);

  document.querySelector("#albums").innerHTML="";
  
  for (let i = 0; i < data.length; i++) {
    const album = data[i];
    const template = `<section class="album-card" id="4RR8ROIGix5CbCGlXHA53I">
    <div>
        <img alt="picture of ${artist.name}" src="${album.image_url}">
        <h2>${album.name}</h2>
        <div class="footer">
            <a href="${album.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`;

document.querySelector("#albums").insertAdjacentHTML("beforeend", template);
  }
}

async function getArtist(term) {
  const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
  // console.log(artistEndpoint);

  const data = await fetch(artistEndpoint).then((response) => response.json());
  // console.log(data);
  const artist = data[0];
  // console.log(artist.name);
  // console.log(artist.image_url);

  const template = `<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img alt="picture of ${artist.name}" src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`;

  document.querySelector("#artist").innerHTML = template;

  // console.log(template);

  // document.querySelector('#artist').innerHTML = data[0].name;
}

document.querySelector("#search").onkeyup = function (ev) {
  // Number 13 is the "Enter" key on the keyboard
  console.log(ev.keyCode);
  if (ev.keyCode === 13) {
    ev.preventDefault();
    search();
  }
};
