// =====================================================
// DETECTION SERVICE
// =====================================================

// BACKEND NANTI:
// Aktifkan import ini setelah Django REST API sudah tersedia.
//
// import api from './api'


// =====================================================
// MOCK DATA
// =====================================================

const mockDetection = {
  id: Date.now(),

  disease_name: 'Brown Spot',

  confidence: 94.5,

  description:
    'Brown Spot merupakan penyakit pada tanaman padi yang ditandai dengan munculnya bercak berwarna cokelat pada daun.',

  symptoms: [
    'Muncul bercak cokelat pada daun',
    'Daun mengalami perubahan warna',
    'Pertumbuhan tanaman dapat terganggu',
  ],

  treatment: [
    'Gunakan benih yang sehat',
    'Lakukan pemupukan secara seimbang',
    'Jaga kebersihan area tanaman',
  ],

  image_url: null,
}


// =====================================================
// DETECT DISEASE
// =====================================================

export async function detectDisease(imageFile) {

  // ===================================================
  // MOCK MODE — DIGUNAKAN SEKARANG
  // ===================================================
  //
  // Sementara backend dan ML belum tersedia,
  // kita menggunakan data palsu untuk menguji
  // alur frontend.
  //

  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })

  return {
    ...mockDetection,

    // ID dibuat ulang setiap kali melakukan scan
    id: Date.now(),

    // Gambar yang dipilih user
    image_file: imageFile,
  }


  // ===================================================
  // BACKEND + ML — AKTIFKAN NANTI
  // ===================================================
  //
  // Setelah Django REST Framework dan ML sudah siap:
  //
  // 1. Hapus / comment bagian MOCK MODE di atas
  // 2. Aktifkan kode di bawah
  //
  // ---------------------------------------------------
  //
  // const formData = new FormData()
  //
  // formData.append('image', imageFile)
  //
  // const response = await api.post('/detect/', formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // })
  //
  // return response.data
  //
  // ===================================================
}