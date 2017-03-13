export default {
    //根据分类信息获取数据
    getData(type, page, callback) {
        $.getJSON('http://192.168.1.102:3000/api/v1/books/get_page_count', { type: type,page:page }, function (res) {
            callback(res)
        })
    }
}