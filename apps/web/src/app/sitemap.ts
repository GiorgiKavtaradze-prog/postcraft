const Sitemap = async () => {
  const routes = ['', '/components', '/examples'].map((route) => ({
    url: `https://postcraft${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
};

export default Sitemap;
