// === Countdown ===
const countdownEl = document.getElementById("countdown");
const eventDate = new Date("2025-07-12T19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Acara sedang berlangsung atau telah selesai.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}, 1000);

// === Musik Autoplay + Toggle ===
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
let isPlaying = true;

// Coba autoplay saat halaman load
window.addEventListener("load", () => {
  music.play().catch(() => {
<<<<<<< HEAD
    // Jika autoplay diblokir, aktifkan saat interaksi pertama
=======
    // Jika autoplay diblokir, coba setelah klik
>>>>>>> c2487fca94fec064b48447b1da65d5d27e5ea523
    const enableAudio = () => {
      music.play().catch(() => {});
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);
  });
});

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    music.play();
    toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
});

// === Dummy RSVP ===
function submitForm(e) {
  e.preventDefault();
  alert("Terima kasih atas konfirmasinya!");
  e.target.reset();
}

// === Scroll to Top untuk elemen <main> ===
const scrollBtn = document.getElementById("scroll-top");
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  if (main.scrollTop > window.innerHeight * 0.5) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  main.scrollTo({ top: 0, behavior: "smooth" });
<<<<<<< HEAD
});

// === Auto Snap ke Halaman Terdekat Saat Scroll Berhenti ===
const pages = document.querySelectorAll(".page");
let isScrolling;

main.addEventListener("scroll", () => {
  clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    let closest = null;
    let closestDistance = Infinity;

    pages.forEach((page) => {
      const offset = Math.abs(page.offsetTop - main.scrollTop);
      if (offset < closestDistance) {
        closest = page;
        closestDistance = offset;
      }
    });

    if (closest) {
      main.scrollTo({
        top: closest.offsetTop,
        behavior: "smooth",
      });
    }
  }, 80);
=======
>>>>>>> c2487fca94fec064b48447b1da65d5d27e5ea523
});
