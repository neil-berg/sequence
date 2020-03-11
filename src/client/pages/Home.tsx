import React from 'react';
import styled from 'styled-components';

// import MedidationIcon from '@assets/meditation.svg';
import SearchIcon from '@assets/investigate.svg';
import ListIcon from '@assets/list.svg';
import WarriorIcon from '@assets/warrior.svg';

enum StyledHomeClasses {
  Landing = 'landing',
  About = 'about',
  AboutItem = 'about__item',
  AboutItemText = 'about__item-text',
  Quote = 'quote',
  QuoteText = 'quote-text',
  QuoteAuthor = 'quote-author'
}

export const Home = () => {
  return (
    <StyledHome>
      <div className={StyledHomeClasses.Landing}>
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
      <div className={StyledHomeClasses.About}>
        <div className={StyledHomeClasses.AboutItem}>
          <SearchIcon width='200' height='200' />
          <p className={StyledHomeClasses.AboutItemText}>Search for poses</p>
        </div>
        <div className={StyledHomeClasses.AboutItem}>
          <ListIcon width='200' height='200' />
          <p className={StyledHomeClasses.AboutItemText}>
            Create new sequences
          </p>
        </div>
        <div className={StyledHomeClasses.AboutItem}>
          <WarriorIcon width='200' height='200' />
          <p className={StyledHomeClasses.AboutItemText}>Let it flow</p>
        </div>
      </div>
      <div className={StyledHomeClasses.Quote}>
        <p className={StyledHomeClasses.QuoteText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        </p>
        <p className={StyledHomeClasses.QuoteAuthor}>Some Guru</p>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  .${StyledHomeClasses.Landing} {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    width: 100vw;
    background: var(--green);
  }

  .${StyledHomeClasses.About} {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .${StyledHomeClasses.AboutItem} {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .${StyledHomeClasses.AboutItemText} {
    padding: 2rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .${StyledHomeClasses.Quote} {
    height: 250px;
    background: var(--sand);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .${StyledHomeClasses.QuoteText} {
    text-align: center;
    padding-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  @media screen and (min-width: 860px) {
    .${StyledHomeClasses.About} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
