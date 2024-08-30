import React from "react";
import { Container, Header, Title, Icon, ImageContainer, MainImage, Location, Section, SectionTitle, Description, ImageGrid, SmallImage, ButtonContainer, Button } from "./styledItinenary";
  
  const TravelCard = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/v1/")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);
  
    if (!data) return <div>Loading...</div>;
  
    return (
      <Container>
        <Header>
          <Title>Hi, {data.name}</Title>
          <Icon src={data.icon} alt="icon" />
        </Header>
        <ImageContainer>
          <MainImage src={data.mainImage} alt={data.location} />
          <Location>{data.location}</Location>
        </ImageContainer>
        <Section>
          <SectionTitle>Morning</SectionTitle>
          <Description>{data.morning.description}</Description>
          <ImageGrid>
            <SmallImage src={data.morning.image1} alt="Morning 1" />
            <SmallImage src={data.morning.image2} alt="Morning 2" />
          </ImageGrid>
        </Section>
        <Section>
          <SectionTitle>Afternoon</SectionTitle>
          <Description>{data.afternoon.description}</Description>
          <ImageGrid>
            <SmallImage src={data.afternoon.image1} alt="Afternoon 1" />
            <SmallImage src={data.afternoon.image2} alt="Afternoon 2" />
          </ImageGrid>
        </Section>
        <ButtonContainer>
          <Button>Back</Button>
          <Button>Save</Button>
        </ButtonContainer>
      </Container>
    );
  };
  
  export default TravelCard;