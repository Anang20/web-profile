document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    document.addEventListener("scroll", function() {
        const header = document.querySelector("header");
    
        // Jika scroll lebih dari 50px, tambahkan kelas blur
        if (window.scrollY > 50) {
            header.classList.add("header-blur");
        } else {
            header.classList.remove("header-blur");
        }
    });

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        let scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.info-item, .media-item');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // typing
    const texts = [
        "Frontend Developer",
        "Mahasiswa Sistem Informasi",
        "Mahasiswa Unpam",
    ];
    
    let currentTextIndex = 0;
    let index = 0;
    let typingInterval;

    function typeText() {
        const currentText = texts[currentTextIndex];
        document.getElementById("typing").textContent = currentText.slice(0, index);
        index++;

        if (index > currentText.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                index = 0;
                currentTextIndex = (currentTextIndex + 1) % texts.length; // Pindah ke teks berikutnya
                typingInterval = setInterval(typeText, 100); // Mulai mengetik teks baru
            }, 1000); // Delay sebelum pindah ke teks berikutnya
        }
    }

    typingInterval = setInterval(typeText, 100);

    // audio
    const audioPlayer = document.getElementById('audioPlayer');

    // Fungsi untuk memulai audio
    const playAudio = () => {
        audioPlayer.play().catch(error => {
            console.log("Audio tidak dapat diputar secara otomatis:", error);
        });
    };

    // Menunggu audio untuk dimuat dan kemudian mengatur waktu
    audioPlayer.addEventListener('loadedmetadata', () => {
        // Set waktu yang diinginkan (dalam detik) saat audio pertama kali dimuat
        const startTime = 185 ; // contoh: mulai pada menit ke-1 (60 detik)
        audioPlayer.currentTime = startTime;

        // Mencoba memutar audio
        playAudio();
    });
});