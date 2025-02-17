import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import styles from "./ArtworksContainer.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtworkFilter } from "../../../components/Filter/filterSlice";
import {
  getArtworkState,
  setArtworks,
  setArtworksLoading,
} from "../artworksSlice";
import { fetchArtworks } from "../../../services/apiArtworks";

function Container() {
  const dispatch = useDispatch();
  const { page, pageSize, query } = useSelector(getArtworkFilter);
  const { artworks, isLoading } = useSelector(getArtworkState);

  useEffect(() => {
    console.log("Effect triggered", { page, pageSize, query });
    async function updateArtworks() {
      dispatch(setArtworksLoading());
      const data = await fetchArtworks(query, page, pageSize);
      dispatch(setArtworks(data));
    }
    updateArtworks();
  }, [dispatch, page, pageSize, query]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      {artworks.map((item) => (
        <Link key={item.id} to={`${item.id}`}>
          <div className={styles.item}>
            <header className={styles.item__header}>
              <img src={item.thumbnail} alt="" />
            </header>
            <div className={styles.item__body}>
              <h2 className={styles.item__heading}>{item.title}</h2>
              <p className={styles.item__text}>{item.artist}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Container;
