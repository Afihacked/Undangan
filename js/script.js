document.addEventListener("DOMContentLoaded", () => {
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

  // === Musik toggle ===
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");
  let isMusicPlaying = false;
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (isMusicPlaying) {
        music.pause();
        toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
      } else {
        music.play().catch((err) => console.warn("Gagal memutar musik:", err));
        toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
      isMusicPlaying = !isMusicPlaying;
    });
  }

  // === Scroll ke atas tombol ===
  const scrollBtn = document.getElementById("scroll-top");
  const main = document.querySelector("main");
  main.addEventListener("scroll", () => {
    scrollBtn.style.display =
      main.scrollTop > window.innerHeight * 0.5 ? "flex" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    main.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Buka undangan ===
  const bukaBtn = document.getElementById("buka-undangan");
  if (bukaBtn) {
    bukaBtn.addEventListener("click", () => {
      main.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });
  }

  // === Nama tamu dari URL ===
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get("to");
  if (nama) {
    const namaEl = document.getElementById("nama-tamu");
    const wrapper = document.getElementById("nama-tamu-wrapper");
    namaEl.textContent = decodeURIComponent(nama);
    wrapper.style.display = "block";
  }
});
