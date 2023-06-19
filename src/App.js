import logo from './logo.svg';
import './index.css';


function App() {
  return (
    <div className="App">
      <section className='p-8 bg-white'>
        <div className="rounded-2xl box-border bg-gradient-to-b p-8 w-full h-full from-pink to-ocean">
          <div className='module-container mx-auto'>
            <img src={logo} className="h-20 object-contain w-auto mx-auto" alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
