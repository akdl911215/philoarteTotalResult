import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { currentFunding, getFundingDetail } from '../reducer/funding.reducer';

import { Box, CardHeader, Input } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';

const FundingListForm = ({ fundingId, title, content, hashtag, image, goalPrice, mainTitle, tagline, backfont }) => {
    const param = useSelector(currentFunding);
    const dispatch = useDispatch();
    // const selectContent = fundingId =>{
    //     console.log("SElect이동!!!!!(!#*(!#*(!#*(!#*(!&*#("+ fundingId)
    //     dispatch(getFundingDetail(fundingId))
    //   }
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    const selectContent = (fundingId) => {
        dispatch(getFundingDetail(fundingId));
    };
    const numberWithComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <>
            <Grid direction="column">
                <Link to={`/funding/read/${fundingId}`} onClick={async () => selectContent(fundingId)}>
                    <Card>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <ShareIcon />
                                </IconButton>
                            }
                            title={title}
                        ></CardHeader>
                        <CardActionArea>
                            <CardMedia style={{ display: 'flex', justifyContent: 'center' }} direction="column" component="img" height="140" image={image.map((img) => `http://localhost:8080/funding_file/display?fileName=${img.uuid}_${img.fname}`)[0]} style={{ height: '150px', width: '30%', display: 'flex', justifyContent: 'center' }} />

                            <Box>
                                {content}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" noWrap></Typography>
                                    <Typography variant="body2" color="textSecondary" noWrap>
                                        <Button variant="outlined" size="small" color="primary">
                                            {hashtag}
                                        </Button>
                                        <Link to={`/funding/modify/${fundingId}`}>
                                            <Button variant="outlined" size="small" color="primary" key={param.fundingId} onClick={() => dispatch(getFundingDetail(fundingId))}>
                                                수정하기
                                            </Button>
                                        </Link>
                                        <Typography color="initial" align="right">
                                            목표 금액 : <Input defaultValue={numberWithComma(goalPrice)} error inputProps={{ 'aria-label': 'description' }} /> 원
                                        </Typography>

                                        <Typography color="secondary" align="right">
                                            달성률: {Math.floor(Math.random() * 300)}%
                                        </Typography>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </CardActionArea>
                    </Card>
                </Link>
                <hr />
            </Grid>
        </>
    );
};

export default FundingListForm;
