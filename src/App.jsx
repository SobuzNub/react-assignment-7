
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'

import SingleProduct from './SingleProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([]);

    useEffect(()=>{
      fetch('./recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
    }, [])

    const handleCook = (p) =>{
      const newHandleCook = [...cook, p];
      setCook(newHandleCook)
      if(!newHandleCook){
        setCook(newHandleCook);
      }
      else{
        toast('is exist')
      }
      
      
    }
    // console.log(cook)

  return (
    <>
      <Header></Header>

      <div className='main-container flex justify-around mt-16'>
        <div className="cards-container border border-[2px solid black] p-4 grid grid-cols-2 gap-5">
          {
            recipes.map(pd => <SingleProduct key={pd.id} product={pd} handleCook={handleCook}></SingleProduct>)
          }
          
        </div>
        <div className="show-card-container w-[514px] bg-[#28282808]">
            <h1 className='font-bold text-center p-4 text-[20px]'>Want to cook: {cook.length} </h1>
            <div className="cart-title flex justify-around mt-5 font-bold">
              <h5>Name</h5>
              <h5>Time</h5>
              <h5>Calories</h5>
            </div>
            <div >
              {
                cook.map(item =>(
                  <div key={item.id} className="cart-info flex justify-around bg-[#FFFFFF] p-5 rounded-3xl mt-3 font-bold">
                    <h5 >{item.recipe_name}</h5>
                    <h5 className=''>{item.preparing_time}</h5>
                    <h5>{item.calories}</h5>
                    <button className="w-[80px] h-[50px] bg-[#0BE58A] rounded-full mt-5">Prepare</button>
                  </div>
                ))}
            </div>

            <ToastContainer />

        </div>
      </div>
    </>
  )
}

export default App
