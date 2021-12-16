import { Card, Button } from 'react-bootstrap'


const CountryCard = ({ name, capital, population, flag, googleMaps }) => {
  return (
    <Card style={{ width: "18rem", height: "25rem" }}>
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          <p><b>Capital:</b> {capital} </p>
          <p><b>Population:</b> {population} </p>
        </div>
        <Button href={googleMaps} target='_blank'>Show in Google maps</Button>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
