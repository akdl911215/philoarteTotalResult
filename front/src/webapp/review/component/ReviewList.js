import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList} from 'webapp/review/reducer/review.reducer';
import {ReviewPageList, ReviewSearch} from '..';


const ReviewList = () => {
    const pageResult= useSelector(state=>state.reviews.pageResult)

    const page = pageResult.page

    const dispatch = useDispatch()

    const reviews = useSelector(state =>{

        return state.reviews.pageResult.dtoList; 
    })
    

    // const msg = useSelector(state => {
    //     return state.reviews.msg
    // })

    //  const selectContent = (reviewId) => {
    //     dispatch(getReviewRead(reviewId))
    // }

    useEffect((e) => {
        dispatch(getReviewList(page))
    },[])


    return (
        <>
<section className="white-bg">

    <div className="col-md-12">
        <div className="section-title text-center">
            <h1>Philo_Arte 아티스트를 응원해주세요 </h1>
        </div> 
    </div> <hr className="center_line default-bg"/>

        <div className="container" style={{marginTop:"75px"}}>
            <div className="post-tags pull-right">
                < Link to = "/reviews/review_register">Register</ Link>
            </div> <br></br><ReviewSearch></ReviewSearch>
        </div>


        <div className="row">
            <div className="row-md-12">
                <div className="container display-flex" style={{flexWrap:"wrap", justifyContent:"center"}} >
                        {reviews.map((review, reviewId)=>{
                           return(

        <div className="mt-10">
            <div className="row-md-10 pricing-table row-sm-5">
                <div className="pricing-box" style={{margin:"3vh", width:"18vw", boxShadow:"3px 3px 3px 3px lightgrey", border:"1px solid"}}>
                    <h3 className="dark-color mb-0"style={{marginBottom:"50px", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>{review.title}</h3>
                    <h5 className="dark-color mb-0">By&nbsp;{review.writerName}</h5>
                    <h5 className="dark-color" style={{marginTop:"50px"}}>{review.regDate}</h5>
        </div><br></br>

        <div className="pricing-box-bottom text-center">
            <Link to ={`/reviews/review_read/${review.reviewId}`} 
            className="btn btn-lg btn-square btn-color" >더 보기</Link>
        </div>
            </div>
                </div>
                )
            })}
            
                </div>
                  </div>
           <ReviewPageList></ReviewPageList>
                     </div>
                          </section>
</>

    )
        }
export default ReviewList