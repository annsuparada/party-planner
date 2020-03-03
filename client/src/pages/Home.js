import React from 'react';
import HomeNavBar from '../components/navBar/HomeNavBar';
import { Carousel, Button } from 'antd';
import party1 from '../styles/img/party-1.jpg'
import party2 from '../styles/img/party-2.jpg'
import party3 from '../styles/img/party-3.jpg'
import party4 from '../styles/img/party-4.jpeg'
import './home.scss'
const Home = props => {
    const getStart = () => {
        props.history.push('/login')
    }

    return (
        <>
            <HomeNavBar />
            <div className="home">
                <div className="left">
                    <Carousel autoplay>
                        <div>
                            <img src={party1} />
                        </div>
                        <div>
                            <img src={party2} />
                        </div>
                        <div>
                            <img src={party3} />
                        </div>
                        <div>
                            <img src={party4} />
                        </div>
                    </Carousel>
                </div>
                <div className="right">
                    <h1>PARTY PLANNER</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                    <Button type="primary" onClick={getStart}>
                        GET START
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home;