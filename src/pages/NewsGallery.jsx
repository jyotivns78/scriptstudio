import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../assets/css/News.css";

const NewsGallery = () => {
    const cardData = [
        { id: 1, title: 'The Times of India', image: '../../images/one.png' },
        { id: 2, title: 'Economics Times.Com', image: '../../images/two.png' },
        { id: 3, title: 'TimesPrime', image: '../../images/three.png' },
        { id: 4, title: 'NBT', image: '../../images/four.png' },
        { id: 5, title: 'Abound', image: '../../images/five.png' },
        { id: 6, title: 'Times Mobile', image: '../../images/six.png' },
        { id: 7, title: 'Magic Bricks', image: '../../images/seven.png' },
        { id: 8, title: 'Gaana', image: '../../images/eight.png' },
        { id: 9, title: 'MX Player', image: '../../images/nine.png' },
        { id: 10, title: 'Cricbuzz', image: '../../images/ten.png' },
        { id: 11, title: 'ET Money', image: '../../images/eleven.png' },
        { id: 12, title: 'ETPrime.com', image: '../../images/twelve.png' },
        { id: 13, title: 'Times Card', image: '../../images/thirteen.png' },
        { id: 14, title: 'Times Points', image: '../../images/fourteen.png' },
        { id: 15, title: 'Coupon Duniya', image: '../../images/fifteen.png' },
        { id: 16, title: 'Pune Mirror', image: '../../images/sixteen.png' },
       
      ];
  return (
   <>
    <Header />
    <Container className='py-5'>
        <Row xs={1} md={2} lg={4}>
          {cardData.map((card) => (
            <Col key={card.id} className='mb-4'>
              <Card className='bg-dark text-white cards'>
                <Card.Img src={card.image} alt={card.title} className='card-img-opacity' />
                <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>
                  <Card.Title className='text-center card-title'>{card.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
   </>
  )
}

export default NewsGallery


