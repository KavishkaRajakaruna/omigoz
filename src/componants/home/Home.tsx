import {motion} from "framer-motion";


import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


import "./Home.css";
// import Countdown from "../Countdown/Countdown";
// import Feeder from "../feeder/Feeder";

function Home(){
    return (
        <div >
            
            <div className="Home-Landing">
                
                <div className="row">
                <motion.div animate={{y: [-200,0], opacity:1}} transition={{ease: "easeIn", duration:1.2}} initial={{opacity:0}}>
                    <div className="flex-item">
                    <h1 className="display-1">OMiGOZ</h1>
                    </div>
                    <div className="flex-item">
                    <h2>Conevenience at your fingertips</h2>
                    <p> Following are the initial products. More are coming on the way. Enjoy !</p>
                    </div>
                    </motion.div>
                    &nbsp;

                    <div className="flex-item">
                    <motion.div initial={{opacity:0, scale: 0.4}} animate={{opacity:1, scale:1}} transition={{duration: 0.5, delay: 1.5}}>
                    <Button variant="outline-light" href="/mail_generator" size="lg" style={{borderColor: "#0a9396"}}> Mail Alias Generator</Button> {'  '}
                    
                    <Button variant="outline-light" href="/feeder" size="lg" style={{borderColor: "#ffb703"}}> News Feed</Button> {''}
                    <Button variant="outline-light" href="http://t.me/omigoz_bot" size="lg" style={{borderColor: "#e9d8a6"}}>Telegram Powercut Schedule Bot</Button>
                    </motion.div>
                    </div>
                    
                    &nbsp;
                    
                    
                </div>               
                
            </div>
            
            
        </div>
    )
}

export default Home;