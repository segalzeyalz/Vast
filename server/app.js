const apis = require("./config/api-config");
const PORT = 9890;

apis.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});
