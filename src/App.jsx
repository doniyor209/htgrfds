import { useState } from 'react';
import './App.css'

function App() {

  let RandomSon = Math.floor(Math.random() * 90 + 10);

  let [korsat, setKorsat] = useState(true);

  let [text, setText] = useState("");


  let [son, setSon] = useState(RandomSon);
  console.log(son);

  function plus() {
    setSon(son + 1)

  }

  function minus() {
    setSon(son - 1)

  }



  function handle(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }







  return (
    <div>
      <h2>Random Son:</h2>
      <h1>{son}</h1>

      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>

      <hr />

      <h2>Hidden Component</h2>
      <button onClick={() => setKorsat(false)}>Hidden</button>
      <button onClick={() => setKorsat(true)}>Show</button>


      <div className='df' style={{ display: korsat == true ? "block" : "none" }}>
        <p>Hello my name is Vini JR</p>

        <img src="https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/common/news-fc-mobile/fcmobile-visualsaudiopreview-thumbnail.jpg.adapt.crop16x9.575p.jpg" style={{ width: "400px" }} alt="" />







      </div>

      <hr />


      <h2>Input Change</h2>


      <input type="text" placeholder='Write your text ......' onChange={handle} />


      <p><b>Your text:</b> {text} </p>

    </div>
  )
}

export default App
