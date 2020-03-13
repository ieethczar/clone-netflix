const cloudinary = require('cloudinary');

const storage = ({ stream, isMedia }) => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD,
		api_key: process.env.CLOUDINARY_KEY,
		api_secret: process.env.CLOUDINARY_SECRET,
	});

	return new Promise((resolve, reject) => {
		if (isMedia) {
			cloudinary.v2.uploader.upload(
				stream.path,
				{
					resource_type: 'video',
					folder: 'media'
				},
				(err, result) => {
					if(err) reject(err);
					resolve(result);
				}
			);
		} else {
			const buffer = cloudinary.v2.uploader.upload_stream({
				folder: 'images',
			},(err, result) => {
				if(err) reject(err);
				resolve(result);
			});
			stream.pipe(buffer);
		}
	});
};

module.exports = storage;
