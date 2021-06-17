import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtistPageList = () => {
    const [artistsList, setArtistsList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/page/list `)
            .then((res) => {
                console.log(res);
                setArtistsList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log('렌더링중..');

        fetchList();
        alert(fetchList());
    }, []);

    return (
        <>
            <h1>Page List Page</h1>
            <table>
                <thead>
                    <th>유저넘버 </th>
                    <th>아이디 </th>
                    <th>비밀번호 </th>
                    <th>이름 </th>
                    <th>E-mail </th>
                    <th>주소 </th>
                    <th>학교 </th>
                    <th>학과 </th>
                </thead>
                <tbody>
                    <tr>
                        <td>{artistsList.artistId}</td>
                        <td>{artistsList.username}</td>
                        <td>{artistsList.password}</td>
                        <td>{artistsList.name}</td>
                        <td>{artistsList.email}</td>
                        <td>{artistsList.address}</td>
                        <td>{artistsList.school}</td>
                        <td>{artistsList.department}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
export default ArtistPageList;
