import React from 'react';
import "../scss/phones-list.scss";

const buyrequest = [
  {
    _id: '5ee561049e7579745d394985',
    id: 9,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 580,
    condition: 'New',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d394986',
    id: 10,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 575,
    condition: 'A1',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d394987',
    id: 11,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 570,
    condition: 'A2',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d394988',
    id: 12,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 565,
    condition: 'B1',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d394989',
    id: 13,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 560,
    condition: 'B2',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d39498a',
    id: 14,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 555,
    condition: 'C',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d39498b',
    id: 15,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 550,
    condition: 'C/B',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
  {
    _id: '5ee561049e7579745d39498c',
    id: 16,
    phone_name: 'IPhone XS Max',
    storage_capacity: '256GB',
    price: 545,
    condition: 'C/D',
    status: 'Unlocked',
    imageUrl:
      'https://res.cloudinary.com/hnobi/image/upload/v1591974126/IphonesImages/iphone_xs_max.png',
    createdAt: '2020-06-13T23:28:04.416Z',
    updatedAt: '2020-06-13T23:28:04.416Z',
    __v: 0,
    score: 0,
  },
];


const Card = ({phone}) => {
    return (
      <div className='phone' key={phone.id}>
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
      </div>
    );

}



const PhonesList = () => {
  const phones = buyrequest
  return <div className='phones'>{phones.map(phone => <Card phone={phone} />)}</div>;
}

export default PhonesList;

