// import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types'

const SingleProduct = ({product, handleCook}) => {
    // console.log(handleCook)
    return (
        <div className="">
            <div className="card ">
            <img src={product.recipe_image} alt="" />
            <h3 className='font-bold mt-2'>{product.recipe_name}</h3>
            <p className='mt-2'>Classic Italian pasta dish with savory meat sauce.</p>
            <h3 className='mt-5'>Ingredients: 
              <ul className='list-disc ml-5'><li>{product.ingredients[1]}</li></ul>
              <ul className='list-disc ml-5'><li>{product.ingredients[2]}</li></ul>
              <ul className='list-disc ml-5'><li>{product.ingredients[3]}</li></ul>
              <ul className='list-disc ml-5'><li>{product.ingredients[4]}</li></ul>
            </h3>
          </div>
          <div className='flex mt-3'>
            <button className='flex'><CiClock2 className='mt-1'></CiClock2> <p className='ml-2'>{product.preparing_time}</p></button>
            <button className='flex ml-5'><FaFire className='mt-1'></FaFire> <p className='ml-2'>{product.calories}</p></button>
          </div>
          <button onClick={()=> handleCook(product)} className="w-[187px] h-[65px] bg-[#0BE58A] rounded-full mt-5">Want to Cook</button>
        </div>
    );
};

SingleProduct.propTypes = {
  product: PropTypes.func,
  handleCook: PropTypes.func
  }


export default SingleProduct;