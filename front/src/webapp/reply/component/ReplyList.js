import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReplyDelete, getReplyList, getReplyModify } from '../reducer/reply.reducer';
import { Link, useParams } from 'react-router-dom';
import { currentReview, getReviewRead } from 'webapp/review/reducer/review.reducer';
import { ReplyModify } from '..';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Icofont from 'react-icofont';

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
};

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '70vh',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    paper2: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        overflow: 'hidden',
        display: 'flex',
    },
}));

const ReplyList = ({ reviewId, changeFlag, flag }) => {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [modalImage, setModalImage] = useState('');

    const [files, setFiles] = useState([]);

    const dispatch = useDispatch();

    const params = useParams();

    const imgRef = useRef();

    const reviewObj = useSelector(currentReview);

    const replies = useSelector((state) => {
        return state.replies.reply;
    });

    const fetchRead = () => {
        dispatch(getReviewRead(params.reviewId));
    };

    // replyDelete
    const deletes = async (rno) => {
        let deleteResult = window.confirm('정말 삭제하시겠습니까?');
        if (deleteResult) {
            await dispatch(getReplyDelete(rno));
            changeFlag();
            fetchRead();
        }
    };

    useEffect(() => {
        dispatch(getReplyList(reviewId));
    }, [flag]);

    // replyModify

    const [show, setShow] = useState(false);

    const [modalTitle, setModalTitle] = useState({});

    const handleOpen = (targetReply) => {
        // 수정버튼을 클릭할 때 reply에 있는 데이터를 가져와 setModalTitle에 담아서 열어 준다.
        setModalTitle(targetReply);
        setOpen(true);
    };

    // 썸네일 -> 원본 이미지  url 변경
    const getOriginImg = (str) => {
        const idx = str.lastIndexOf('_');

        const begin = str.substring(0, idx - 1);

        const end = str.substring(idx);

        return begin + end;
    };

    // 댓글 이미지 모달창 open
    const handleOpen2 = (e) => {
        const srcTarget = getOriginImg(e.target.src);
        setModalImage(srcTarget);
        console.dir(imgRef.current);
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleChangeText = (e) => {
        const renew = { ...modalTitle };
        // 새롭게 객체 분해
        renew.text = e.target.value; // text 부분만 변경

        console.log('renew', renew);

        setModalTitle(renew);
    };

    const fileModify = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        alert('수정이 완료되었습니다');

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('replyFiles[' + i + ']', files[i]);
        }

        formData.append('path', modalTitle.path);
        formData.append('replyer', modalTitle.replyer);
        formData.append('rno', modalTitle.rno);
        formData.append('imgName', modalTitle.imgName);
        formData.append('uuid', modalTitle.uuid);
        formData.append('text', modalTitle.text);
        formData.append('reviewId', modalTitle.reviewId);

        await dispatch(getReplyModify(formData));

        changeFlag(); // 수정한 후 바꾸게 하는 것
        handleClose(); //  모달을 종료 호출
    };

    const handleChangeFile = (e) => {
        const fileObj = e.target;
        console.log(fileObj);
        setFiles(fileObj.files);
    };

    //댓글 수정 모달 창 jsx
    const replyBody = (
        <div style={modalStyle} className={classes.paper}>
            <h2 className="text-center">Reply Modify</h2>
            <hr className="center_line default-bg" style={{ marginBottom: '50px' }} />
            <div className="row-form row">
                <div className="col-form col-md-5">
                    <div className="form-group">
                        <input type="text" name="replyer" placeholder="댓글 등록자 *" value={modalTitle.replyer} style={{ color: 'black', border: '1px solid #9e9e9eb5' }} readOnly />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <textarea name="text" rows="5" placeholder="댓글을 수정하세요 *" value={modalTitle.text} style={{ color: 'black', border: '1px solid #9e9e9eb5' }} onChange={(e) => handleChangeText(e)}></textarea>

                <div style={{ textAlign: 'center' }}>
                    {modalTitle && modalTitle.imgName ? (
                        <div key={modalTitle.uuid}>
                            <img src={'http://localhost:8080/review_files/display?imgName=' + modalTitle.uuid + 's_' + modalTitle.imgName} />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <br></br>
            </div>

            <div>
                <div>
                    <label className="input-file-button " style={{ marginBottom: '35px' }} for="input-file">
                        Upload
                    </label>
                    <input type="file" name="file" id="input-file" style={{ display: 'none' }} multiple={true} onChange={(e) => handleChangeFile(e)} />
                    <Link className="btn btn-success btn-md btn-default remove-margin pull-right" onClick={fileModify}>
                        Modify
                    </Link>
                </div>
            </div>
        </div>
    );

    //댓글 이미지 클릭 시 모달창 오픈
    const replyFileBody = (
        <div style={modalStyle} className={classes.paper2}>
            <div className="display-flex">
                <button>
                    <div key={modalImage.uuid}>
                        <img src={modalImage} />
                    </div>
                </button>
            </div>
        </div>
    );

    return (
        <>
            <h3 className="white-bg comment-reply-title mt-30 text-center">{reviewObj.replyCount}개의 댓글</h3>

            <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                {replyBody}
            </Modal>

            <Modal open={open2} onClose={handleClose2} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                {replyFileBody}
            </Modal>

            <br></br>

            {replies.length > 0 ? (
                replies.map((reply, rno) => {
                    return (
                        <ul className=" container comment-box">
                            <li className="post-comment" key={reply.rno}>
                                <div className="comment-content" style={{ border: '1px solid #9e9e9e85' }}>
                                    <div className="post-body">
                                        <div className="comment-header">
                                            <div className="post-tags pull-left">
                                                <Link onClick={() => deletes(reply.rno)}>Remove</Link>
                                            </div>
                                            <div className="post-tags" style={{ marginLeft: '1020px' }}>
                                                <Link onClick={() => handleOpen(reply)}>Modify</Link>
                                            </div>
                                        </div>
                                        <div className="post-message">
                                            <p className="line-height-26 font-15px">
                                                <div className="font-700 mb-0">
                                                    <h5>
                                                        <Icofont icon="icofont-user-alt-5" className="font-20px mt-20" />
                                                        &nbsp;&nbsp;{reply.replyer}
                                                    </h5>
                                                </div>
                                                <Icofont icon="quote-left" className="font-20px default-color mt-20" /> &nbsp;
                                                <span>{reply.text}</span>
                                            </p>
                                        </div>
                                        <b className="comment-footer">
                                            <h5>등록 : {reply.regDate}</h5>
                                            <h5>수정 : {reply.modDate}</h5>
                                            <div className="display-flex">
                                                <>
                                                    {reply && reply.imgName ? (
                                                        <button>
                                                            <div key={reply.uuid}>
                                                                {' '}
                                                                <img onClick={(e) => handleOpen2(e)} src={'http://localhost:8080/review_files/display?imgName=' + reply.uuid + 's_' + reply.imgName} />
                                                            </div>
                                                        </button>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </>
                                            </div>
                                        </b>
                                    </div>
                                </div>
                            </li>
                            <ReplyModify open={show} handleClose={() => handleClose()}></ReplyModify>
                        </ul>
                    );
                })
            ) : (
                <div className="text-center">
                    <Icofont icon="icofont-comment" className="font-20px icofont-speech-comments" />
                    &nbsp;첫 번째 댓글을 입력해주세요
                </div>
            )}
        </>
    );
};

export default ReplyList;
