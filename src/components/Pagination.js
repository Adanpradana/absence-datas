const Pagination = ({ pages, totalPost, paginate, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / pages); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination-button-wrapper">
      {pageNumber.map((page) => (
        <button className={page === currentPage ? "pagination-button" : "pagination-button active"} key={page} onClick={() => paginate(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
