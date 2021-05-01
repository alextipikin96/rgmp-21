import React from "react";

 const CardActionsMenu = ({ toggleContextMenu, toggleEdit, toggleDelete }) => (
  <div className="CardActionsMenu">
    <div className="CardActionsMenu-btn" onClick={toggleContextMenu}>
      <button className="CardActionsMenu-btn-close" onClick={toggleContextMenu}>
        <span>X</span>
      </button>

      <button className="CardActionsMenu-btn-edit" onClick={toggleEdit}>
        Edit
      </button>

      <button className="CardActionsMenu-btn-delete" onClick={toggleDelete}>
        Delete
      </button>
    </div>
  </div>
);

export default CardActionsMenu;
