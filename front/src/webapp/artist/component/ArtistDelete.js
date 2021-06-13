import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteSelect, getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
import 'webapp/artist/style/ArtistDelete.css';

const ArtistsDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const artistsState = useSelector((state) => state.artists.artistsState);
    const artistDeleteState = useSelector((state) => state.artists.artistsState.artistId);
    console.log('artistDeleteState ::: ', artistDeleteState);

    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);

    const deleteButton = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(deleteSelect(artistDeleteState));
        console.log('dispatch ::: ', dispatch);
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
