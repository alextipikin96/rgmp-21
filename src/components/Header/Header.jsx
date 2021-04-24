import React from "react";
import Logo from "../common/Logo";
import { useToggle } from "../common/hooks/useToggle";
import ModalForm from "../ModalForm";
import "./Header.scss";

export default () => {
  const [isAddModalOpened, setIsAddModalOpened] = useToggle(false);

  const handleOpenAddModal = () => setIsAddModalOpened(true);
  const handleCloseAddModal = () => setIsAddModalOpened(false);

  return (
    <>
      <div className="top-panel">
        <Logo />
        <button className="btn-add-movie" onClick={handleOpenAddModal}>
          +add movie
        </button>
      </div>
      {isAddModalOpened && <ModalForm closeModalForm={handleCloseAddModal} />}
    </>
  );
};
