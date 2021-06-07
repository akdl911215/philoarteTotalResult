import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import 'webapp/artist/style/ArtistRead.css';

const ArtistRead = () => {
    const [detail, setDetail] = useState({});

    const history = useHistory();

    const deleteButton = () => {
        alert(`삭제됩니다`);
        console.log(`${localStorage.getItem('select')}`);
        axios
            .delete(`http://localhost:8080/artists/delete/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                history.push('/artist/artist-list');
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        axios
            .get(`http://localhost:8080/artists/fetchOne/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetail(res.data);
            })
            .catch((err) => console.log(err));
    };

    const homeButton = () => {
        window.location = '/';
    };

    useEffect(() => {
        fetchOne();
    }, [detail.artistId, history]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>유저넘버 </th>
                        <th>아이디 </th>
                        <th>비밀번호 </th>
                        <th>이름 </th>
                        <th>E-mail </th>
                        <th>주소 </th>
                        <th>학교 </th>
                        <th>학과 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={detail.artistId}>
                        <td>{detail.artistId}</td>
                        <td>{detail.username}</td>
                        <td>{detail.password}</td>
                        <td>{detail.name}</td>
                        <td>{detail.email}</td>
                        <td>{detail.address}</td>
                        <td>{detail.school}</td>
                        <td>{detail.department}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/artist/artist-update/${detail.artistId}`} className="linkto-uss">
                <button className="buttonSelectRead1" alert={fetchOne} onClick={fetchOne}>
                    수정하기
                </button>
            </Link>
            <button className="buttonSelectRead2" alert={deleteButton} onClick={deleteButton}>
                삭제하기
            </button>
            <button className="buttonSelectRead3" onClick={homeButton}>
                홈으로
            </button>
        </>
    );
};
export default ArtistRead;
