import React from 'react';
import Icofont from 'react-icofont';
import {useSelector, useDispatch} from "react-redux";

import {getArtList, getArtSearch} from 'webapp/art/reducer/art.reducer';

const PageList = () => {

    const {pageList, start, end, prev, next} = useSelector(state => state.arts.pageResult)
    const type = useSelector(state => state.arts.type)
    const keyword = useSelector(state => state.arts.keyword)

    const dispatch = useDispatch()

    const movePage = async (page) => {
        return (!type && !keyword) ?
            await dispatch(getArtList(page))
            :
            await dispatch(getArtSearch({type: type, keyword: keyword, page: page}))
    }

    const list = pageList.map(i => (
        <li className="" key={i} onClick={() => movePage(i)}>
            {i}
        </li>
    ))

    return (<>
        <div className="row pt-50 pb-50 background-sky">
            <div className="col-md-12">
                <div className="text-center">
                    <div className="pagination dark-color">
                        <ul>
                            {prev ?
                                <>
                                    <li onClick={() => movePage(start - 1)}>
                                        <Icofont
                                            icon="rounded-left"
                                            className="mr-5 xs-display-none"
                                        />
                                    </li>
                                </>
                                :
                                <></>
                            }
                            {list}
                            {next ?
                                <li onClick={() => movePage(end + 1)}>
                                    <Icofont
                                        icon="rounded-right"
                                        className="ml-5 xs-display-none"
                                    />
                                </li>
                                :
                                <></>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default PageList