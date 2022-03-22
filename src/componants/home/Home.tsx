import {motion} from "framer-motion";


import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./NavBar";
import "./Home.css";
import {Countdown} from "../Countdown/Countdown";

function Home(){
    return (
        <div >
            
            <div className="Home-Landing">
                
                <div className="row">
                <motion.div animate={{y: [-200,0], opacity:1}} transition={{ease: "easeIn", duration:1.5}} initial={{opacity:0}}>
                    <div className="flex-item">
                    <h1 className="display-1">OMiGOZ</h1>
                    </div>
                    <div className="flex-item">
                    <h2>Conevenience at your fingertips</h2>
                    </div>
                    </motion.div>
                    &nbsp;
                    <div className="flex-item">
                        <p className="lead font-italic">"Thank you for your patience. Our systems are currently under developement. We'll be online soon."</p>
                    </div>
                    &nbsp;
                    <div className="flex-item">
                    <h1 className="h2 text-muted"> <Countdown /></h1>
                    </div>
                </div>               
                
            </div>
            
        </div>
    )
}

export default Home;