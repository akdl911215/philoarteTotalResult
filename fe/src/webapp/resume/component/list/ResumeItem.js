import React from 'react';

const ResumeItem = ({ resumeId, resumeFiles, title, name, category, fn, artistId }) => {
    const fileImg = resumeFiles.map((file) => {
        return file.repImg ? <img key={file.resumeFileId} src={`http://localhost:8080/resume_file/display?fileName=${'s_' + file.uuid + '_' + file.fname}`} alt="이미지가 없습니다" /> : <></>;
    });

    return (
        <>
            <div className="img-wrap">
                <div className="img-box">
                    <div className="portfolio-item img-width" onClick={(e) => fn(e, resumeId, artistId)}>
                        {fileImg}
                        <div className="portfolio-info dark-bg">
                            <div className="v-center white-color">
                                <h3>{title}</h3>
                                <p>{name}</p>
                                <p>{category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeItem;
