import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MovieContainer from "../MovieContainer";
import AddMovie from "../AddMovie";
import EditMovie from "../EditMovie";
import DeleteMovie from "../DeleteMovie";
import movies from "../../static/movies";

import "./App.scss";

export default () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const showEditModal = () => {
    setIsEditOpen(true);
  };

  const showDeleteModal = () => {
    setIsDeleteOpen(true);
  };

  const showAddModal = () => {
    setIsAddOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
  };

  const closeAddModal = () => {
    setIsAddOpen(false);
  }

  const isModalOpen = isEditOpen || isDeleteOpen || isAddOpen ? " blur" : "";

  return (
    <>
      <div className={`App${isModalOpen}`}>
        <Header showAddModal={showAddModal} />
        <MovieContainer
          movies={movies}
          showEditModal={showEditModal}
          showDeleteModal={showDeleteModal}
        />
        <Footer />
      </div>
      {isEditOpen && <EditMovie closeEditModal={closeEditModal} />}
      {isDeleteOpen && <DeleteMovie closeDeleteModal={closeDeleteModal} />}
      {isAddOpen && <AddMovie closeAddModal={closeAddModal} />}
    </>
  )
};
