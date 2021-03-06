import React from "react";
import { Link } from "react-router-dom";

function Topbar(props) {
  return (
    <div className="topBar">
      <div className="topBar--links"></div>
      <div className="topBar--search">
        <div className="topBar--search--icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className="topBar--search--input"
          type="text"
          placeholder="Recherche une personne"
        ></input>
      </div>
      <div className="topBar--user">
        <span>Hey, {!props.user ? null : props.user.name} !</span>
        {!props.user ? null : (
          <Link to={"/user/" + props.user.name}>
            <img
              src={!props.user ? null : props.user.avatar}
              onError={(e) => (
                (e.target.onError = null),
                (e.target.src = "http://localhost:3000/images/default.png")
              )}
            ></img>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Topbar;
