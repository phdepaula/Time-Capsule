# 💻 **Web**

Directory with all front-end web configurations developed for the project.

## 🛠️ **Required Settings**

For the project to work, it is necessary to guarantee all the configurations described in this section.

### 🌐 Global Variables
Create a local file named .env.local in the root directory (web) defining global variables.

The following variables must be defined in the file:

> **First you will need a GitHub account and then one oAuth Apps created for the web application.**

```
# GitHub
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_client_id_web
```

### 📖 Libs to be Installed
Access the root directory (web) through the terminal and execute:
```
npx create-next-app@latest web --use-npm
npm i @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
npm i lucide-react
npm i axios
npm i jwt-decode
npm install -D @tailwindcss/forms
npm i js-cookie
npm i --save-dev @types/js-cookie
npm i dayjs
```

## ▶️ **How to Run**
Access the root directory (web) through the terminal and execute:

> **It is necessary to comment out the mobile global variables defined in the .env file inside server. Thus, only the web application's client_id and client_secret will be loaded.**
```
npm run dev
```
> **The application will be running in http://localhost:3000.**


