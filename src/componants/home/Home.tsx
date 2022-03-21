import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

function Home(){
    return (
        <div>
            <NavBar />
            <div className="Home-Landing">
                <h1 className="display-1">OMiGOZ</h1>
                {/* <img src={process.env.PUBLIC_URL+'/logo.png'} className="Home-Logo"/> */}
                <h2>Conevenience at your fingertips</h2>
            </div>
            
        </div>
    )
}

export default Home;