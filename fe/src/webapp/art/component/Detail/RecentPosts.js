import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getArtPosts } from "webapp/art/reducer/art.reducer"

const RecentPosts = ({ artistId }) => {

  const dispatch = useDispatch()
  const pageResult = useSelector(state => state.arts.pageResult)

  useEffect(() => {
    dispatch(getArtPosts(artistId))
  }, [])

  console.log("pageResult", pageResult)

  return (
    <div className="row blog-style-01">
      {pageResult.dtoList.map((post) => (
          <div
            className="col-md-6 col-sm-6 col-xs-12"
            key={post.artId}
          >
          <div className="post">
            <div className="post-img">
              <Link to={`/art/read/${post.artId}`}>
                <img src={`http://localhost:8080/art_files/display?fileName=${"s_" + post.file.uuid + "_" + post.file.originalFileName}`} alt="이미지가 없습니다" />
                <div className="post-metas">
                  <div className="post-metas-center">
                    <p className="post-date">{post.regDate}</p>
                  </div>
                </div>
              </Link>
              </div>
                <div className="post-info all-padding-20">
                  <h3>
                    {post.title}
                  </h3>
                  <p>{post.description}</p>
                </div>
            </div>
        </div>
      )
      )}
    </div>
  )
}

export default RecentPosts