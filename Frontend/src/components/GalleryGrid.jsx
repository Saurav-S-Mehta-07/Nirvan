export default function GalleryGrid({ items, onSelect }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <button
          type="button"
          key={item.id}
          className="gallery-item"
          onClick={() => onSelect(item)}
          aria-label={`Open gallery image ${item.title}`}
        >
          <img src={item.image} alt={item.title} />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  )
}
