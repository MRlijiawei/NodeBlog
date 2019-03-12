const app1 = require('../http')
const res1 = require('./data1')
// console.log(app1)
// 接口1
app1.get('/getTest1', (req, res) => {
  res.status(200)
  res.json(res1)
})

// 配置服务端口
const server = app1.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Listen at http://%s:%s', host, port)
})