import React from 'react';
import parse from 'html-react-parser';
import LoadScript from '../../../common/helpers/LoadScript';

const PortfolioOne = ({ tagline, backfont, filter, classes, dash, dashColor, hashtag, title, data }) => {
    LoadScript('js/portfolio/portfolio-grid.js');

    // const fundings = useSelector(state =>{
    //   console.log("portfolio One 진입:" + JSON.stringify(state.fundings.pageResult.dtoList))
    //   return state.fundings.pageResult.dtoList
    // })
    // const dispatch = useDispatch()
    // useEffect(() => {dispatch(getFundingList())},[])

    return (
        <section id="portfolio" className={'pb-0 ' + classes}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2 className="cardo-font default-color" data-backfont={backfont}>
                                {tagline}
                            </h2>

                            <h1>{title && parse(title)}</h1>
                            {dash === 'show' ? <hr className={'center_line ' + (dashColor === 'dark' ? 'dark-bg' : 'default-bg')} /> : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid remove-padding">
                <div className={'row ' + (!filter ? 'mt-80' : '')}>
                    <div className="col-md-12">
                        <div id="portfolio-gallery" className="cbp"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioOne;
