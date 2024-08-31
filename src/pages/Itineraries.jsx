import { Title,InfoBar, Logo } from "../components/itineraryForm/formStyled";
import ButtonItineraries from "../components/itinerariesButton/ItinerariesButton";
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import { Name,MyProfile,Line,Titles,Body } from "../styled/styled-profile";
import ProfileImg from "../assets/images/Photo.png";
import LineImg from "../assets/images/Line 19.png";
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/urls";
import useApi from "../../services/useApi";


const Itineraries = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get("username") || "User";

return (
<>
<Body>
<InfoBar>
    <Title>Hi, {username}</Title>
    <Logo src={EarthLogo} alt="Earth Logo" />
</InfoBar>
    <Titles>My itineraries</Titles>
        <MyProfile src={ProfileImg} alt="MyItineraries" />
        <Name>HI</Name>
        <Line src={LineImg} alt="Line" />
<ButtonItineraries destination="madrid" days="3 dias"/>
</Body>
</>
);
};

export default Itineraries;