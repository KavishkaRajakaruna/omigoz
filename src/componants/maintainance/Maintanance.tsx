import './Maintain.css';

function Maintanance(){
    return (
    <div className='App'>
       <h1>OMiGOZ.COM</h1>
      <h2>Convenience at your fingertips.</h2>
      <img  src={process.env.PUBLIC_URL+'developer.jpg'} className='App-Developer'/>
    </div>
    )
}
export default Maintanance;