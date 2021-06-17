import React from 'react'

import {Link} from 'react-router-dom';

const FundingRead = () => {

    return (
        <> < h1 > FundingRead</h1>
     < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/funding/funding-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default FundingRead