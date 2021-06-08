import React from 'react';
import Icofont from 'react-icofont';
import dataSocial from 'webapp/common/data/Social/social-data.json';

const AttrNavSocial = () => (
    <div className="attr-nav no-border hidden-xs">
        <ul className="social-media-dark social-top">
            {dataSocial.map((item) => (
                <li key={item.id}>
                    <a href={item.path}>
                        <Icofont icon={item.icon} />
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default AttrNavSocial;
