import React from 'react'
import logo from "../preview.png";

 const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='left'>
        <h2>Shop our latest</h2>
        <h2>Available stock here</h2>
        <div className='search_bar'>
          <form>
            <input type='text' placeholder='iPhone 7,b2,64GB' />
            <button className='btn search' type='submit'>
              SEARCH
              <span className='arrow'>&rarr; </span>
            </button>
          </form>
        </div>
      </div>
      <div className='right'>
        <img src={logo} alt='product-img' />
      </div>
    </div>
  );
}
export default Header;
