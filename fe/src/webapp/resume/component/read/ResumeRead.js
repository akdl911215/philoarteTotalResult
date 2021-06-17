import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Slider from 'react-slick';
import { ArtPost, ReadSidebar } from 'webapp/resume/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteResume, readResume } from 'webapp/resume/reducer/resume.reducer';

const ResumeRead = ({ open, handleClose }) => {
    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
            backgroundColor: '#561571',
            fontSize: 30,
        },
        title: {
            marginLeft: theme.spacing(3),
            marginTop: '10px',
            flex: 1,
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
        },
        closeSize: {
            fontSize: 30,
            color: 'white',
        },
        dialogSize: {
            margin: '0 auto',
            width: '95%',
            verticalAlign: 'middle',
            display: 'inline-block',
            wordBreak: 'break-all',
        },
    }));

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        className: 'blog-grid-slider slick',
    };
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const dispatch = useDispatch();
    const items = useSelector((state) => state.resumes.current);
    const files = items.resumeFiles;
    const [resumeItem, setResumeItem] = useState({});
    
    const loginValue = JSON.parse(localStorage.getItem('artist'))

    useEffect(() => {
        setResumeItem(items);
    }, [items]);

    const fileList = files.map((file, i) => {
        return (
            <>
                <img src={`http://localhost:8080/resume_file/display?fileName=${'w_' + file.uuid + '_' + file.fname}`} />
                <div className="post-info" style={{ textAlign: 'center' }}>
                    <h3>{file.fileTitle}</h3>
                    <p>{file.fileDetail}</p>
                </div>

                <div className="post-metas">
                    <div className="post-metas-center">
                        <p className="post-date">{file.fileWorkedDate} </p>
                    </div>
                </div>
            </>
        );
    });
    const onDelete = (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.confirm('정말 삭제하시겠습니까?');
        dispatch(deleteResume(resumeItem));
        window.location.reload();
    };

    return (
        <>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={useStyles().dialogSize}>
                <AppBar className={useStyles().appBar}>
                    <Toolbar>
                        <IconButton edge="start" onClick={handleClose} aria-label="close">
                            <CloseIcon className={useStyles().closeSize} />
                        </IconButton>
                        <Typography className={useStyles().title}>{resumeItem.name}</Typography>
                        {loginValue?.artistId !== resumeItem.artistId ? <></>:
                        <>
                        <Link to={'/resume/modify/' + resumeItem.resumeId}>
                        <button className="btn btn-light-outline btn-square" onClick={handleClose}>
                            EDIT
                        </button>
                        </Link>
                        <button className="btn btn-light-outline btn-square" style={{ marginTop: '4px', marginLeft: '10px' }} onClick={(e) => onDelete(e)}>
                        DELETE
                        </button>
                        </>
                        }
                        
                    </Toolbar>
                </AppBar>
                <div className="container" style={{ marginTop: '40px' }}>
                    <div className="row">
                        <div className="col-md-9 col-sm-9 col-xs-12 xs-mb-50">
                            <div className="col-md-12 col-sm-12 col-xs-12 mb-20 xs-mb-50">
                                <div className="post">
                                    {files.length > 0 ? <Slider {...settings}>{fileList}</Slider> : <img alt="이미지가 없습니다." />}

                                    <div className="post-info all-padding-20">
                                        <h3>{resumeItem.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12 mb-20">
                                <blockquote>
                                    <p>{resumeItem.detail}</p>
                                </blockquote>
                            </div>
                        </div>
                        <ReadSidebar resumeId={resumeItem.resumeId} name={resumeItem.name} selfIntroduce={resumeItem.selfIntroduce} category={resumeItem.categoryName} artistId={resumeItem.artistId} />
                    </div>
                    <ArtPost />
                </div>
            </Dialog>
        </>
    );
};

export default ResumeRead;
