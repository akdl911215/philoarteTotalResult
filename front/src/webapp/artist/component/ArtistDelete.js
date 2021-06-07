import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteSelect, getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
import 'webapp/artist/style/ArtistDelete.css';

const ArtistsDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const artistsState = useSelector((state) => state.artists.artistsState);

    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);

    const deleteButton = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const obj = { artistId: artistsState.artistId };
        console.log('SEND BEFORE', obj);
        dispatch(deleteSelect(obj));
        history.push('/');
    };

    return (
        <>
            <button
                className="deleteButtonSelectList"
                onClick={(e) => {
                    deleteButton(e);
                }}
            >
                탈퇴하기
            </button>
        </>
    );
};
export default ArtistsDelete;
