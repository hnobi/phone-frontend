/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  border: 5px solid;
  margin: 5vh auto;
  border-color: #1b73e8;
  font-weight: 700;
`;

 const Loader = () => {
  

    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          size={80}
          loading
        />
      </div>
    );
  }

  export default Loader

