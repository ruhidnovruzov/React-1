import "./Input.css"
export default function Input(){
    return(
        <div className="input">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" /><br /><br />
            <label>Password</label>
            <input type="password" placeholder="***********"/>
        </div>
    )
}