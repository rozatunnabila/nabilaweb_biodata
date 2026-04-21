// HOBBY
function openHobby(type) {
  const modal = document.getElementById('hobbyModal');
  const body = document.getElementById('modalBody');
  const title = document.getElementById('modalTitle');

  if (type === 'menonton') {
    title.innerHTML = '<i class="fas fa-tv"></i> Film & Drama Favorit';
    body.innerHTML = `
      <p style="color:var(--text2); margin-bottom:20px;">Klik cover untuk menonton trailer!</p>
      <div class="movie-grid">
        <div class="movie-card" onclick="showTrailer('goblin')">
          <img src="images/cover-goblin.jpg" alt="Goblin" >
          <h4>Goblin</h4>
        </div>
        <div class="movie-card" onclick="showTrailer('crashlanding')">
          <img src="images/cover-crashlanding.jpeg" alt="Crash Landing" >
          <h4>Crash Landing on You</h4>
        </div>
        <div class="movie-card" onclick="showTrailer('isawthedevil')">
          <img src="images/cover-isawthedevil.jpg" alt="I Saw The Devil">
          <h4>I Saw The Devil</h4>
        </div>
      </div>
      <div id="trailerContainer"></div>
    `;
  } else if (type === 'memasak') {
    title.innerHTML = '<i class="fas fa-utensils"></i> Resep Favorit';
    body.innerHTML = `
      <p style="color:var(--text2); margin-bottom:20px;">Klik card untuk melihat resep lengkap!</p>
      <div class="recipe-grid">
        <div class="recipe-card" onclick="showRecipe('aglio')">
          <img src="images/aglio-olio.jpg" alt="Aglio Olio" >
          <h4>Aglio Olio</h4>
        </div>
        <div class="recipe-card" onclick="showRecipe('nasgor')">
          <img src="images/nasi-goreng.jpg" alt="Nasi Goreng" >
          <h4>Nasi Goreng</h4>
        </div>
        <div class="recipe-card" onclick="showRecipe('rendang')">
          <img src="images/rendang.jpg" alt="Rendang" >
          <h4>Rendang</h4>
        </div>
      </div>
      <div id="recipeContainer"></div>
    `;
  } else if (type === 'musik') {
    title.innerHTML = '<i class="fas fa-music"></i> Playlist Favorit';
    body.innerHTML = `
      <p style="color:var(--text2); margin-bottom:20px;">Klik untuk membuka di YouTube!</p>
      <a href="https://youtu.be/DUyvYKa7sI4" target="_blank" class="music-link">
        <i class="fab fa-youtube yt-icon"></i>
        <div class="info"><h3>Kacamata – Afgan</h3><p>Official Music Video</p></div>
        <i class="fas fa-external-link-alt" style="margin-left:auto;"></i>
      </a>
      <a href="https://youtu.be/_A43rHc-VXg" target="_blank" class="music-link">
        <i class="fab fa-youtube yt-icon"></i>
        <div class="info"><h3>Kupu-Kupu – Tiara Andini</h3><p>Official Music Video</p></div>
        <i class="fas fa-external-link-alt" style="margin-left:auto;"></i>
      </a>
      <a href="https://youtu.be/kzGzPL23XOc" target="_blank" class="music-link">
        <i class="fab fa-youtube yt-icon"></i>
        <div class="info"><h3>Sampai Menutup Mata – Mahalini</h3><p>Official Music Video</p></div>
        <i class="fas fa-external-link-alt" style="margin-left:auto;"></i>
      </a>
    `;
  } else if (type === 'membaca') {
    title.innerHTML = '<i class="fas fa-book"></i> Bacaan Favorit';
    body.innerHTML = `
      <p style="color:var(--text2); margin-bottom:20px;">Klik cover buku untuk membaca!</p>
      <div class="book-single" onclick="showPDF()">
        <img src="images/cover-cerita.jpg" alt="Cover Buku" >
        <h3>Balas Budi Burung Bangau</h3>
        <p>Klik untuk membaca cerita PDF</p>
      </div>
      <div id="bookContainer"></div>
    `;
  }

  modal.classList.add('show');
}

function closeHobby() {
  document.getElementById('hobbyModal').classList.remove('show');
}

window.showTrailer = function(movie) {
  const container = document.getElementById('trailerContainer');
  container.innerHTML = `
    <div style="margin-top:20px;">
      <button class="back-btn" onclick="document.getElementById('trailerContainer').innerHTML=''">
        <i class="fas fa-arrow-left"></i> Kembali
      </button>
      <div style="background:#000; border-radius:20px; padding:10px;">
        <p style="color:var(--text2); text-align:center; padding:40px;">
          🎬 Trailer untuk ${movie} akan diputar di sini<br>
          <small>(File video: ${movie}-trailer.mp4)</small>
        </p>
      </div>
    </div>
  `;
};

window.showRecipe = function(recipe) {
  const container = document.getElementById('recipeContainer');
  const recipes = {
    aglio: {
      title: 'Aglio Olio',
      bahan: 'Spaghetti, 5 siung bawang putih, 3 cabai rawit, minyak zaitun, parsley, garam, lada hitam.',
      cara: 'Rebus spaghetti al dente. Tumis bawang putih dan cabai dalam minyak zaitun hingga harum. Masukkan spaghetti, aduk rata. Taburi parsley dan parmesan.'
    },
    nasgor: {
      title: 'Nasi Goreng Spesial',
      bahan: 'Nasi putih, 2 telur, ayam suwir, kecap manis, bawang merah, bawang putih, kecap asin, garam.',
      cara: 'Tumis bumbu halus hingga wangi. Masukkan ayam dan telur orak-arik. Masukkan nasi, kecap, aduk rata hingga matang.'
    },
    rendang: {
      title: 'Rendang Padang',
      bahan: 'Daging sapi 500g, santan kental 500ml, bumbu rendang (jahe, lengkuas, serai, kunyit, cabe), daun jeruk.',
      cara: 'Masak daging dengan bumbu hingga empuk. Masukkan santan, masak dengan api kecil hingga mengering dan berwarna kecoklatan.'
    }
  };
  const r = recipes[recipe];
  container.innerHTML = `
    <div style="margin-top:20px;">
      <button class="back-btn" onclick="document.getElementById('recipeContainer').innerHTML=''">
        <i class="fas fa-arrow-left"></i> Kembali
      </button>
      <div style="background:rgba(124,92,191,0.1); border-radius:20px; padding:20px;">
        <h3 style="color:var(--accent-light); margin-bottom:15px;">${r.title}</h3>
        <p><strong>🥘 Bahan:</strong> ${r.bahan}</p>
        <p style="margin-top:12px;"><strong>👩‍🍳 Cara Membuat:</strong> ${r.cara}</p>
      </div>
    </div>
  `;
};

window.showPDF = function() {
  document.getElementById('bookContainer').innerHTML = `
    <div style="margin-top:20px;">
      <button class="back-btn" onclick="document.getElementById('bookContainer').innerHTML=''">
        <i class="fas fa-arrow-left"></i> Kembali
      </button>
      <div style="background:rgba(124,92,191,0.1); border-radius:20px; padding:30px; text-align:center;">
        <i class="fas fa-file-pdf" style="font-size:50px; color:#ef4444; margin-bottom:15px;"></i>
        <p>📖 Cerita "Balas Budi Burung Bangau"</p>
        <p style="font-size:14px; margin-top:20px;">Dahulu kala, ada seekor burung bangau yang membantu petani... (cerita lengkap akan tampil di sini)</p>
      </div>
    </div>
  `;
};


const images = [
  { src: 'images/kucing.jpg', caption: ' Kucing Gemas' },
  { src: 'images/family.jpg', caption: 'Momen Keluarga' },
  { src: 'images/selfie.jpg', caption: ' Selfie' },
  { src: 'images/belajar.jpg', caption: ' Saat Belajar' },
  { src: 'images/sport.jpg', caption: ' Olahraga Pagi' },
  { src: 'images/food.jpg', caption: ' Makanan Favorit' },
  { src: 'images/liburan.jpg', caption: ' Liburan' },
  { src: 'images/sunset.jpg', caption: ' Sunset' },
  { src: 'images/foto.jpg', caption: ' Foto Nongki' },
  { src: 'images/bunga.jpg', caption: ' Fresh Flower' },
  { src: 'images/shopping.jpg', caption: ' Shopping' },
  { src: 'images/friend.jpg', caption: ' My BestFriend' }
];
let current = 0;

function openLightbox(idx) {
  current = idx;
  document.getElementById('lb-img').src = images[idx].src;
  document.getElementById('lb-caption').textContent = images[idx].caption;
  document.getElementById('lightbox').classList.add('show');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
}

function navLightbox(dir) {
  current = (current + dir + images.length) % images.length;
  document.getElementById('lb-img').src = images[current].src;
  document.getElementById('lb-caption').textContent = images[current].caption;
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') navLightbox(1);
  if (e.key === 'ArrowLeft') navLightbox(-1);
  if (e.key === 'Escape') closeLightbox();
});

// ========== CONTACT / INBOX FUNCTIONS ==========
const API_BASE = 'http://localhost/prak/api/';

let currentMessages = [];
let inboxOpen = false;

// Ambil pesan dari database
async function getMessages() {
  try {
    const response = await fetch(API_BASE + 'get_message.php');
    const data = await response.json();
    return data.success ? data.messages : [];
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
}

// Simpan pesan ke database
async function saveMessageToDB(name, email, message) {
  try {
    const response = await fetch(API_BASE + 'save_message.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving message:', error);
    return { success: false, message: 'Gagal terhubung ke server. Pastikan XAMPP aktif.' };
  }
}

// Hapus pesan dari database
async function deleteMessageFromDB(id) {
  try {
    const response = await fetch(API_BASE + 'delete_message.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    return await response.json();
  } catch (error) {
    console.error('Error deleting message:', error);
    return { success: false };
  }
}

// Update badge & refresh pesan
async function updateBadge() {
  const msgs = await getMessages();
  currentMessages = msgs;
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  if (msgs.length > 0) {
    badge.style.display = 'inline-block';
    badge.textContent = msgs.length;
  } else {
    badge.style.display = 'none';
  }
  if (inboxOpen) renderMessages();
}

// Render daftar pesan di inbox
async function renderMessages() {
  const list = document.getElementById('msg-list');
  if (!list) return;
  const msgs = currentMessages;
  if (msgs.length === 0) {
    list.innerHTML = '<div class="empty-inbox"><i class="fas fa-inbox"></i><p>Belum ada pesan masuk</p></div>';
    return;
  }
  list.innerHTML = '';
  msgs.forEach(function(msg) {
    const div = document.createElement('div');
    div.className = 'msg-item';
    div.onclick = function() { showDetail(msg); };
    div.innerHTML = `
      <div class="msg-header">
        <div class="msg-name"><i class="fas fa-user-circle" style="color:#c084fc"></i> ${escapeHtml(msg.name)}</div>
      </div>
      <div class="msg-email"><i class="fas fa-envelope" style="margin-right:4px;color:#888"></i> ${escapeHtml(msg.email)}</div>
      <div class="msg-preview">${escapeHtml(msg.message.substring(0, 80))}${msg.message.length > 80 ? '...' : ''}</div>
      <div class="msg-time"><i class="far fa-clock" style="margin-right:4px"></i> ${msg.created_at}</div>
      <button class="delete-btn" onclick="event.stopPropagation(); deleteMsg(${msg.id})">
        <i class="fas fa-trash-alt"></i> Hapus
      </button>
    `;
    list.appendChild(div);
  });
}

function escapeHtml(t) {
  if (!t) return '';
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Buka modal detail pesan
function showDetail(msg) {
  document.getElementById('m-name').textContent = msg.name;
  document.getElementById('m-email').textContent = msg.email;
  document.getElementById('m-time').textContent = msg.created_at;
  document.getElementById('m-msg').textContent = msg.message;
  document.getElementById('msgModal').classList.add('show');
}

function closeModal() {
  document.getElementById('msgModal').classList.remove('show');
}

// Hapus pesan
async function deleteMsg(id) {
  if (!confirm('Yakin ingin menghapus pesan ini?')) return;
  const result = await deleteMessageFromDB(id);
  if (result.success) {
    await updateBadge();
    showAlert('success', 'Pesan berhasil dihapus!');
  } else {
    showAlert('error', 'Gagal menghapus pesan');
  }
}

// Toggle inbox buka/tutup
function toggleInbox() {
  const list = document.getElementById('msg-list');
  if (!list) return;
  inboxOpen = !inboxOpen;
  list.style.display = inboxOpen ? 'block' : 'none';
  if (inboxOpen) {
    list.innerHTML = '<div class="empty-inbox"><i class="fas fa-spinner fa-spin"></i> Memuat...</div>';
    updateBadge();
  }
}

// Tampilkan alert
function showAlert(type, text) {
  const el = document.getElementById('alertMsg');
  if (!el) return;
  el.className = 'alert alert-' + type + ' alert-show';
  el.innerHTML = '<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'exclamation-circle') + '"></i> ' + text;
  setTimeout(function() {
    el.className = 'alert';
    el.innerHTML = '';
  }, 4000);
}

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', function() {

  // Tutup hobby modal kalau klik backdrop
  const hobbyModal = document.getElementById('hobbyModal');
  if (hobbyModal) {
    hobbyModal.addEventListener('click', function(e) {
      if (e.target === this) closeHobby();
    });
  }

  // ===== FORM KIRIM PESAN =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const name = document.getElementById('c-name').value.trim();
      const email = document.getElementById('c-email').value.trim();
      const message = document.getElementById('c-msg').value.trim();
      const btn = this.querySelector('button[type="submit"]');

      if (!name || !email || !message) {
        showAlert('error', 'Harap isi semua field!');
        return;
      }

      // Loading state
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

      const result = await saveMessageToDB(name, email, message);

      if (result.success) {
        showAlert('success', result.message || 'Pesan berhasil dikirim!');
        this.reset();
        await updateBadge();
      } else {
        showAlert('error', result.message || 'Gagal mengirim pesan.');
      }

      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
    });
  }

  // Tutup modal pesan kalau klik backdrop
  const msgModal = document.getElementById('msgModal');
  if (msgModal) {
    msgModal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }

  // Load badge saat halaman dibuka
  updateBadge();

  // Profile photo fallback
  const profileImg = document.querySelector('.profile-photo-main');
  if (profileImg && profileImg.complete && profileImg.naturalWidth === 0) {
    profileImg.style.display = 'none';
    const fallback = document.getElementById('photo-fallback');
    if (fallback) fallback.style.display = 'flex';
  }

  // Smooth scroll portfolio
  const portfolioLink = document.querySelector('a[href="#portfolio"]');
  if (portfolioLink) {
    portfolioLink.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.getElementById('portfolio');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const orbit = document.getElementById('orbit');
  if (!orbit) return;

  const PROJS = [
    {
      name: "UI Design Project 1",
      desc: "Desain antarmuka interaktif dengan fokus pada user experience dan alur navigasi yang intuitif.",
      tags: ["#Figma", "#UI/UX", "#Prototype"],
      emoji: "🎨",
      img: "images/proj1.jpg",
      link: "https://www.figma.com/proto/dfLXYf04cnVFXahnbYsnpE?node-id=0-1&t=0tqMnbhUXnA8ODza-6"
    },
    {
      name: "UI Design Project 2",
      desc: "Eksplorasi desain modern dan minimalis dengan konsistensi visual dan tipografi yang bersih.",
      tags: ["#Figma", "#Design System", "#Mobile"],
      emoji: "✏️",
      img: "images/proj2.jpg",
      link: "https://www.figma.com/proto/Ph5LBOHPbzXst7rQlIQmMs?node-id=0-1&t=tRggDKrzEYvDJV7E-6"
    },
    {
      name: "UI Design Project 3",
      desc: "Prototype interaktif dengan komponen reusable, fokus aksesibilitas di berbagai perangkat.",
      tags: ["#Figma", "#Components", "#Responsive"],
      emoji: "💡",
      img: "images/proj3.jpg",
      link: "https://www.figma.com/proto/MYdfHua8trGectWjlITW3B?node-id=0-1&t=2MSt4EwmkAr73UzL-6"
    },
    {
      name: "UI Design Project 4",
      desc: "Rancangan tampilan matang yang menggabungkan estetika kuat dengan fungsionalitas tinggi.",
      tags: ["#Figma", "#Interaction", "#Visual Design"],
      emoji: "🖼️",
      img: "images/proj4.jpg",
      link: "https://www.figma.com/proto/o3mFGzH7tiCubo7fiiNSJN?node-id=22-2&t=HG0J95jprlVsO8dW-6"
    },
    {
      name: "UI Design Project 5",
      desc: "Aplikasi Belajar Bahasa Aceh.",
      tags: ["#Figma", "#Interaction", "#Visual Design"],
      emoji: "🖼️",
      img: "images/proj5.jpg",
      link: "https://www.figma.com/proto/GASjgKqbbxdEL0pucYSw1b/Project-Akhir?node-id=20-69&t=Xn2u5PFEF7thZqgw-1"
    },
    {
      name: "Calculator Project 6",
      desc: "Kalkulator.",
      tags: ["#Interaction", "#Visual Design"],
      emoji: "🖼️",
      img: "images/proj6.jpg",
      link: "https://kalkulator3options.netlify.app/"
    }
  ];

  const N = PROJS.length;
  const R = 170;

  PROJS.forEach(function(p, i) {
    const angle = i * (360 / N);
    const rad = angle * Math.PI / 180;
    const x = Math.sin(rad) * R;
    const y = -Math.cos(rad) * R;

    const slot = document.createElement('div');
    slot.className = 'card-slot';
    slot.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    slot.innerHTML = `
      <div class="proj-card-wheel">
        <img class="wheel-card-img" src="${p.img}" alt="${p.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="wheel-card-img-ph" style="display:none">${p.emoji}</div>
        <div class="wheel-card-body">
          <div class="wheel-card-name">${p.name}</div>
          <div class="wheel-card-tags">${p.tags.map(function(t) { return '<span class="wheel-ctag">' + t + '</span>'; }).join('')}</div>
        </div>
      </div>
    `;

    slot.querySelector('.proj-card-wheel').addEventListener('click', function() { openWheelPopup(i); });
    orbit.appendChild(slot);
  });

  function openWheelPopup(i) {
    const p = PROJS[i];
    orbit.classList.add('paused');

    const popupImgWrap = document.getElementById('popupImgWrap');
    if (popupImgWrap) {
      popupImgWrap.innerHTML = `
        <img class="popup-img" src="${p.img}" alt="${p.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="popup-img-ph" style="display:none">${p.emoji}</div>
      `;
    }

    const popupName = document.getElementById('popupName');
    const popupDesc = document.getElementById('popupDesc');
    const popupTags = document.getElementById('popupTags');
    const popupLink = document.getElementById('popupLink');
    const popup = document.getElementById('popup');

    if (popupName) popupName.textContent = p.name;
    if (popupDesc) popupDesc.textContent = p.desc;
    if (popupTags) popupTags.innerHTML = p.tags.map(function(t) { return '<span class="popup-tag">' + t + '</span>'; }).join('');
    if (popupLink) popupLink.href = p.link;
    if (popup) popup.classList.add('show');
  }

  function closeWheelPopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.classList.remove('show');
    orbit.classList.remove('paused');
  }

  const popupClose = document.getElementById('popupClose');
  const popup = document.getElementById('popup');

  if (popupClose) popupClose.addEventListener('click', closeWheelPopup);
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === this) closeWheelPopup();
    });
  }

}); 