import "./Buttons.css"

export default function Buttons(){
    return(
        <div className="buttons">
            <button className="btn1">Sign in</button><br />
            <button className="btn2"><img src="./src/assets/google.svg" alt="" /> Sign in with Google</button>
        </div>
    )
}