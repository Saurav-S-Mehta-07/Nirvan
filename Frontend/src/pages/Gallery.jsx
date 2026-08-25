import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import GalleryGrid from '../components/GalleryGrid'
import { gallery } from '../data/gallery'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="page container">
      <SectionHeader eyebrow="Gallery" title="Moments that define the vibe" text="Recapture the atmosphere of previous NIRVAN editions through a snapshot of creativity and celebration." />

      <GalleryGrid items={gallery} onSelect={setSelectedImage} />

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-card" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <strong>{selectedImage.title}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}