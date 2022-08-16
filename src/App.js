import Covid from "./components/Covid";
import Facility from "./components/Facility";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Provide from "./components/Provide";
import Reputation from "./components/Reputation"
import Speciality from "./components/Speciality";
import "./Style.css"

function App() {
  return (
    <div className="App">
     <Header />
     <Reputation />
     <Facility />
     <Speciality />
     <Covid />
     <Provide />
     <Footer />
    </div>
  );
}

export default App;
