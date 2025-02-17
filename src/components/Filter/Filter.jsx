import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Filter.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

function Filter({ actions, filter, dispatch, isLoading }) {
  const { query, page, pageSize, totalPages } = filter;
  const { setCurrentPage, setPageSize, setQuery } = actions;
  const [localQuery, setLocalQuery] = useState("");

  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      const timeout = setTimeout(() => {
        dispatch(setQuery(localQuery));
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      hasMounted.current = true;
    }
  }, [localQuery, dispatch, setQuery]);

  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <input
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
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
