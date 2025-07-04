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

// === Musik Manual Play + Toggle ===
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
let isPlaying = false; // default: belum diputar

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    music.play().catch((err) => {
      console.warn("Gagal memutar musik:", err);
    });
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
});

// // === Auto Snap ke Halaman Terdekat Saat Scroll Berhenti ===
// const pages = document.querySelectorAll(".page");
// let isScrolling;

// main.addEventListener("scroll", () => {
//   clearTimeout(isScrolling);

//   isScrolling = setTimeout(() => {
//     let closest = null;
//     let closestDistance = Infinity;

//     pages.forEach((page) => {
//       const offset = Math.abs(page.offsetTop - main.scrollTop);
//       if (offset < closestDistance) {
//         closest = page;
//         closestDistance = offset;
//       }
//     });

//     if (closest) {
//       main.scrollTo({
//         top: closest.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   }, 80);
// });

// nama otomatis
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get("to");

  if (nama) {
    const namaEl = document.getElementById("nama-tamu");
    const wrapper = document.getElementById("nama-tamu-wrapper");
    namaEl.textContent = decodeURIComponent(nama);
    wrapper.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("buka-undangan");
  const main = document.querySelector("main");

  if (button) {
    button.addEventListener("click", () => {
      main.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });
  }
});
