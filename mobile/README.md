# **Mobile**

Directory with all mobile configurations developed for the project.

# **Required Settings**

For the project to work, it is necessary to guarantee all the configurations described in this section.

## Libs to be Installed
Access the root directory (mobile) through the terminal and execute:
```
npx create-expo-app mobile
npm i nativewind
npm i tailwindcss -D
npx tailwindcss init
npm i @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font
npx expo install react-native-svg
npm i -D react-native-svg-transformer
npx expo install expo-auth-session expo-crypto
npm i axios
npx expo install expo-secure-store
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
npx expo install expo-image-picker
npm i dayjs
```

# **How to Run**
Access the root directory (mobile) through the terminal and execute:

> **It is necessary to comment out the web global variables defined in the .env file inside server. Thus, only the mobile application's client_id and client_secret will be loaded.**
```
npm run start
```
> **To access the application, download the expo go app on your cell phone and scan the QR code or download the ios or android emulator on your machine.**


