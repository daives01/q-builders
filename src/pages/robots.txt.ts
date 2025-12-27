import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async (context) => {
	let robotsTxt = `
User-agent: *
Allow: /
`.trim();

	if (context.site) {
		robotsTxt += `\n\nSitemap: ${context.site}sitemap.xml`;
	}
	
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
