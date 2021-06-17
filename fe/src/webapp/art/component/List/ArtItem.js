import React from "react";
import {Link} from "react-router-dom";

const ArtItem = ({artId, title, category, file}) => {

    return (

        <div
            className={"item-wrap cbp-item col-md-3 col-sm-6 " + category}
            style={{position: "relative"}}>

            <div className="portfolio-item">
                <Link to={`/art/read/${artId}`}>
                    <img
                        src={`http://localhost:8080/art_files/display?fileName=${"s_" + file.uuid + "_" + file.originalFileName}`}
                        alt="이미지가 없습니다"/>
                    <div className="portfolio-info white-bg" style={{margin: "0 auto"}}>
                        <div className="centrize">
                            <div className="v-center dark-color">
                                <h3>{title}</h3>
                                <p>{category}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ArtItem;
