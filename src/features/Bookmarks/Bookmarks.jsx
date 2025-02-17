import styles from "./Bookmarks.module.scss";
import store from "../../store";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import formatArtwork from "../../model/artwork";
import { fetchArtworkBundle } from "../../services/apiArtworks";
import { getBookmarks } from "../Artworks/artworksSlice";
import Spinner from "../../components/Spinner/Spinner";

function Bookmarks() {
  const bookmarks = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Spinner />;

  return (
    <div className={styles.bookmarks}>
      {bookmarks.map((artwork) => (
        <Bookmark key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export async function loader() {
  const state = store.getState();
  const bookmarks = getBookmarks(state);
  if (!bookmarks.length) throw new Error("No bookmarks found");
  const { data } = await fetchArtworkBundle(bookmarks.join(","));
  return data.map((item) => formatArtwork(item));
}
export default Bookmarks;

function Bookmark({ artwork }) {
  return (
    <Link to={`${artwork.id}`} className={styles.artwork}>
      <figure className={styles.artwork__figure}>
        <img
          className={styles.artwork__image}
          src={artwork.thumbnail}
          alt={artwork.title}
        />
      </figure>
      <div className={styles.artwork__desc}>
        <header className={styles.artwork__header}>
          <h3>{artwork.title}</h3>
          <h4>{artwork.artist}</h4>
        </header>
        <p>{artwork.short_description}</p>
      </div>
    </Link>
  );
}
