const Movie = require('../../models/Movie');
const storage = require('../../utils/storage');

module.exports = {
	createMovie: async (root, args) => {
		if(args.data.banner){
			const { createReadStream } = await args.data.banner;
			const stream = createReadStream();
			const image = await storage({ stream, isMedia: false });
			args.data = {
				...args.data,
				banner: image.url,
			};
		}
		if(args.data.media){
			const { createReadStream } = await args.data.media;
			const stream = createReadStream();
			const video = await storage({ stream, isMedia: true });
			args.data = {
				...args.data,
				media: video.url,
			};
		}
		return Movie.create(args.data);
	}
};
