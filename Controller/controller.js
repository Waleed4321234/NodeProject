const fetch=require("node-fetch")
const user_service=require('../Services/users-services')
function users_list (req, res){
    res.send("NOT IMPLEMENTED: users list");
  };


/*const a = async function getPosts(){
    console.log("BCC ------------------")
    const myPosts=await fetch('https://jsonplaceholder.typicode.com/comments')
    const response=await myPosts.json();
    return response
   // res.send(response)
    //console.log(response)
    
}*/
async function getfilter(req,res){
    const updatedposts=await user_service.GetFilterData ()
    if(!updatedposts){
        res.json({success:false,message:'no posts'})
    }
    //console.log('In getfilter',updatedposts)
    else{
        res.json({success:true,message:'posts found',updatedposts})
    }


}
module.exports={
    
    getfilter,
    
}