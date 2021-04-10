import React, { useState, useEffect, createContext, useContext} from 'react';
import './App.scss';
import { Homepage, HomepageMobile } from './components';

// for viewing mobile vs desktop
// ****************************************
const viewportContext = createContext();

// for handling window resizing
const ViewportProvider = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

// get current viewport dimensions
const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

// desktop version
const Desktop = () => {
  return (
    <>
      <Homepage/>
    </>
  );
};

// mobile version
const Mobile = () => {
  return (
    <>
      <HomepageMobile/>
    </>
  );
};

// display desktop or mobile
const Webpage = () => {
  const { width } = useViewport();
  const breakpoint = 800;

  return width < breakpoint ? Mobile() : Desktop();
};
// ****************************************

function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <Webpage/>
      </ViewportProvider>
    </div>
  );
}

export default App;
