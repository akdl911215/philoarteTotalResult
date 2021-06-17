import axios from 'axios'

const artList = (page) => {
  return axios.get(`http://localhost:8080/arts/list?page=${page}`)
}
const artSearch = (param) => {

  const str = "page=" + (!param.page ? 1 : param.page) + "&type=" + (param.type) + "&keyword=" + (param.keyword)

  return axios.get(`http://localhost:8080/arts/search?` + str)
}
const artRegister = (payload) => axios.post(`http://localhost:8080/arts/register`, payload)
const artUpload = (formData) => axios.post(`http://localhost:8080/art_files/upload`, formData,
  {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
)
const artFileDelete = (payload) => axios.delete(`http://localhost:8080/art_files/delete`, payload)
const artRead = (payload) => axios.get(`http://localhost:8080/arts/read/${payload}`)
const artModify= (payload) => axios.put(`http://localhost:8080/arts/modify`, payload)
const artDelete = (payload) => {
  return axios({
    url: `http://localhost:8080/arts/delete`,
    method: 'delete',
    data: payload
  })
}
const artCount = (payload) => axios.get(`http://localhost:8080/arts/count/${payload}`)
const artPosts = (payload) => axios.get(`http://localhost:8080/arts/list/${payload}`)

const categoryList = () => axios.get(`http://localhost:8080/category/findall`)

export default { artList, artRegister, artUpload, artFileDelete, artRead, artModify, artDelete, artSearch, artCount, artPosts, categoryList }