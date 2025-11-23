const myGames = [
  { name: "Car Parking Multiplayer", hours: 2850, rating: 10, link: "https://play.google.com/store/apps/details?id=com.olzhas.carparking.multy", cover: "https://play-lh.googleusercontent.com/Q2dP8o6Q3S9f7zL8v9m7k5n3x1y0w8v6t4r2q0p9o8i7u6y5t4r3e2w1q0p9o8i7u6y" },
  { name: "Valorant", hours: 1200, rating: 9.5, link: "https://playvalorant.com", cover: "https://images8.alphacoders.com/133/1330050.jpg" },
  { name: "GTA V", hours: 900, rating: 10, link: "https://store.steampowered.com/app/271590", cover: "https://images.alphacoders.com/134/1346146.jpg" },
  { name: "CS2", hours: 800, rating: 9.2, link: "https://store.steampowered.com/app/730", cover: "https://images.alphacoders.com/134/1349876.jpg" },
  { name: "Minecraft", hours: 600, rating: 8.5, link: "https://minecraft.net", cover: "https://wallpapercave.com/wp/wp12277525.jpg" },
  { name: "Apex Legends", hours: 500, rating: 8.8, link: "https://www.ea.com/games/apex-legends", cover: "https://wallpapercave.com/wp/wp11337709.jpg" },
  { name: "Rocket League", hours: 450, rating: 9, link: "https://rocketleague.com", cover: "https://wallpapercave.com/wp/wp4083725.jpg" },
  { name: "Fortnite", hours: 350, rating: 7.5, link: "https://fortnite.com", cover: "https://wallpapercave.com/wp/wp12543958.jpg" }
];

function stars(rating) {
  return "★".repeat(Math.round(rating)) + "☆".repeat(10 - Math.round(rating));
}

function loadGames() {
  const grid = document.getElementById("gamesGrid");
  let totalHours = 0, totalRating = 0;

  myGames.forEach(game => {
    totalHours += game.hours;
    totalRating += game.rating;

    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <div class="game-card-inner">
        <div class="front">
          <img src="${game.cover}" alt="${game.name}">
          <h3>${game.name}</h3>
          <p class="hours">${game.hours} hours</p>
          <div class="stars">${stars(game.rating)}</div>
        </div>
        <div class="back">
          <h3>${game.name}</h3>
          <p><strong>Hours Played:</strong> ${game.hours.toLocaleString()}</p>
          <p><strong>My Rating:</strong> ${game.rating}/10 ${stars(game.rating)}</p>
          <p style="margin:20px 0;">Click below to open</p>
          <a href="${game.link}" target="_blank" class="play-btn">Play / Profile</a>
        </div>
      </div>
    `;
    // Mobile tap to flip
    card.addEventListener("click", () => card.classList.toggle("tapped"));
    grid.appendChild(card);
  });

  document.getElementById("gameCount").textContent = myGames.length;
  document.getElementById("hoursPlayed").textContent = totalHours.toLocaleString();
  document.getElementById("avgRating").textContent = (totalRating / myGames.length).toFixed(1);
}

// Particles Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#87CEEB" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#00ff88", opacity: 0.3, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  }
});

loadGames();