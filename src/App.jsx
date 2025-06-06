import './App.css'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import './index.css'
import avatar from '../src/assets/Avatar.svg';
import one from '../src/assets/Card-1.svg';
import two from '../src/assets/Card-2.svg';
import three from '../src/assets/Card-3.svg';
import four from '../src/assets/Card-4.svg';
import five from '../src/assets/Card-5.svg';
import six from '../src/assets/Card-6.svg';

function App() {
  const card = [
    {title: "Val Thorens" , image: one},
    {title: "Restaurant terrace" , image: two},
    {title: "An outdoor cafe" , image: three},
    {title: "A very long bridge, over the forest..." , image: four},
    {title: "Tunnel with morning light" , image: five},
    {title: "Mountain house" , image: six}
  ]
  

  return (
    <>
     <Logo />
      <div className='mother-container'>
        <div className='inner-section'>
        <div className='section-one'>
          <div>
            <img src={avatar} />
          </div>
          <div className='gapSpace'>
            <h1>Bessie Coleman</h1>
            <p>Civil Aviator</p>
            <button>Edit</button>
          </div>
          </div>
          <div className='newpost'>
            <button>New Post</button>
          </div>
        </div>
<hr/>
        <div className='section-two'>
          {card.map((item, index) => (
            <div key={index}>
              <img src={item.image}/>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
<hr/>
     <Footer />
    </>
  )
}

export default App
