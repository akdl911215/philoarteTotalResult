import React from 'react'

import {Link} from 'react-router-dom';

const ItemRegister = () => {

    return (
        <> < h1 > ItemRegister</h1>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/item/item-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default ItemRegister