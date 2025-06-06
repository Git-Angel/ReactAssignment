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
import like from '../src/assets/Like Icon.svg';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Bessie Coleman")
  const [bio, setBio] = useState("Civil Aviator")
  //const [photo, setPhoto] = useState("Civil Aviator")

  const [isEditing, setIsEditing] = useState(false)

  const [card, setCard] = useState([
    {title: "Val Thorens" , image: one, icon: like},
    {title: "Restaurant terrace" , image: two, icon: like},
    {title: "An outdoor cafe" , image: three, icon: like},
    {title: "A very long bridge, over the forest..." , image: four, icon: like},
    {title: "Tunnel with morning light" , image: five, icon: like},
    {title: "Mountain house" , image: six, icon: like}
  ])
  
  const [showCard, setShowCard] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newImage, setNewImage] = useState(null)
  
  const handleAddPost = (e) => {
    e.preventDefault()
    if(newTitle && newImage) {
      setCard([{title: newTitle, image: newImage, icon: like}, ...card])
      setNewTitle("")
      setNewImage(null)
      setShowCard(false)
      
    }
  }
  

  return (
    <>
     <Logo />
      <div className='mother-container'>
        <div className='inner-section'>
        <div className='section-one'>
          <div>
            <img src={avatar} />
          </div>
          {isEditing ? (
            <div className='EditgapSpace'>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='enter name'></input>
              <input type='text' value={bio} onChange={(e) => setBio(e.target.value)} placeholder='enter bio'></input>
              <button onClick={() => setIsEditing(false)}>Submit</button>
            </div>
          ) :<div className='gapSpace'>
            <h1>{name}</h1>
            <p>{bio}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div> }
          
          </div>
          <div className='newpost'>
            <button onClick={() => setShowCard(!showCard)}>New Post</button>
            {showCard && (
            <form onSubmit={handleAddPost}>
           <input type="file" accept='image/*' value={newImage} onChange={(e) => setNewImage(e.target.value)} />
            <input type="text" name="" id="" value={newTitle} placeholder='input text' onChange={(e) => setNewTitle(e.target.value)} />
            <button type='submit'>Submit</button>
            </form>
            )}
            
          </div>
        </div>
<hr/>
        <div className='section-two'>
          {card.map((item, index) => (
            <div key={index}>
              <img src={item.image}/>
              <div className='tag-style'>
              <p>{item.title}</p>
               <img src={item.icon}/>
               </div>
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
