
/*
npm install request
npm install express
npm install body-parser  
npm install random-js
*/ 
'use strict'
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');  

const app = express();

const verify = "chang12345"
const token = "EAAF4sl1YMXcBALMPImsk0bq2k4p7GUl7EXUZBBKYeS1cWib75GkZAV3gcedV7GMSena9tHqG7WIVkZCS25wSrCfg7Ek0quUSY1VF0kbbRLOXq9icshdXQaNhL9lIcINIrAuk2i39gZCvrNXAZBmP1C68SXROy6PV350BxJvYaIAZDZD"



var Random = require("random-js");
var random = new Random(Random.engines.mt19937().autoSeed());
var value = random.integer(1, 100);




/* ตอบคอมเม้นกลับ โดยสุ่มตอบ ลิ้งและข้อความ

var botmsg = "https://goo.gl/a2ZgP1" + '\r\n'     //  Comment
            +"ลองทำกันแล้วยังคะ สูตรนี้";

*/


var botmsg = "ขอบคุณที่แชร์ รอรับสูตรการทำทาง inbox ได้เลยนะคะ";
var botmsg2 = "ส่งสูตรการทำให้ทาง inbox แล้วนะคะ";
var botmsg3 = "ได้รับสูตรแล้ว ทำมาอวดแอดมินบ้างนะคะ";
var botmsg4 = "ส่งสูตรให้แล้วคะ ไปชงให้ฟินไปเลย";
var botmsg5 = "อย่าเก็บสูตรไว้คนเดียวนะ แบ่งปันให้สาวกโกโก้บ้างนะ";




app.set('port', (process.env.PORT || 5000))
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {

    
    res.end('ok.. golf-'); 
    
    
    
    
    
})

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === verify) {  
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

app.post('/webhook/', function (req, res) {
    let comment = req.body.entry[0]
//    console.log(comment)
    /*let msg = req.body.entry[0].messaging
    for (let i = 0; i < msg.length; i++) {
        let event = req.body.entry[0].messaging[i];
        console.log(event)  
        let sender = event.sender.id;
        console.log(sender)
     }
     if(req.body.entry[0].changes[0].value.verb == 'add'){
         sendComment("Hi, ", req.body.entry[0].changes[0].value.comment_id, "1901294040148067")
     }*/
     
     
     
//     console.log(comment.changes[0].value)  // ดูค่าการส่ง
//     console.log(comment.changes[0].value.post_id) // โชว์ id โพส 

//     console.log(comment.changes[0].value.message)  //ดูที่เขาคอมเม้น
//     console.log(comment.changes[0].value.post_id)  // ดู ID โพสนั้นๆ
             
             
var post1= "สวัสดี";








     
     if(comment.changes != null){ 
         if(comment.changes[0].value.verb == 'add'){
             
                           


             
           if(comment.changes[0].value.post_id === "154016761339613_1631103096964298") {
               
            console.log(comment.changes[0].value.post_id)  // ดู ID โพสนั้นๆ
            console.log(comment.changes[0].value.message)  //ดูที่เขาคอมเม
            
    if(comment.changes[0].value.message === '1' ){
        postComment("ถึงเพ่ จะดูจริงจัง  น่าเกรงขาม  แต่ลึก ๆ  ใจดีนะขอบอก" , "http://chachangthong.com/uploads/269/filemanager/ebe3ba48b2f2056596a01895be7d2806_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '2' ){
        postComment("อะไรมันช่างจะเหมาะเจาะ ลงตัวแบบนี้  ลื่นปรื้ดๆ..." , "http://chachangthong.com/uploads/269/filemanager/6e9dd9d50cd901cf6a161c5a61c0370c_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '3' ){
        postComment("น้ำตาลเรียกพี่  เติมน้ำตาลหน่อยไหมมมม(เพราะยังหวานน้อย)" , "http://chachangthong.com/uploads/269/filemanager/08e6867193151b6cb49c37990b1992a2_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '4' ){
        postComment("เข้มแข็ง  บึกบึน คือคุณนั่นเองงงงงงงง" , "http://chachangthong.com/uploads/269/filemanager/a0d524c9fd89fafb7b59c97bde27de67_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '5' ){
        postComment("ใสๆ  แบ้วๆ   น่ารักกว่านี้ ไม่มีอีกแล้ว" , "http://chachangthong.com/uploads/269/filemanager/7febebfe573821795d95a328987040e7_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '6' ){
        postComment("โอ้ว ชีวิตคุณ ช่วงนี้  อะไรๆ ก็ดีไปซะทุกเรื่อง" , "http://chachangthong.com/uploads/269/filemanager/b7d2959f60493235779aa50b268f2d53_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '7' ){
        postComment("เป็นแม่หญิงงาม  ชมดชดช้อย  สุดๆ" , "http://chachangthong.com/uploads/269/filemanager/f584f1169f9872ee789f01885cbed9bb_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '8' ){
        postComment("ดุดัน แต่ดูดี มีราศียิ่งกว่าใครๆ" , "http://chachangthong.com/uploads/269/filemanager/f28742ce95a9bca6117a8d4619acf834_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '9' ){
        postComment("เป็นเจ้าพ่อ เจ้าแม่ แห่งการดูแล  ช่างใส่ใจได้ดีในรายละเอียด ยิ่งนัก" , "http://chachangthong.com/uploads/269/filemanager/20ead733a397e884233daed6adb7eccb_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '10' ){
        postComment("อันนี้ ขอบอก  รู้ว่าเสียง แต่คงต้องขอลอง" , "http://chachangthong.com/uploads/269/filemanager/93356576aae32538ec5399af0bab7f0d_full.jpg", comment.changes[0].value.comment_id)
    }
    else if(comment.changes[0].value.message === '11' ){
        postComment("เรื่องกินไว้ใจป๋ม  พรุ่งนี้ค่อยลดน้ำหนัก" , "http://chachangthong.com/uploads/269/filemanager/ee6a47a9e6f043f8b8ebba47e9fabd02_full.jpg", comment.changes[0].value.comment_id)
    }
    

    
    else{
        postComment("งั้นแน่ พลาดแว้ว..." + '\r\n'
        + "พิมพ์แค่ตัวเลขคะ 1-11 นะจ๊ะ"
        ,"http://chachangthong.com/uploads/269/filemanager/f0b3b4ab15e557603075e8c6a33dd46a_full.png"
        , comment.changes[0].value.comment_id)
    }
    

    
    

            
            
         //   sendComment("hi test", comment.changes[0].value.comment_id)
            
            
            
            
            
            
            
            

}
             
            
             





//                        sendComment("hi test" , comment.changes[0].value.sender_name, comment.changes[0].value.comment_id);


   
           /* sendComment("ขอบคุณที่มาร่วมสนุกจร้า  " + comment.changes[0].value.sender_name+ '\r\n'          // Inbox
            + "ช้างทองนำเมนู ดับเบิลช็อกโกแลตสมูทตี้มาเสิร์ฟแล้วจร้า"+  '\r\n'  
            + "ดาวน์โหลดเมนูได้ที่ https://goo.gl/6fJL4H"
            , comment.changes[0].value.comment_id)
            
            
            
        sendComment("สวัสดี :  " + comment.changes[0].value.sender_name+ '\r\n'         // Inbox
            + "นี่เป็นการทำลอง ตอบกลับทางแชท"
            , comment.changes[0].value.comment_id)
            
            
            
            
            
            
       
           postComment("ขอบคุณที่มาร่วมสนุกจร้า" + '\r\n'     //  Comment
            +"รอลุ้นคำตอบ และประกาศผลผู้โชคดีได้ในวันนี้ 30 พ.ค. 60 (เวลา 15.00น.)"
            , comment.changes[0].value.comment_id)
            


//attachment_url: ("http://pasusat.com/wp-content/uploads/2015/06/khuntong-ms.jpg",comment.changes[0].value.comment_id)
            
//    postComment(random.mood(),comment.changes[0].value.comment_id); 




        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if( comment.changes[0].value.post_id === "1294322563984656_1316849788398600" && comment.changes[0].value.message === post1){

            sendComment("สวัสดี :  " + comment.changes[0].value.sender_name+ '\r\n'         // Inbox
            + "นี่เป็นการทำลอง ตอบกลับทางแชท"
            , comment.changes[0].value.comment_id)
            
            
            postComment("Thanks for the comment" + '\r\n'   //  Comment
            +"ยินดีจร้า ลองชงกันดูนะคะ"
            , comment.changes[0].value.comment_id)
        }
       
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


else if(comment.changes[0].value.message === 'test'){
             
             console.log(comment.changes[0].value.message)
             console.log(comment.changes[0].value.post_id)

            sendComment("สวัสดี :  " + comment.changes[0].value.sender_name+ '\r\n'          // Inbox
            + "นี่เป็นการทำลอง ตอบกลับทางแชท"
            , comment.changes[0].value.comment_id)
            
            
            postComment("Thanks for the comment" + '\r\n'     //  Comment
            +"ทดลองตอบกลับคอมเม้น"
            , comment.changes[0].value.comment_id)
            

        }





        
        
else sendComment("ERROr ", comment.changes[0].value.comment_id)

   */     
///////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////////// 



}     
         
         
         
     }
     if(comment.messaging != null){
//         console.log(comment.messaging[0])
     }
    res.end('received!');
})

/*function sendTextMessage(text, sender) {
    let messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.9/me/messages',
        qs: {access_token:token},
        method: 'POST',
        
        json: {
            recipient: {id:sender},
            message: messageData,
            
        }
    }, function(error, response, body) {
        if (error) {
            
//            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
//            console.log('Error: ', response.body.error)
        }
    })
 }*/

function sendComment(text, comment_id) {
    request({
        url: 'https://graph.facebook.com/v2.9/' + String(comment_id) + '/private_replies',
        qs: {access_token:token},
        method: 'POST',
        json: {
            message: text,
        }
        
    }
    , function(error, response, body) {
        if (error) {
//            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
//            console.log('Error: ', response.body.error)
        }
    })
 }
 
 
 function postComment(text, url, comment_id) {
     //let messageData = { text:text, tags:sender }
    request({
        url: 'https://graph.facebook.com/v2.9/' + String(comment_id) + '/comments',
        qs: {access_token:token},
        method: 'POST',
        json: {
            attachment_url: url,
            attachment_id: "",
            message: text,
        }
    }, function(error, response, body) {
        if (error) {
//            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
//            console.log('Error: ', response.body.error)
        }
    })
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
function MyRandom(engine) {  // Random การส่งข้อความ /////////////
  return Random.call(this, engine);
}
MyRandom.prototype = Object.create(Random.prototype);
MyRandom.prototype.constructor = MyRandom;
MyRandom.prototype.mood = function () {
  switch (this.integer(0, 4)) {
    case 0: return botmsg ;
    case 1: return botmsg2;
    case 2: return botmsg3;
    case 3: return botmsg4;
    case 4: return botmsg5;
  }
}


var random = new MyRandom();
random.mood(); //=> "Happy", "Content", or "Sad"

