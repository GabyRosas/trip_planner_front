import { ItinerariesButton, ContainerItineraries } from "./styledItinearies";
import { Body, Logo } from "../../styled/styled-home";
import EarthLogoImage from '../../assets/images/EarthLogo.svg';


const ButtonItineraries = () => {
    return (
    <>
    <Body>
    <Logo src={EarthLogoImage} alt="Logo"></Logo>
    <ContainerItineraries>
    <ItinerariesButton>Barcelona,spring,3 days</ItinerariesButton>
    <ItinerariesButton>Barcelona,spring,3 days</ItinerariesButton>
    <ItinerariesButton>Barcelona,spring,3 days</ItinerariesButton>
    <ItinerariesButton>Barcelona,spring,3 days</ItinerariesButton>
    </ContainerItineraries>
    </Body>
    
    </>
    );
};

export default ButtonItineraries;