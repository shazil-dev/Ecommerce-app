import React from 'react'

export default function cartList({ id, image, title, price, handleDelete }) {

  return (
    <>
      <div className="card container">
        <div className="row py-2">
          <div className="col-2">
            <img
              src={image}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="col-8">
            <h5>{title}</h5>
            <p>₹ {price * 80}</p>
            <a
              onClick={() => handleDelete(id)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
