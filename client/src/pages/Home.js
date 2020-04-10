import React from 'react';
import HomeNavBar from '../components/navBar/HomeNavBar';
import { Button } from 'antd';
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

                <div className="flex-container">
                    <div className="left">
                        <div className="text-box">
                            <h1>Welcome to <br /> Party Planner.</h1>
                            <h4>
                                Our planner provides you to keep all your tasks and budgets in one app.
                            </h4>
                            <Button
                                type="primary"
                                onClick={getStart}
                                style={{ width: "150px", height: "40px", marginTop: "15px" }}
                            >
                                GET START
                            </Button>
                        </div>
                    </div>

                    <div className="right">
                        <div className="img-box">
                            <img src={budgetIcon} alt="budget icon" />
                            <h4>
                                Our planner provides you to keep all your tasks and budgets in one app
                            </h4>
                        </div>
                        <div className="img-box">
                            <img src={taskIcon} alt="task icon" />
                            <h4>
                                Our planner provides you to keep all your tasks and budgets in one app
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;