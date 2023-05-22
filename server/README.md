# **Server**

Directory with all API's configurations developed for the project.

# **Required Settings**

For the project to work, it is necessary to guarantee all the configurations described in this section.

## Global Variables
Create a local file named .env in the root directory (server) defining global variables.

The following variables must be defined in the file:
> **First you will need a GitHub account and then two oAuth Apps created for web and mobile applications.**

```
# Database
DATABASE_URL="file:./dev.db"

# GitHub (WEB)
GITHUB_CLIENT_ID="your_client_id_web"
GITHUB_CLIENT_SECRET="your_client_secret_web"

# GitHub (MOBILE)
GITHUB_CLIENT_ID="your_client_id_mobile"
GITHUB_CLIENT_SECRET="your_client_secret_mobile"
```

## Libs to be Installed
Access the root directory (server) through the terminal and execute:
```
npm init -y
npm i typescript -D
npm i @types/node -D
npx tsc --init
npm i tsx -D
npm i fastify
npm install eslint -D
npm i @rocketseat/eslint-config -D
npm i prisma -D
npm i @prisma/client
npm i zod
npm i @fastify/cors
npm i dotenv -D
npm i axios
npm i @fastify/jwt
npm i @fastify/multipart
npm i @fastify/static
```

## Database Creation
Access the root directory (server) through the terminal and execute:
```
npx prisma init --datasource-provider SQLite
npx prisma migrate dev
```
# **How to Run**
Access the root directory (server) through the terminal and execute:
```
npm run dev
```
> **The application will be running in http://localhost:3333.**


