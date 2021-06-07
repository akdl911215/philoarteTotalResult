import React from 'react';
import Icofont from 'react-icofont';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { getArtDelete } from 'webapp/art/reducer/art.reducer';

const ArtSidebar = ({ post, name, category }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('post', post);

    const deleteArt = (e) => {
        e.stopPropagation();
        e.preventDefault();

        dispatch(getArtDelete(post));

        history.push('/art/list');
    };

    return (
        <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="widget sidebar_widget text-center">
                <Link to={`/art/modify/${post?.artId}`} className="btn btn-lg btn-dark-outline btn-square mt-10 mr-30">
                    수정
                </Link>
                <button className="btn btn-lg btn-dark-outline btn-square mt-10 ml-30" onClick={(e) => deleteArt(e)}>
                    삭제
                </button>
                <form className="search-form" method="get">
                    <input type="text" name="name" className="md-input" id="search" required="" placeholder="Type what it's your mind..." />
                    <button type="submit">
                        <Icofont icon="search-alt-2" className="search-submit" />
                    </button>
                </form>
            </div>
            <div className="mb-50">
                <h5 className="aside-title">About Me</h5>
                {/* <a href="about-me.html">
        <img src={""} alt="" />
      </a> */}
                <p className="mt-30">{name}</p>
                <a href={process.env.PUBLIC_URL} className="btn btn-md btn-dark-outline btn-square mt-10">
                    About Artist
                </a>
            </div>
            <div className="sidebar_widget widget_archive mb-50">
                <h5 className="aside-title">Archive</h5>
                <ul>
                    <li>
                        <a href={process.env.PUBLIC_URL}>January 2018</a> <span>14</span>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>May 2017</a> <span>8</span>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>June 2017</a> <span>63</span>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>Febuary 2012</a> <span>45</span>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>April 2016</a> <span>88</span>
                    </li>
                </ul>
            </div>
            <div className="social-icons-style-06 mb-50">
                <h5 className="aside-title">Follow Us</h5>
                <ul className="xs-icon">
                    <li>
                        <a className="icon facebook" href={process.env.PUBLIC_URL}>
                            <Icofont icon="social-facebook" />
                        </a>
                    </li>
                    <li>
                        <a className="icon twitter" href={process.env.PUBLIC_URL}>
                            <Icofont icon="social-twitter" />
                        </a>
                    </li>
                    <li>
                        <a className="icon tumblr" href={process.env.PUBLIC_URL}>
                            <Icofont icon="social-tumblr" />
                        </a>
                    </li>
                    <li>
                        <a className="icon flicker" href={process.env.PUBLIC_URL}>
                            <Icofont icon="social-flikr" />
                        </a>
                    </li>
                    <li>
                        <a className="icon instagram" href={process.env.PUBLIC_URL}>
                            <Icofont icon="social-instagram" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sidebar_widget widget_categories mb-50">
                <h5 className="aside-title">Category</h5>
                <ul>
                    <li>{category}</li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>Health</a>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>Motion Graphic</a>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>Conecpt Design</a>
                    </li>
                    <li>
                        <a href={process.env.PUBLIC_URL}>Lifestyle</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar_widget widget_tag_cloud mb-50">
                <h5 className="aside-title">Tags</h5>
                <div className="post-tags">
                    <a href={process.env.PUBLIC_URL}>Branding</a>
                    <a href={process.env.PUBLIC_URL}>Marketing</a>
                    <a href={process.env.PUBLIC_URL}>Photography</a>
                    <a href={process.env.PUBLIC_URL}>Illustration</a>
                    <a href={process.env.PUBLIC_URL}>Development</a>
                    <a href={process.env.PUBLIC_URL}>Multipurpose</a>
                    <a href={process.env.PUBLIC_URL}>Creativity</a>
                    <a href={process.env.PUBLIC_URL}>Apps</a>
                    <a href={process.env.PUBLIC_URL}>Fashion</a>
                    <a href={process.env.PUBLIC_URL}>Concept</a>
                    <a href={process.env.PUBLIC_URL}>Design</a>
                </div>
            </div>
        </div>
    );
};

export default ArtSidebar;
