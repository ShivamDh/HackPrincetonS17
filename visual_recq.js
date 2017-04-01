var watson = require ('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
	api_key: '853a3ea7c77f8568884f31a0b3267f096e1c3275',
	version: 'v3',
	version_date: '2016-05-20'
});

var params = {
	images_file: fs.createReadStream('./onepic.jpg')
};

visual_recognition.classify(params, function(err, res) {
	if (err) 
		console.log(err);
	else	
		console.log(JSON.stringify(res,null, 2));
});