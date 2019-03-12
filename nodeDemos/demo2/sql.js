function sqls() {
  this.GETALL_SQL_NODETEST = 'select * from nodeTest where isdelete=0'
  this.GETBYID_SQL_NODETEST = 'select * from nodeTest where id=?'
}

module.exports = sqls