import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const PresentationTwo = ({ title, text, textBtn, pathBtn, backfont }) => (
    <section style={{ background: `url() center center no-repeat #24182e` }} className="height-600px">
        <div className="container">
            <div className="row">
                <div className="col-md-8 text-left white-color">
                    <h1 className="font-700 xs-font-40px font-40px" data-backfont={backfont || 'Anno'}>
                        {title && parse(title)}
                    </h1>
                    <p className="mt-30">{text && parse(text)}</p>
                    <p className="mt-30">
                        <Link to={'/art/register'} className="btn btn-lg btn-color btn-square">
                            {textBtn}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default PresentationTwo;
