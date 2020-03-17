const CACHE=[]

const getData = async() => {
    return CACHE
}

const postData = async(obj) => {
    CACHE.push(obj)
    return true
}

module.exports = {
    getData,
    postData
}