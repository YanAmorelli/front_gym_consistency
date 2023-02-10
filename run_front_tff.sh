docker rmi tff_front

docker build . -t tff_front

docker run -dt \
	-p 3000:80 \
	-l "traefik.enable=true" \
	-l "traefik.http.routers.front_tff.rule=Host(\`demo.thefitnessfrequency.localhost\`)" \
	-l "traefik.http.routers.front_tff.entrypoints=web" \
	-l "traefik.http.routers.front_tff.middlewares=redirect" \
	-l "traefik.http.routers.front_tff-secure.rule=Host(\`demo.thefitnessfrequency.localhost\`)" \
	-l "traefik.http.routers.front_tff-secure.entrypoints=websecure" \
	-l "traefik.http.routers.front_tff-secure.tls.certresolver=staging" \
	-l "traefik.http.services.front_tff.loadbalancer.server.port=3000" \
	-l "traefik.http.middlewares.redirect.redirectscheme.scheme=https" \
	-l "traefik.http.middlewares.redirect.redirectscheme.permanent=true" \
	--name tff_front \
	tff_front
