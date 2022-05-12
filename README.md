# Auto-Mart

## Run Locally

Clone the project

```bash
  git clone https://github.com/IdentitySeal/Auto-Mart.git
```
Directory

```bash
  cd Auto-Mart
```
Server Directory
```bash
  cd backend
```
Install node_modules
```bash
  yarn 
  npm install
```
```bash
  yarn start 
  npm start
```

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`PORT = 5000`
`APP_ROUTE = /api`
`DATABASE_URL = mongodb://localhost:27017/{database_name} `

## HOMEPAGE URL
- {url}/advert

## APi

- VIEW_CAR_ADVERT: '/car-advert/view/:carAdvertId'
- POST_CAR_ADVERT: '/car-advert/post'
- DELETE_CAR_ADVERT: '/car-advert/delete'
- ALL_CAR_ADVERTS: '/car-advert/all'
