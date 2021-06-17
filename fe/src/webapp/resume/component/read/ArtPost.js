import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Icofont from 'react-icofont';
import { useDispatch, useSelector } from 'react-redux';
import 'webapp/resume/css/ResumeCss.css';
import { getArtPosts } from 'webapp/art/reducer/art.reducer';
import { Link } from 'react-router-dom';
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
    const dispatch = useDispatch()
   
    const items = useSelector((state) => state.resumes.current);
    const artList = useSelector(state => state.arts.pageResult)
    useEffect(()=>{
        dispatch(getArtPosts(items.artistId))
    },[])
    return (
        <>
            <section className="white-bg">
                <div className="container">
                    <div className="row blog-style-01  display-flex" style={{ flexWrap: 'wrap', justifyContent: 'left' }}>
                        {artList.dtoList.map((item, id) => (
                            <div id="img-wrap" className="col-md-4 col-sm-4 col-xs-12" key={id}>
                                <div className="post">
                                    <div className="post-img img-box">
                                        <img className="img-responsive " src={`http://localhost:8080/resume_file/display?fileName=${'s_' + item.file.uuid + '_' + item.file.originalFileName}`} alt="" />
                                        <div className="post-metas">
                                            <div className="post-metas-center">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-info all-padding-20">
                                        <h3>
                                           <Link to={`/art/read/${item.artId}`}>{item.title}</Link>
                                        </h3>
                                        <p>{item.category.categoryName}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default ArtPost;
