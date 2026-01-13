// src/components/BookCard.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

interface BookCardProps {
  title: string;
  tagline: string;
  image: string;
  slug: string;
  comingSoon?: boolean;
  showIcon?: boolean;
}

// Outer wrapper that handles hover
const CardWrapper = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(143, 10, 10, 0.43);
  }
`;

// Full-height clickable area
const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
  height: 100%;
`;

const Card = styled.div`
  background-color:rgba(26, 26, 26, 0.48);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin: 0 0 0.5rem;
  color: #ffffff;
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: #cccccc;
  flex-grow: 1;
`;

const Meta = styled.div`
  margin-top: auto;
`;

export default function BookCard({
  title,
  tagline,
  image,
  slug,
  comingSoon,
  showIcon,
}: BookCardProps) {
  const linkPath = comingSoon ? '#' : `/books/${slug}`;

  return (
    <CardWrapper>
      <CardLink to={linkPath}>
        <Card>
          <Image src={image} alt={title} />
          <Content>
            <Title>{title}</Title>
            <Tagline>{tagline}</Tagline>
            <Meta>
              {comingSoon && (
                <Tagline style={{ color: '#ff4444' }}>
                  Coming Soon
                </Tagline>
              )}
              {showIcon && (
                <div style={{ marginTop: '0.5rem', color: '#ffd700', fontSize: '1.2rem' }}>
                  <FaBook />
                </div>
              )}
            </Meta>
          </Content>
        </Card>
      </CardLink>
    </CardWrapper>
  );
}
