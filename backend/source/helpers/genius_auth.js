var path = require('path');
var genius_api = require('simple-oauth2');
var axios = require('axios');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });
}
var testURL = "https://api.genius.com/annotations/10225840";
var options = {
    'headers': {
        'Authorization': "Bearer " + process.env.GENIUS_ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};
axios.get(testURL, options)
    .then(function (response) {
    console.log(response.data);
})["catch"](function (error) {
    console.log(error);
});
