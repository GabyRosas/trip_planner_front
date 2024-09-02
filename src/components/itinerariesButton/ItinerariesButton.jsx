import { ItinerariesButton } from "./styledItineraries";



const ButtonItineraries = ({to, destination, days }) => {
return (
<>
<ItinerariesButton to={to}  destination={destination}  days={days} >days</ItinerariesButton>
</>
);
};

export default ButtonItineraries;