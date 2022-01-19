import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Heading = styled.h1`
  font-size: 2rem;
  color: blue;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
