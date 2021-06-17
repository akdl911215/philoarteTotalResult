import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listCategory, registerResume } from 'webapp/resume/reducer/resume.reducer';
import { ResumeFile } from 'webapp/resume/index';

const ResumeRegister = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.resumes.category);
    const fileList = useSelector((state) => state.resumes.current.resumeFiles);
    const loginValue = JSON.parse(localStorage.getItem('artist'))


    useEffect(() => {
        dispatch(listCategory());
    }, []);

    const [resume, setResume] = useState({
        title: '',
        detail: '',
        selfIntroduce: '',
        artistId: loginValue?.artistId,
        name: loginValue?.name,
        categoryId: null,
    });

    const resumeChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { name, value } = e.target;
        resume[name] = value;
        setResume({ ...resume });
    };

    const categoryChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        resume.categoryId = e.target.value;
        setResume({ ...resume });
    };

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const data = { ...resume, resumeFiles: fileList.map((file) => file) };
        console.log(data);
        if (!(fileList && fileList[0] && resume)) {
            alert('사진 등록과 모든 항목을 작성해 주세요');
        } else {
            dispatch(registerResume(data));
            window.history.back();
        }
    };

    return (
        <>
            <ResumeFile />
            <div className="container dark-color" style={{ marginBottom: '40px', color: '#24182e' }}>
                <span className="writerName">
                    <label className="font-20px">포트폴리오 타이틀을 적어주세요</label>
                    <input type="text" style={{ color: 'black' }} name="title" value={resume.title} placeholder="resumeTitle" onChange={(e) => resumeChange(e)} />
                </span>

                <label className="font-20px">포트폴리오의 세부사항을 적어주세요</label>
                <textarea type="text" style={{ color: 'black', height: '400px' }} name="detail" value={resume.detail} placeholder="resumeDetail" onChange={(e) => resumeChange(e)} />
                <h5 className="aside-title">아티스트 이름</h5>
                <form className="search-form" method="post">
                    <h4 className="aside-title">{resume.name}</h4>
                </form>
                <label className="font-20px">자기소개글을 써주세요</label>
                <textarea type="text" name="selfIntroduce" style={{ color: 'black', height: '200px' }} value={resume.selfIntroduce} placeholder="resumeDetail" onChange={(e) => resumeChange(e)} />
                <div className="sidebar_widget widget_categories mb-50" style={{ marginBottom: '20px' }}>
                    <h5 className="aside-title">Categories</h5>
                    {categories?.map((category) => {
                        return (
                            <button className="btn btn-md btn-dark-outline btn-square mt-10" key={category.categotyId} name="categoryId" value={category.categoryId} onClick={(e) => categoryChange(e)}>
                                {category.categoryName}
                            </button>
                        );
                    })}
                </div>
                <div style={{ marginBottom: '20px', verticalAlign: 'center' }}>
                    <p className="btn btn-md btn-dark-outline btn-square mt-10" onClick={(e) => handleClick(e)}>
                        REGISTER
                    </p>
                    <Link to="/resume/home">
                        <p className="btn btn-md btn-dark-outline btn-square mt-10">BACK</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ResumeRegister;
