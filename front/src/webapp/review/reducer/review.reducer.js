import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {ReviewService} from 'webapp/review/index'

export const getReviewList = createAsyncThunk("reviews/list",
async(pageResult)=>{
    console.log("pageRequest" + JSON.stringify(pageResult))
    const response = await ReviewService.list(pageResult)
    return response.data
})

export const getReviewRegister = createAsyncThunk("reviews/register",

async(input)=>{

    console.log("=========================", input)

    const response = await ReviewService.register(input)

    console.log("=================", response)

    return response
 })

 export const getReviewRead = createAsyncThunk(`reviews/read`,
async(reviewId)=>{
    const response = await ReviewService.read(reviewId)
    return response.data
 })

 export const getReviewModify = createAsyncThunk('reviews/modify/reviewId',
    async(review)=>{

        console.log("===========================")
        console.log(review)
        const response = await ReviewService.modify(review)
        return response.data
    }
 )

 export const getReviewDelete = createAsyncThunk('reviews/delete/reviewId',
    async(reviewId)=>{
        const response = await ReviewService.deletes(reviewId)
        return response.data
    }
 )


 const isRejectAction=action=>(action.type.endsWith('rejected'))

 const reviewSlice = createSlice({
     name : 'reviews',
     initialState : {
        msg:'',
        pageResult :{
            dtoList:[],
            page: 1,
            pageList:[],
            start : 1,
            end : 1,
            prev:false,
            next:false,
        },
        type: '',
        keyword :'',
        params:{}
     },
     reducers : {

        changeSearch: (state, action) => {
            state.type = action.payload.type
            state.keyword = action.payload.keyword
        },

        delFileList :(state, {payload})=>{
            const idx = state.params.reviewFileDtoList.findIndex((file)=>{
                console.log("................" + file.uuid, payload.uuid)
                return file.uuid === payload.uuid 
            })
            console.log("payload", payload)
            console.log("findFile: ", idx)

            state.params.reviewFileDtoList.splice(idx,1)
        }
        

     },
     extraReducers : (builder)=>{
         builder.addCase(getReviewList.fulfilled,(state, {meta,payload})=>{
             console.log(payload)
             state.pageResult =payload
         })
         .addCase(getReviewRegister.fulfilled, (state, {payload})=>{
             const msg = '' +payload.result+"번 등록"
             return {...state, msg }
         })
         .addCase(getReviewRead.fulfilled, (state, {payload})=>{
           state.params = payload
           console.log(payload)
         })
         .addCase(getReviewModify.fulfilled,(state, {payload})=>{
            state.reviewId = payload
            console.log(payload)
         })
         .addCase(getReviewDelete.fulfilled,(state, {payload})=>{
            state.params = payload
         })

         .addMatcher(isRejectAction,()=>{})
         .addDefaultCase((state, payload)=>{})
     }
 })

const{actions, reducer} =reviewSlice

export const currentReview = state => state.reviews.params  // 현재 review state
export const {changeSearch, delFileList}= actions
export default reducer