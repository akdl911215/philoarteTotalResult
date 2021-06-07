import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'webapp/artist/style/ArtistUpdate.css';

const ArtistUpdate = () => {
    const [details, setDetails] = useState({});
    const { username, password, name, email, phoneNumber, address, school, department } = details;

    const fetchOne = () => {
        alert('정보를 가져옵니다');
        alert(`${localStorage.getItem('select')}`);

        axios
            .get(`http://localhost:8080/artists/fetchOne/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetails({
                    username: res.data.username,
                    password: res.data.password,
                    name: res.data.name,
                    email: res.data.email,
                    phoneNumber: res.data.phoneNumber,
                    address: res.data.address,
                    school: res.data.school,
                    department: res.data.department,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            alert('정보를 보냅니다');
            alert(`${localStorage.getItem('select')}`);

            e.preventDefault();
            console.log('업데이트 진행중');
            axios
                .put(`http://localhost:8080/artists/update/${localStorage.getItem('select')}`, {
                    username,
                    password,
                    name,
                    email,
                    phoneNumber,
                    address,
                    school,
                    department,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/';
                })
                .catch((err) => console.log(err));
        },
        [username, password, name, email, phoneNumber, address, school, department]
    );

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setDetails({
                ...details,
                [name]: value,
            });
        },
        [details]
    );

    const artistUpdateList = () => {
        window.location = '/';
    };

    return (
        <>
            <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post" className="updateListAll">
                <label htmlFor="username">
                    <b>아이디</b>
                </label>
                <td>{details.username}</td>
                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="text" placeholder="Enter Password" name="password" id="password" onChange={handleChange} required />

                <label htmlFor="name">
                    <b>이름</b>
                </label>
                <td>{details.name}</td>

                <label htmlFor="email">
                    <b>E-Mail</b>
                </label>
                <input type="text" placeholder="Enter Email" name="email" id="email" onChange={handleChange} required />

                <label htmlFor="phoneNumber">
                    <b>핸드폰번호</b>
                </label>
                <input type="text" placeholder="Enter PhoneNumber" name="phoneNumber" id="phoneNumber" onChange={handleChange} required />

                <label htmlFor="address">
                    <b>주소</b>
                </label>
                <input type="text" placeholder="Enter Address" name="address" id="address" required onChange={handleChange} />

                <label htmlFor="school">
                    <b>학교</b>
                </label>
                <input type="text" placeholder="Enter School" name="school" id="school" required onChange={handleChange} />

                <label htmlFor="department">
                    <b>학과</b>
                </label>
                <input type="text" placeholder="Enter Department" name="department" id="department" required onChange={handleChange} />

                <button type="submit" className="ArtistUpdateButton">
                    수정하기
                </button>
                <button className="ArtistUpdateButton2" onClick={artistUpdateList}>
                    목록으로
                </button>
            </form>
        </>
    );
};
export default ArtistUpdate;
