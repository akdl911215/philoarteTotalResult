import React from 'react';
import Slider from 'react-slick';
import Icofont from 'react-icofont';
import { useSelector } from 'react-redux';
import 'webapp/resume/css/ResumeCss.css';
const ArtPost = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        className: 'blog-grid-slider slick',
    };

    const items = useSelector((state) => state.resumes.current);
    const files = items.resumeFiles;

    return (
        <>
            <section className="white-bg">
                <div className="container">
                    <div className="row blog-style-01  display-flex" style={{ flexWrap: 'wrap', justifyContent: 'left' }}>
                        {files.map((file, id) => (
                            <div id="img-wrap" className="col-md-4 col-sm-4 col-xs-12" key={id}>
                                <div className="post">
                                    <div className="post-img img-box">
                                        <img className="img-responsive " src={`http://localhost:8080/resume_file/display?fileName=${'w_' + file.uuid + '_' + file.fname}`} alt="" />
                                        <div className="post-metas">
                                            <div className="post-metas-center">
                                                <p className="post-date">{file.fileTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-info all-padding-20">
                                        <h3>
                                            <a href={process.env.PUBLIC_URL}>{file.fileDetail}</a>
                                        </h3>
                                        <p>{file.fileWorkedDate}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-100">
                        <div className="col-md-12">
                            <div className="text-center">
                                <div className="pagination dark-color">
                                    <ul>
                                        <li>
                                            <a href={process.env.PUBLIC_URL}>
                                                <Icofont icon="long-arrow-left" className="mr-5 xs-display-none" />
                                                Prev
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href={process.env.PUBLIC_URL}>1</a>
                                        </li>
                                        <li>
                                            <a href={process.env.PUBLIC_URL}>2</a>
                                        </li>
                                        <li>
                                            <a href={process.env.PUBLIC_URL}>3</a>
                                        </li>
                                        <li>
                                            <a href={process.env.PUBLIC_URL}>
                                                Next
                                                <Icofont icon="long-arrow-right" className="ml-5 xs-display-none" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ArtPost;
