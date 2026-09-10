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
      'Penyakit brown spot menyebabkan bercak cokelat pada daun tanaman padi.',
    symptoms: [
      'Bercak cokelat pada daun',
      'Daun mengalami perubahan warna',
      'Tanaman mengalami pertumbuhan yang kurang optimal',
    ],
    treatment: [
      'Gunakan benih yang sehat',
      'Lakukan pemupukan secara seimbang',
      'Jaga kebersihan lahan',
    ],
  },

  {
    id: 'blast',
    name: 'Rice Blast',
    scientific_name: 'Magnaporthe oryzae',
    image: blastImage,
    description:
      'Rice blast merupakan penyakit yang dapat menyerang daun dan bagian tanaman padi lainnya.',
    symptoms: [
      'Bercak berbentuk seperti belah ketupat',
      'Bagian tengah bercak berwarna abu-abu',
      'Daun dapat mengering',
    ],
    treatment: [
      'Gunakan varietas yang tahan penyakit',
      'Gunakan pupuk secara seimbang',
      'Kelola penggunaan air dengan baik',
    ],
  },

  {
    id: 'bacterial-leaf-blight',
    name: 'Bacterial Leaf Blight',
    scientific_name: 'Xanthomonas oryzae',
    image: blightImage,
    description:
      'Penyakit hawar daun bakteri menyerang daun tanaman padi dan dapat menyebabkan daun menguning hingga mengering.',
    symptoms: [
      'Daun menguning',
      'Daun mengalami layu',
      'Bagian daun mengering',
    ],
    treatment: [
      'Gunakan benih sehat',
      'Kurangi kondisi lahan yang terlalu lembap',
      'Gunakan varietas tahan penyakit',
    ],
  },

  {
    id: 'tungro',
    name: 'Tungro',
    scientific_name:
      'Rice Tungro Bacilliform Virus (RTBV) & Rice Tungro Spherical Virus (RTSV)',
    image: tungroImage,
    description:
      'Penyakit tungro disebabkan oleh infeksi dua jenis virus yang ditularkan oleh hama wereng hijau, menyebabkan pertumbuhan padi terhambat dan penurunan hasil panen secara signifikan.',
    symptoms: [
      'Daun berwarna kuning hingga oranye',
      'Tanaman menjadi kerdil',
      'Jumlah anakan berkurang',
    ],
    treatment: [
      'Kendalikan populasi wereng hijau',
      'Gunakan varietas tahan tungro',
      'Tanam serempak di suatu kawasan',
    ],
  },

  {
    id: 'scald',
    name: 'Leaf Scald',
    scientific_name: 'Microdochium oryzae',
    image: scaldImage,
    description:
      'Penyakit hawar pelepah atau daun terbakar yang disebabkan oleh jamur, ditandai dengan garis-garis kecokelatan pada daun yang meluas dan memicu kekeringan.',
    symptoms: [
      'Bercak bergaris basah di tepi atau ujung daun',
      'Warna daun berubah jadi cokelat keabu-abuan seperti terbakar',
      'Ujung daun mengering dan menggulung',
    ],
    treatment: [
      'Gunakan fungisida yang tepat',
      'Atur jarak tanam agar sirkulasi udara baik',
      'Hindari penggunaan pupuk nitrogen yang berlebihan',
    ],
  },

  {
    id: 'healthy-rice',
    name: 'Padi Sehat',
    scientific_name: 'Oryza sativa',
    image: healthyImage,
    description:
      'Kondisi tanaman padi yang tumbuh optimal tanpa adanya gangguan dari hama, jamur, bakteri, maupun virus.',
    symptoms: [
      'Daun berwarna hijau segar dan cerah',
      'Pertumbuhan tinggi dan anakan optimal',
      'Batang kokoh dan malai terisi penuh',
    ],
    treatment: [
      'Berikan pemupukan secara seimbang',
      'Jaga pengairan dan drainase lahan',
      'Lakukan pemantauan rutin terhadap hama dan penyakit',
    ],
  },
]