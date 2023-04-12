import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const photos = [1, 2, 3, 4, 5, 6, 7, 8].map((img) => {
    return {
      src: `/img/img${img}.webp`,
      width: 620,
      height: 420,
      title: `image ${img}`,
      description: `Slide description ${img}`,
    };
  });

  const slides = photos.map(({ src, width, height, title, description }) => ({
    src,
    width,
    height,
    title,
    description,
  }));
  return (
    <div
      className="w-full px-1 lg:container overflow-hidden mt-32"
      style={{ zIndex: 99 }}
    >
      {/* <h3 className="text-indigo-500 dark:text-orange-500 text-center text-lg md:text-xl">گالری تصاویر</h3> */}
      <div className="title mx-auto my-24 w-[32]">گالری </div>
      <div className="my-16 px-4 relative">
        <PhotoAlbum
          spacing={30}
          layout="rows"
          photos={photos}
          className="z-[100]"
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        />
      </div>
    </div>
  );
};

export default Gallery;
