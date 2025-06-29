    // Tambah emoji ke textarea
    document.querySelectorAll('.emoji').forEach(btn => {
      btn.onclick = () => {
        const emoji = btn.textContent;
        document.getElementById('loveMessage').value += emoji;
      };
    });

    // Kirim WhatsApp
    document.getElementById('sendToWhatsApp').onclick = () => {
      const msg = document.getElementById('loveMessage').value.trim();
      if (!msg) return alert('Tulis pesan dulu!');
      const encoded = encodeURIComponent(msg);
      const number = '6285717188404';
      window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
    };

    // Navigasi aktif dan scroll ke section
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Hapus warna dari semua tombol
        navButtons.forEach(btn => btn.classList.remove('bg-pink-500', 'text-white'));
        // Tambah warna ke tombol yang diklik
        this.classList.add('bg-pink-500', 'text-white');

        // Scroll ke bagian tujuan
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

