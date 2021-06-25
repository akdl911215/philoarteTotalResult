import axios from 'axios';

const SERVER = 'http://localhost:8080';

const list = (page) => {
    console.log('page :: ', page);
    const str = 'page=' + (!page.page ? 1 : page.page) + '&type=' + (page.type ? page.type : '') + '&keyword=' + (page.keyword ? page.keyword : '');
    return axios.get(`${SERVER}/artists/list/pages?` + str);
};


const signin = (signin) => {
    return axios({
        url: `${SERVER}/artists/signin`,
        method: 'post',
        data: {
            username: signin.username,
            password: signin.password,
        },
        headers: {Authorization: "JWT fefege..."}
    })

};

const signup = (param) => {
    return axios({
        url: `${SERVER}/artists/signup`,
        method: 'post',
        data: param,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "JWT fefege..."
        },
    })
};

const mypage = (artist) => {
    return axios({
        url: `${SERVER}/artists/mypage`,
        method: 'put',
        data: artist,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "JWT fefege..."
        },
    })

};

const deleteSelect = (deleteSelect) => {
    return axios.put(`${SERVER}/artists/delete`, deleteSelect);
};

const totalSearchBar = (totalSearchBar) => {
    return axios.put(`${SERVER}/page/totalSearchBar`, totalSearchBar);
};

const imgDel = (imgDel) => {
    return axios.put(`${SERVER}/page/imgDel`, imgDel);
};

export default {list, signin, signup, mypage, totalSearchBar, deleteSelect, imgDel};