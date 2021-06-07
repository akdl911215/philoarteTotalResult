import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReplyService } from 'webapp/reply/index';

export const getReplyList = createAsyncThunk('replies/list/reviewId', async (reviewId) => {
    const response = await ReplyService.list(reviewId);
    return response.data;
});

export const getReplyRegister = createAsyncThunk('replies/register', async (input) => {
    console.log('=======', input);
    const response = await ReplyService.register(input);
    console.log('======', response);
    return response;
});

export const getReplyModify = createAsyncThunk('replies/modify/rno', async (reply) => {
    console.log('===========================');
    console.log(reply);
    const response = await ReplyService.modify(reply);
    return response.data;
});

export const getReplyDelete = createAsyncThunk('replies/remove/rno', async (rno) => {
    const response = await ReplyService.deletes(rno);
    return response.data;
});

const isRejectAction = (action) => action.type.endsWith('rejected');

const replySlice = createSlice({
    name: 'replies',
    initialState: {
        msg: '',
        reply: [],
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
        },
        replyFiles: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReplyList.fulfilled, (state, { meta, payload }) => {
                state.reply = payload;
            })
            .addCase(getReplyRegister.fulfilled, (state, { payload }) => {
                const msg = '' + payload + '번 등록';
                return { ...state, msg };
            })
            .addCase(getReplyModify.fulfilled, (state, { payload }) => {
                state.reply = []; // 페이로드로 받으면 서버에서 success modify(string)로 호출되니 일단은 빈배열로 받고 replylist로 간다.
                console.log(payload);
            })
            .addCase(getReplyDelete.fulfilled, (state, { payload }) => {
                state.rno = payload;
                console.log(payload); // 서버의 리턴 타입이 string일 경우 payload는 해당 string 값이 된다.
            })
            .addMatcher(isRejectAction, () => {})
            .addDefaultCase((state, payload) => {});
    },
});

const { actions, reducer } = replySlice;
export const currentReply = (state) => state.replies.reply;
export const {} = actions;
export default reducer;
