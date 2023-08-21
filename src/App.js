import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title="Generative Text Utilizer" aboutText="About GTU" />
      <div className="container my-3">
        <TextFrom heading="Enter the text to analyse"/>
</div>
<Footer/>
   </> 
  );
}

export default App;
