import React from 'react'

export default function header() {
  return (
    <>
      <div >
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light mt-5">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h2 class="display-6 fw-normal">E-commerce Store</h2>
            <p class="lead fw-normal">
              A simple react E-commerce site
            </p>
            <a class="btn btn-outline-secondary" href="#products">
              Shop Now
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
}
