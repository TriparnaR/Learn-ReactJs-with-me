import logo from './logo.svg';
import './App.css';
let name = "Triparna";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className='container'>
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ratione eos. Fugit recusandae voluptatem, commodi omnis laboriosam repellendus cumque doloribus, quae deserunt repellat inventore qui maxime delectus ipsum eaque officia veniam et a sunt!</p>
    </div>
    
    </>
    
  );
}

export default App;
