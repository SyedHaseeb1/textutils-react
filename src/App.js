import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  const [modeColors,setModeColors]=useState('dark');
  const themeClick = () => {
    if (theme === "light") {
      setTheme("dark");
      setModeColors('light');
      document.body.style.backgroundColor='#252935';
    } else {
      setTheme("light");
      setModeColors('dark');
      document.body.style.backgroundColor='white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" theme={theme} themeClick={themeClick} modeColors={modeColors} />
      <div className="container my-3">
        <Textform title="Enter your text" theme={theme} modeColors={modeColors}/>
      </div>
    </>
  );
}
export default App;
