import React, {useCallback, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button, Grid, MenuItem} from "@material-ui/core";
import { FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
import { currentFunding } from 'webapp/funding/reducer/funding.reducer';
import { Link } from 'react-router-dom';

const TextRegister = ({pno,title ='', content ='',goalPrice='',hashtag='', regDate, modDate, sendTextForm}) => {
    const dispatch = useDispatch()
    const param = useSelector(currentFunding)
    useEffect(()=>{
        getLocalArtist()
    },[])
    console.log(param,"==================param")
    const [titleState, setTitleState] = useState(title)
    const [contentState, setContentState] = useState(content)
    const [goalPriceState, setGoalPriceState] = useState(goalPrice)
    const [hashtagState, setHashtagState] = useState(hashtag)

    const changeTitle = useCallback(e => {
        setTitleState(e.target.value)
    });

    const changeContent = useCallback(e => {
        setContentState(e.target.value)
    });
    const changeGoalPrice = useCallback(e => {
        setGoalPriceState(e.target.value)
    });
    const changeHashtag = useCallback(e => {
        setHashtagState(e.target.value)
    });
    const sendForm = useCallback(e => {
        sendTextForm(titleState, contentState,goalPriceState,hashtagState)
        setTitleState('')
        setContentState('')
        setGoalPriceState('')
        setHashtagState('')
        window.location.href=`/funding/list`
    })

    const hashtags = [
        {
            value:'그림',
            label:'그림'
        },
        {
            value:'조형',
            label:'조형'
        },
        {
            value:'조각',
            label:'조각'
        },
        {
            value:'건축',
            label:'건축'
        },
        {
            value:'의상',
            label:'의상'
        },
        {
            value:'소품',
            label:'소품'
        }

    ]

    return (
        
        <>
        <FormControl enctype="multipart/form-data">
        <Grid
            container
            style={{display:"flex",justifyContent:"center"}}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            
            >
            <Grid container xs="12" spacing="10"
            style={{display:"flex",justifyContent:"center"}}>

                <Grid item  sm={4}>
                <TextField style={{}}  label="Title" color="secondary"  value={titleState} onChange={changeTitle} />
                </Grid>

                <Grid item sm={4}>
                <TextField label="GoalPrice" color="secondary" value={goalPriceState} onChange={changeGoalPrice}>$</TextField>
                </Grid>

                <Grid item sm ={3}>
                <TextField
                select
                label="Select Hashtag"
                value={hashtagState}
                onChange={changeHashtag}
                helperText="Please select your Funding Hashtag"
                variant="filled"
                >
                {hashtags.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            </Grid>
            
            </Grid>
            
           
            <hr/>
            <hr/>
            <Grid container xs="10" spacing="10"
            style={{display:"flex",justifyContent:"center"}}
            justify="flex-start"
            alignItems="flex-start">
            <TextField
                color="secondary" value={contentState} onChange={changeContent}
                id="outlined-multiline-static"
                label="상세 내용"
                multiline
                rows={30}
                fullWidth={10}
                defaultValue="펀딩 내용을 입력해주세요"
                variant="outlined"
            />
            </Grid>
            <Grid container xs={12} style={{marginLeft:40}} >
            <Grid item xs={4} sm={6}>
                <hr/>
            <TextField
              fullWidth
              multilineß
              
              style={{marginLeft:40}}
              value="당신의 펀딩을 알릴 사진을 등록해주세요"
              label="펀딩 사진"
              rows="6"
              defaultValue="Default Value"
            />

            </Grid>
            <Grid item xs={8} sm={8}style={{marginLeft:40}}>
          </Grid>
            </Grid>
           
        </Grid>
        </FormControl>
        <Button onClick={sendForm}>SUBMIT</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/funding/list'}>
                            <Button variant="outlined" size="large" color="primary">
                                리스트로 돌아가기
                            </Button>
                        </Link>

        </>
    );
};

export default TextRegister;