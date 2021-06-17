import React from 'react'

import {Link} from 'react-router-dom';

const ResumeRead = () => {

    return (
        <> < h1 > ResumeRead</h1>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/resume/resume-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default ResumeRead