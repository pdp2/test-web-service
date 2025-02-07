FROM denoland/deno:1.41.3

WORKDIR /app

COPY . .

RUN deno cache --lock=deno.lock main.ts

CMD ["deno", "run", "--allow-net", "main.ts"] 