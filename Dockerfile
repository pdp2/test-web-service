FROM denoland/deno:1.41.3

WORKDIR /app

COPY . .

CMD ["deno", "run", "--allow-net", "main.ts"] 