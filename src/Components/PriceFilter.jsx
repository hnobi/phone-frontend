/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import  { Range } from 'rc-slider';
import "../scss/price-filter.scss";
import 'rc-slider/assets/index.css';

 const PriceFilter = (props) => {
   const { range, onRangeChange, getRequestData } = props;

   const [min, max] = range;
   const handleMinimumChange = (e) => onRangeChange([Number(e.target.value), max]);
   const handleMaximumChange = (e) => onRangeChange([min, Number(e.target.value)]);
   return (
     <div className='price-filter'>
       <div className='price-filter__values'>
         <span>$ {min} </span>
         <span>$ {max} </span>
       </div>
       <Range
         min={10}
         max={1150}
         defaultValue={range}
         ariaLabelledByGroupForHandles={['min', 'max']}
         onChange={onRangeChange}
         value={range}
       />
       <div className='price-filter__select'>
         <label>
           Min
           <input
             type='number'
             name='min'
             min='40'
             max='950'
             value={min}
             onChange={handleMinimumChange}
           />
         </label>
         <label>
           Max
           <input
             type='number'
             name='max'
             min='50'
             max='1150'
             value={max}
             onChange={handleMaximumChange}
           />
         </label>
         <button type='submit' onClick={getRequestData}>
           Filter
         </button>
       </div>
     </div>
   );
 };

export default  PriceFilter;
