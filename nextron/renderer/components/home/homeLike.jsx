import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// const SideDiv = styled.div`

// `

const HomeLike = () => {
  return (
    <div>
      <div>
        <Link to='1' spy={true} smooth={true}>
          <div
            style={{
              height: '500px',
            }}
          >
            첫번째 추천
          </div>
        </Link>
        <Link to='2' spy={true} smooth={true}>
          <div
            style={{
              height: '500px',
            }}
          >
            두번째 추천
          </div>
        </Link>
        <Link to='3' spy={true} smooth={true}>
          <div
            style={{
              height: '500px',
            }}
          >
            {' '}
            세번째 추천
          </div>
        </Link>
        <Link to='4' spy={true} smooth={true}>
          <div
            style={{
              height: '500px',
            }}
          >
            네번째 추천
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeLike;
