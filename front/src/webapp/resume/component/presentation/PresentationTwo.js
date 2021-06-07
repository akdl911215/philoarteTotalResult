import React from 'react';
import parse from 'html-react-parser';
import img from 'webapp/images/resume/portfolio_first.jpeg';
import { Link } from 'react-router-dom';

const PresentationTwo = ({ title, text, textBtn, textBtn2, backfont }) => (
    <section style={{ background: `url(${img}) center center no-repeat #24182e` }} className="height-600px">
        <div className="container">
            <div className="row">
                <div className="col-md-8 text-left white-color">
                    <h1 className="font-700 xs-font-40px font-40px" data-backfont={backfont || 'PHILO_ARTE'}>
                        {title && parse(title)}
                    </h1>
                    <p className="mt-30">{text && parse(text)}</p>
                    <p className="mt-30">
                        <Link to="/resume/register">
                            <button className="btn btn-lg btn-color btn-square">{textBtn || 'REGISTER'}</button>
                        </Link>
                        <Link to="로그인하러가기">
                            <button className="btn btn-lg btn-color btn-square" style={{ marginLeft: '20px' }}>
                                {textBtn2 || 'LOGIN'}
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default PresentationTwo;
