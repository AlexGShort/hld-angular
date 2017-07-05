console.log('sites controller');

// require mongoose
var mongoose = require('mongoose');

// create a model instance of any referenced models
// var Site = mongoose.model('Site');

// export controller functions in an object
module.exports = function sitesController(){
    this.index = function(req,res){
        console.log("sitesController.index ran");
        var data = {
            title: "Human Landscape Dance",
            byline:"Making partnerships with fellow dancemakers throughout the world.",
            about: `
              <p>Human Landscape Dance is a contemporary dance company based in Washington DC. Our work explores original movement in the context of human struggles. We show the transformation of relationships over time through the medium of touch.</p>
              <p>Each of our dances are framed by a physical container: a box (Closet Dances 2009), a wall (Coming Unstuck 2007), a ring on the ground (Leaving Home 2007), etc. The frame represents the central metaphor of the dance. Leaving Home (2007) is about birth, as revealed by the fabric egg that encircles the dancers. Coming Unstuck (2007) is about sharing a bed with a baby who won't sleep, as depicted by the dancers lying down against a wall. The frame delineates the landscape within which we move.</p>
              <p>Each dance also has its own, defined movement task to elaborate the conflict which the dancers must resolve. In "Leaving Home" (2007), three dancers grope blindly through the egg to find one another. In "Falling Behind" (2008), one dancer draws her story on the body of another dancer. In "Hooked" (part of "Closet Dances" 2009), the two dancers, stuck in a love/hate relationship, hook onto each other's limbs. The movement task sets the language through which the dancers speak.</p>
              <p>I make work about people, not about concepts, however. The hand caressing the face, the boot down the stairs, the unknotting of a tied body…the work represents human concerns. Each dance is personal. They show people getting along in the traps we create for ourselves.</p>
              <p>Human Landscape Dance uses touch to communicate. Touch is our medium. Bodies mold together in unexpected ways: a leg stretched across a shoulder, a thumb pressing under a chin, or two bodies so entwined that one covers the other completely. The human dance of love, hate, parting, and supporting are played out in different degrees of touch. Each partner writes herself into the fabric of the other.</p>
              <p>Malcolm Shute 2009</p>
            `,
        };
        res.json({data:data});
        // Site.find({}, function(err, data){
        //     res.json({data:data});
        // });
    };
};
//     this.create = function(req,res){
//         //your code here
//         console.log('friendsController create req.body: ', req.body);
//         var newFriend = new Friend(req.body);
//         console.log('friendsController newFriend: ', newFriend);
//         newFriend.save();
//         res.json({friend:newFriend});
//     }
//     this.update = function(req,res){
//         console.log("friendsController update req.body: ", req.body);
//         Friend.findByIdAndUpdate({_id:req.params.id}, {$set: req.body}, function(err, friend){
//             if(err){
//                 console.log("friendsController update error: ", err);
//             } else {
//                 console.log("friendsController update ran");
//                 console.log("friendsController friend after update: ", friend);
//             }
//         })
//         res.json({placeholder:'updated'});
//     }
//     this.delete = function(req,res){
//         Friend.findByIdAndRemove(req.params.id, function(err, friend){
//             if(!err){
//                 console.log(friend.lastname + "removed");
//             } else {
//                 console.log("Error on delete: ", err);
//             }
//         })
//         res.json({placeholder:'delete'});
//     }
//     this.show = function(req,res){
//         //your code here
//         console.log("friendsController show ran");
//         Friend.findOne({_id:req.params.id},function(err, data){
//             console.log("friendsController show find data: ", data);
//             res.json({data:data});
//         })
//     }
// }
