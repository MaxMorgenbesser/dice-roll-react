
import './App.css';
import {useState } from 'react'
import Roll1 from './Roll1';
import Roll2 from './Roll2';
import Roll3 from './Roll3'
import Roll4 from './Roll4'
import Roll5 from './Roll5'
import Roll6 from './Roll6'

function App() {
  const randomNumber=()=>Math.floor(Math.random()*(6-1)+1)
  const [p1Roll,setP1Roll]=useState(null)
  const [p2Roll,setP2Roll]=useState(null)


  return (
    <div className="App">
      <button onClick={()=>setP1Roll(randomNumber())}>Player one roll!</button>
      <button onClick={()=>setP2Roll(randomNumber())}>Player two roll!</button>
   <h1>Player one </h1>   
{!p1Roll? <h1 className="playerOne"> Player One Has not Rolled yet</h1>:
(p1Roll===1?<Roll1/> :
(p1Roll===2?<Roll2/>:
(p1Roll===3?<Roll3/>:
(p1Roll===4?<Roll4/>:
(p1Roll===5?<Roll5/>:
(p1Roll===6?<Roll6/>:<p></p>
))))))}

<h1>Player one </h1>   
{!p2Roll? <h1 className="playerOne"> Player One Has not Rolled yet</h1>:
(p2Roll===1?<Roll1/> :
(p2Roll===2?<Roll2/>:
(p2Roll===3?<Roll3/>:
(p2Roll===4?<Roll4/>:
(p2Roll===5?<Roll5/>:
(p2Roll===6?<Roll6/>:<p></p>
))))))}

<h1 className="playerTwo"></h1>

      {!p1Roll || !p2Roll? <h3>At least one of you still has to roll</h3>:
      (p1Roll===p2Roll ? <h3>Tie, you both have {p1Roll}</h3>:
      (p1Roll>p2Roll? <h3>Player one wins with {p1Roll} </h3>:
      (p1Roll<p2Roll? <h3>Player two wins with {p2Roll} </h3>:<p></p>
      ))

      )}
      
      
    

    </div>)
}

export default App;
