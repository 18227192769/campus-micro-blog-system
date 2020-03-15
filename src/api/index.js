import axios from 'axios';

const apiPath = "http://localhost:3001";
const baseAxios = axios.create({
    baseURL: apiPath
})

// 登录
function login (userPhone, password) {
    return baseAxios.get(`/userLogin?phone=${userPhone}&password=${password}`)
}
// 注册
function register (postData) {
    return baseAxios.post(`/userRegister`, postData)
}

// 检验昵称唯一性
function checkUserNick (userNick) {
    return baseAxios.get(`/checkUserNick?userNick=${userNick}`);
}

// 检验手机号唯一性
function checkPhone (phone) {
    return baseAxios.get(`/checkPhone?phone=${phone}`);
}

// 查询用户信息
function selectUserInfo (phone) {
    return baseAxios.get(`/selectUserInfo?phone=${phone}`)
}

// 设置用户信息
function setUserInfo (postData) {
    return baseAxios.post(`/setUserInfo`, postData)
}

// 查询用户发布的动态
function getDynamicInfoByUserPhone (phone) {
    return baseAxios.get(`/getDynamicInfoByUserPhone?phone=${phone}`)
}

// 获取话题列表
function getTopicList () {
    return baseAxios.get('/getTopicList')
}

// 获取动态列表
function getDynamicInfoByReadNum () {
    return baseAxios.get('/getDynamicInfoByReadNum')
}

// 发表动态 & 纯文本
function pushDynamic (postData) {
    return baseAxios.post('/pushDynamic', postData);
}

// 发表动态 & 大图
function pushDynamicBigImg (postData) {
    return baseAxios.post('/pushDynamicBigImg', postData);
}

// 发表动态 & 九宫格
function pushDynamicNineImg (postData) {
    return baseAxios.post('/pushDynamicNineImg', postData, {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    });
}

// 发表评论
function pushComment (postData) {
    return baseAxios.post('/pushComment', postData);
}

// 删除评论
function delComment (postData) {
    return baseAxios.post('/delComment', postData);
}

// 上传图片
function uploadUserImage (postData) {
    return baseAxios.post('/setUserImage', postData, {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    })
}

// 点赞
function addLike (postData) {
    return baseAxios.post(`/addLike`, postData);
}

// 转发动态
function refDynamic (postData) {
    return baseAxios.post('/refDynamic', postData);
}

// 转发动态-存储大图
function saveBigImage (postData) {
    return baseAxios.post('/saveBigImage', postData);
}

// 转发动态-存储九宫格
function saveNineImg (postData) {
    return baseAxios.post('/saveNineImg', postData);
}

// 关注
function concernUser (postData) {
    return baseAxios.post('/concernUser', postData);
}

// 取关
function cancelConcern (postData) {
    return baseAxios.post('/cancelConcern', postData);
}

// 获取关注列表
function getUserConcernList (phone) {
    return baseAxios.get(`/getUserConcernList?phone=${phone}`)
}

// 获取粉丝列表
function getUserFansList (phone) {
    return baseAxios.get(`/getUserFansList?phone=${phone}`)
}

export default {
    apiPath,
    login,
    register,
    checkUserNick,
    checkPhone,
    setUserInfo,
    selectUserInfo,
    getTopicList,
    getDynamicInfoByReadNum,
    getDynamicInfoByUserPhone,
    pushDynamic,
    pushDynamicBigImg,
    pushDynamicNineImg,
    pushComment,
    uploadUserImage,
    addLike,
    delComment,
    refDynamic,
    saveBigImage,
    saveNineImg,
    concernUser,
    cancelConcern,
    getUserConcernList,
    getUserFansList
}