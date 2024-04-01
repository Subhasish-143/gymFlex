import CommonHeader from "../../components/CommonHeader"
import HeaderImage from "../../images/header_bg_3.jpg"

import './Gallery.css'

const Gallery = () => {
    const numOfImages = 15;
    const images = [];

    for (let i=1;i<=numOfImages;i++) {
        images.push(require(`../../images/gallery${i}.jpg`));
    }

  return (
    <div>
        <CommonHeader title="Gallery" image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam explicabo voluptatibus placeat, rerum iste perspiciatis quaerat voluptatem laboriosam similique?
        </CommonHeader>
        <section className="gallery">
            <div className="container gallery_container">
                {images.map((image, index) => (
                    <article className="gallery_image" key={index}>
                        <img src={image} alt={`gallery_image ${index}+1`} />
                    </article>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Gallery