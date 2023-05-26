import Banner from '../../Components/Banner/Banner';
import Feedback from '../../Components/Feedback/Feedback';
import Gallery from '../../Components/Gallery/Gallery';
import Payment from '../../Components/Payment/Payment';
import ShopByCategory from '../../Components/ShopByCategory/ShopByCategory';
import useTitle from '../../CustomHooks/useTitle';

const Home = () => {
    useTitle('Home');
    
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <Feedback/>
            <Payment/>
        </div>
    );
};

export default Home;