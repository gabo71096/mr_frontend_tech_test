# Try it out

If you have Docker installed, you can clone the project and run `docker compose up` from the client folder and that would be it.

Also you can run the app without cloning the repo by pulling the image and running the container as follows `docker container run --rm -p 8080:80 gabo71096/mr_frontend_challenge:latest`

If you don't have Docker, you need to install [Node.js](https://nodejs.org/en), clone the project, stand on the client folder and run `npm i` to install all the dependencies, then you run `npm run dev` and the server should be up and running.

# Production build

If you want to try the production build run `npm run build` and wait for Vite to finish the build, then run `npm run preview` so the app starts running on production mode.
