import React from 'react';
import HomeNavBar from '../components/navBar/HomeNavBar';
import { Carousel, Button } from 'antd';
import party1 from '../styles/img/party-1.jpg';
import party2 from '../styles/img/party-2.jpg';
import party3 from '../styles/img/party-3.jpeg';
import party4 from '../styles/img/party-4.jpeg';
import budgetIcon from '../styles/img/budget-icon.png';
import taskIcon from '../styles/img/task-icon.png';
import './home.scss';

const Home = props => {
    const getStart = () => {
        props.history.push('/login')
    }

    return (
        <>
            <HomeNavBar />

            <div className="home">
                <div className="header">
                    <h1>PARTY PLANNER</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <Button type="primary" onClick={getStart}>
                        GET START
                    </Button>
                </div>
                <div className="flex-container">
                    <div className="left">
                        
                        <img src={budgetIcon} alt="budget icon" />
                    </div>
                    <div className="right">

                        
                        <img src={taskIcon} alt="task icon" />
                    </div>

                </div>
                <Carousel autoplay>
                            <div>
                                <img src={party1} alt="Outdoor Party" />
                            </div>
                            <div>
                                <img src={party2} alt="Concert Party" />
                            </div>
                            <div>
                                <img src={party3} alt="Indoor Party" />
                            </div>
                            <div>
                                <img src={party4} alt="Wedding Party" />
                            </div>
                        </Carousel>
            </div>
        </>
    )
}

export default Home;