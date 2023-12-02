First you need to have docker installed in your computer

then create and build the elk docker container; 
```bash
docker compose up --build
```

When the container has successfully been created and are running;
Install the following datasets to elasticsearch
```bash
npx create-elasticsearch-dataset --dataset=books
npx create-elasticsearch-dataset --dataset=movies
```

Install the dependencies in the /app folder
```bash
  cd app/
  npm install or yarn install
```
finally, run the development server:
```bash
npm run dev or yarn dev
```
or build the project: 
```bash
  yarn build or npm build
  yarn start or yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
