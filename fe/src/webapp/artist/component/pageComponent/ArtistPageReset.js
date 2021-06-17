import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage } from 'webapp/artist/reducer/artist.reducer';
import 'webapp/artist/style/ArtistPage.css';

const ArtistPageReset = () => {
    const dispatch = useDispatch();
    const goReset = () => {
        dispatch(fetchPage(1));
    };
    return (
        <>
            <button className="ArtistPageBtn" onClick={() => goReset()}>
                Reset
            </button>
        </>
    );
};
export default ArtistPageReset;
