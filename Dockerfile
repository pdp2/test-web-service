FROM denoland/deno:2.1.3

WORKDIR /app

COPY . .

CMD ["deno", "run", "--allow-net", "main.ts"] 