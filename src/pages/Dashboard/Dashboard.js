import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Row, Col, Card, Button} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>

            <Row>
                <Col md='2'>

                    <div  className="py-5">
                        <ul>
                            <li> <Link className='text-decoration-none' to='/dashboard'> Add User </Link> </li>
                            <li> <Link className='text-decoration-none' to='/dashboard/banner'> Add Banner</Link> </li>
                           
                        </ul>
                    </div>

                </Col> 

                <Col md='10'>

                    <Outlet> </Outlet>

                </Col> 
            </Row>

        </div>
    );
};

export default Dashboard;