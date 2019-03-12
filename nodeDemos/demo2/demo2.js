/* document.all.filter(e => {
  return e.style.font-family.toLowerCase().indexOf('yahei') > -1 || e.style.font-family.toLowerCase().indexOf('雅黑') > -1
}) */
const conn1 = require('../mysql')
const sqls = require('./sql')
const app = require('../http')

// 注册 解析表单的body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

// 配置服务端口
const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Listen at http://%s:%s', host, port)
})

const sqlObj = new sqls()

// getAll
app.get('/api/getAll', (req, res) => {
  const sql = sqlObj.GETALL_SQL_NODETEST
  console.log(sql)
  conn1.query(sql, (err, result) => {
    console.log(result)
    if (err) return res.json({err_code: 0, msg: '查询失败', affectedRows: 0})
    res.json({
      err_code: 1, msg: result, affectedRows: 0
    })
  })
})

// getById
app.get('/api/getById', (req, res) => {
  const id = req.query.id
  const sqlStr = sqlObj.GETBYID_SQL_NODETEST 
  conn1.query(sqlStr, id, (err, results) => {
      if(err) return res.json({err_code: 1, msg: '获取数据失败', affectedRows: 0})
      if(results.length !== 1) return res.json({err_code: 1, msg: '数据不存在', affectedRows: 0})
      res.json({
          err_code: 1,
          msg: results[0],
          affectedRows: 0
      })
  })
})

// 根据ID 删除数据
app.get('/api/delhero',(req,res) => {
  const id = req.query.id
  const sqlStr = 'update text set isdel = 1 where id=?'
  conn1.query(sqlStr,id,(err,results) => {
      if(err) return res.json({err_code:1,message:'删除英雄失败',affectedRows:0})
      if(results.affectedRows !== 1) return res.json({err_code:1,message:'删除英雄失败',affectedRows:0})
      res.json({err_code:0,message:'删除英雄成功',affectedRows:results.affectedRows})
  })
})
// 添加数据
app.post('/api/addhero',(req,res) => {
  const hero = req.body
  console.log(hero)
  const sqlStr = 'insert into text set ?'
  conn1.query(sqlStr,hero,(err,results) => {
      if(err) return res.json({err_code:1,message:'添加失败',affectedRows:0})
      if(results.affectedRows !== 1) return res.json({err_code:1,message:'添加失败',affectedRows:0})
      res.json({err_code:0,message:'添加成功',affectedRows:results.affectedRows})
  })
})
app.post('/api/updatehero',(req,res) => {
  const sqlStr = 'update text set ? where id = ?'
  conn1.query(sqlStr,[req.body,req.body.id],(err,results) => {
      if(err) return res.json({err_code:1,message:'更新英雄失败',affevtedRows:0})
      //影响行数不等于1
      if(results.affectedRows !== 1) return res.json({err_code:1,message:'更新的英雄不存在',affectedRows:0})
      res.json({err_code:0,message:'更新成功',affectedRows:results.affectedRows})
  })
})