import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalArtist, mypagePage, signupPage, currentArtist, currentArtist2 } from 'webapp/artist/reducer/artist.reducer';
import { ArtistDelete, Logout } from 'webapp/artist/index';

const MyPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const artistsState = useSelector((state) => state.artists.artistsState);
    const artistsFileDtoList = useSelector((state) => state.artists.artistsState.artistFileDtoList);
    const artistsFiles = useSelector((state) => state.artists.artistsState.files);
    const artistsFilesimgName = useSelector((state) => state.artists.artistsState.imgName);
    const artistsFilesUuid = useSelector((state) => state.artists.artistsState.uuid);
    console.log('artistsFileDtoList :::: ', artistsFileDtoList);
    console.log('artistsFiles :::: ', artistsFiles);
    console.log('artistsFilesimgName :::: ', artistsFilesimgName);
    console.log('artistsFilesUuid :::: ', artistsFilesUuid);
    console.log('======================================');
    console.log('artistsState.uuid ::: ', artistsState.uuid);
    console.log('======================================');


    const [files, setFiles] = useState(null);
    console.log('files ::::::: ', files);


    const artistFiles = artistsState.artistFileDtoList;
    console.log('artistFiles ::::::::: ', artistFiles);

    const [mypage, setMypage] = useState({
        artistId: artistsState.artistId,
        username: artistsState.usename,
        password: '',
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        school: '',
        department: '',
        uuid: artistsState.uuid,
        imgName: artistsState.imgName,
        files: artistsState.files,
        token: artistsState.token,
        uuid: artistsState.uuid,
        imgName: artistsState.imgName,
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('files :::: ', files);
        console.log('mypage :::: ', mypage);

        // formData : file을 업로드
        const formData = new FormData();
        console.log('formData) ::: ', formData);

        for (let i = 0; i < files.length; i++) {
            console.log('for files :::::::::', files);
            formData.append('files[' + i + ']', files[i]);
        }

        formData.append('username', mypage.username);
        formData.append('password', mypage.password);
        formData.append('name', mypage.name);
        formData.append('email', mypage.email);
        formData.append('phoneNumber', mypage.phoneNumber);
        formData.append('address', mypage.address);
        formData.append('school', mypage.school);
        formData.append('department', mypage.department);
        console.log('formData : ', formData);
        console.log('==============================');
        console.log(mypage.username);
        console.log(mypage.password);
        console.log(mypage.name);
        console.log(mypage.email);
        console.log(mypage.phoneNumber);
        console.log(mypage.address);
        console.log(mypage.school);
        console.log(mypage.department);
        console.log('==============================');

        await dispatch(signupPage(formData));
        console.log('dispatch formData : ', formData);

        // if (mypageResult) {
        //     alert('수정 완료');
        //     await dispatch(mypagePage(obj));
        // }

        // history.push('/artists/artists_signin');
    };

    useEffect(() => {
        console.log('getLocalArtist :::: ', getLocalArtist);
        dispatch(getLocalArtist());
    }, []);

    const handleChange = useCallback(
        (e) => {
            e.preventDefault();
            const { name, value } = e.target;
            setMypage({
                ...mypage,
                [name]: value,
            });
        },
        [mypage]
    );

    const clickUpdate = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const fileObj = e.target;
        console.dir(fileObj.files);
        setFiles(fileObj.files);
    };

    const goHome = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/');
    };

    return (
        <>
            <form>
                <div className="container">
                    <h1>마이 페이지</h1>
                    <hr />

                    <form>
                        <label htmlFor="artistFile">
                            <b>대표이미지</b>
                        </label>

                        <td>
                            {/* <div className="display-flex" style={{ marginBottom: '50px' }}></div> */}
                            <div>
                                <img src={'http://localhost:8080/artist_files/display?imgName=' + `${artistsFilesUuid}` + 's_' + `${artistsFilesimgName}`} />
                                <br />
                                <input type="file" name="file" id="reviewFileDtoList" className="md-textarea" rows="7" multiple={true} onChange={(e) => clickUpdate(e)}></input>
                                <br />
                                <br />

                                {/* <button>upload</button>
                                <button onClick={(e) => removeImgBtn(e)}>remove</button> */}
                            </div>
                        </td>

                        <label htmlFor="artistId">
                            <b>아이디번호</b>
                        </label>
                        <td>{artistsState.artistId} </td>

                        <label htmlFor="username">
                            <b>아이디</b>
                        </label>
                        <td>{artistsState.username} </td>

                        <label htmlFor="password">
                            <b>비밀번호</b>
                        </label>
                        <input type="password" placeholder="password" name="password" value={mypage.password} onChange={(e) => handleChange(e)} />

                        <label htmlFor="name">
                            <b>이름</b>
                        </label>
                        <td>{artistsState.name}</td>

                        <label htmlFor="phoneNumber">
                            <b>핸드폰번호</b>
                        </label>
                        <input type="text" placeholder="phoneNumber" name="phoneNumber" value={mypage.phoneNumber} onChange={(e) => handleChange(e)} />

                        <label htmlFor="email">
                            <b>E-mail</b>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email" value={mypage.email} onChange={(e) => handleChange(e)} />

                        <label htmlFor="address">
                            <b>주소</b>
                        </label>
                        <input type="text" placeholder="Enter Addres" name="address" value={mypage.address} onChange={(e) => handleChange(e)} />

                        <label htmlFor="school">
                            <b>학교</b>
                        </label>
                        <input type="text" placeholder="Enter School" name="school" value={mypage.school} onChange={(e) => handleChange(e)} />

                        <label htmlFor="department">
                            <b>학과</b>
                        </label>
                        <input type="text" placeholder="Enter Department" name="department" value={mypage.department} onChange={(e) => handleChange(e)} />

                        <button
                            type="submit"
                            className="updatebtn"
                            onClick={(e) => {
                                clickUpdate(e);
                            }}
                        >
                            정보 수정
                        </button>
                    </form>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn" onClick={(e) => goHome(e)}>
                            홈으로
                        </button>
                    </div>
                    <br />
                    <br />
                    <Logout />
                    <br />
                    <br />
                    <ArtistDelete />
                </div>
            </form>
        </>
    );
};
export default MyPage;
