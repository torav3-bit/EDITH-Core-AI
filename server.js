const express = require("express");

const app = express();

app.use(express.json());


app.post("/edith", (req,res)=>{


const message = req.body.message;


let reply =
"EDITH AI接続テスト成功。あなたの質問は「"
+ message
+ "」ですね。";


res.json({

reply:reply

});


});



app.listen(3000,()=>{

console.log(
"EDITH CORE ONLINE"
);

});
