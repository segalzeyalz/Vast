const apis = require("./config/api-config");
const PORT = 9890;

apis.set('views', __dirname + '/views'); // general config
apis.set('view engine', 'jade');

apis.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});
