console.log('future routes');
// require app controllers
var friendsController = require('./../controllers/friends.js');
var sitesController = require('./../controllers/sites.js');

// initialize each controller
var friends = new friendsController();
var sites = new sitesController();

// export routes as a function that takes the application (e.g., app) as an argument
module.exports = function(app){
    app.get('/sites', function(req, res){
        sites.index(req, res);
    })
    app.get('/friends', function(req, res) {
        friends.index(req, res);
        // res.send("friends route works");
    });
    // app.get('/friends/:id', function(req, res) {
    //     friends.show(req, res);
    // });
    // app.post('/friends', function(req, res) {
    //     friends.create(req, res);
    // });
    // app.put('/friends/:id', function(req, res) {
    //     friends.update(req, res);
    // });
    // app.delete('/friends/:id', function(req, res) {
    //     friends.delete(req, res);
    // });
}
// 5 of the 7 RESTful routes, excludes new and edit
