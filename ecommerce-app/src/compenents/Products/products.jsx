import React from 'react'
import Product from './product'
import Header from '../header';

  export default function Products({ productData}) {
    return (
      <>
        <Header />
        <div id="products">
          <h4 className="text-center ">Products</h4>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {productData.map((item) => {
                  return (
                    <div className="col">
                      <Product
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        // image={item.image}
                        price={item.price}
                        item={item}
                      />
                    </div>
                  );
                })}
                <div />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
