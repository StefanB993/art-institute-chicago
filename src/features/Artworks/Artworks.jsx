import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import { getArtworkState } from "./artworksSlice";
import ArtworksContainer from "../Artworks/ArtworksContainer/ArtworksContainer";

import styles from "./Artworks.module.scss";
import {
  getArtworkFilter,
  setArtworkPage,
  setArtworkPageSize,
  setArtworkQuery,
} from "../../components/Filter/filterSlice";

function Artworks() {
  const dispatch = useDispatch();
  const { totalPages, isLoading } = useSelector(getArtworkState);
  const { page, pageSize } = useSelector(getArtworkFilter);

  return (
    <div className={styles.artworks}>
      <Filter
        dispatch={dispatch}
        isLoading={isLoading}
        filter={{ page, pageSize, totalPages }}
        actions={{
          setCurrentPage: setArtworkPage,
          setPageSize: setArtworkPageSize,
          setQuery: setArtworkQuery,
        }}
      />
      <ArtworksContainer />
    </div>
  );
}

export default Artworks;
