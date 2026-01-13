// src/pages/BookDetail.tsx
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #111;
  color: white;
  padding: 4rem 2rem;
`;

export default function BookDetail() {
  const { slug } = useParams();

  return (
    <Wrapper>
      <h1>Book Details: {slug}</h1>
      <p>This is where you'll display the detailed info for the book "{slug}".</p>
    </Wrapper>
  );
}