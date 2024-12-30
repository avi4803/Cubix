import Homepage from "./components/landingPage";
import HowWeHelpBrands from "./components/hwhc";
import Video1 from "./components/videoPage1";
import Video2 from "./components/videoPage2";
import ImageServices from "./components/imageService";
import VirtualYou from "./components/virtualYou";
import PricingSection from "./components/pricingSection";
import Testimonials from "./components/testimonials";
// import VerticalAutoScroll from "./components/auto-scroll-images";
function App() {
    return (
        <div className="font-bowlby-one-sc-regular">
            <Homepage />
            {/* <HowWeHelpBrands/> */}
            <Video1/>
            <Video2/>
            <ImageServices/>
            <VirtualYou/>
            <PricingSection/>
            <Testimonials/>
            {/* <VerticalAutoScroll/> */}
            
        </div>
    );
}

export default App;