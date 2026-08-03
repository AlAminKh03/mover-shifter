export function VideoSchema() {
  const videos = [
    {
      url: 'https://dohainteriors.com/videos/testimonial-1.mp4',
      thumbnail: 'https://dohainteriors.com/social.jpg',
      title: 'Customer Testimonial - Doha Interiors',
      description: 'Customer testimonial about our interior design and furniture services in Qatar',
      uploadDate: new Date().toISOString().split('T')[0],
      duration: 'PT0M30S',
    },
    {
      url: 'https://dohainteriors.com/videos/testimonial-2.mp4',
      thumbnail: 'https://dohainteriors.com/social.jpg',
      title: 'Customer Testimonial - Doha Interiors',
      description: 'Customer testimonial about our interior design and furniture services in Qatar',
      uploadDate: new Date().toISOString().split('T')[0],
      duration: 'PT0M30S',
    },
    {
      url: 'https://dohainteriors.com/videos/testimonial-3.mp4',
      thumbnail: 'https://dohainteriors.com/social.jpg',
      title: 'Customer Testimonial - Doha Interiors',
      description: 'Customer testimonial about our interior design and furniture services in Qatar',
      uploadDate: new Date().toISOString().split('T')[0],
      duration: 'PT0M30S',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: videos.map((video, index) => ({
      '@type': 'VideoObject',
      position: index + 1,
      name: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnail,
      uploadDate: video.uploadDate,
      duration: video.duration,
      contentUrl: video.url,
      embedUrl: video.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
