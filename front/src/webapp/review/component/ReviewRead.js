import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icofont from 'react-icofont';
import { Link, useParams } from 'react-router-dom';
import { ReplyList } from 'webapp/reply';
import { getReviewRead, getReviewDelete, getReviewList } from '../reducer/review.reducer';

const ReviewRead = () => {
    const reviewObj = useSelector((state) => {
        return state.reviews.params;
    });

    const reviewFile = reviewObj.reviewFileDtoList;

    const [flag, setFlag] = useState(false);

    const changeFlag = () => {
        setFlag(!flag);
    };

    const params = useParams();

    const dispatch = useDispatch();

    const fetchRead = () => {
        dispatch(getReviewRead(params.reviewId));
    };

    useEffect(() => {
        fetchRead();
    }, []);

    const deletes = async (reviewId) => {
        let deleteResult = window.confirm('정말 삭제하시겠습니까?');
        if (deleteResult) {
            alert('삭제가 완료되었습니다.');
            await dispatch(getReviewDelete(reviewId));
            await dispatch(getReviewList(1));
        } else {
            window.location.reload();
        }
    };

    return (
        <div>
            <section className="white-bg">
                <div className="container">
                    <h1 className="text-center" style={{ marginTop: '10px' }}>
                        {reviewObj.writerName}님의 Review
                    </h1>
                    <hr className="center_line default-bg" />

                    <div className="display-flex" style={{ marginTop: '60px', marginBottom: '30px', justifyContent: 'center' }}>
                        {reviewFile && reviewFile[0] ? (
                            reviewFile.map((file, i) => {
                                return (
                                    <div style={{ marginRight: '20px' }} key={file.uuid}>
                                        {' '}
                                        <img src={'http://localhost:8080/review_files/display?imgName=' + 's_' + file.uuid + file.imgName} />
                                    </div>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="post-info all-padding-20">
                        <h2>{reviewObj.title}</h2>
                        <br></br>
                        <blockquote style={{ boxShadow: '1px 2px 2px 2px lightgrey' }}>
                            <h5>{reviewObj.content}</h5>
                            <p style={{ textAlign: 'right' }}>
                                등록 : {reviewObj.regDate}
                                <br></br>수정 : {reviewObj.modDate}
                            </p>
                        </blockquote>
                    </div>

                    <div className="post" style={{ marginBottom: '100px' }}>
                        <div className="post-tags pull-right">
                            <Link to={`/reviews/review_modify/${params.reviewId}`}>
                                <div>Modify</div>
                            </Link>
                        </div>

                        <div className="post-tags pull-left">
                            <Link to="/reviews/review_list"> Review List</Link>

                            <Link to="/reviews/review_list">
                                <div onClick={() => deletes(params.reviewId)}>Review Remove</div>
                            </Link>
                        </div>

                        {/* <div className="post-tags pull-left">
                                <Link onClick={()=> deletes(params.reviewId)} hi>Remove</Link>
                                </div> */}

                        <div className="post-tags text-center">
                            <Link className="pull-right" to="/replies/reply_register">
                                <Icofont size="30px" icon="icofont-speech-comments" />
                                Comments
                            </Link>
                        </div>
                    </div>
                </div>
                <ReplyList reviewId={params.reviewId} changeFlag={changeFlag} flag={flag}></ReplyList>
            </section>
        </div>
    );
};
export default ReviewRead;
