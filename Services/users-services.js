const fetch=require("node-fetch")
const users_controller= require('../Controller/controller');

async function  GetFilterData(req,res){
    //console.log(await user_controller.getPosts())
    const myPosts=await fetch('https://jsonplaceholder.typicode.com/comments')
    const posts=await myPosts.json();


 
    return posts[2]
   //console.log('in get filter : ', posts[2])
   /*posts.forEach(element => {
    if(element.postId==2){
        //console.log('Posts from Api',posts[element.postId])
        return posts[element.postId]
    }
    
   });*/
   

    
}
module.exports={
    GetFilterData
}