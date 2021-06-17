import React from "react";
import parse from "html-react-parser";
import LoadScript from "webapp/common/helpers/LoadScript";
import ItemHandle from "./ItemHandle";
import { Link } from "react-router-dom";
import { Button} from "@material-ui/core";

const HomeList = ({ title, tagline, backfont,data, dash, dashColor, id }) => {

  LoadScript("js/portfolio/portfolio-grid.js");
    
  const totalList = data.map( (funding, i) => {
    return (
      <ItemHandle 
        key={funding.fundingId}
        fundingId={funding.fundingId}
        title={funding.title}
        hashtag={funding.hashtag}
        image={funding.fundingFiles}
      />
    )});

  return (
    <section id="portfolio" className="pt-0 pb-0 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2 className="cardo-font default-color" data-backfont={backfont}>
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
              {dash === "show" ? <hr className={"center_line " + (dashColor === "dark" ? "dark-bg" : "default-bg")} /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid remove-padding">
          <div className="col-md-12">
                  {/* {filterButton} */}
            <div id="portfolio-gallery" className="cbp">
                  {totalList}
            </div>
          </div>
        </div>
        <div  style={{display:"flex",justifyContent:"center"}}>
            <Link to={"/funding/list"}>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                >
                    모든 펀딩 보기
                </Button>
          </Link>
      </div>
    </section>
    
  );
};

export default HomeList;