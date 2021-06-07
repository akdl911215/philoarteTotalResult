import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeFileList, deleteFileList } from 'webapp/art/reducer/art.reducer';

const ModifyFile = ({ workedDate, uuid, originalFileName, repImg }) => {
    const dispatch = useDispatch();

    const [artFile, setArtFile] = useState({
        workedDate: workedDate,
        uuid: uuid,
        originalFileName: originalFileName,
        repImg: repImg,
    });

    const artFileChange = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const { name, value } = e.target;
        artFile[name] = value;
        setArtFile({ ...artFile });

        dispatch(changeFileList(artFile));
    };

    const repImgChange = (e) => {
        e.stopPropagation();
        e.preventDefault();

        artFile.repImg = !artFile.repImg;

        setArtFile({ ...artFile });

        dispatch(changeFileList(artFile));
    };

    const artFileDelete = (e) => {
        e.stopPropagation();
        e.preventDefault();

        dispatch(deleteFileList(artFile));
    };

    return (
        <>
            <div className="text-center mt-10">
                <img src={`http://localhost:8080/art_files/display?fileName=${artFile.uuid + '_' + artFile.originalFileName}`} alt={`${artFile.originalFileName}`} />
                <br />
                <div className="mt-10 mb-10">
                    {artFile.originalFileName}
                    <button name="repImg" className="btn btn-lg btn-dark-outline btn-square ml-30" data-uuid={artFile.uuid} onClick={(e) => artFileDelete(e)}>
                        업로드 취소
                    </button>
                </div>
            </div>

            <div className="col-md-12 col-sm-12">
                <div className="form-group">
                    <label htmlFor="workedDate" className="dark-color">
                        작업일
                    </label>
                    <input type="text" name="workedDate" className="md-input style-02 input_white" id="workedDate" required data-uuid={artFile.uuid} value={artFile.workedDate} onChange={(e) => artFileChange(e)} />
                </div>
            </div>

            <div className="col-md-12 col-sm-12">
                <div className="form-group">
                    {!artFile.repImg ? (
                        <>
                            <label htmlFor="repImg" className="dark-color">
                                대표 이미지
                            </label>
                            <button name="repImg" className="btn btn-md btn-dark-outline btn-square mt-10" data-uuid={artFile.uuid} value={artFile.repImg} onClick={(e) => repImgChange(e)}>
                                Yes
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModifyFile;
