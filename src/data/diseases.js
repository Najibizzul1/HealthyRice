import brownSpotImage from '../assets/images/Desease/BrownSpot.jpg'
import blastImage from '../assets/images/Desease/Blast.jpg'
import blightImage from '../assets/images/Desease/Blight.jpeg'
import tungroImage from '../assets/images/Desease/Tungro.jpg'
import scaldImage from '../assets/images/Desease/Scald.jpg'
import healthyImage from '../assets/images/Desease/Healthy.jpg'

export const diseases = [
  {
    id: 'brown-spot',
    name: 'Brown Spot',
    scientific_name: 'Bipolaris oryzae',
    image: brownSpotImage,

    description:
      'Brown Spot atau bercak cokelat adalah penyakit pada tanaman padi yang disebabkan oleh jamur Bipolaris oryzae. Penyakit ini dapat menyerang bibit, daun, pelepah, dan bagian gabah. Pada daun tanaman dewasa, gejala utamanya berupa bercak berbentuk bulat hingga oval dengan bagian tengah berwarna cokelat muda hingga abu-abu dan tepi berwarna cokelat kemerahan.¹',

    cause:
      'Penyakit ini disebabkan oleh jamur Bipolaris oryzae. Jamur dapat menyerang tanaman sejak fase bibit hingga tanaman dewasa dan juga dapat menginfeksi bagian glume serta gabah.¹ Kondisi tanaman yang lemah dan kualitas benih yang buruk dapat meningkatkan risiko masalah penyakit pada pertanaman.²',

    symptoms: [
      'Bercak kecil berbentuk bulat dan berwarna cokelat pada bibit.¹',
      'Bercak berbentuk bulat hingga oval pada daun tanaman dewasa.¹',
      'Bagian tengah bercak dapat berwarna cokelat muda hingga abu-abu.¹',
      'Bagian tepi bercak dapat berwarna cokelat kemerahan.¹',
      'Bercak dapat membesar dan menyatu sehingga menyebabkan sebagian besar daun mati.¹',
      'Bibit dapat mengalami pertumbuhan terhambat atau bahkan mati akibat infeksi berat.¹',
      'Glume dapat mengalami bercak berwarna cokelat tua hingga hitam.¹',
      'Gabah dapat mengalami perubahan warna menjadi hitam akibat infeksi.¹',
    ],

    details:
      'Brown Spot dapat muncul sebagai penyakit pada bibit maupun sebagai penyakit daun dan gabah pada tanaman dewasa. Pada bibit, jamur dapat menghasilkan bercak kecil berbentuk bulat yang dapat menyebabkan bibit menjadi kerdil atau mati. Pada tanaman yang lebih tua, bercak pada daun umumnya berbentuk bulat hingga oval dengan bagian tengah berwarna cokelat muda sampai abu-abu dan tepi berwarna cokelat kemerahan. Jika infeksi cukup berat, bercak dapat menyatu dan menyebabkan area daun yang luas mengalami kematian.¹',

    treatment: [
      'Periksa tanaman secara rutin untuk mengetahui perkembangan bercak.²',
      'Gunakan benih yang sehat dan berkualitas untuk mengurangi risiko penyakit yang terbawa benih.²',
      'Lakukan pemupukan secara seimbang agar tanaman dapat tumbuh dengan baik.²',
      'Jaga kondisi tanaman agar tidak mengalami stres lingkungan yang berat.²',
      'Kelola sisa tanaman dan kebersihan lahan untuk mengurangi sumber penyakit antar-musim.²',
      'Jika diperlukan, gunakan produk pengendali penyakit yang terdaftar untuk tanaman padi dan ikuti petunjuk label serta rekomendasi petugas pertanian.²',
    ],

    prevention: [
      'Gunakan benih yang sehat dan berkualitas.²',
      'Gunakan benih dari sumber yang terpercaya atau bersertifikat jika tersedia.²',
      'Pilih varietas yang sesuai dengan kondisi lingkungan setempat dan memiliki ketahanan terhadap penyakit utama jika tersedia.³',
      'Lakukan pemupukan secara seimbang.²',
      'Jaga kebersihan lahan dan peralatan pertanian.²',
      'Lakukan pemantauan tanaman sejak fase awal pertumbuhan.²',
    ],

    sources: [
      {
        title: 'IRRI — Diagnosis of Common Diseases of Rice',
        url: 'http://www.knowledgebank.irri.org/images/docs/diagnostic-of-common-diseases-of-rice.pdf',
      },
      {
        title: 'IRRI — Pests and Diseases: How to manage pests and diseases',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/growth/pests-and-diseases',
      },
      {
        title: 'IRRI — How to Select Rice Varieties',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/rice-varieties',
      },
    ],
  },

  {
    id: 'blast',
    name: 'Blast',
    scientific_name: 'Magnaporthe oryzae',
    image: blastImage,

    description:
      'Blast atau penyakit blas adalah penyakit jamur pada tanaman padi yang disebabkan oleh Magnaporthe oryzae. Penyakit ini dapat menyerang berbagai bagian tanaman di atas permukaan tanah, termasuk daun, collar, buku, leher malai, dan bagian malai.¹',

    cause:
      'Penyakit ini disebabkan oleh jamur Magnaporthe oryzae. Blast lebih mudah berkembang pada kondisi kelembapan yang mendukung, tanah dengan kelembapan rendah, hujan yang sering dan berkepanjangan, serta suhu siang yang relatif sejuk. Penggunaan pupuk nitrogen secara berlebihan juga dapat meningkatkan intensitas penyakit.¹',

    symptoms: [
      'Muncul bercak berwarna putih hingga hijau keabu-abuan pada awal infeksi.¹',
      'Bercak yang lebih tua berbentuk lonjong atau spindle.¹',
      'Bagian tengah bercak berwarna putih hingga abu-abu.¹',
      'Bagian tepi bercak berwarna cokelat kemerahan atau mengalami nekrosis.¹',
      'Bercak dapat berbentuk seperti berlian atau belah ketupat.¹',
      'Bercak dapat membesar dan menyatu sehingga daun dapat mati.¹',
      'Infeksi pada buku dapat menyebabkan bagian batang menjadi lemah dan patah.²',
      'Infeksi leher malai dapat menyebabkan malai roboh dan menghasilkan sedikit atau tidak ada gabah.²',
      'Infeksi sebelum fase pengisian susu dapat menyebabkan gabah tidak terbentuk.²',
    ],

    details:
      'Blast dapat menyerang tanaman padi pada berbagai fase pertumbuhan. Pada daun, gejala yang umum adalah bercak berbentuk spindle atau belah ketupat dengan bagian tengah berwarna putih hingga abu-abu dan tepi berwarna cokelat atau nekrotik.¹ Blast pada buku dan leher malai dapat menjadi lebih serius karena bagian tersebut berhubungan langsung dengan penyangga malai. Infeksi pada leher dapat menyebabkan malai roboh dan, apabila terjadi sebelum fase pengisian susu, dapat menyebabkan tidak terbentuknya gabah.²',

    treatment: [
      'Pantau daun, buku, dan leher malai secara rutin untuk mengetahui perkembangan penyakit.¹',
      'Hindari penggunaan pupuk nitrogen secara berlebihan karena dapat meningkatkan intensitas blast.¹',
      'Gunakan pemupukan nitrogen secara terbagi sesuai kebutuhan tanaman.¹',
      'Jaga pengelolaan air agar tanaman tidak mengalami kondisi yang mendukung perkembangan penyakit.¹',
      'Kelola sisa jerami atau tanaman yang terinfeksi karena jamur dapat bertahan pada jerami padi.¹',
      'Jika diperlukan, fungisida sistemik seperti kelompok triazole atau strobilurin dapat digunakan secara bijaksana sesuai rekomendasi dan label.¹',
    ],

    prevention: [
      'Gunakan varietas padi yang tahan terhadap blast jika tersedia.¹',
      'Gunakan benih yang sehat dan berkualitas.³',
      'Hindari penggunaan nitrogen secara berlebihan.¹',
      'Bagi aplikasi nitrogen menjadi beberapa kali sesuai kebutuhan tanaman.¹',
      'Atur waktu tanam sesuai kondisi setempat.¹',
      'Lakukan pemantauan sejak fase awal pertumbuhan.¹',
      'Pastikan jerami atau sisa tanaman yang digunakan tidak berasal dari tanaman yang terinfeksi blast.¹',
    ],

    sources: [
      {
        title: 'IRRI — Blast (leaf and collar)',
        url: 'http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/diseases/item/blast-leaf-collar',
      },
      {
        title: 'IRRI — Blast (node and neck)',
        url: 'http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/diseases/item/blast-node-neck',
      },
      {
        title: 'IRRI — Seed Quality',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality',
      },
    ],
  },

  {
    id: 'bacterial-leaf-blight',
    name: 'Bacterial Leaf Blight',
    scientific_name: 'Xanthomonas oryzae pv. oryzae',
    image: blightImage,

    description:
      'Bacterial Leaf Blight atau Hawar Daun Bakteri adalah penyakit penting pada tanaman padi yang disebabkan oleh bakteri Xanthomonas oryzae pv. oryzae. Penyakit ini dapat menyerang tanaman sejak fase persemaian hingga panen dan menyebabkan gejala hawar pada daun serta kelayuan pada fase tertentu.¹',

    cause:
      'Penyakit ini disebabkan oleh bakteri Xanthomonas oryzae pv. oryzae. Bakteri tersebut dapat menyerang tanaman padi pada berbagai tahap pertumbuhan. Di Indonesia, penyakit ini merupakan salah satu penyakit penting pada padi.¹',

    symptoms: [
      'Muncul garis atau bercak seperti terkena air pada bagian daun.¹',
      'Gejala dapat dimulai beberapa sentimeter dari ujung daun atau pada tepi helaian daun.¹',
      'Bagian yang terinfeksi kemudian berubah menjadi kuning.¹',
      'Lesi dapat semakin panjang dan melebar.¹',
      'Daun dapat berubah menjadi kuning hingga putih ketika penyakit berkembang.¹',
      'Tanaman muda dapat mengalami kelayuan atau gejala kresek.¹',
      'Pada fase generatif, penyakit dapat mengganggu proses pengisian gabah.²',
    ],

    details:
      'Bacterial Leaf Blight dapat menyerang tanaman padi pada seluruh fase pertumbuhan, mulai dari persemaian hingga panen. Pada fase vegetatif, gejala berat dapat muncul sebagai kelayuan yang dikenal sebagai kresek. Pada tanaman yang lebih tua, gejala berupa hawar yang berkembang pada helaian daun. Jika penyakit menyerang pada fase generatif, proses pengisian gabah dapat terganggu sehingga kualitas dan hasil panen dapat menurun.²',

    treatment: [
      'Periksa tanaman secara rutin dan pisahkan area yang menunjukkan gejala penyakit.³',
      'Hindari penyebaran air dari area yang terinfeksi ke area tanaman sehat.³',
      'Hindari aktivitas yang dapat menyebabkan luka pada tanaman ketika kondisi penyakit sedang berkembang.³',
      'Hindari penggunaan pupuk nitrogen secara berlebihan.²',
      'Kelola sisa tanaman yang terinfeksi setelah panen untuk mengurangi sumber penyakit antar-musim.³',
      'Gunakan varietas tahan sebagai bagian dari strategi pengendalian penyakit.²',
    ],

    prevention: [
      'Gunakan benih yang sehat dan berkualitas.³',
      'Gunakan varietas yang memiliki ketahanan terhadap hawar daun bakteri jika tersedia.²',
      'Hindari penggunaan nitrogen secara berlebihan.²',
      'Lakukan pemupukan secara seimbang.³',
      'Jaga kebersihan lahan dan peralatan pertanian.³',
      'Hindari perpindahan bahan tanaman atau sisa tanaman yang terinfeksi ke area sehat.³',
      'Lakukan pemantauan tanaman secara rutin.³',
    ],

    sources: [
      {
        title: 'IRRI — Bacterial blight',
        url: 'http://www.knowledgebank.irri.org/decision-tools/rice-doctor/rice-doctor-fact-sheets/item/bacterial-blight',
      },
      {
        title: 'Kementerian Pertanian RI — Penyakit Hawar Daun Bakteri pada Padi Sawah',
        url: 'https://pustaka.bppsdmp.pertanian.go.id/info-literasi/info-literasi-kendalikan-penyakit-padi-dengan-tepat-kunci-sukses-cegah-gagal-panen',
      },
      {
        title: 'IRRI — Pests and Diseases: How to manage pests and diseases',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/growth/pests-and-diseases',
      },
    ],
  },

  {
    id: 'tungro',
    name: 'Tungro',
    scientific_name:
      'Rice tungro bacilliform virus (RTBV) + Rice tungro spherical virus (RTSV)',
    image: tungroImage,

    description:
      'Tungro adalah penyakit virus pada tanaman padi yang disebabkan oleh kombinasi dua virus, yaitu Rice tungro bacilliform virus (RTBV) dan Rice tungro spherical virus (RTSV). Penyakit ini ditularkan oleh wereng hijau dan menyebabkan perubahan warna daun, pertumbuhan kerdil, berkurangnya jumlah anakan, serta gabah yang steril atau tidak terisi sempurna.¹',

    cause:
      'Tungro disebabkan oleh kombinasi dua virus yang ditularkan oleh wereng hijau. Wereng hijau memperoleh virus ketika mengisap tanaman yang terinfeksi dan kemudian dapat menularkannya ke tanaman lain. Tanaman padi paling rentan terhadap tungro pada fase anakan.¹',

    symptoms: [
      'Daun berubah menjadi kuning atau kuning-oranye.¹',
      'Perubahan warna biasanya dimulai dari ujung daun dan dapat menyebar ke bagian bawah daun.¹',
      'Daun dapat memiliki pola belang atau bergaris.¹',
      'Daun dapat memiliki bercak berwarna seperti karat.¹',
      'Tanaman menjadi kerdil.¹',
      'Jumlah anakan berkurang.¹',
      'Pembungaan menjadi terlambat.¹',
      'Malai berukuran kecil dan tidak keluar secara sempurna.¹',
      'Jumlah gabah steril atau gabah yang terisi sebagian meningkat.¹',
      'Dapat ditemukan wereng hijau di sekitar tanaman.¹',
    ],

    details:
      'Tungro merupakan penyakit virus yang penularannya bergantung pada serangga vektor, terutama wereng hijau. Penyakit dapat menyerang pada semua fase pertumbuhan, tetapi paling sering terlihat pada fase vegetatif dan tanaman paling rentan ketika berada pada fase anakan. Tanaman yang terinfeksi dapat menjadi kerdil, menghasilkan lebih sedikit anakan, mengalami keterlambatan pembungaan, serta menghasilkan malai kecil dengan gabah yang steril atau hanya terisi sebagian.¹',

    treatment: [
      'Tanaman padi yang sudah terinfeksi tungro tidak dapat disembuhkan.¹',
      'Cabut dan kelola tanaman yang terinfeksi sesuai praktik sanitasi setempat untuk mengurangi sumber virus.¹',
      'Pantau tanaman di sekitar area yang terinfeksi.¹',
      'Kendalikan sumber virus seperti tanaman padi sisa dan volunteer rice.¹',
      'Kelola sisa tanaman setelah panen untuk mengurangi sumber virus dan tempat berkembang biak wereng hijau.¹',
      'Jangan menggunakan bibit dari area yang diketahui terinfeksi tungro.¹',
    ],

    prevention: [
      'Gunakan varietas yang tahan terhadap tungro atau wereng hijau jika tersedia.¹',
      'Gunakan bibit dan benih yang sehat.³',
      'Lakukan penanaman secara serempak dengan area sekitar jika memungkinkan.¹',
      'Sesuaikan waktu tanam agar tidak bertepatan dengan periode populasi wereng hijau yang tinggi jika informasi tersebut tersedia.¹',
      'Kelola sisa tanaman yang terinfeksi setelah panen.¹',
      'Pantau keberadaan wereng hijau sejak fase awal pertumbuhan.¹',
      'Hindari menggunakan bibit dari persemaian yang berada di daerah endemis tungro.¹',
    ],

    sources: [
      {
        title: 'IRRI — Tungro',
        url: 'http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/diseases/item/tungro',
      },
      {
        title: 'IRRI — Diagnosis of Common Diseases of Rice',
        url: 'http://www.knowledgebank.irri.org/images/docs/diagnostic-of-common-diseases-of-rice.pdf',
      },
      {
        title: 'IRRI — Seed Quality',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality',
      },
    ],
  },

  {
    id: 'scald',
    name: 'Leaf Scald',
    scientific_name: 'Microdochium oryzae',
    image: scaldImage,

    description:
      'Leaf Scald atau hawar daun adalah penyakit jamur pada tanaman padi yang menyebabkan munculnya bercak memanjang dan berzona pada daun. Gejalanya berupa zona warna cokelat muda dan cokelat tua yang biasanya dimulai dari tepi atau ujung daun.¹',

    cause:
      'Penyakit ini disebabkan oleh jamur Microdochium oryzae. Jamur membentuk struktur dan spora pada bagian jaringan daun yang mengalami lesi.¹',

    symptoms: [
      'Bercak biasanya muncul pada tepi atau ujung daun.¹',
      'Bercak memiliki pola berzona dengan warna cokelat muda dan cokelat tua.¹',
      'Lesi umumnya berbentuk lonjong atau memanjang.¹',
      'Bercak dapat memiliki bagian tepi atau halo berwarna cokelat muda.¹',
      'Bercak dapat memiliki panjang beberapa sentimeter dan terus berkembang.¹',
      'Beberapa bercak dapat membesar dan menyatu.¹',
      'Sebagian besar helaian daun dapat mengalami hawar.¹',
      'Bagian yang terinfeksi akhirnya mengering sehingga daun terlihat seperti terkena panas atau tersiram air panas.¹',
    ],

    details:
      'Leaf Scald memiliki gejala yang khas berupa lesi berzona dengan pola warna cokelat muda dan cokelat tua. Lesi biasanya dimulai dari tepi atau ujung daun yang sudah dewasa dan berbentuk kurang lebih lonjong. Lesi dapat terus membesar dan menyatu sehingga sebagian besar helaian daun mengalami hawar. Ketika jaringan yang terkena penyakit mengering, daun menghasilkan tampilan seperti terkena panas atau tersiram air panas.¹',

    treatment: [
      'Periksa daun secara rutin untuk mengetahui perkembangan lesi.²',
      'Kelola bagian tanaman yang sudah mati dan sisa tanaman yang terinfeksi sebagai bagian dari sanitasi lahan.²',
      'Jaga kondisi tanaman agar tumbuh dengan baik melalui pengelolaan air dan nutrisi yang sesuai.²',
      'Lakukan pemupukan secara seimbang.²',
      'Jika penyakit berkembang berat, konsultasikan penggunaan fungisida yang terdaftar untuk padi kepada petugas pertanian dan ikuti petunjuk label.²',
    ],

    prevention: [
      'Gunakan benih yang sehat dan berkualitas.³',
      'Gunakan varietas yang sesuai dengan kondisi lingkungan setempat.⁴',
      'Jaga kebersihan lahan dan peralatan pertanian.²',
      'Kelola sisa tanaman setelah panen dengan baik.²',
      'Lakukan pemupukan secara seimbang.²',
      'Lakukan pemantauan daun secara rutin sejak tanaman masih muda.²',
    ],

    sources: [
      {
        title: 'IRRI — Diagnosis of Common Diseases of Rice',
        url: 'http://www.knowledgebank.irri.org/images/docs/diagnostic-of-common-diseases-of-rice.pdf',
      },
      {
        title: 'IRRI — Pests and Diseases: How to manage pests and diseases',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/growth/pests-and-diseases',
      },
      {
        title: 'IRRI — Seed Quality',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality',
      },
      {
        title: 'IRRI — How to Select Rice Varieties',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/rice-varieties',
      },
    ],
  },

  {
    id: 'healthy',
    name: 'Healthy Rice',
    scientific_name: 'Oryza sativa L.',
    image: healthyImage,

    description:
      'Padi sehat adalah tanaman Oryza sativa L. yang tumbuh dan berkembang secara normal tanpa menunjukkan gejala penyakit atau kerusakan berat akibat hama maupun stres lingkungan. Kondisi tanaman sehat dipengaruhi oleh kualitas benih, varietas yang sesuai, pengelolaan air dan nutrisi, serta pengelolaan hama dan penyakit yang baik.¹',

    cause:
      'Kondisi padi sehat tidak disebabkan oleh satu faktor saja. Pertumbuhan sehat dipengaruhi oleh penggunaan benih berkualitas, varietas yang sesuai dengan lingkungan, ketersediaan nutrisi yang cukup dan seimbang, pengelolaan air yang baik, jarak tanam yang sesuai, serta pengendalian hama dan penyakit.¹ ²',

    symptoms: [
      'Daun berwarna hijau dan terlihat segar.¹',
      'Warna daun relatif seragam sesuai karakter varietas.¹',
      'Tidak menunjukkan bercak penyakit yang mencurigakan.',
      'Tanaman tumbuh dan berkembang secara normal.',
      'Pertumbuhan tanaman relatif seragam.',
      'Batang berkembang dengan baik dan mampu menopang tanaman.',
      'Jumlah anakan berkembang secara normal.',
      'Tidak menunjukkan gejala layu yang tidak normal.',
      'Tidak mengalami kerusakan berat akibat hama.',
      'Malai berkembang secara normal.',
      'Gabah berkembang dan terisi dengan baik.',
    ],

    details:
      'Padi sehat memiliki pertumbuhan yang baik sejak fase persemaian hingga fase generatif. Penggunaan benih berkualitas membantu menghasilkan kemunculan tanaman yang lebih seragam, pertumbuhan awal yang lebih kuat, dan vigor yang lebih baik.¹ Varietas yang sesuai dengan lingkungan juga penting karena varietas dapat memiliki ketahanan atau toleransi berbeda terhadap penyakit, serangga, kekeringan, banjir, dan tekanan lingkungan lainnya.²',

    treatment: [
      'Pantau kondisi tanaman secara rutin untuk mendeteksi hama dan penyakit sejak awal.³',
      'Pastikan kebutuhan air tanaman terpenuhi dan lakukan pengelolaan air yang sesuai.³',
      'Lakukan pemupukan berdasarkan kebutuhan tanaman dan kondisi lahan.³',
      'Hindari penggunaan nitrogen secara berlebihan karena nitrogen yang terlalu tinggi dapat meningkatkan kerentanan terhadap beberapa hama dan penyakit.³',
      'Kendalikan gulma yang bersaing dengan tanaman dalam memperoleh nutrisi.³',
      'Jaga kebersihan lahan dan peralatan pertanian antar-musim.³',
      'Gunakan prinsip pengelolaan hama dan penyakit secara terpadu.³',
      'Segera periksa tanaman apabila mulai menunjukkan gejala penyakit atau serangan hama.³',
    ],

    prevention: [
      'Gunakan benih yang sehat dan berkualitas.¹',
      'Gunakan benih bersertifikat jika tersedia.¹',
      'Pastikan benih memiliki daya kecambah dan vigor yang baik.¹',
      'Pilih varietas yang sesuai dengan kondisi lingkungan setempat.²',
      'Pilih varietas yang memiliki ketahanan atau toleransi terhadap penyakit dan hama utama di daerah tersebut jika tersedia.²',
      'Gunakan jarak tanam yang sesuai dengan varietas dan sistem budidaya.²',
      'Lakukan pemupukan secara tepat dan hindari pemberian nitrogen secara berlebihan.³',
      'Kelola air dengan baik.³',
      'Jaga kebersihan lahan dan peralatan pertanian.³',
      'Lakukan penanaman secara serempak dengan area sekitar jika kondisi setempat memungkinkan.³',
      'Lakukan pemantauan sejak fase persemaian.³',
    ],

    sources: [
      {
        title: 'IRRI — Seed Quality',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality',
      },
      {
        title: 'IRRI — How to Select Rice Varieties',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/rice-varieties',
      },
      {
        title: 'IRRI — Pests and Diseases: How to manage pests and diseases',
        url: 'http://www.knowledgebank.irri.org/step-by-step-production/growth/pests-and-diseases',
      },
    ],
  },
]