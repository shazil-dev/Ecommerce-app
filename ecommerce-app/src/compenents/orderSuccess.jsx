import React from 'react'

export default function OrderSuccess( {orders} ) {
    console.log(orders)
  return (
    <>
      <div className="my-2 container card text-center w-50">
        <h4 className="my-5">Order Placed Successfully</h4>
        <p>
          Thank you, {orders.name} for shopping with us. your item will be
          delivered to you at your address: {orders.address} as soon as possible
        </p>

        <a href="/" className="btn btn-success my-2">
          Go to Home
        </a>
      </div>
    </>
  );
}
