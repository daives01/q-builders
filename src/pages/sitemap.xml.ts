import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async (context) => {
	if (!context.site) {
		return new Response('<!-- Set site URL in astro.config.mjs to generate sitemap -->', {
			headers: { 'Content-Type': 'application/xml' },
		});
	}

	const pages = [
		{
			url: '/',
			lastmod: new Date().toISOString(),
			changefreq: 'monthly',
			priority: 1.0
		},
		{
			url: '/gallery',
			lastmod: new Date().toISOString(),
			changefreq: 'monthly',
			priority: 0.8
		}
	];
	
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${context.site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
	
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};
