const Robots = () => {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://postcraft/sitemap.xml',
    host: 'https://postcraft',
  };
};

export default Robots;
