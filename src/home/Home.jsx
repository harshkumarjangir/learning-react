import Container from "../components/Container";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import State from "../usestate/State";


const Home = () => {
    return (
        <>
        <Navbar />
        <Hero/>
        <Container/>
        <State/>
        {/* <Footer/> */}
        </>
    )
}

export default Home;