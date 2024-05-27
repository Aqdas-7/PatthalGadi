import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stories from "./components/Stories";
import About from "./components/About";
import Footer from "./components/Footer";
import Updates from "./components/Updates";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <Stories></Stories>
        <About></About>
        <Updates></Updates>
        <Footer></Footer>
        {/* <FeaturedStories></FeaturedStories> */}
      </div>
    </>
  );
}

export default App;
