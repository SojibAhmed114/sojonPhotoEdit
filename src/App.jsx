
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import SwiperReact from "./Components/SwiperReact"
import HowWork from "./Components/HowWork";
import Footer from "./Components/Footer";
import Diff from "./Components/Diff";
import DiffContainer from "./Components/DiffContainer";
import Services from "./Components/Services";

function App() {
  

  return (
    <>
      <Header />
      <Banner />
      <SwiperReact />
      <HowWork/>
      <Services/>
      {/* <DiffContainer/> */}
      <Footer/>
    </>
  );
}

export default App
