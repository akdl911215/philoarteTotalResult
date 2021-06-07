import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArtService, ModifyFile } from 'webapp/art';

import { addFileList } from 'webapp/art/reducer/art.reducer';

const ModifyUpload = () => {
    const dispatch = useDispatch();
    const fileList = useSelector((state) => state.arts.fileList);

    const uploadFile = async (e) => {
        e.preventDefault();

        console.dir(e.target.files);

        const formData = new FormData();
        const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        ArtService.artUpload(formData).then((res) => {
            console.log('res: ', res);
            res.data.forEach((uploadFileInfo) => {
                dispatch(addFileList(uploadFileInfo));
            });
        });
    };

    return (
        <>
            <div className="col-md-12 col-sm-12">
                <div className="form-group">
                    <label htmlFor="message" className="dark-color">
                        파일 첨부
                    </label>
                    <input type="file" name="files" accept="image/*" className="md-input style-02 input_white" id="files" multiple={true} data-error="작품 파일을 첨부해주세요." onChange={(e) => uploadFile(e)} />
                    {fileList?.map((fileObj) => {
                        console.log('sdfsdfdsf', fileObj);
                        return <ModifyFile key={fileObj.uuid} {...fileObj} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default ModifyUpload;
