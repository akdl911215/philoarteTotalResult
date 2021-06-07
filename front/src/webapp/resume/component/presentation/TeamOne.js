import React from 'react';
import parse from 'html-react-parser';
import TeamOneMember from './TeamOneMember';

const TeamOne = ({ tagline, title, backfont, data, bg }) => (
    <section className={bg === 'white-bg' ? bg : 'dark-bg'} id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-center">
                        <h2 className="cardo-font default-color" data-backfont={backfont || 'Team'}>
                            {tagline}
                        </h2>
                        <h1 className={bg === 'white-bg' ? '' : 'white-color'}>{title && parse(title)}</h1>
                        <hr className="center_line white-bg" />
                    </div>
                </div>
            </div>
            <div className="row mt-50">
                {data.map((member) => (
                    <TeamOneMember key={member.id} title={member.title} role={member.role} image={member.image} bg={bg} social={member.social} />
                ))}
            </div>
        </div>
    </section>
);

export default TeamOne;
