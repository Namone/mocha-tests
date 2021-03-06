// flicker-fetcher.js
const FlickerFetcher = {
	photoObjToUrl: function(photoObj) {
		return [ 'https://farm',
            photoObj.farm, '.staticflickr.com/', 
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
	},
	transformPhotoObj: function(photoObj) {
		return {
			title: photoObj.title,
			url: FlickerFetcher.photoObjToUrl(photoObj),
		};
	               
	},
};

module.exports = FlickerFetcher;