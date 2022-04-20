const data = require('./data.json');
const path = require('path');
const fs = require('fs');

// 把内存数据写入文件
let writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err)=>{
        if(err){
            res.json({
                status: 500
            });
        }
        res.json({
            status: 200
        });
    });
}


// 获取数据
exports.getAllHeros = (req,res) => {
    res.json(data);
}

// 删除数据
exports.deleteHero = (req,res) => {
    let id = req.params.id;
    data.some((item,index)=>{
        if(id == item.id){
            // 删除数组的一项数据
            data.splice(index,1);
            return true;
        }
    });
    // 把内存中的数据写入文件
    writeDataToFile(res);
}

