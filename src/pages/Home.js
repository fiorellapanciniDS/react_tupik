import Navbar from '../components/Navbar';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
    return (
        <div className='container-fluid App'>
            <Navbar />
            <ItemDetailContainer />
        </div>
    );
};

export default Home;