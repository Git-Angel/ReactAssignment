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

  // const imageUrl = URL.createObjectURL(newImage)

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
              {/* <h3>Edit Info</h3> */}
              <label>Full Name:</label>
              <input type='text'  onChange={(e) => setName(e.target.value)} placeholder='Enter fullname'></input>
              <label>Bio:</label>
              {/* <input type='text'  onChange={(e) => setBio(e.target.value)} placeholder='Enter bio'></input> */}
              <textarea  rows="5" cols="32" placeholder = "Enter biography"  onChange={(e) => setBio(e.target.value)}></textarea>
              <button onClick={() => setIsEditing(false)}>Submit</button>
            </div>
          ) :<div className='gapSpace'>
            <h1>{name}</h1>
            <p>{bio}</p>
            <button onClick={() => setIsEditing(true)}>
<svg width="16" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="13.0676" y="4.87506" width="11.6506" height="3.21396" transform="rotate(135 13.0676 4.87506)" fill="#212121"/>
<path d="M14.2035 1.4662C14.8311 2.09377 14.8311 3.11125 14.2035 3.73881L13.6354 4.30697L11.3628 2.03436L11.9309 1.4662C12.5585 0.83864 13.576 0.83864 14.2035 1.4662Z" fill="#212121"/>
<path d="M1.54021 13.4837L2.55674 10.8408L4.82935 13.1134L2.18637 14.1299C1.782 14.2854 1.38468 13.8881 1.54021 13.4837Z" fill="#212121"/>
</svg> <span>Edit Profile</span>
            </button>
          </div> }
          
          </div>
          <div className='newpost'>
            <button onClick={() => setShowCard(!showCard)}>
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7L13 7" stroke="#FCF5E5" stroke-width="2" stroke-linecap="round"/>
<path d="M7 13L7 1" stroke="#FCF5E5" stroke-width="2" stroke-linecap="round"/>
</svg><span>New Post</span>
            </button>
            {showCard && (
            <form onSubmit={handleAddPost} className='newpostForm'>
              <label>Name of Restaurant:</label>
            <input type="text" name="" id="newPostTex" value={newTitle} placeholder='input text' onChange={(e) => setNewTitle(e.target.value)} />
            <label>Image of Restaurant:</label>
            <input type="file" accept='image/*' value={newImage} onChange={(e) => setNewImage(e.target.value)} className='avatarimg' />
            <button type='submit'>Submit</button>
            </form>
            )}
            
          </div>
        </div>
<hr/>
        <div className='section-two'>
          {card.map((item, index) => (
            <div key={index} className='section-two-style'>
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
