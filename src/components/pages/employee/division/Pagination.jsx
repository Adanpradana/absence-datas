import { Children } from "react";

const Pagination = ({ postPerpage, page, paginate, currentPage }) => {
  const data = [];
  for (let i = 1; i <= Math.ceil(postPerpage / page); i++) {
    data.push(i);
  }

  return (
    <>
      <div className="pagination-showing-data">showingdata</div>
      <div className="pagination-button-wrapper">
        {Children.toArray(
          data.map((page) => (
            <button className={page === currentPage ? "pagination-button" : "pagination-button active"} onClick={() => paginate(page)}>
              {page}
            </button>
          ))
        )}
      </div>
    </>
  );
};

export default Pagination;
