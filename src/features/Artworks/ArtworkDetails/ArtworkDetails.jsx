import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark as solidBookmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/Button";
import styles from "./ArtworkDetails.module.scss";
import {
  getArtworkById,
  isArtworkBookmarked,
  setArtworkBookmark,
} from "../artworksSlice";

function ArtworkDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useLoaderData();
  const { title, artist, img, description, place_of_origin } = useSelector(
    getArtworkById(id)
  );
  const isBookmarked = useSelector(isArtworkBookmarked(id));

  return (
    <div className={styles.artworkDetails}>
      <div className={styles.artworkDetails__buttons}>
        <Button onClick={() => navigate("/artworks")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <FontAwesomeIcon
          onClick={() => dispatch(setArtworkBookmark(id))}
          icon={isBookmarked ? solidBookmark : regularBookmark}
          size="2x"
        />
      </div>
      <header className="artworkDetails__header">
        <h1 className={styles.artworkDetails__title}>{title}</h1>
        <h2 className={styles.artworkDetails__artist}>
          {artist ? artist : "Unknown"}, {place_of_origin}
        </h2>
      </header>
      <main className={styles.artworkDetails__main}>
        <div
          className={styles.artworkDetails__desc}
          dangerouslySetInnerHTML={{
            __html: description.replaceAll(".", ".<br>"),
          }}
        />
        <figure className={styles.artworkDetails__figure}>
          <img src={img} alt={title} />
        </figure>
      </main>
    </div>
  );
}

export function loader({ params: { id } }) {
  return id;
}

export default ArtworkDetails;
