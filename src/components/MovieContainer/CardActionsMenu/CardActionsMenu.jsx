import React from "react";
import crossIcon from "../../../assets/icons/crossIcon.svg";
import "./CardActionsMenu.scss";

export default ({ toggleContextMenu, toggleEdit, toggleDelete }) => (
  <div className="CardActionsMenu">
    <div className="CardActionsMenu-btn">
      <button className="CardActionsMenu-btn-close" onClick={toggleContextMenu}>
        <img src={crossIcon} alt="crossIcon" />
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
