import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Filter.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import formatArtwork from "../../model/artwork";
import Pagination from "../Pagination/Pagination";
import { useDispatch } from "react-redux";

function Filter({ actions, service, filter, isLoading }) {
  const dispatch = useDispatch();
  const { query, page, pageSize, totalPages } = filter;
  const {
    setData,
    setCurrentPage,
    setPageSize,
    setQuery,
    setLoading,
    setTotalPages,
  } = actions;

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading());
      const { data, pages } = await service(query, page, pageSize);
      const formatedData = data.map((item) => formatArtwork(item));

      dispatch(setTotalPages(pages));
      dispatch(setData(formatedData));
    }

    if (!query) {
      fetchData();
      return;
    }

    console.log("test");
    const timeout = setTimeout(async () => await fetchData(), 1000);

    return () => clearTimeout(timeout);
  }, [
    query,
    pageSize,
    page,
    dispatch,
    setLoading,
    service,
    setTotalPages,
    setData,
  ]);

  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <input
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          type="text"
          placeholder="Search..."
          className={styles.search__input}
        />
        <FontAwesomeIcon icon={faSearch} className={styles.search__icon} />
      </div>

      <Pagination
        dispatch={dispatch}
        totalPages={totalPages}
        currentPage={page}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />
      <div className={styles.page}>
        <label htmlFor="page">Page size</label>
        <select
          value={pageSize}
          onChange={(e) => dispatch(setPageSize(e.target.value))}
          name="pageSize"
          id="pageSize"
          disabled={isLoading}
        >
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
