// Define allowed origins - you can add more domains here
const ALLOWED_ORIGINS = [
  "https://paolino.io",
  "https://paolino.io/",
  // Add more domains as needed, e.g.:
  // "https://another-domain.com",
  // "http://localhost:3000"
];

const handler = (req: Request): Response => {
  const url = new URL(req.url);
  const origin = req.headers.get("origin");
  
  // Determine which origin to send back
  const corsHeader = origin && ALLOWED_ORIGINS.includes(origin)
    ? origin  // Send back the requesting origin if it's allowed
    : ALLOWED_ORIGINS[0];  // Fall back to first allowed origin
  
  if (url.pathname === "/hello") {
    return new Response("hi", {
      status: 200,
      headers: {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin": corsHeader,
      },
    });
  }

  return new Response("Not Found", {
    status: 404,
    headers: {
      "Access-Control-Allow-Origin": corsHeader,
    },
  });
}

Deno.serve({ port: 8000 }, handler); 