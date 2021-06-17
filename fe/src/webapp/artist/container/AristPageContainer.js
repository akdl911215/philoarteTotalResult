import React from 'react';
import 'webapp/artist/style/PageList.css';
import { ArtistPage, ArtistPageList2, ArtistPageSearch } from 'webapp/artist/index';

const ArtistPageContainer = () => {
    return (
        <>
            <div>
                <h1>Artist Page List</h1>

                <ArtistPageList2 />
                <ArtistPage />
                <ArtistPageSearch />
            </div>
        </>
    );
};
export default ArtistPageContainer;
