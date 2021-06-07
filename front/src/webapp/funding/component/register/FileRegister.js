import React, {useCallback, useImperativeHandle, useState} from 'react';
import {Button, Checkbox, Typography} from "@material-ui/core";
import axios from "axios";
import {fileUpload,addFileList} from 'webapp/funding/reducer/funding.reducer'
import { FundingService } from 'webapp/funding';
import { useDispatch, useSelector } from 'react-redux';
import fundingService from 'webapp/funding/service/funding.service';
const FileRegister = ({cref, getUploadedFiles, fileParam=[]}) => {
    const dispatch = useDispatch()
    const fileList = useSelector(state => state.fundings.fileList)

    const [files, setFiles] = useState([])

    const [uploadResult, setUploadResult] = useState(fileParam)

    useImperativeHandle(cref, () => ({

        send() {
            getUploadedFiles(uploadResult)
            setFiles([])
            setUploadResult([])
        }

    }));

    const windowFile = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        const files = e.target.files

        for(let i = 0; i < files.length ; i++){
            formData.append("uploadFiles", files[i])
        }
        FundingService.fileUpload(formData)
        .then(res => {
            console.log("res = " +  JSON.stringify(res))

            res.data.forEach(uploadFileInfo =>  {uploadResult.push(uploadFileInfo)
            dispatch(addFileList({uuid: uploadFileInfo.uuid, file: uploadFileInfo}))})

            console.log("upload Result = " + JSON.stringify(uploadResult))

            setUploadResult(uploadResult.slice(0))
        })
    }
    
    const [checked, setChecked] = useState(true)
    const handleChange = e =>{
        setChecked(e.target.checked)
    }
    return (
        <div style={{marginLeft:60}}>
            <Button
                variant="contained"
                component="label">
                <Typography>{"Upload"}</Typography>

                <input style={{ display: 'none' }} type="file" name="imageFile"
                       onChange={(e)=>windowFile(e)}  multiple={true}/>
            </Button>
            <div>
                <ul>
                    
                    {uploadResult.map(uploadFile => {
                        return (
                            <div key={uploadFile.uuid}>
                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  style={{rotate:180}}/>
                                <img src={"http://localhost:8080/funding_file/display?fileName=s_" + uploadFile.uuid+"_"+ uploadFile.fname }/>
                                {uploadFile.fname}
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
};

export default FileRegister;