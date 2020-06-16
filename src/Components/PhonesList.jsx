import React from 'react';
import "../scss/phones-list.scss";

const Card = ({phone}) => {
    return (
      <>
        <p className='phone__condition'>{phone.condition}</p>
        <div className='phone__image'>
          <img src={phone.imageUrl} alt='phone' />
        </div>
        <p className='phone__name'>{phone.phone_name}</p>
        <p className='phone__status'>
          <span>{phone.status}</span>
          {' | '}
          <span className='phone__capacity'>{phone.storage_capacity}</span>
        </p>
        <p className='phone__price-details'>
          <span className='unit'>Unit Price</span>
          <span className='price'>${phone.price}</span>
        </p>
        <p className='phone__availability'>1500 availaible</p>
        <button type='submit'>Buy</button>
      </>
    );

}



const PhonesList = ({requestsList}) => {
  if(requestsList.length < 1){
    return <h2> No Available Phones Match Your Request</h2>
  }
  return (
    <div className='phones'>
      {requestsList.map((phone) => (
        <div className='phone' key={phone.id}>
          <Card phone={phone} />
        </div>
      ))}
    </div>
  );
};

export default PhonesList;

