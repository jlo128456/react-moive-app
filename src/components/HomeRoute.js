import React from "react";
import Header from "./Header";
import MovieGrid from "./MovieGrid";
import MovieModal from "./MovieModal";
import { getNextVisibleCount, DEFAULT_VISIBLE_COUNT } from "./utils";

function HomeRoute({
  filtered,
  visibleCount,
  setVisibleCount,
  searchTerm,
  setSearchTerm,
  sortAZ,
  setSortAZ,
  selectedDirector,
  setSelectedDirector,
  selectedRating,
  setSelectedRating,
  directors,
  ratings,
  showModal,
  isModalOpen,
  closeModal,
  handleAdd,
  handleUpdate,
  setExpandedId,
  expandedId,
  editMovie,
  handleDelete,
  editingMovie
}) {
  return (
    <>
      <Header
        {...{
          searchTerm,
          setSearchTerm,
          sortAZ,
          setSortAZ,
          selectedDirector,
          setSelectedDirector,
          selectedRating,
          setSelectedRating,
          directors,
          ratings
        }}
        openModal={showModal}
      />

      <MovieGrid
        movies={filtered.slice(0, visibleCount)}
        isSingle={filtered.length === 1}
        {...{ expandedId, setExpandedId }}
        onEdit={editMovie}
        onDelete={handleDelete}
      />

      {filtered.length > DEFAULT_VISIBLE_COUNT && (
        <div className="show-more-container">
          <button
            className="btn btn-green"
            onClick={() =>
              setVisibleCount(getNextVisibleCount(visibleCount, filtered.length))
            }
          >
            {visibleCount < filtered.length ? "Show More" : "Show Less"}
          </button>
        </div>
      )}

      {isModalOpen && (
        <MovieModal
          onClose={closeModal}
          onAddMovie={handleAdd}
          onUpdateMovie={handleUpdate}
          editingMovie={editingMovie}
        />
      )}
    </>
  );
}

export default HomeRoute;