import {  Row, Spinner } from "react-bootstrap";
import StatusCard from "./StatusCard";
import axios from 'axios';
import { useEffect, useState } from "react";
import NavBar from "../home/NavBar";





function Feeder() {
    const[feeds, setFeeds] = useState([]);
    const[isFetching, setFetching] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setFetching(true);
            const result = await axios.get('http://localhost:5000/api/v1/feeder');   
            setFeeds(result.data);
            // console.log(result.data)
            setFetching(false);
        };
        fetchData();
    } , []);


    return (
        <>
            <NavBar />
            &nbsp;

            { isFetching ? 
                <div className="FeederLoading container-fluid text-center ">            
                    <Spinner animation="border" variant="primary" />
                    <h1>Loading Content</h1>
                </div> :
                <div className="container-fluid">
                <Row xs={1} md={3} className="g-4">
                    {feeds.map((feed: any) => (
                      <StatusCard heading={feed.title} description={feed.summary} createdon={feed.published_on} publisher={feed.publisher} link={feed.link} id={feed.id} />
                    ))}
                </Row>
                </div>

            }
        </>
    )
}

export default Feeder;
