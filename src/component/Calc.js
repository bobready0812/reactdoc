import { useState } from "react"
import { Fragment } from "react/cjs/react.production.min";

export default function Calc() {
    const [user, setUser] = useState('');
    const [com, setCom] = useState('');
    const [result,setResult] = useState('');
    

    return (
     <Fragment>
     <div>
         <h1>I choose: {user} </h1>
         <h1>com choose: {com} </h1>
         <h1>Who's the winner? : {result}</h1>
     </div>

   


     </Fragment>
    )

}