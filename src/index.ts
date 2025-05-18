export default {
	async fetch(request): Promise<Response> {
		// Replace with your actual IP address(es). You can add multiple IP addresses
		// separated by commas or in an array.
		const ALLOWED_IPS = ['87.200.21.33'];

		const clientIP = request.headers.get('CF-Connecting-IP');

		// Check if the client's IP address is in the allowed list
		if (ALLOWED_IPS.includes(clientIP)) {
			// If the IP is allowed, let the request proceed to the origin
			return fetch(request);
		}

		const html = `<!DOCTYPE html>
		<body>
		  <h1>Under Maintenance</h1>
		  <p>The site is under maintenance, please check back soon.</p>
		</body>`;

		return new Response(html, {
			status: 503,
			headers: {
				"content-type": "text/html;charset=UTF-8",
				"Retry-After": "300", // Suggest a retry after 5 minutes
			},
		});
	},
} satisfies ExportedHandler;
