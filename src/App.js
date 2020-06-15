/* eslint-disable jsx-a11y/label-has-associated-control */
import  React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import Header from './Components/Header';
import RequestType from './Components/RequestType';
import  PriceFilter from './Components/PriceFilter';
import PhonesList from './Components/PhonesList';
import './App.scss';
import './scss/pagination.scss'




 const App= () => {
 const [range, setRange] = useState([50, 900]) 
 const onRangeChange = arr => setRange(arr)
 const [show, setShow] = useState(false);
 const [activePage, setActivePage] = useState(1)




const handleStorageClick =(e)=>{
  console.log('----dddd-----', e.target.value)
}
const toggleIcon = () => {
 setShow(!show)
}

const handlePageChange = pageNumber => {
  console.log(pageNumber)
  setActivePage(pageNumber)
}





const categories = ['All', 'Iphone', 'Samsung','Ipad', 'MacBook','AirPods'];
const capacities = [32, 64,128, 256];

 console.log(range, '-----------state')
  return (
    <div className='App'>
      <div className='container'>
        <div className='icons' onClick={toggleIcon}>
          ☰
        </div>
        <Header display={show} />
        <RequestType />
        <div className='main'>
          <div className={`sidebar ${show ? '' : 'disactive'}`}>
            <div className='sidebar__price-filter'>
              <h3 className='sidebar__header'>Categories</h3>
              <div>
                {categories.map((category) => (
                  <p className='sidebar__category' key={category}>
                    {category}
                  </p>
                ))}
              </div>
            </div>
            <div className='sidebar__range'>
              <h3 className='sidebar__header'>Price Filter</h3>
              <PriceFilter range={range} onRangeChange={onRangeChange} />
            </div>
            <div className='sidebar__capacities'>
              <h3 className='sidebar__header'>Storage</h3>
              <div className='sidebar__capacities__list'>
                {capacities.map((capacity) => (
                  <label className='storage' key={capacity}>
                    <input
                      type='radio'
                      name='radio'
                      onClick={handleStorageClick}
                      value={capacity}
                    />
                    <span>{capacity}GB</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className='phones_list'>
            <PhonesList />
          </div>
        </div>
        <div className='phone-pagination'>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={304}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass='page-item'
            linkClass='page-link'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
