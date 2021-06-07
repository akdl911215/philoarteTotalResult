import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ModifyFile, ModifyFileItem } from 'webapp/resume/index';
import { useParams } from 'react-router';
import { listCategory, readResume, modifyResume } from 'webapp/resume/reducer/resume.reducer';

const ResumeModify = () => {
    const dispatch = useDispatch();

    const { resumeId } = useParams();

    const item = useSelector((state) => state.resumes.current);
    const categories = useSelector((state) => state.resumes.category);

    const files = item.resumeFiles;

    console.log('files SLICE', files);

    useEffect(() => {
        dispatch(readResume(resumeId));
        dispatch(listCategory());
    }, []);

    const [resume, setResume] = useState({
        resumeId: resumeId,
        title: item.title,
        detail: item.detail,
        selfIntroduce: item.selfIntroduce,
        artistId: item.artistId,
        username: item.username,
        name: item.name,
        categoryId: item.categoryId,
        categoryName: item.categoryName,
    });

    console.log('resuemememememememme', resume);

    const resumeChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { name, value } = e.target;
        resume[name] = value;
        setResume({ ...resume });
    };
    console.log('ModifyResume', resume);
    const categoryChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        resume.categoryId = e.target.value;
        setResume({ ...resume });
    };
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const data = { ...resume, resumeFiles: files };
        console.log('MODIFY DATA: ', data);
        window.confirm('정말 수정하시겠습니까?');
        dispatch(modifyResume(data));
        window.history.back();
    };

    return (
        <>
            <ModifyFile />
            {files.map((fileObj) => {
                return <ModifyFileItem key={fileObj.uuid} {...fileObj} />;
            })}
            <div className="container dark-color font-20px" style={{ marginBottom: '40px', color: '#24182e' }}>
                <span className="writerName">
                    <label className="font-20px">포트폴리오 타이틀을 적어주세요</label>
                    <input type="text" style={{ color: 'black' }} name="title" placeholder="resumeTitle" value={resume.title} onChange={(e) => resumeChange(e)} />
                </span>
                <label className="font-20px">포트폴리오의 세부사항을 적어주세요</label>
                <textarea type="text" style={{ color: 'black', height: '400px' }} name="detail" value={resume.detail} placeholder="resumeDetail" onChange={(e) => resumeChange(e)} />

                <h5 className="aside-title">아티스트 이름</h5>
                <form className="search-form" method="post">
                    <h4 className="aside-title">{item.name}</h4>
                </form>

                <label className="font-20px">자기소개글을 써주세요</label>
                <textarea type="text" name="selfIntroduce" style={{ color: 'black', height: '200px' }} wrap="on" value={resume.selfIntroduce} placeholder="resumeDetail" onChange={(e) => resumeChange(e)} />

                <div className="sidebar_widget widget_categories mb-50" style={{ marginBottom: '20px' }}>
                    <h5 className="aside-title">Categories</h5>
                    {categories.map((category) => {
                        return (
                            <button className="btn btn-md btn-dark-outline btn-square mt-10" key={category.categotyId} name="categoryId" value={category.categoryId} onClick={(e) => categoryChange(e)}>
                                {category.categoryName}
                            </button>
                        );
                    })}
                </div>

                <div style={{ marginBottom: '20px', verticalAlign: 'center' }}>
                    <p className="btn btn-md btn-dark-outline btn-square mt-10" onClick={(e) => handleClick(e)}>
                        MODIFY
                    </p>
                    <Link to="/resume/home">
                        {' '}
                        <p className="btn btn-md btn-dark-outline btn-square mt-10">BACK</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ResumeModify;
