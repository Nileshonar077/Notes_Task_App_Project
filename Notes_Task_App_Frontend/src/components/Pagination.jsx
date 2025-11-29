import React from "react";

const Pagination = ({ offset, limit, total, onPrev, onNext }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={onPrev} disabled={offset === 0}>
        Previous
      </button>

      <span style={{ margin: "0 15px" }}>
        Showing {offset + 1}–{Math.min(offset + limit, total)} of {total}
      </span>

      <button
        onClick={onNext}
        disabled={offset + limit >= total}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
