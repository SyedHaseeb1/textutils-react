import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Textform title="Enter your text"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
