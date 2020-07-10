const express = require('express')
const app  = express()
const sha1 = require('sha1')
const token = 'suntang'
const { parseString } = require("xml2js");
function formateUserTextMsg(result) {
  console.log(result.xml.Content,result,typeof result,'我是result.req');
  return result.xml.Content[0];//string
}
function returnFormateXML(message, content) {
  return '<xml><ToUserName><![CDATA[' + message.FromUserName+
    ']]></ToUserName><FromUserName><![CDATA['+message.ToUserName +
    ']]></FromUserName><CreateTime>'+ Date.now()+
    '</CreateTime><MsgType><![CDATA['+message.MsgType+
    ']]></MsgType><Content><![CDATA['+content+
    ']]></Content></xml>';
}

app.use('/',(req, res) => {
  console.log(req.query, 'req')
    let { signature, echostr, timestamp, nonce } = req.query
    // 做字典序排序(将token、timestamp、nonce三个参数进行字典序排序)
    let tempArr = [token, timestamp, nonce]
    tempArr.sort()  // sort排序会直接改变原数组，至此字典序排序完成
    // 进行sha1加密
    let selfSignature = sha1(tempArr.join(''))
    // 如果自己进行加密后的signature与微信请求过来的signature相同，则把 ‘echostr’ 字段返回回去即可验证成功

    if(req.method === "GET"){
      // - 将加密后生成字符串和微信签名进行对比，
      if (selfSignature === signature) {
          //说明成功，返回echostr给微信服务器
          res.send(echostr);
      } else {
          //说明失败
          res.send('');
      }
    }else if(req.method === "POST"){
          // - 将加密后生成字符串和微信签名进行对比，
          if (selfSignature === signature) {
          //说明成功，返回空字符串防止微信服务器重复请求
              //接收用户发送的消息
              let str = "";
              req.on("data",chunk=>{
                  str += chunk;
              });
              req.on("end",()=>{
                  console.log(str);
                  parseString(str,{trim:true},(err,data)=>{
                    if(!err){
                      const userTextMsg = formateUserTextMsg(data);
                      if(userTextMsg === 'ts') {
                        res.end(returnFormateXML(data.xml,Date.now() + ''));
                      } else {
                        res.end(returnFormateXML(data.xml,'你真帅哦'));
                      }
                    }else{
                        reject(`parseXMLAsync出错，错误为：${err}`);
                    }
                });
              });
          } else {
              //说明失败
              res.send('POST请求不是来自微信服务器。');
          }
    }else{
        console.log("请求方式错误");
        res.send("请求方式错误");
    }
})

app.listen(80, () => {
    console.log('服务启动成功：http://132.232.4.174')
})