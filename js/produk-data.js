/* ==========================================================================
   DATA PRODUK ASJ GROUP
   --------------------------------------------------------------------------
   Ini SATU-SATUNYA file yang perlu kamu edit untuk mengubah katalog.
   Kartu produk, halaman detail, pencarian, filter, dan data SEO
   semuanya dibuat otomatis dari daftar di bawah (oleh produk-render.js).

   ▸ MENAMBAH PRODUK
     Salin satu blok  { ... },  tempel di bawah blok terakhir (sebelum tanda ]),
     lalu ganti isinya. Pastikan tiap blok diakhiri koma.

   ▸ MENGHAPUS PRODUK
     Hapus satu blok utuh dari  {  sampai  },

   ▸ ARTI SETIAP KOLOM
     id           WAJIB. Unik, mis. "p43". Dipakai keranjang, jadi JANGAN
                  diubah untuk produk yang sudah ada.
     no           Nomor yang tampil di kartu ("No. 1A") dan di link produk
                  (produk.html?produk=1A). Tidak boleh kembar.
     kategori     WAJIB. Salah satu dari: herbisida, insektisida, fungisida,
                  pupuk, hayati, alat, perlengkapan.
     nama         WAJIB. Nama produk.
     aktif        Bahan aktif / jenis singkat (baris di bawah nama).
     klasifikasi  Golongan atau jenis produk (untuk hayati tampil "Jenis").
     kemasan      Ukuran dipisah " / "  → otomatis jadi tombol pilihan ukuran.
                  Contoh: "1 L / 5 L / 20 L"
     ringkas      Kalimat singkat di kartu produk dan di "Kegunaan".
     foto         Alamat gambar, mis. "images/A_Herbisida/1_nama.jpg".
                  Dihapus atau dikosongkan → otomatis pakai gambar sementara.
     tanaman      Kunci untuk filter "Cocok untuk tanaman". Pilihan:
                  "sawit", "padi", "jagung", "kopi", "karet", "hortikultura"
     cocokUntuk   Teks yang tampil di detail produk, mis.
                  ["Kelapa sawit", "Karet (TBM)"]
                  Dikosongkan → tampil otomatis dari kolom tanaman di atas.
     keunggulan   Daftar keunggulan di detail produk, satu kalimat per baris:
                  ["Bekerja cepat ...", "Aman untuk ..."]
                  Dikosongkan → bagian keunggulan tidak ditampilkan.
     badge        Opsional: "terlaris" atau "promo".
     baru         Opsional: true untuk produk baru.
     kataKunci    Opsional: kata tambahan agar produk mudah ditemukan lewat
                  pencarian (nama, bahan aktif, kategori, dan tanaman sudah
                  otomatis ikut dicari).

   ▸ KALAU KATALOG TIBA-TIBA KOSONG
     Hampir selalu karena ada koma atau tanda kutip (") yang terlewat.
     Tekan F12 → tab Console; pesan merahnya menunjuk baris yang salah.
   ========================================================================== */

window.ASJ_PRODUCTS = [
  /* ═══════════ HERBISIDA ═══════════ */

  // ───── 1A · Prima-Kuat 276 SL ─────
  {
    id: "p01",
    no: "1A",
    kategori: "herbisida",
    nama: "Prima-Kuat 276 SL",
    aktif: "Parakuat diklorida 276 g/l",
    klasifikasi: "Grup D",
    kemasan: "250 mL / 500 mL / 1 L / 5 L / 20 L / 200 L",
    ringkas:
      "Kontak purna tumbuh untuk mengendalikan gulma pada tanaman kelapa sawit.",
    foto: "images/A_Herbisida/1_prima-kuat-276.jpg",
    tanaman: ["sawit"],
    badge: "terlaris",
    cocokUntuk: ["Kelapa sawit"],
    keunggulan: [
      "Bekerja Secara Kontak Dengan Seluruh Bagian Tumbuhan Gulma Yang Ada Diatas Permukaan Tanah",
      "Dapat Menurunkan Biaya Penyiangan Dalam Jangka Panjang",
      "Dilakukan Dengan Penutupan Mulsa Pada Permukaan Tanah",
    ],
  },

  // ───── 2A · Omni-Top 276 SL ─────
  {
    id: "p02",
    no: "2A",
    kategori: "herbisida",
    nama: "Omni-Top 276 SL",
    aktif: "Parakuat diklorida 276 g/l",
    klasifikasi: "Grup D",
    kemasan: "4 L / 5 L",
    ringkas:
      "Larutan kontak purna tumbuh untuk gulma pada tanaman kelapa sawit.",
    foto: "images/A_Herbisida/2_omni-top-276.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 3A · Omni-Tron 150 SL ─────
  {
    id: "p03",
    no: "3A",
    kategori: "herbisida",
    nama: "Omni-Tron 150 SL",
    aktif: "Parakuat diklorida 150 g/l",
    klasifikasi: "Grup D",
    kemasan: "1 L / 5 L / 20 L",
    ringkas: "Diformulasikan untuk gulma sasaran pada tanaman kopi.",
    foto: "images/A_Herbisida/3_omni-tron-150.png",
    tanaman: ["kopi"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 4A · Omni-Xone 276 SL ─────
  {
    id: "p04",
    no: "4A",
    kategori: "herbisida",
    nama: "Omni-Xone 276 SL",
    aktif: "Parakuat diklorida 276 g/l",
    klasifikasi: "Grup D",
    kemasan: "1 L / 4 L",
    ringkas:
      "Kontak purna tumbuh, larutan berwarna cokelat, untuk gulma di kelapa sawit.",
    foto: "images/A_Herbisida/4_omni-xone-276.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 5A · Prima-Tron 135 SL ─────
  {
    id: "p05",
    no: "5A",
    kategori: "herbisida",
    nama: "Prima-Tron 135 SL",
    aktif: "Parakuat diklorida 135 g/l",
    klasifikasi: "Grup D",
    kemasan: "4 L",
    ringkas:
      "Larutan hijau tua untuk mengendalikan gulma pada tanaman kelapa sawit.",
    foto: "images/A_Herbisida/5_prima-tron-135.png",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 6A · Redzone 276 SL ─────
  {
    id: "p06",
    no: "6A",
    kategori: "herbisida",
    nama: "Redzone 276 SL",
    aktif: "Parakuat diklorida 276 g/l",
    klasifikasi: "Herbisida terbatas",
    kemasan: "4 L",
    ringkas:
      "Untuk gulma berdaun lebar & rumput pada karet (TBM) dan kelapa sawit (TBM).",
    foto: "images/A_Herbisida/6_redzone-276.jpg",
    tanaman: ["sawit", "karet"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 7A · Draxone 150 SL ─────
  {
    id: "p07",
    no: "7A",
    kategori: "herbisida",
    nama: "Draxone 150 SL",
    aktif: "Parakuat diklorida 150 g/l",
    klasifikasi: "Herbisida terbatas",
    kemasan: "4 L",
    ringkas:
      "Herbisida kontak purna tumbuh untuk gulma berdaun lebar dan rumput di sawit.",
    foto: "images/A_Herbisida/7_draxone-150.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 8A · Deltaxone 280 SL ─────
  {
    id: "p08",
    no: "8A",
    kategori: "herbisida",
    nama: "Deltaxone 280 SL",
    aktif: "Parakuat diklorida 280 g/l",
    klasifikasi: "Herbisida",
    kemasan: "4 L",
    ringkas:
      "Kontak purna tumbuh untuk gulma berdaun lebar & sempit pada kelapa sawit.",
    foto: "images/A_Herbisida/8_deltaxone-280.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 9A · Glist Up 480 SL ─────
  {
    id: "p09",
    no: "9A",
    kategori: "herbisida",
    nama: "Glist Up 480 SL",
    aktif: "Isopropilamina glifosat 480 g/l",
    klasifikasi: "Grup G",
    kemasan: "10 L",
    ringkas:
      "Sistemik purna tumbuh untuk gulma rumput & berdaun lebar di kelapa sawit.",
    foto: "images/A_Herbisida/9_glistup-480.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 10A · Block Up 480 SL ─────
  {
    id: "p10",
    no: "10A",
    kategori: "herbisida",
    nama: "Block Up 480 SL",
    aktif: "Isopropil amina glifosat 480 g/l",
    klasifikasi: "Grup G",
    kemasan: "4 L",
    ringkas:
      "Sistemik purna tumbuh untuk gulma pada karet (TBM) dan kelapa sawit (TBM).",
    foto: "images/A_Herbisida/10_blockup-480.jpg",
    tanaman: ["sawit", "karet"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 11A · Penta So-Z 505 SL ─────
  {
    id: "p11",
    no: "11A",
    kategori: "herbisida",
    nama: "Penta So-Z 505 SL",
    aktif: "IPA Glifosat 505 g/l",
    klasifikasi: "Grup G",
    kemasan: "1 L / 4 L",
    ringkas:
      "Sistemik purna tumbuh, larutan kuning keemasan, untuk gulma di kelapa sawit.",
    foto: "images/A_Herbisida/11_pentasoz-505.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 12A · Penta Up-Z 480 SL ─────
  {
    id: "p12",
    no: "12A",
    kategori: "herbisida",
    nama: "Penta Up-Z 480 SL",
    aktif: "IPA Glifosat 480 g/l",
    klasifikasi: "Grup G",
    kemasan: "1 L / 4 L",
    ringkas: "Untuk gulma pada tanaman kelapa sawit dan padi.",
    foto: "images/A_Herbisida/12_pentaupz-480.jpg",
    tanaman: ["sawit", "padi"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 13A · Rindom 555 SL ─────
  {
    id: "p13",
    no: "13A",
    kategori: "herbisida",
    nama: "Rindom 555 SL",
    aktif: "Isopropil Amina Glifosat 555 g/l",
    klasifikasi: "Grup G",
    kemasan: "1 L / 4 L / 10 L",
    ringkas:
      "Sistemik purna tumbuh untuk gulma berdaun lebar & rumput pada sawit (TBM).",
    foto: "images/A_Herbisida/13_rindom-555.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 14A · Galakuat 276 SL ─────
  {
    id: "p14",
    no: "14A",
    kategori: "herbisida",
    nama: "Galakuat 276 SL",
    aktif: "Parakuat diklorida 276 g/l",
    klasifikasi: "Grup D",
    kemasan: "10 L",
    ringkas:
      "Kontak purna tumbuh untuk gulma berdaun lebar & rumput di sawit (TBM).",
    foto: "images/A_Herbisida/14_galakuat-276.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 15A · Tangkas 480 SL ─────
  {
    id: "p15",
    no: "15A",
    kategori: "herbisida",
    nama: "Tangkas 480 SL",
    aktif: "Isopropil amina glifosat 480 g/l",
    klasifikasi: "Sistemik purna tumbuh",
    kemasan: "10 L",
    ringkas:
      "Untuk gulma pada budidaya jagung (TOT), padi tanam benih (TOT), karet & kelapa sawit belum menghasilkan.",
    foto: "images/A_Herbisida/15_tangkas-480.jpg",
    tanaman: ["sawit", "padi", "jagung", "karet"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 16A · Insta Max 240 SL ─────
  {
    id: "p16",
    no: "16A",
    kategori: "herbisida",
    nama: "Insta Max 240 SL",
    aktif: "Amonium glufosinat 240 g/l",
    klasifikasi: "Grup H",
    kemasan: "1 L",
    ringkas: "Cara instan dan maksimal memberantas gulma sampai akarnya.",
    foto: "images/A_Herbisida/16_instamax-240.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    badge: "promo",
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 17A · Omni-Best 200 SL ─────
  {
    id: "p17",
    no: "17A",
    kategori: "herbisida",
    nama: "Omni-Best 200 SL",
    aktif: "Amonium Glufosinat 200 g/l",
    klasifikasi: "Grup H",
    kemasan: "1 L / 5 L / 20 L",
    ringkas: "Sistemik purna tumbuh untuk gulma pada tanaman kelapa sawit.",
    foto: "images/A_Herbisida/17_omnibest-200.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 18A · Bufos 150 SL ─────
  {
    id: "p18",
    no: "18A",
    kategori: "herbisida",
    nama: "Bufos 150 SL",
    aktif: "Amonium glufosinat 150 g/l",
    klasifikasi: "Grup H",
    kemasan: "1 L",
    ringkas:
      "Herbisida sistemik purna kontak untuk gulma di sela tanaman & pekarangan.",
    foto: "images/A_Herbisida/18_bufos-150.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 19A · Prima-Guard 480 EC ─────
  {
    id: "p19",
    no: "19A",
    kategori: "herbisida",
    nama: "Prima-Guard 480 EC",
    aktif: "Triklopir 480 g/l",
    klasifikasi: "Grup O",
    kemasan: "100 ml",
    ringkas:
      "Sistemik selektif berbentuk pekatan untuk mengendalikan gulma di kelapa sawit.",
    foto: "images/A_Herbisida/19_primaguard-480.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 20A · Omni-Guard 670 EC ─────
  {
    id: "p20",
    no: "20A",
    kategori: "herbisida",
    nama: "Omni-Guard 670 EC",
    aktif: "Triklopir butoksi etil ester 670 g/l",
    klasifikasi: "Grup O",
    kemasan: "100 ml",
    ringkas:
      "Sistemik selektif pekatan warna cokelat tua untuk gulma di kelapa sawit.",
    foto: "images/A_Herbisida/20_omniguard-670.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 21A · Metalon 667 EC ─────
  {
    id: "p21",
    no: "21A",
    kategori: "herbisida",
    nama: "Metalon 667 EC",
    aktif: "Triklopir butiletil ester 667 g/l",
    klasifikasi: "Grup O",
    kemasan: "100 ml / 4 L",
    ringkas:
      "Sistemik selektif untuk gulma berdaun lebar pada budidaya kelapa sawit (TBM).",
    foto: "images/A_Herbisida/21_metalon-667.jpg",
    tanaman: ["sawit"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 22A · Yuta-Quat 138 SL ─────
  {
    id: "p22",
    no: "22A",
    kategori: "herbisida",
    nama: "Yuta-Quat 138 SL",
    aktif: "Parakuat diklorida 138 g/l",
    klasifikasi: "Grup D",
    kemasan: "4 L",
    ringkas:
      "Kontak purna tumbuh berbentuk larutan dalam air untuk gulma perkebunan.",
    foto: "images/A_Herbisida/22_yutaquat-138.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 23A · Jayaris 240 SL ─────
  {
    id: "p23",
    no: "23A",
    kategori: "herbisida",
    nama: "Jayaris 240 SL",
    aktif: "Bahan aktif sistemik", // ⚠ ganti dengan nama bahan aktif yang sebenarnya
    klasifikasi: "Herbisida",
    kemasan: "4 L",
    ringkas:
      "Herbisida sistemik purna tumbuh untuk pengendalian gulma perkebunan.",
    foto: "images/A_Herbisida/23_jayaris-240.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  /* ═══════════ INSEKTISIDA ═══════════ */

  // ───── 1B · Omni-Fur 3 GR ─────
  {
    id: "p24",
    no: "1B",
    kategori: "insektisida",
    nama: "Omni-Fur 3 GR",
    aktif: "Karbofuran 3%",
    klasifikasi: "Grup 1A",
    kemasan: "Butiran",
    ringkas:
      "Sistemik kontak & lambung, berbentuk butiran ungu, untuk hama pada tanaman padi.",
    foto: "images/B_Insektisida/1_omnifur-3gr.jpg",
    tanaman: ["padi"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 2B · Omni-Net 40 SP ─────
  {
    id: "p25",
    no: "2B",
    kategori: "insektisida",
    nama: "Omni-Net 40 SP",
    aktif: "Metomil 40%",
    klasifikasi: "Grup 1A",
    kemasan: "100 g",
    ringkas:
      "Kontak & lambung berbentuk tepung untuk hama pada tanaman bawang merah.",
    foto: "images/B_Insektisida/2_omninet-40sp.jpg",
    tanaman: ["hortikultura"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 3B · Prima-Hipo 400 SL ─────
  {
    id: "p26",
    no: "3B",
    kategori: "insektisida",
    nama: "Prima-Hipo 400 SL",
    aktif: "Dimehipo 400 g/l",
    klasifikasi: "Grup 1A",
    kemasan: "500 ml",
    ringkas:
      "Sistemik kontak & lambung berwarna merah untuk hama pada tanaman padi.",
    foto: "images/B_Insektisida/3_primahipo-400.jpg",
    tanaman: ["padi"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 4B · Prima-Pro 55 SC ─────
  {
    id: "p27",
    no: "4B",
    kategori: "insektisida",
    nama: "Prima-Pro 55 SC",
    aktif: "Fipronil 55 g/l",
    klasifikasi: "Grup 2B",
    kemasan: "100 ml",
    ringkas:
      "Racun kontak & lambung berbentuk pekatan untuk hama pada cabai dan padi.",
    foto: "images/B_Insektisida/4_primapro-55sc.jpg",
    tanaman: ["padi", "hortikultura"],
    cocokUntuk: [],
    keunggulan: [],
  },

  /* ═══════════ FUNGISIDA ═══════════ */

  // ───── 1C · Prima-Zol 250 EC ─────
  {
    id: "p28",
    no: "1C",
    kategori: "fungisida",
    nama: "Prima-Zol 250 EC",
    aktif: "Difenokonazol 250 g/l",
    klasifikasi: "Grup C — Fungisida + ZPT",
    kemasan: "100 ml",
    ringkas:
      "Sistemik berbentuk pekatan cokelat untuk mengendalikan penyakit pada tanaman padi.",
    foto: "images/C_Fungisida/1_primazol-250.jpg",
    tanaman: ["padi"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 2C · Prima-Col 70 WP ─────
  {
    id: "p29",
    no: "2C",
    kategori: "fungisida",
    nama: "Prima-Col 70 WP",
    aktif: "Propineb 70%",
    klasifikasi: "Grup M03",
    kemasan: "200 g",
    ringkas:
      "Kontak protektif berbentuk tepung hijau untuk penyakit pada tanaman padi.",
    foto: "images/C_Fungisida/2_primacol-70wp.jpg",
    tanaman: ["padi"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 3C · Primafos 400 SL ─────
  {
    id: "p30",
    no: "3C",
    kategori: "fungisida",
    nama: "Primafos 400 SL",
    aktif: "Asam fosfit 400 g/l",
    klasifikasi: "Fungisida",
    kemasan: "500 ml",
    ringkas: "Fungisida untuk perlindungan tanaman dari penyakit jamur.",
    foto: "images/C_Fungisida/3_primafos-400.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  /* ═══════════ PUPUK ═══════════ */

  // ───── 1D · Kanitrat NPK 12-0-44 ─────
  {
    id: "p31",
    no: "1D",
    kategori: "pupuk",
    nama: "Kanitrat NPK 12-0-44",
    aktif: "Pupuk majemuk KN03",
    klasifikasi: "Nitrogen & Kalium",
    kemasan: "1 kg",
    ringkas:
      "Mudah larut dan diserap tanaman, aman diaplikasikan lewat penyemprotan.",
    foto: "images/D_Pupuk/1_kanitrat-npk.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 2D · Mekarmap N 12 — P₂O₅ 61 ─────
  {
    id: "p32",
    no: "2D",
    kategori: "pupuk",
    nama: "Mekarmap N 12 — P₂O₅ 61",
    aktif: "Pupuk makro majemuk",
    klasifikasi: "Hara makro",
    kemasan: "1 kg",
    ringkas:
      "Pupuk makro majemuk untuk mendukung pertumbuhan generatif tanaman.",
    foto: "images/D_Pupuk/2_Mekarmap-npk.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 3D · MaxxiGro-D NPK 30-6-6 ─────
  {
    id: "p33",
    no: "3D",
    kategori: "pupuk",
    nama: "MaxxiGro-D NPK 30-6-6",
    aktif: "Pupuk daun serbaguna",
    klasifikasi: "Hara mikro lengkap",
    kemasan: "1 kg",
    ringkas:
      "Pupuk daun untuk padi, jagung, kedelai, sayur-buah, dan tanaman hias.",
    foto: "images/D_Pupuk/3_maxxigro-npk.jpg",
    tanaman: ["padi", "jagung", "hortikultura"],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 4D · Wokozim Aktivator ─────
  {
    id: "p34",
    no: "4D",
    kategori: "pupuk",
    nama: "Wokozim Aktivator",
    aktif: "Pupuk organik cair",
    klasifikasi: "Aktivator",
    kemasan: "Botol",
    ringkas:
      "Pupuk organik cair sebagai aktivator pertumbuhan akar dan tanaman.",
    foto: "images/D_Pupuk/4_wokozim-poc.jpg",
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    cocokUntuk: [],
    keunggulan: [],
  },

  /* ═══════════ ALAT SEMPROT ═══════════ */

  // ───── 35 · Jitu 16 Electric Sprayer ─────
  {
    id: "p35",
    no: "35",
    kategori: "alat",
    nama: "Jitu 16 Electric Sprayer",
    aktif: "Sprayer elektrik 2-in-1",
    klasifikasi: "Ber-SNI",
    kemasan: "16 L",
    ringkas:
      "Alarm baterai & stop kran otomatis, tekanan tinggi untuk kebun dan sawah.",
    foto: "images/Alat Semprot/jitu-16l-electric.jpg",
    tanaman: [],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 36 · Jitu Alat Kocor Manual ─────
  {
    id: "p36",
    no: "36",
    kategori: "alat",
    nama: "Jitu Alat Kocor Manual",
    aktif: "Sprayer manual punggung",
    klasifikasi: "—",
    kemasan: "20 L",
    ringkas:
      "Sprayer manual kapasitas besar, cocok untuk area tanam yang luas.",
    foto: "images/Alat Semprot/jitu-20l-manual.jpg",
    tanaman: [],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 37 · Hand Pressure Sprayer ─────
  {
    id: "p37",
    no: "37",
    kategori: "alat",
    nama: "Hand Pressure Sprayer",
    aktif: "Sprayer tekan tangan",
    klasifikasi: "Household & pertanian ringan",
    kemasan: "1.5–2 L",
    ringkas:
      "Praktis untuk penyemprotan skala kecil, kebun rumah, dan tanaman hias.",
    foto: "images/Alat Semprot/hand-sprayer.jpg",
    tanaman: [],
    cocokUntuk: [],
    keunggulan: [],
  },

  /* ═══════════ PERLENGKAPAN ═══════════ */

  // ───── 38 · Plastik Mulsa Dewi Sri ─────
  {
    id: "p38",
    no: "38",
    kategori: "perlengkapan",
    nama: "Plastik Mulsa Dewi Sri",
    aktif: "Plastik hitam perak, kuat & elastis",
    klasifikasi: "Jaminan mutu",
    kemasan: "Roll 60×035",
    ringkas:
      "Menekan pertumbuhan gulma dan menjaga kelembapan tanah pada bedengan.",
    foto: "images/Perlengkapan/plastik-mulsa.jpg",
    tanaman: [],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 39 · Tali Rafia Pertanian ─────
  {
    id: "p39",
    no: "39",
    kategori: "perlengkapan",
    nama: "Tali Rafia Pertanian",
    aktif: "Tali rafia serbaguna",
    klasifikasi: "No. 2600",
    kemasan: "1 kg / 1.4 kg",
    ringkas:
      "Tali rafia kualitas tinggi untuk ikat tanaman dan keperluan kebun.",
    foto: "images/Perlengkapan/tali-rafia.jpg",
    tanaman: [],
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 40 · Polybag PE ─────
  {
    id: "p40",
    no: "40",
    kategori: "perlengkapan",
    nama: "Polybag PE",
    aktif: "Polybag semai",
    klasifikasi: "Berkualitas & ekonomis",
    kemasan: "0.12 × 25 cm",
    ringkas:
      "Polybag pembibitan untuk persemaian tanaman perkebunan dan hortikultura.",
    foto: "images/Perlengkapan/polybag-pe.jpg",
    tanaman: ["hortikultura"],
    cocokUntuk: [],
    keunggulan: [],
  },

  /* ═══════════ HAYATI (PRODUK BARU) ═══════════ */

  // ───── 41 · Trichoderma ─────
  {
    id: "p41",
    no: "41",
    kategori: "hayati",
    nama: "Trichoderma",
    aktif: "Agen hayati berbasis fungi",
    klasifikasi: "Agen hayati",
    kemasan: "Konfirmasi admin",
    ringkas:
      "Mendukung kesehatan media tanam dan pengelolaan penyakit tular tanah. Detail merek, formulasi, dan dosis akan dilengkapi setelah data produk diterima.",
    // foto: belum ada → otomatis memakai gambar sementara
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    baru: true,
    kataKunci: "pupuk biologis",
    cocokUntuk: [],
    keunggulan: [],
  },

  // ───── 42 · Mikoriza ─────
  {
    id: "p42",
    no: "42",
    kategori: "hayati",
    nama: "Mikoriza",
    aktif: "Inokulan fungi perakaran",
    klasifikasi: "Agen hayati",
    kemasan: "Konfirmasi admin",
    ringkas:
      "Mendukung perkembangan perakaran dan penyerapan unsur hara. Detail merek, formulasi, dan dosis akan dilengkapi setelah data produk diterima.",
    // foto: belum ada → otomatis memakai gambar sementara
    tanaman: [], // belum diisi → isi agar muncul di filter tanaman
    baru: true,
    kataKunci: "pupuk biologis",
    cocokUntuk: [],
    keunggulan: [],
  },
];
