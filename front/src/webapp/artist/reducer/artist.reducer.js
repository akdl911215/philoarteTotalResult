import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArtistService } from 'webapp/artist/index';

const getArtistServerPage = async (page) => {
    console.log('getARtistServerPage :: ' + page);
    const response = await ArtistService.list(page);
    console.log('response ::::::::: ', response.data);
    return response.data;
};

// const getArtistServerFilePage = async (filePage) => {
//     console.log('getARtistServerPage :: ' + filePage);
//     const response = await ArtistService.imgList(filePage);
//     console.log('response ::::::::: ', response.data);
//     return response.data;
// };

const getArtistSigninPage = async (signin) => {
    console.log('getArtistSigninPage :: ' + signin);
    const response = await ArtistService.signin(signin);
    return response.data;
};

const getArtistSignupPage = async (param) => {
    console.log('getArtistSignupPage :: ' + param);
    const response = await ArtistService.signup(param);
    console.log('response :::: ', response);
    console.log('response.data :::: ', response.data);
    return response.data;
};

const getArtistMypagePage = async (mypage) => {
    console.log('getArtistMypagePage :: ' + mypage);
    const response = await ArtistService.mypage(mypage);
    return response.data;
};

const getArtistDeleteSelect = async (deleteArtistId) => {
    console.log('getArtistDeleteSelect :: ' + deleteArtistId);
    const response = await ArtistService.deleteSelect(deleteArtistId);
    return response.data;
};

export const fetchPage = createAsyncThunk('artists/list', getArtistServerPage);
// export const fetchFilePage = createAsyncThunk('artists/fileList', getArtistServerFilePage);
export const signinPage = createAsyncThunk('artists/signin', getArtistSigninPage);
export const signupPage = createAsyncThunk('artists/signup', getArtistSignupPage);
export const mypagePage = createAsyncThunk('artists/mypage', getArtistMypagePage);
export const deleteSelect = createAsyncThunk('artists/mypage', getArtistDeleteSelect);

const artistSlice = createSlice({
    name: 'artists',
    initialState: {
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
        },
        artistsState: {
            artistId: '',
            username: '',
            password: '',
            name: '',
            phoneNumber: '',
            email: '',
            address: '',
            school: '',
            department: '',
            files: [],
            artistFileDtoList: [],
            uuid: '',
            imgName: '',
            token: '',
            pageFileDto: [],
        },
        type: '',
        keyword: '',
        params: {},
        pageFileDto: [],
    },
    reducers: {
        getLocalArtist: (state, action) => {
            console.log('getLocalAritist...................');

            if (state.artistsState.username !== '') {
                return;
            }

            const artist = JSON.parse(window.localStorage.getItem('artist'));
            state.artistsState = artist;
            console.log('============Local===========');
            console.log(state.artistsState);
            console.log('=======================');
        },

        changeSearch: (state, action) => {
            state.type = action.payload.type;
            state.keyword = action.payload.keyword;
        },

        // getArtistImgList: (state, action) => {
        //     const artistsImge = JSON.stringify(window.localStorage.getItem('artistsImge'));
        //     state.artistsState.dtoList = artistsImge;
        //     console.log('============Local Image===========');
        //     console.log(state.artistsState.dtoList);

        //     console.log('=======================');
        // },
    },
    extraReducers: {
        [fetchPage.fulfilled]: (state, { meta, payload }) => {
            console.log('payload fetchPage :::::::', payload);
            state.pageResult = payload;
        },
        // [fetchFilePage.fulfilled]: (state, { meta, payload }) => {
        //     console.log('payload fetchPage :::::::', payload);
        //     state.pageFileDto = payload;
        //     console.log('state.pageFileDto ::::::: ', state.pageFileDto);
        //     window.localStorage.setItem('artistsImge', JSON.stringify(payload));
        // },
        [signinPage.fulfilled]: (state, { meta, payload }) => {
            console.log('payload ::::::::::: ', payload);
            state.artistsState = payload;
            window.localStorage.setItem('artist', JSON.stringify(payload));
            console.log('JSON.stringify(payload) ::::::: ', JSON.stringify(payload));
        },
        [mypagePage.fulfilled]: (state, { meta, payload }) => {
            state.artistsState = payload;
            console.log('reducer payload ::::::::: ', payload);
        },
        [signupPage.fulfilled]: (state, action) => {
            state.artistsState = action.payload;
            console.log('state 은? :: ', state);
            console.log('reducer action ::::::::: ', action);
            console.log('reducer action.payload ::::::::: ', action.payload);
            console.log('reducer payload ::::::::: ', signupPage);
        },
        [deleteSelect.fulfilled]: (state, { meta, payload }) => {
            state.artistsState = payload;
            console.log('reducer payload ::::::::: ' + payload);
        },
    },
});
// const { action, reducer } = artistSlice;
export const currentArtist2 = (state) => state.artists.artistsState;
export const currentArtist = (state) => state.artists.params;
export const { getLocalArtist, changeSearch, getArtistImgList } = artistSlice.actions;
export default artistSlice.reducer;
