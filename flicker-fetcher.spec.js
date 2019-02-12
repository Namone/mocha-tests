// flicker-fetcher.spec.js
'use strict';
var expect = require('chai').expect;
const FlickerFetcher = require('./flicker-fetcher.js');

describe('FlickrFetcher', () => {
	it('should exist', () => {
		expect(FlickerFetcher).to.not.be.undefined;
	});

	describe('#photoObjToUrl', () => {
		it('should take a photo object from Flickr and return a string', () => {
			const input = {
	            id:       '24770505034',
	            owner:    '97248275@N03',
	            secret:   '31a9986429',
	            server:   '1577',
	            farm:     2,
	            title:    '20160229090898',
	            ispublic: 1,
	            isfriend: 0,
	            isfamily: 0
	        };
	        const expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
	        const actual = FlickerFetcher.photoObjToUrl(input);
	        expect(actual).to.eql(expected);

	        const secondaryInput = {
	            id:       '24770504484',
	            owner:    '97248275@N03',
	            secret:   '69dd90d5dd',
	            server:   '1451',
	            farm:     2,
	            title:    '20160229090903',
	            ispublic: 1,
	            isfriend: 0,
	            isfamily: 0
	        };
	        const secondaryExpected = 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg';
	        const secondaryActual = FlickerFetcher.photoObjToUrl(secondaryInput);
	        expect(secondaryActual).to.eql(secondaryExpected);
		});
	});

	describe('#transformPhotoObj', () => {
		it('should take a photo object from Flickr and transform it into an object containing a URL and title', () => {
			const input = {
	                id:       '25373736106',
	                owner:    '99117316@N03',
	                secret:   '146731fcb7',
	                server:   '1669',
	                farm:     2,
	                title:    'Dog goes to desperate measure to avoid walking on a leash',
	                ispublic: 1,
	                isfriend: 0,
	                isfamily: 0
	            },
	            expected = {
	                title: 'Dog goes to desperate measure to avoid walking on a leash',
	                url:   'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
	            },
	            actual = FlickerFetcher.transformPhotoObj(input);

        	expect(actual).to.eql(expected);

        	const inputSecondary = {
	                id:       '25373736106',
	                owner:    '99117316@N03',
	                secret:   '146731fcb7',
	                server:   '1577',
	                farm:     2,
	                title:    'Dog loves its leash!',
	                ispublic: 1,
	                isfriend: 0,
	                isfamily: 0
	            },
	            expectedSecondary = {
	                title: 'Dog loves its leash!',
	                url:   'https://farm2.staticflickr.com/1577/25373736106_146731fcb7_b.jpg'
	            },
	            actualSecondary = FlickerFetcher.transformPhotoObj(inputSecondary);

	        expect(actualSecondary).to.eql(expectedSecondary);
		});
	});
});

