# language-helper-frontend

Frontend for language helper app written in `React` with `TypeScript`.

## Available Scripts (npm)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode -> See `localhost:3000`.
### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### **Dockerization** Development

Build image for running development server (run in project dir):
```sh
docker build -t langhelp/frontend_dev . -f docker/Dockerfile.dev
```

Start `react-dev-server` as a docker container:
```sh
docker run --rm -itd -v $(pwd):/frontend -p 3000:3000 --name frontend_dev langhelp/frontend_dev
```

Stop container:
```sh
docker stop frontend_dev
```

### **Dockerization** Production

Build prod image:
```sh
docker build -t langhelp/frontend_prod . -f docker/Dockerfile.prod
```

Run prod image:
```sh
docker run --rm -it -p 8000:80 --name frontend_prod langhelp/frontend_prod
```

Stop container:
```sh
docker stop frontend_prod
```