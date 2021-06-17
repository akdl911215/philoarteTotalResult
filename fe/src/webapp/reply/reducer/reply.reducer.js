import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReplyService } from 'webapp/reply/index';

export const getReplyList = createAsyncThunk('replies/list/reviewId', async (reviewId) => {
    const response = await ReplyService.list(reviewId);
    return response.data;
});

export const getReplyRegister = createAsyncThunk('replies/register', async (input) => {
    const response = await ReplyService.register(input);
    return response;
});

export const getReplyModify = createAsyncThunk('replies/modify/rno', async (reply) => {
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
                state.reply = []; 
                console.log(payload);
            })
            .addCase(getReplyDelete.fulfilled, (state, { payload }) => {
                state.rno = payload;
            })
            .addMatcher(isRejectAction, () => {})
            .addDefaultCase((state, payload) => {});
    },
});

const { actions, reducer } = replySlice;
export const currentReply = (state) => state.replies.reply;
export const {} = actions;
export default reducer;