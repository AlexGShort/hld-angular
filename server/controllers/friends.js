console.log('friends controller');

// require mongoose
var mongoose = require('mongoose');

// create a model instance of any referenced models
var Friend = mongoose.model('Friend');

// export controller functions in an object
module.exports = function friendsController(){
    this.index = function(req,res){
        //your code here
        console.log("friendsController.index ran");
        Friend.find({}, function(err, data){
            // console.log("friend data:", data);
            res.json({data:data});
        });
    }
    this.create = function(req,res){
        //your code here
        console.log('friendsController create req.body: ', req.body);
        var newFriend = new Friend(req.body);
        console.log('friendsController newFriend: ', newFriend);
        newFriend.save();
        res.json({friend:newFriend});
    }
    this.update = function(req,res){
        console.log("friendsController update req.body: ", req.body);
        Friend.findByIdAndUpdate({_id:req.params.id}, {$set: req.body}, function(err, friend){
            if(err){
                console.log("friendsController update error: ", err);
            } else {
                console.log("friendsController update ran");
                console.log("friendsController friend after update: ", friend);
            }
        })
        res.json({placeholder:'updated'});
    }
    this.delete = function(req,res){
        Friend.findByIdAndRemove(req.params.id, function(err, friend){
            if(!err){
                console.log(friend.lastname + "removed");
            } else {
                console.log("Error on delete: ", err);
            }
        })
        res.json({placeholder:'delete'});
    }
    this.show = function(req,res){
        //your code here
        console.log("friendsController show ran");
        Friend.findOne({_id:req.params.id},function(err, data){
            console.log("friendsController show find data: ", data);
            res.json({data:data});
        })
    }
}
