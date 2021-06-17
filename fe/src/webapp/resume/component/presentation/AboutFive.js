import React from 'react';
import parse from 'html-react-parser';
// Images
import imgBg from 'webapp/images/background/kkkk.png';
// Components
import { SkillbarSection } from 'webapp/resume/index';
const AboutFive = ({ data, title, backfont, text, children }) => (
    <section style={{ background: `url(${imgBg}) center center no-repeat #fff` }} id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50">
                    <h2 className="mt-0 font-700" data-backfont={backfont || 'About'}>
                        {title && parse(title)}
                    </h2>
                    {text && parse(text)}
                </div>
                <SkillbarSection data={data} />
            </div>
            {children}
        </div>
    </section>
);

export default AboutFive;
