/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import "../scss/request.scss";

const RequestType = ({ handlerequestType, getRequestData, switchCheckbox }) => {
      
  return (
    <div className='request_type'>
      <h2>Buy requests</h2>
      <label className='switch'>
        <input
          type='checkbox'
          onChange={() => {
            switchCheckbox();
            handlerequestType();
          }}
          
          onClick={getRequestData}
        />
        <span className='slider round'> </span>
      </label>
      <h2>Sell requests </h2>
    </div>
  );
};

export default RequestType
