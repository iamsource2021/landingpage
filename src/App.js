// import logo from './logo.svg';
import './App.css';
// import Mobile from './Layouts/Mobile/index';
import Desktop from './Layouts/Desktop/index';
// import { useStyleMediaQuery } from './hooks/useStyleMediaQuery.js';

function App() {
  
  // const { matches: isMobile } = useStyleMediaQuery(
  //   {
  //     mixOrMax: 'max',
  //     widthOrHeight: 'width',
  //     value: 767
  //   }
  // );

  return (
    <div className="App">
      <Desktop/>
    </div>
  );
}

export default App;
