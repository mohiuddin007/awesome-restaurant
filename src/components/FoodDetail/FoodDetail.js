import React from 'react';

const FoodDetail = (props) => {
    const {img, title, catagories, price}= props.food;
    return (
        <div className='col-md-4'>
            <div className="single-item text-center my-4">
                <div className="card p-2">
                  <img className='card-img-top' src={img} alt={title}/>
                  <div className="card-body">
                      <h4>{title}</h4>
                     <p>{catagories}</p>
                     <p>${price}</p>
                     <button className='btn btn-sm btn-primary'
                      onClick={() => props.addToCart(props.food)}>Add to cart</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;