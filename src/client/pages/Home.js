import React from 'react';
import styled from 'styled-components';

// import MedidationIcon from '@assets/meditation.svg';
import SearchIcon from '@assets/investigate.svg';
import ListIcon from '@assets/list.svg';
import WarriorIcon from '@assets/warrior.svg';

export const Home = () => {
  return (
    <HomeContainer>
      <div className='landing'>
        <svg viewBox='0 0 400 400'>
          <defs>
            <path id='MyPath' d='M 20 40 Q 260 240 400 500' />
          </defs>
          <use xlinkHref='#MyPath' fill='none' stroke='#e8a87c' />
          <text fontFamily='Courier New' fontSize='42.5'>
            <textPath xlinkHref='#MyPath'>Ready. Set. Flow.</textPath>
          </text>
        </svg>
      </div>
      <div className='about'>
        <div className='about__item'>
          <SearchIcon className='about__item-icon' width='200' height='200' />
          <p className='about__item-text'>Search for poses</p>
        </div>
        <div className='about__item'>
          <ListIcon className='about__item-icon' width='200' height='200' />
          <p className='about__item-text'>Create new sequences</p>
        </div>
        <div className='about__item'>
          <WarriorIcon className='about__item-icon' width='200' height='200' />
          <p className='about__item-text'>Let it flow</p>
        </div>
      </div>
      <div className='quote'>
        <p className='quote-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        </p>
        <p className='quote-author'>Some Guru</p>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .landing {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    width: 100vw;
    background: var(--green);
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .about__item {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__item-text {
    padding: 2rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .quote {
    height: 250px;
    background: var(--sand);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .quote-text {
    text-align: center;
    padding-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .quote-author {
  }

  @media screen and (min-width: 860px) {
    .about {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
