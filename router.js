app.get('/loadMore', function(req, res) {       //固定app.[传递类型]+接口名称 函数（传入参数）
  var curIdx = req.query.index                  //通过 req.query获取请求/传递参数.
  var len = req.query.length                    //通过 req.query获取请求/传递参数.
  var data = []                                 //声明数组
  for(var i=0; i<len; i++) {                    //遍历
    data.push('序号：' + (parseInt(curIdx) + i))//循环推入数组
  }
  setTimeout(function(){                        //定时器
  res.send(data)                                //通过 res.query 发送数据
  }, 3000)                                      //延迟3秒-（仿延迟）
})