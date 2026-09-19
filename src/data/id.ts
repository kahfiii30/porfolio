export const portfolioData = {
  hero: {
    eyebrow: "Abdul Azis Al Kahfi\n— Marketing & Operations",
    headline: "Kreatif.\nSistematis.\nBerorientasi\nHasil.",
    description:
      "Seorang pemasar digital dan pekerja kreatif yang mengeksplorasi\nirisan antara strategi, konten, AI,\notomatisasi, dan produk digital.",
    status: "Terbuka untuk Kolaborasi / Pekerjaan",
  },
  marquee: [
    "DIGITAL MARKETING",
    "SOCIAL MEDIA",
    "CREATIVE STRATEGY",
    "AI",
    "AUTOMATION",
    "DIGITAL PRODUCTS",
    "OPERATIONS",
  ],
  coreCompetencies: {
    title: "OPERATOR MARKETING.\nBUKAN SEKADAR\nPEMBUAT KONTEN.",
    subtitle: "Pendekatan saya menghubungkan konten kreatif dengan distribusi,\npercakapan pelanggan, dan sistem penjualan.",
    groups: [
      { id: "01", name: "SOSIAL & KONTEN", skills: ["Perencanaan Konten", "Arahan Kreatif", "Copywriting"], description: "Membangun narasi dan visual yang menarik perhatian." },
      { id: "02", name: "PERFORMA", skills: ["Meta Ads", "Targeting Audiens", "Optimasi Anggaran"], description: "Mengubah perhatian menjadi lalu lintas dan jangkauan baru." },
      { id: "03", name: "KONVERSI", skills: ["Komunikasi Chat", "Manajemen Prospek", "Operasional Penjualan"], description: "Menutup penjualan dan merawat percakapan pelanggan." },
      { id: "04", name: "SISTEM", skills: ["Otomatisasi AI", "Analisis Data", "Produk Digital"], description: "Mengukur hasil dan membangun alur kerja otomatis." }
    ]
  },
  notJustContent: {
    title: "BUKAN HANYA\nKONTEN.",
    copy: "Saya bekerja di seluruh jalur:\n\nKONTEN\n→ DISTRIBUSI\n→ PERCAKAPAN\n→ KONVERSI\n→ DATA\n→ ITERASI\n\nLatar belakang saya di penjualan\nmembantu saya memahami\napa yang terjadi setelah seseorang\nmelihat konten."
  },
  about: {
    statement: "TIDAK HANYA\nSATU DISIPLIN.",
    description: `Saya memulai karir dari bidang layanan pelanggan dan ritel,
lalu perlahan bergerak lebih dalam ke dunia pemasaran,
konten, operasi digital, desain, dan teknologi.

Saat ini, saya menikmati memecahkan masalah di mana
pemikiran kreatif bertemu dengan eksekusi.

Mulai dari mengembangkan ide kampanye pemasaran,
mengelola media sosial,
merapikan data operasional,
hingga bereksperimen dengan otomatisasi AI
dan produk digital.

Saya sangat tertarik pada satu pertanyaan:

"Bagaimana teknologi dapat membuat pemasaran dan bisnis
bekerja dengan lebih cerdas?"`,
  },
  projects: [
    {
      id: "og-store",
      title: "OG STORE SAMARINDA\n8.74 jt Tayangan\n+2.740 Pengikut\n97–98% Respons",
      category: "Social Media · Meta Ads · Conversion",
      shortDescription: "Connecting content, paid distribution,\ncustomer conversations and conversion\nfor a multi-branch gadget retailer.",
      slug: "og-store",
      image: "/images/projects/ogstore.png",
      workedOn: ["Konten", "Kampanye", "Kreatif", "Operasional"],
      responsibilities: [
        "Perencanaan konten media sosial",
        "Konsep kampanye promosi",
        "Kreatif promosi produk",
        "Konten Instagram Story / Feed / Carousel",
        "Copywriting promosi",
        "Pencarian ide kampanye",
        "Manajemen informasi produk",
        "Dukungan marketplace",
        "Konten Google Business / Maps",
        "Pemrosesan data inventaris dan cabang",
        "Komunikasi promosi dan leasing",
      ],
      context:
        "OG Store mengoperasikan beberapa cabang ritel gadget di Samarinda dan menangani promosi produk yang bergerak cepat.\n\nTantangannya bukan hanya membuat konten, tetapi juga mengkomunikasikan perubahan harga, ketersediaan stok, informasi cabang, opsi kredit, dan urgensi promosi dengan jelas.",
      challenges: [
        "volume promosi produk yang tinggi",
        "harga produk yang sering berubah",
        "informasi dari banyak cabang",
        "menjaga konsistensi visual merek",
        "menghindari konten promosi yang terlalu berulang",
        "menyeimbangkan urgensi dengan kemudahan membaca",
      ],
      role: [
        "Eksekusi kreatif",
        "Perencanaan konten",
        "Dukungan pemasaran",
        "Copywriting promosi",
        "Arahan visual",
        "Pengorganisasian data produk",
      ],
    },
    {
      id: "kahfi-audit",
      title: "MARKETING\nTAK SEHARUSNYA\nDIMULAI DARI KONTEN.",
      category: "Marketing Strategy • Business Diagnosis • UMKM",
      shortDescription: "Diagnosis dulu. Lingkup kerja kedua. Eksekusi ketiga.",
      slug: "kahfi-audit",
      image: "/images/projects/audit.png",
      description:
        "Kahfi Audit Marketing adalah proyek independen yang berfokus membantu bisnis kecil memahami masalah di seluruh perjalanan pelanggan digital mereka.",
      areas: [
        "Google Maps",
        "Instagram",
        "Penawaran (Offer)",
        "Website",
        "WhatsApp",
        "Tindak Lanjut (Follow-up)",
      ],
      link: "https://kahfi-audit-marketing.vercel.app",
    },
    {
      id: "wealthpilot",
      title: "WEALTHPILOT",
      category: "Personal Project • Fintech Concept • Web Application",
      shortDescription:
        "Konsep aplikasi web keuangan pribadi yang dirancang untuk membantu pengguna memahami posisi keuangan mereka dengan lebih jelas.",
      slug: "wealthpilot",
      image: "/images/projects/wealthpilot.png",
      features: [
        "Pelacakan keuangan bulanan",
        "Pelacakan utang",
        "Piutang",
        "Ringkasan keuangan",
        "Wawasan AI Pintar",
      ],
      tech: ["GitHub", "Vercel", "Supabase", "Web Application"],
      note: "Eksperimen produk / proyek pribadi.",
      link: "https://hitoshi.vercel.app/",
    },
    {
      id: "hitoshi-studio",
      title: "HITOSHI STUDIO",
      category: "Creative Business Experiment • Branding • Web • Social Media",
      shortDescription:
        "Konsep layanan kreatif pribadi yang berfokus membantu individu dan bisnis kecil meningkatkan kehadiran digital mereka.",
      slug: "hitoshi-studio",
      areas: [
        "Desain feed Instagram",
        "Branding visual",
        "Website portofolio",
        "Website pribadi",
        "Pengemasan layanan",
        "Positioning digital",
      ],
      image: "/images/projects/hitoshistudio.jpeg",
      link: "https://hitoshistudio.my.id",
    },
  ],
  capabilities: [
    {
      title: "STRATEGI",
      items: [
        "Strategi Konten",
        "Perencanaan Kampanye",
        "Riset Pemasaran",
        "Perjalanan Pelanggan",
      ],
    },
    {
      title: "KREATIF",
      items: [
        "Konten",
        "Arahan Kreatif",
        "Copywriting",
        "Kreatif Promosi",
      ],
    },
    {
      title: "PERFORMA",
      items: [
        "Meta Ads",
        "Pengujian Kreatif",
        "Target Audiens",
        "CTR • CPC • CPM",
        "Konversi • ROAS",
      ],
    },
    {
      title: "TEKNOLOGI & OTOMATISASI",
      items: [
        "AI",
        "n8n",
        "GitHub",
        "Vercel",
        "Supabase",
        "Otomatisasi",
      ],
    },
  ],
  tools: [
    "Canva",
    "ChatGPT",
    "Claude",
    "GitHub",
    "Vercel",
    "Supabase",
    "n8n",
    "Google Sheets",
    "Instagram",
    "WhatsApp",
    "Alat Marketplace",
  ],
  toolsConfig: {
    title: "ALAT YANG SAYA GUNAKAN",
    categories: [
      { name: "MARKETING", tools: ["Meta Ads Manager", "Meta Business Suite", "Instagram", "WhatsApp Business"] },
      { name: "KONTEN & KREATIF", tools: ["Canva", "ChatGPT", "Claude"] },
      { name: "AI & ALUR KERJA", tools: ["n8n", "Hermes", "OpenClaw"] },
      { name: "OPERASIONAL", tools: ["Google Sheets"] },
      { name: "PRODUK DIGITAL", tools: ["GitHub", "Vercel", "Supabase"] }
    ]
  },

  experience: [
    {
      title: "OG STORE SAMARINDA",
      role: "Media Sosial / Pemasaran / Operasional Digital",
      period: "Saat Ini / Baru Saja",
      responsibilities:
        "Mendukung pemasaran digital, perencanaan konten, dan operasional kreatif di berbagai cabang ritel gadget. Mengelola kampanye promosi, pengorganisasian data produk, dan arahan visual.",
    },
    {
      title: "PT INTINYA TEKNOLOGI — SELFIE TIME",
      role: "Sales Promotion Boy",
      period: "April 2024 — Juni 2025",
      highlight: "Terpilih sebagai Staf Favorit #3 di 60 cabang toko.",
      responsibilities:
        "Promosi produk, penjelasan produk, interaksi pelanggan, merchandising, dan presentasi produk.",
    },
    {
      title: "RM AMADO — SAMARINDA",
      role: "Staf Food & Beverage",
      period: "Maret 2023 — April 2024",
      responsibilities:
        "Layanan pelanggan, operasional bertekanan tinggi, dan kolaborasi tim.",
    },
  ],
  careerStory: {
    headline: "DARI MENJUAL\nPRODUK\nHINGGA MEMBANGUN\nSISTEM DIGITAL.",
    narrative: `Karir saya tidak dimulai di bidang teknologi.

Saya memulainya dengan bekerja langsung berhadapan dengan pelanggan.

Pengalaman tersebut mengajarkan saya bagaimana orang bertanya,
ragu, membandingkan, memutuskan, dan membeli.

Seiring berjalannya waktu, minat saya bergerak menuju sistem
di balik keputusan-keputusan tersebut:

pemasaran,
konten,
desain,
data,
otomatisasi,
dan produk digital.

Saya masih terus belajar.

Tetapi saya lebih suka belajar dengan cara membangun sesuatu.`,
  },
  lab: [
    {
      title: "01 — Otomatisasi AI",
      subtitle: "Membangun alur kerja yang mengurangi pekerjaan berulang.",
      slug: "ai-automation",
    },
    {
      title: "02 — Produk Digital",
      subtitle: "Mengubah ide menjadi alat digital yang bisa digunakan.",
      slug: "digital-products",
    },
    {
      title: "03 — Sistem Pemasaran",
      subtitle: "Menghubungkan strategi, konten, corong (funnel), dan eksekusi.",
      slug: "marketing-systems",
    },
    {
      title: "04 — Meta Ads & Performa",
      subtitle: "Persiapan kampanye, uji kreatif, dan analisis performa.",
      slug: "meta-ads",
    },
    {
      title: "05 — Eksperimen Web",
      subtitle: "Belajar dengan cara membangun dan meluncurkan karya.",
      slug: "web-experiments",
    },
  ],
  philosophy: {
    quote:
      "“SAYA TIDAK INGIN MENGGUNAKAN AI\nHANYA UNTUK MEMPRODUKSI LEBIH BANYAK.\n\nSAYA INGIN MENGGUNAKANNYA\nUNTUK BERPIKIR DAN BEKERJA LEBIH BAIK.”",
    description:
      "AI hanyalah sebuah alat.\nNilai sesungguhnya tetap berasal dari pemahaman\ntentang masalah apa yang layak diselesaikan.",
  },
  principles: [
    {
      number: "01",
      title: "PAHAMI DULU",
      description:
        "Jangan membuat sesuatu sebelum memahami\nmasalah bisnis yang sebenarnya.",
    },
    {
      number: "02",
      title: "BUAT MENJADI JELAS",
      description:
        "Komunikasi yang baik seharusnya mengurangi kebingungan,\nbukan sekadar menambah dekorasi semata.",
    },
    {
      number: "03",
      title: "BANGUN & ULANGI",
      description:
        "Ide baru menjadi bernilai setelah diuji,\ndiamati, dan ditingkatkan.",
    },
  ],
  contact: {
    headline: "PUNYA MASALAH\nYANG LAYAK\nDISELESAIKAN?",
    subheading:
      "Saya terbuka untuk peluang,\nproyek, kolaborasi,\ndan obrolan seputar pemasaran,\npekerjaan kreatif, AI, dan produk digital.",
    email: "kulbetfiii@gmail.com",
    whatsapp: "6285828218908",
    linkedin: "",
    github: "https://github.com/kahfiii30",
    location: ["Samarinda", "Kalimantan Timur", "Indonesia"],
  },
  labSection: {
    title: "THE LAB.",
    subtitle: "Hal-hal yang saya bangun untuk memahami apa yang akan datang selanjutnya."
  },
  labPages: {
    aiAutomation: {
      title: "OTOMATISASI AI",
      subtitle: "Menggunakan otomatisasi untuk mengurangi pekerjaan berulang dan menghubungkan berbagai alat.",
      section1Title: "01 / Konsep",
      section1Text: "Saya mengeksplorasi otomatisasi AI bukan sebagai insinyur perangkat lunak perusahaan, melainkan sebagai pemasar dan operator yang ingin menyelesaikan hambatan sehari-hari.\n\nFokus utamanya adalah pada alur kerja pragmatis: mengambil data dari satu tempat, memprosesnya dengan AI untuk mengekstrak makna, dan merutekannya ke tempat yang dibutuhkan—baik itu ke dashboard, aplikasi pesan, atau jadwal konten.",
      section2Title: "02 / Alat & Eksplorasi",
      tools: [
        { name: "Alur Kerja n8n", desc: "Membangun otomatisasi berbasis node kustom untuk menghubungkan API eksternal, mengelola webhook, dan memicu tugas latar belakang tanpa skrip manual yang berat." },
        { name: "Telegram & WhatsApp", desc: "Membuat konsep alur kerja di mana notifikasi, ringkasan data, dan tindakan cepat diarahkan langsung ke aplikasi pesan untuk visibilitas operasional instan." },
        { name: "Agen AI", desc: "Bereksperimen dengan agen otonom yang dapat menafsirkan permintaan pengguna yang ambigu, mengeksekusi logika multi-langkah, dan memformat data untuk kasus penggunaan bisnis." },
        { name: "Otomatisasi Konten", desc: "Jalur kerja (pipelines) yang mengambil tren, mengumpulkan wawasan, dan menghasilkan draf untuk mempercepat proses kreatif, bukan untuk menggantikannya sepenuhnya." }
      ],
      next: "Produk Digital"
    },
    digitalProducts: {
      title: "PRODUK DIGITAL",
      subtitle: "Mengubah ide menjadi alat digital yang bisa digunakan dan bereksperimen dengan antarmuka.",
      projects: [
        {
          title: "WealthPilot",
          idea: "Visualisasi keuangan pribadi.",
          problem: "Sebagian besar aplikasi keuangan terlalu rumit (seperti spreadsheet) atau terlalu sederhana. Pengguna kesulitan memahami nilai kekayaan bersih dan tren arus kas mereka yang sebenarnya.",
          solution: "Dashboard fintech mode gelap yang ramping yang secara otomatis memvisualisasikan kekayaan bersih, mengkategorikan pengeluaran, dan menyoroti tren 6 bulan.",
          tech: "React, Next.js, Desain UI/UX",
          learned: "Merancang dashboard data yang padat membutuhkan hierarki tipografi yang ketat dan palet warna yang sangat terbatas untuk menghindari kesan berlebihan bagi pengguna."
        },
        {
          title: "Sampride",
          idea: "Daftar periksa produktivitas minimalis.",
          problem: "Aplikasi to-do tradisional memperkenalkan terlalu banyak hambatan dengan tenggat waktu, tag, dan folder, menyebabkan pengguna mengabaikannya.",
          solution: "Daftar periksa bebas hambatan dan premium secara visual yang berfokus hanya pada apa yang perlu dilakukan hari ini, tanpa perlu pengaturan.",
          tech: "Teknologi Web, Desain Antarmuka",
          learned: "Mengurangi fitur seringkali jauh lebih sulit daripada menambahkannya. Nuansa premium berasal dari ruang kosong (whitespace) yang luas dan interaksi yang cair, bukan fungsionalitas yang kompleks."
        },
        {
          title: "Kahfi Audit Marketing",
          idea: "Diagnosis bisnis interaktif.",
          problem: "Bisnis kecil tahu bahwa mereka membutuhkan pemasaran, tetapi mereka tidak tahu di mana hambatan sebenarnya (Penawaran? Konten? Distribusi?).",
          solution: "Alat penilaian interaktif yang memandu pemilik melalui perjalanan pelanggan mereka, menghasilkan diagnosis visual yang jelas.",
          tech: "Pemetaan Strategi, Arsitektur Web",
          learned: "Membingkai pemasaran sebagai alur kerja sistemik daripada sekadar 'membuat konten' mengubah cara klien memandang nilai layanan tersebut."
        }
      ],
      next: "Sistem Pemasaran"
    },
    marketingSystems: {
      title: "SISTEM PEMASARAN",
      subtitle: "Menghubungkan strategi, konten, corong (funnel), dan eksekusi menjadi mesin yang dapat diprediksi.",
      section1Title: "01 / Konsep",
      section1Text: "Sebagian besar bisnis memandang pemasaran sebagai \"sekadar memposting konten\". Pandangan terfragmentasi ini sering kali menyebabkan upaya tinggi dengan hasil yang rendah.\n\nPemasaran adalah sebuah sistem. Jika penawarannya lemah, konten tidak akan menyelamatkannya. Jika distribusinya salah, penawarannya tidak akan terlihat. Jika tindak lanjutnya rusak, prospek tidak akan menjadi penjualan.",
      workflow: [
        { step: "RISET", desc: "Memahami celah pasar." },
        { step: "POSITIONING", desc: "Mendefinisikan mengapa mereka harus peduli." },
        { step: "PENAWARAN", desc: "Menyusun nilai yang tak tertahankan." },
        { step: "KONTEN", desc: "Mengkomunikasikan penawaran secara visual." },
        { step: "DISTRIBUSI", desc: "Membuat orang melihat konten tersebut." },
        { step: "KONVERSI", desc: "Mengubah perhatian menjadi tindakan." },
        { step: "TINDAK LANJUT", desc: "Merawat prospek menjadi pelanggan." },
        { step: "ANALISIS", desc: "Mengukur apa yang benar-benar berhasil." }
      ],
      section2Title: "02 / Titik Sentuh Terhubung",
      section2Text: "Sistem membutuhkan koneksi beberapa titik sentuh digital secara mulus sehingga pelanggan tidak pernah merasa tersesat.\nPendekatan ini merupakan inti dari kerangka kerja yang digunakan dalam Kahfi Audit Marketing.",
      touchpoints: ["Google Maps", "Instagram", "WhatsApp", "Website", "Marketplace"],
      next: "Meta Ads & Performa"
    },
    metaAds: {
      title: "META ADS\n& PERFORMA\nMARKETING",
      subtitle: "Saya menggunakan Meta Ads tidak hanya untuk \"menjalankan iklan\", tetapi untuk memahami bagaimana materi kreatif, audiens, penawaran, dan corong bekerja sama.\n\nTujuannya adalah untuk menemukan apa yang berhasil, memahami mengapa itu berhasil, dan meningkatkannya melalui pengujian.",
      capabilitiesTitle: "Kapabilitas",
      capabilities: [
        { num: "01", title: "STRUKTUR KAMPANYE", items: ["Pengaturan kampanye", "Struktur Ad Set", "Pengorganisasian kreatif iklan", "Alokasi anggaran", "Pemilihan objektif"] },
        { num: "02", title: "AUDIENS", items: ["Audiens luas", "Penargetan minat", "Audiens kustom", "Penargetan ulang", "Konsep audiens serupa (Lookalike)"] },
        { num: "03", title: "PENGUJIAN KREATIF", items: ["Hooks", "Sudut pandang kreatif", "Iklan statis", "Iklan video", "Pengujian penawaran", "Pengujian CTA"] },
        { num: "04", title: "ANALISIS PERFORMA", items: ["CTR", "CPM", "CPC", "Biaya per hasil", "Konversi", "ROAS"] }
      ],
      workflowTitle: "Alur Kerja",
      workflow: ["TUJUAN BISNIS", "AUDIENS", "PENAWARAN", "KREATIF", "META ADS", "DATA", "ITERASI"],
      philosophyQuote: "\"IKLAN YANG BAGUS BUKAN\nHANYA TENTANG PENARGETAN.\n\nKREATIF, PENAWARAN,\nDAN PELANGGAN\nSAMA PENTINGNYA.\"",
      philosophyText: "Performance marketing bekerja paling baik ketika periklanan terhubung ke seluruh perjalanan pelanggan.",
      next: "Eksperimen Web"
    },
    webExperiments: {
      title: "EKSPERIMEN WEB",
      subtitle: "Belajar dengan cara membangun dan meluncurkan karya. Mengeksplorasi irisan antara desain, kode, dan produk.",
      section1Title: "01 / Pendekatan",
      section1Text: "Saya bukan seorang insinyur perangkat lunak senior, dan saya tidak berpura-pura menjadi satu.\n\nPendekatan saya terhadap pengembangan web murni didorong oleh eksperimen: memiliki ide, membuka editor, memanfaatkan AI untuk menjembatani kesenjangan teknis, dan meluncurkan sesuatu yang berfungsi.\n\nIni memungkinkan saya untuk membuat prototipe ide dengan cepat, menguji hipotesis pemasaran di dunia nyata, dan memahami batasan teknis dari produk yang saya pasarkan.",
      section2Title: "02 / Teknologi (Stack)",
      tools: [
        { name: "GitHub", use: "Kontrol versi dan pipeline penerapan." },
        { name: "Vercel", use: "Hosting, edge functions, dan analitik." },
        { name: "Next.js", use: "Framework React untuk aplikasi tingkat produksi." },
        { name: "Supabase", use: "Backend as a Service, PostgreSQL, dan autentikasi." },
        { name: "Asisten AI", use: "Mempercepat pengembangan, debugging, dan pencarian ide." }
      ],
      next: "Otomatisasi AI"
    }
  }
};
