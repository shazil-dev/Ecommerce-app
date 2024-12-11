import React from 'react'
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar({ count, show, setshow}) {
  return (
    <>
      <header classNameName="p-3 mb-3 border-bottom navbar">
        <div className="bg-dark fixed-top">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a
                    href="/"
                    className="nav-link px-2 link-light"
                    onClick={() => setshow(true)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/#products"
                    className="nav-link px-2 link-light"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href='/wishlist'
                    className="nav-link px-2 link-light"
                  >
                    Wishlists
                  </a>
                </li>
              </ul>

              <div className="dropdown text-end">
                <a
                  href="#"
                  className="d-block link-light text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={() => setshow(!show)}
                  >
                    <Badge badgeContent={count} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                      <a className="dropdown-item" href="/cart">
                        My Cart
                      </a>
                    </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
