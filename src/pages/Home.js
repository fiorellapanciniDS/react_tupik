import Navbar from "../components/Navbar";
import ItemListContainer from "../components/ItemListContainer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="Hola Mundo" />
        </div>
    );
}

export default Home;