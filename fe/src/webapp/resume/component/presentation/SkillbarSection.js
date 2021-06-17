import React from 'react';
import { Skillbar } from 'webapp/resume';

const SkillbarSection = ({ data }) => (
    <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="skillbar-wrap skillbar-style-02">
            {data ? (
                data.map((skill) => <Skillbar key={skill.id} title={skill.title} percentage={skill.percentage} />)
            ) : (
                <div className="text-center pt-50 pb-50">
                    <h1 className="font-800 default-color">Something is missing</h1>
                    <p className="mt-30 red-color text-decoration-underline">
                        <b>SkillbarSection </b>component require a [data] parameter and needs to be an array of objects
                    </p>
                </div>
            )}
        </div>
    </div>
);

export default SkillbarSection;
