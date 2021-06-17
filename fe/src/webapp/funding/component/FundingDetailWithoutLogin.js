import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFundingDetail, currentFunding, deleteFunding } from 'webapp/funding/reducer/funding.reducer';
import { Link, useParams } from 'react-router-dom';
import HeaderSocial from 'webapp/common/Header/HeaderSocial';
import HomeMarketingSlider from 'webapp/funding/component/showing/HeroMarketing';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
import FooterOne from 'webapp/common/Footer/FooterOne';
import { Grid, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import ShareIcon from '@material-ui/icons/Share';
import LaunchIcon from '@material-ui/icons/Launch';
import Button from '@material-ui/core/Button';

const FundingDetailWithoutLogin = () => {
    const dispatch = useDispatch();
    const { read } = useParams();
    const param = useSelector(currentFunding);

    useEffect(() => {
        dispatch(getFundingDetail(read));
    }, []);
    const useStyles = makeStyles((theme) => ({
        root: {
            background: 'linear-gradient(90deg, #D9DAEB, #EBE5E3)',
            flexGrow: 1,
            padding: 14,
        },
        productgrid: {
            maxWidth: 1200,
            margin: 'auto',
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            backgroundColor: '#EBE5E3',
        },
        card: {
            borderWidth: 2,
            width: 300,
        },
        w314: {
            width: 300,
        },
        content: {
            height: 20,
            padding: `-20 0 0 0`,
            margin: `-20 0 0 0`,
            lineHeight: 1,
        },
        largeCover: {
            display: 'flex',
            minWidth: 360,
            flexDirection: 'row',
        },
        details: {
            display: 'flex',
            flexDirection: 'row',
            margin: 0,
        },
        content: {
            height: 30,
            padding: `0 0 0 0`,
            margin: `0 0 0 0`,
        },
        button: {
            containedPrimary: {
                border: 2,
            },
        },

        h1: {
            fontFamily: '"Sofia-Pro", sans-serif',
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.2,
            color: 'rgba(80,80,80,1)',
        },
        h2: {
            fontFamily: '"Sofia-Pro", sans-serif',
            fontSize: 60,
            fontWeight: 300,
            lineHeight: 1.2,
            color: 'rgba(80,80,80,1)',
        },
        h3: {
            fontFamily: '"Sofia-Pro", sans-serif',
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.2,
            color: 'rgba(80,80,80,1)',
        },
        h4: {
            fontFamily: '"Sofia-Pro", sans-serif',
            fontSize: 30,
            fontWeight: 600,
            lineHeight: 1.2,
            color: 'rgba(80,80,80,1)',
        },
        h5: {
            fontFamily: '"Sofia-Pro", sans-serif',
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.2,
            color: 'rgba(80,80,80,1)',
        },
        h6: {
            fontFamily: '"Sofia-Pro", sans-serif',
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: -0.5,
            color: 'rgba(80,80,80,1)',
        },
        subtitle1: {
            fontFamily: '"Rubik", sans-serif',
            fontSize: 14,
            letterSpacing: '0.1em',
            fontStyle: 'normal',
            fontWeight: 400,
            color: 'rgba(80,80,80,1)',
        },
        subtitle2: {
            fontFamily: '"Rubik", sans-serif',
            fontSize: 12,
            letterSpacing: '0.1em',
            fontWeight: 300,
            color: 'rgba(80,80,80,1)',
        },
        body1: {
            fontFamily: '"Rubik", sans-serif',
            fontSize: 18,
            lineHeight: 1.5,
            color: 'rgba(80,80,80,1)',
        },
        body2: {
            fontFamily: '"Rubik", sans-serif',
            fontSize: 16,
            lineHeight: 1.5,
            fontWeight: 300,
            color: 'rgba(80,80,80,1)',
        },
        caption1: {
            fontFamily: '"Rubik", sans-serif',
            fontSize: 12,
            lineHeight: 1.4,
            color: 'rgba(80,80,80,1)',
        },

        spacer: {
            display: 'block',
            height: 10,
        },

        typography: {
            font: 'system-ui',
        },

        icons: {
            fontSize: 30,
        },

        buttonone: {
            width: '100%',
            borderRadius: '8px',
            backgroundColor: '#3D77F9',
            letterSpacing: '1px',
            fontWeight: 300,
            height: 42,
        },
        buttontwo: {
            width: '100%',
            borderWidth: 2,
            borderColor: '#6633ff',
            borderRadius: '8px',
            color: '#3D77F9',
            letterSpacing: '1px',
            fontWeight: 400,
            backgroundColor: 'rgba(61,119,249, .15)',
            height: 42,
        },
        buttoncircle: {
            borderRadius: '21px',
            borderColor: 'rgba(61,119,249, .15)',
            borderWidth: 1,
            color: '#3D77F9',
            letterSpacing: '1px',
            fontWeight: 400,
            height: 36,
            backgroundColor: 'rgba(61,119,249, .15)',
        },
        label: {
            color: 'red',
            letterSpacing: '1px',
            fontWeight: 400,
            fontsize: 6,
        },
        dividerFullWidth: {
            margin: `${theme.spacing(3)}px 0 ${theme.spacing(0)}px 0`,
        },
        nested: {
            margin: `0 0 0 0`,
            color: 'rgba(0, 0, 0, 0.54)',
        },
        list: {
            padding: `0 0 0 0`,
            margin: `0 0 0 0`,
        },
        quote: {
            fontStyle: 'italic',
        },
        source: {
            textAlign: 'right',
            paddingBottom: `${theme.spacing(3)}px 0 ${theme.spacing(30)}px 0`,
            display: 'block',
        },
        media: {
            width: 300,
            height: 412,
            backgroundSize: 'contain',
            backgroundPosition: 'top',
        },
        grey: {
            backgroundColor: '#df6789',
        },
    }));

    const classes = useStyles();
    return (
        <>
            <HeaderSocial data={dataNavbar} />
            <HomeMarketingSlider />
            <div className={classes.root}>
                <Grid container spacing={4} className={classes.productgrid}>
                    <Grid item s={12} sm={8} className={classes.largeCover}>
                        <Box className={classes.box}>
                            <Typography gutterBottom variant="h3" component="h3" className={classes.h3}>
                                {param.title}
                            </Typography>
                            <div className={classes.spacer} />
                            <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p">
                                작성자
                            </Typography>

                            <Typography className={classes.body1} variant="body1" color="textSecondary" component="p">
                                {param.name}
                            </Typography>
                            <div className={classes.spacer} />
                            <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p">
                                목표 금액
                            </Typography>

                            <Typography className={classes.body1} variant="body1" color="textSecondary" component="p">
                                {Number(param.goalPrice).toLocaleString('en')}원
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                Shadow={3}
                                className={classes.media}
                                image={param.fundingFiles?.map((img) => `http://localhost:8080/funding_file/display?fileName=${img.uuid}_${img.fname}`)[0]}

                                // title={title}
                            />

                            <CardContent className={classes.content}>
                                <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p" align="center" style={{ marginTop: '-20px' }}>
                                    <span class="mdi mdi-gesture-double-tap" style={{ fontSize: '28px' }}>
                                        &nbsp;
                                    </span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <Typography gutterBottom variant="h5" component="h5" className={classes.h5}></Typography>
                        <Link to={'/funding/list'}>
                            <Button variant="outlined" size="small" color="primary" key={param.fundingId}>
                                {param.hashtag}
                            </Button>
                        </Link>

                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />
                        <div className={classes.spacer} />

                        <Divider className={classes.dividerFullWidth} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container spacing={3} className={classes.w314}>
                            <Grid item xs={12} sm={12}>
                                <Button variant="contained" color="primary" size="large" className={classes.w314}>
                                    후원 하기
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button variant="outlined" border={1} size="large" color="primary" className={classes.w314}>
                                    추천하기
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Button size="large" color="primary">
                                    <ShareIcon rotate={-90} className={classes.shareIcon} />
                                    &nbsp;&nbsp;공유하기
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Button align="right" size="large" color="primary">
                                    <LaunchIcon className={classes.shareIcon} />
                                    &nbsp;&nbsp;preview
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box className={classes.box}>
                            <Typography gutterBottom variant="h5" component="h5" className={classes.h5}>
                                펀딩 상세 내용
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                <h3>{param.content}</h3>
                            </Typography>
                            {param.fundingFiles?.map((image, i) => (
                                <CardMedia>
                                    <img key={i} src={`http://localhost:8080/funding_file/display?fileName=${image.uuid}_${image.fname}`} />
                                </CardMedia>
                            ))}
                        </Box>
                        <Divider className={classes.dividerFullWidth} />
                        <Link to={'/funding/list'}>
                            <Button variant="outlined" size="large" color="primary">
                                리스트로 돌아가기
                            </Button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/funding/home'}>
                            <Button variant="outlined" size="large" color="primary">
                                홈으로 돌아가기
                            </Button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={`/funding/modify/${param.fundingId}`}>
                            <Button variant="outlined" size="large" color="primary" key={param.fundingId} onClick={() => dispatch(getFundingDetail(param.fundingId))}>
                                수정하기
                            </Button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={`/funding/list`}>
                            <Button variant="outlined" size="large" color="primary" key={param.fundingId} onClick={() => dispatch(deleteFunding(param.fundingId))}>
                                삭제하기
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>

            <FooterOne />
        </>
    );
};
export default FundingDetailWithoutLogin;
