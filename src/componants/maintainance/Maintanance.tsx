/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Maintain.css';

function Maintanance(){
    return (
    <div className='App'>
       <h1>Sorry We're under maintainance </h1>
      <h2>We will be back soon</h2>
      {/* // eslint-disable-next-line jsx-a11y/alt-text */}
      <img  src={process.env.PUBLIC_URL+'developer.jpg'} className='App-Developer'/>
    </div>
    )
}
export default Maintanance;