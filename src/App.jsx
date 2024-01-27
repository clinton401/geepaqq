import { createContext, useEffect, useState } from 'react'
import './App.css'
import Routess from './Routess'
import NavBar from './Layout/NavBar/NavBar'
import AsideMenu from './Layout/AsideMenu/AsideMenu'
export const myContext = createContext()
function App() {
  const [lightMode, setLightMode] = useState(() => {
   const mode = JSON.parse(window.localStorage.getItem("mode"));
   return mode !== null ? mode : true;
  });
  const [showMenu, setShowMenu] = useState(false);
   const [ppMode, setPpMode] = useState({
     calender: false,
     noti: false,
     prf: false,
   });
    function resetPpMode() {
      setPpMode({
        calender: false,
        noti: false,
        prf: false,
      });
    }
    useEffect(() => {
      window.localStorage.setItem("mode", JSON.stringify(lightMode));
    }, [lightMode]);
  const values = {
    lightMode,
    setLightMode,
    showMenu,
    setShowMenu,
    ppMode,
    setPpMode,
    resetPpMode,
  };
  return (
    <div
      className={`app ${!lightMode ? "darkmode" : ""}`}
      id={!lightMode ? "dmode" : ""}
    >
      <myContext.Provider value={values}>
        <div id="asmenu">
          <AsideMenu />
        </div>
        <NavBar />

        <Routess />
      </myContext.Provider>
    </div>
  );
}

export default App
