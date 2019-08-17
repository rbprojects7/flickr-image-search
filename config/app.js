module.exports = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.PORT || 8080,
  flickrAPIKey: 'c4e4af637382e236ca9ac6171b52f71b',
  flickrURL: 'https://api.flickr.com/services/rest/',
  header: {
    htmlAttributes: { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
    title: 'Flickr API',
    titleTemplate: 'Flickr API - %s',
    meta: [
      {
        name: 'description',
        content:
          'Flickr is almost certainly the best online photo management and sharing application in the world. Show off your favorite photos and videos to the world, securely and privately show content to your friends and family, or blog the photos and videos you take with a cameraphone.',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Flickr' },
      {
        name: 'twitter:description',
        content:
          'Flickr is almost certainly the best online photo management and sharing application in the world. Show off your favorite photos and videos to the world, securely and privately show content to your friends and family, or blog the photos and videos you take with a cameraphone.',
      },
      { name: 'twitter:image:src', content: 'https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg' },
      { name: 'og:title', content: 'Flickr' },
      {
        name: 'og:description',
        content:
          'Flickr is almost certainly the best online photo management and sharing application in the world. Show off your favorite photos and videos to the world, securely and privately show content to your friends and family, or blog the photos and videos you take with a cameraphone.',
      },
      { name: 'og:image', content: 'https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg' },
      { name: 'og:image:type', content: 'image/jpeg' },
      { name: 'og:url', content: 'https://flickr-api-search.herokuapp.com/' },
      { name: 'og:site_name', content: 'Flickr' },
      { name: 'og:type', content: 'website' },
    ],
  },
};
