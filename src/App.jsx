import './App.css'
import Input from './components/Input/Input'
import Header from './components/Header/Header'
import Remember from './components/Remember/Remember'
import Buttons from './components/Buttons/Buttons'

export default function App() {
  return(
    <div className="container">
      <div className="left-side">
      <Header />
      <Input />
      <Remember />
      <Buttons/>
      <p className='account'>Don’t have an account? <a href="#" className='sign-up'>Sign up fo free!</a></p>
      </div>
      <div className="right-side">
        <img src="./src/assets/Right Side.png" alt="" />
      </div>
    </div>
  )
}