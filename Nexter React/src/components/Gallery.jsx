import { galleryData } from '../data/galleryData'

const Gallery = () => {
  return (
    <div id='gallery' className='gallery'>
      {galleryData.map((data) => {
        const { id, image } = data

        return (
          <figure key={id} className={`gallery-item gallery-item-${id}`}>
            <img
              src={image}
              alt={`Gallery image ${id}`}
              className='gallery-img'
            />
          </figure>
        )
      })}
    </div>
  )
}

export default Gallery
