const handler = (req: Request): Response => {
  const url = new URL(req.url);
  
  if (url.pathname === "/hello") {
    return new Response("hi", {
      status: 200,
      headers: {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin": "https://paolino.io/",
      },
    });
  }

  return new Response("Not Found", {
    status: 404,
    headers: {
      "Access-Control-Allow-Origin": "https://paolino.io/",
    },
  });
}

Deno.serve({ port: 8000 }, handler); 