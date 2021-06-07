import React from 'react';

const PageTitle = ({ title, image }) => (
    <div className="transition-none">
        <section className="title-hero-bg parallax-effect" style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title text-center white-color">
                            <h1 className="font-700">{title}</h1>
                            <div className="breadcrumb mt-20">
                                <ul>
                                    <li>
                                        <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
                                    </li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default PageTitle;
