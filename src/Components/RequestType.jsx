/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './scss/request.scss';


const RequestType = () => {
  return (
    <div className='request_type'>
      <h2>Buy request</h2>
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider round'> </span>
      </label>
      <h2>Sell request</h2>
    </div>
  );
}

export default RequestType
