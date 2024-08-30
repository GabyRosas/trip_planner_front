import { ItinerariesButton } from "./styledItineraries";



const ButtonItineraries = ({destination, days }) => {
return (
<>
<ItinerariesButton>{destination}, {days} days</ItinerariesButton>
</>
);
};

export default ButtonItineraries;