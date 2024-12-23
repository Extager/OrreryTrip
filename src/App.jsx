import Header from "./compontents/header/header.jsx";
import About_1 from "./compontents/main/about_1/about_1.jsx";
import About_2 from './compontents/main/about_2/about_2.jsx';
import Ticket_buy from './compontents/main/ticket_buy/ticket_buy.jsx';
import Advantages from './compontents/main/advantages/advantages.jsx';
import Reviews from './compontents/main/reviews/reviews.jsx';
import Map from "./compontents/main/map/map.jsx";

export default function App(){
  return(
    <>
    <div>
      <Header />
    </div>

    <div>
      <About_1 />
    </div>

    <div>
      <About_2 />
    </div>
    
    <div>
      <Ticket_buy />
    </div>
    <div>
      <Advantages />
    </div>
    <div>
      <Reviews />
    </div>
    <div>
      <Map />
    </div>
    </>
    
  );
}