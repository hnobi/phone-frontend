/* eslint-disable jsx-a11y/label-has-associated-control */
import  React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import Header from './Components/Header';
import RequestType from './Components/RequestType';
import PriceFilter from './Components/PriceFilter';
import PhonesList from './Components/PhonesList';
import Loader from './Components/Loader';
import getRequest from './apiRequest';

import './App.scss';
import './scss/pagination.scss'

const App= () => {

 const [range, setRange] = useState([50, 900]) 
 const [show, setShow] = useState(false);
 const [activePage, setActivePage] = useState(1)
 const [requestType, setRequestType] = useState('buyrequest');
 const [requestsList, setRequestsList] = useState([]);
 const [searchTerms, setSearchTerms] = useState('')
 const [checked, setChecked] = useState(false);
 const [isLoading, setIsloading]= useState(true)


 useEffect(() => {
   getRequest(`type=${requestType}&limit=8&page=${activePage}`).then((requests) => {
     if (requests) {
       setRequestsList(requests.data[requestType]);
       setIsloading(false)
     }
   });
 }, []);

  const switchCheckbox = () => setChecked(!checked);
  const onRangeChange = (arr) => setRange(arr);
  const handleSearchInputChange = e => setSearchTerms(e.target.value)
  const toggleIcon = () => setShow(!show)
  const getRequestData = () => {
    setIsloading(true);
    const [min, max] = range;
    const query = `type=${requestType}&limit=8&page=${activePage}&min=${min}&max=${max}&term=${searchTerms}`;
    getRequest(query).then((requests) => {
      if (requests) {
        setRequestsList(requests.data[requestType]);
        setIsloading(false);
      }
    });

};

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
    const [min, max] = range;
    const query = `type=${requestType}&limit=8&page=${pageNumber}&min=${min}&max=${max}&term=${searchTerms}`;
    setIsloading(true);
   getRequest(query).then((requests) => {
     if (requests) {
       setRequestsList(requests.data[requestType]);
       setIsloading(false);
     }
   });
};

  const handlerequestType = (e) => {
    if(checked === true){
      setRequestType('sellrequest');
    }else{
      setRequestType('buyrequest');
    }
  }


  const categories = ['All', 'Iphone', 'Samsung','Ipad', 'MacBook','AirPods'];
  const capacities = [32, 64,128, 256];
  return (
    <div className='App'>
      <div className='container'>
        <div className='icons' onClick={toggleIcon}>
          ☰
        </div>
        <Header
          display={show}
          handleSearchInputChange={handleSearchInputChange}
          getRequestData={getRequestData}
        />
        <RequestType
          handlerequestType={handlerequestType}
          getRequestData={getRequestData}
          switchCheckbox={switchCheckbox}
        />
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
              <PriceFilter
                range={range}
                onRangeChange={onRangeChange}
                getRequestData={getRequestData}
              />
            </div>
            <div className='sidebar__capacities'>
              <h3 className='sidebar__header'>Storage</h3>
              <div className='sidebar__capacities__list'>
                {capacities.map((capacity) => (
                  <label className='storage' key={capacity}>
                    <input type='radio' name='radio' value={capacity} />
                    <span>{capacity}GB</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className='phones_list'>
            {isLoading?<Loader />: <PhonesList requestsList={requestsList} />}
          </div>
        </div>
        <div className='phone-pagination'>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={8}
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
