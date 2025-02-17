export default function formatArtwork(obj) {
  return {
    id: obj?.id || 0,
    artist_id: obj?.artist_id || 0,
    artist: obj?.artist_title || "",
    title: obj?.title || "",
    description: obj?.description || "",
    short_description: obj?.short_description || "",
    place_of_origin: obj?.place_of_origin || "",
    thumbnail: `https://www.artic.edu/iiif/2/${obj?.image_id}/full/200,/0/default.jpg`,
    img: `https://www.artic.edu/iiif/2/${obj?.image_id}/full/843,/0/default.jpg`,
  };
}
