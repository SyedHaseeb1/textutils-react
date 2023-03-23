import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  let name = "Kabootar";
  let desc = "A practice website for learning";
  let reactJS = "React Js Framework";

  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
      <Textform title="Enter your text"/>
      </div>
      
    </>
  );
}

export default App;
