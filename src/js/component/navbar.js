import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { MdDelete } from "react-icons/md";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { favoritos, isAuthenticated } = store; // Agrega isAuthenticated desde el store
  const { BorrarFavorito } = actions;
  const navigate = useNavigate();

  useEffect(() => {
    actions.get_favoritos();
  }, []);

  return (
    <nav className="navbar navbar-light bg-light py-0 px-5 bg-dark">
      <button className="btn btn-light">
        <Link to="/login">Login</Link>
      </button>
      <Link to="/">
        <img
          width="60"
          height="60"
          src="https://img.icons8.com/color/96/000000/star-wars.png"
          alt="star-wars"
        />
      </Link>
      <div className="ml-auto">
        {isAuthenticated && ( // Mostrar el botón de Favoritos solo si isAuthenticated es true
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos <span className="badge bg-dark">{favoritos.length}</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end row p-2"
              style={{ width: "250px" }}
            >
              <h3>Favoritos</h3>
              {favoritos[0] ? (
                favoritos.map((item) => {
                  return (
                    <p
                      className="d-flex flex-row justify-content-between align-content-center"
                      key={item}
                    >
                      {item}{" "}
                      <button
                        onClick={() => BorrarFavorito(item)}
                        className="bg-transparent border-0"
                      >
                        <MdDelete />
                      </button>
                    </p>
                  );
                })
              ) : (
                <p className="text-dark">No hay Favoritos</p>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
