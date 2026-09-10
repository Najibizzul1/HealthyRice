import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { detectDisease } from '../services/detectionService'
import { saveHistory } from '../utils/historyStorage'

import './Upload.css'

function Upload() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Handle image selection from gallery or camera.
  function handleFileChange(event) {
    const file = event.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('File harus berupa gambar.')
      return
    }

    // Release the previous object URL before creating a new one.
    if (preview) {
      URL.revokeObjectURL(preview)
    }

    const imageUrl = URL.createObjectURL(file)

    setError('')
    setImage(file)
    setPreview(imageUrl)
  }

  // Compress the image before storing it in localStorage history.
  function compressImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = (event) => {
        const img = new Image()

        img.onload = () => {
          const maxWidth = 800
          const maxHeight = 800

          let width = img.width
          let height = img.height

          // Keep the image within the maximum dimensions.
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(
              maxWidth / width,
              maxHeight / height
            )

            width = Math.round(width * ratio)
            height = Math.round(height * ratio)
          }

          const canvas = document.createElement('canvas')

          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext('2d')

          ctx.drawImage(
            img,
            0,
            0,
            width,
            height
          )

          // Convert the image to JPEG with reduced quality
          // to keep localStorage usage smaller.
          const compressedImage = canvas.toDataURL(
            'image/jpeg',
            0.7
          )

          resolve(compressedImage)
        }

        img.onerror = () => {
          reject(new Error('Gagal membaca gambar.'))
        }

        img.src = event.target.result
      }

      reader.onerror = () => {
        reject(new Error('Gagal membaca file.'))
      }

      reader.readAsDataURL(file)
    })
  }

  // Remove the selected image and reset the file input.
  function handleRemoveImage() {
    if (preview) {
      URL.revokeObjectURL(preview)
    }

    setImage(null)
    setPreview(null)

    // Allow the same file to be selected again.
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Run disease detection and save the result to history.
  async function handleDetect() {
    if (!image) {
      setError('Silakan pilih foto terlebih dahulu.')
      return
    }

    try {
      setLoading(true)
      setError('')

      const result = await detectDisease(image)

      // Compress only the history copy.
      // The original image is still sent to the detection service.
      const compressedImage = await compressImage(image)

      const savedResult = saveHistory({
        ...result,
        image_preview: compressedImage,
      })

      navigate('/result', {
        state: {
          result: savedResult,
        },
      })
    } catch (err) {
      console.error(err)
      setError(
        'Terjadi kesalahan saat melakukan deteksi.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="upload-section">
          <div className="container">
            <div>
                <h1>Deteksi Penyakit Padi</h1>

                <p>
                  Analisis cerdas berbasis AI untuk mendeteksi penyakit pada daun padi secara akurat.
                </p>
              </div>

            {/* Upload options */}
            {!preview && (
              <div className="upload-options">
                <label className="upload-box">
                  <span>📁</span>
                  <strong>Pilih dari Galeri</strong>
                  <small>JPG, JPEG, PNG</small>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>

                <label className="upload-box">
                  <span>📷</span>
                  <strong>Gunakan Kamera</strong>
                  <small>Ambil foto langsung</small>

                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            )}

            {/* Image preview and actions */}
            {preview && (
              <div className="preview-container">
                <img
                  src={preview}
                  alt="Preview daun padi"
                  className="image-preview"
                />

                <button
                  type="button"
                  className="secondary-button"
                  onClick={handleRemoveImage}
                  disabled={loading}
                >
                  Pilih Foto Lain
                </button>

                <button
                  type="button"
                  className="primary-button"
                  onClick={handleDetect}
                  disabled={loading}
                >
                  {loading
                    ? 'Sedang Menganalisis...'
                    : 'Deteksi Penyakit'}
                </button>
              </div>
            )}

            {/* Error message */}
            {error && (
              <p className="error-message">
                {error}
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Upload