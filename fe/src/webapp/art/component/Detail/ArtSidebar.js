import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { getArtCount, getArtDelete } from "webapp/art/reducer/art.reducer";

const ArtSidebar = ({ post }) => {
  
  const dispatch = useDispatch()
  const history = useHistory()

  const count = useSelector(state => state.arts.count)

  const loginValue = JSON.parse(localStorage.getItem("artist"))

  useEffect(() => {
    dispatch(getArtCount(post.artist.artistId))
  }, [])

  const deleteArt = e => {
    e.stopPropagation()
    e.preventDefault()

    dispatch(getArtDelete(post))

    history.push('/art')
  }

  const countArt = count.map(cnt => (
    <ul key={cnt}>
      <li>
        <p>{cnt[0]}</p>
        <span>{cnt[1]}</span>
      </li>
    </ul>
  ))

  return (
    <div className="col-md-3 col-sm-3 col-xs-12">
      {
        (loginValue?.artistId === post.artist.artistId) ?
        <div className="widget sidebar_widget text-center">
          <Link
            to={`/art/modify/${post.artId}`}
            className="btn btn-lg btn-dark-outline btn-square mt-10 mr-30"
          >
            수정
        </Link>
          <button
            className="btn btn-lg btn-dark-outline btn-square mt-10 ml-30"
            onClick={e => deleteArt(e)}
          >
            삭제
        </button>
        </div>
          :
          <></>
      }
      <div className="mb-50">
        <h5 className="aside-title">Artist</h5>
        {/* <a href="about-me.html">
        <img src={""} alt="" />
      </a> */}
        <p className="mt-30">
          {post.artist.name}
        </p>
        <a
          href={process.env.PUBLIC_URL}
          className="btn btn-md btn-dark-outline btn-square mt-10"
        >
          About Artist
        </a>
      </div>
      <div className="sidebar_widget widget_archive mb-50">
        <h5 className="aside-title">Archive</h5>
        {countArt}
      </div>

      <div className="sidebar_widget widget_categories mb-50">
        <h5 className="aside-title">Category</h5>
        <ul>
          <li>
            {post.category.categoryName}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ArtSidebar;
