// 创建数据库链接
const mysql = require('mysql')
// 注意隐私
const conn = mysql.createConnection({
  host: 'www.db4free.net',
  user: '',
  password: '',
  database: ''
})

// 注册 解析表单的body-parser
// const bodyParser = require('body-parser')
// conn.use(bodyParser.urlencoded({extended:false}))
module.exports = conn