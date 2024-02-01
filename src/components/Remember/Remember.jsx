import "./Remember.css"

export default function Remember(){
    return(
        <div className="remember-forgot">
            <div className="remember">
                <input type="checkbox" /><label>Remember me</label>
            </div>
            <div className="forgot">
                <a href="#">Forgot password</a>
            </div>
        </div>
    )
}