import { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  dispatch,
  totalPages,
  currentPage,
  setCurrentPage,
  isLoading,
}) => {
  const [pageRangeStart, setPageRangeStart] = useState(1);
  useEffect(() => {
    setPageRangeStart(1);
  }, [totalPages]);

  if (totalPages === 0) return null;

  const handleNext = () => {
    if (pageRangeStart + 6 <= totalPages) {
      setPageRangeStart(pageRangeStart + 6);
      dispatch(setCurrentPage(pageRangeStart + 6));
    }
  };

  const handlePrev = () => {
    if (pageRangeStart - 6 >= 1) {
      setPageRangeStart(pageRangeStart - 6);
      dispatch(setCurrentPage(pageRangeStart - 6));
    }
  };

  const handleSelect = (number) => {
    dispatch(setCurrentPage(number));
  };

  const pageNumbers = [];
  for (let i = pageRangeStart; i < pageRangeStart + 6 && i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrev}
        disabled={pageRangeStart === 1 || isLoading}
        className={`${styles.pagination__button}`}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.pagination__icon}
        />
      </button>

      <ul className={styles.pagination__list}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => handleSelect(number)}
              disabled={isLoading}
              className={`${styles.pagination__button} ${
                number === currentPage ? "active" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        disabled={pageRangeStart + 6 > totalPages || isLoading}
        className={styles.pagination__button}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.pagination__icon}
        />
      </button>
    </div>
  );
};

export default Pagination;
