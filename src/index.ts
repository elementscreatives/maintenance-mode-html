export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body>
		  <h1>Under Maintenance</h1>
		  <p>The site is under maintenance, please check back soon.</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
