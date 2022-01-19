import styled from 'styled-components';
import { Link } from 'next/link';
import { LinkS as LinkS } from 'react-scroll';

export const HeroContainer = styled.div`
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const HeroHeader = styled.h1`
  color: #d4af37;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;

  @media screen and (max-width: 820px) {
    padding: 25px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  padding: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fdfdfd;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  text-align: center;
  padding: 20px;
  width: 15%;
  min-height: 250px;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  /* &:hover {
    transform: scale(1.01);
    transition: all 0.25s ease-in-out;
    color: #6cc493;
    cursor: pointer;
  } */

  @media screen and (max-width: 820px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 45vw;
  }
`;

export const ChapterTitle = styled.p`
  font-weight: bold;
  font-size: smaller;
`;

export const ChapterImage = styled.img`
  height: 50%;
  width: 100%;
  align-self: flex-start;
`;

export const IconLinks = styled.a`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-out;
  }
`;
