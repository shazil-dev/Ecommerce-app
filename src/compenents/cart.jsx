import React from 'react'
import CartList from './cartList';

export default function MyCart({ CartData, handleDelete }) {
  let sum = 0;
  return (
    <>
      {CartData != 0 ? (
        <section>
          <h2 className="text-center mt-5">My cart</h2>
          {CartData.map((item) => {
            {
              sum = sum + item.price;
            }
            return (
              <>
                <CartList
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  handleDelete={handleDelete}
                />
              </>
            );
          })}
          <div className="container mt-3">
            <div className="card shadow border border-warning">
                  <h4 className='text-center my-2'>Total Amount: ₹ {sum *80}</h4>
                  <a className=" btn btn-warning" href="/order">
                    Checkout
                  </a>
            </div>

          </div>
        </section>
      ) : (
        <div className="alert container border my-5 fs-5 text-center text-warning ">
          <span>Cart is empty, add some item</span>
        </div>
      )}
    </>
  );
}
