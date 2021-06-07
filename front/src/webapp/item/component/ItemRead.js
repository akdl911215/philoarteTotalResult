import React from 'react'

import {Link} from 'react-router-dom';

const ItemRead = () => {

    return (
        <> < h1 > ItemRead</h1>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/item/item-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default ItemRead