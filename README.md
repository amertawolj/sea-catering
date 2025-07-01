# 🥗 SEA Catering Web App
SEA Catering adalah platform pemesanan makanan sehat berbasis web yang menyediakan berbagai meal plan seperti Diet, Protein, dan Royal. Pengguna dapat melakukan langganan mingguan dan menyesuaikan jenis makanan serta hari pengantaran. Aplikasi ini dibuat menggunakan React.js, TailwindCSS, dan Supabase untuk autentikasi serta database.

# Cara Menjalankan Aplikasi
### 1. Clone Repository
git clone https://github.com/USERNAME/sea-catering.git
cd sea-catering

### 2. Install Dependencies
npm install

### 3. Buat File .env di Root Project
Isi dengan konfigurasi Supabase kamu:
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
URL dan anon key ada di file src/helper/supabaseClient.js

### 4. Jalankan Project
npm start

## Buka di browser:
Lokal: http://localhost:3000, Deployment: https://sea-catering-amer.vercel.app

## Teknologi yang Digunakan
React.js, TailwindCSS, Supabase

## Admin & Fitur Backend
Aplikasi ini menggunakan Supabase sebagai solusi backend yang menangani:
- Autentikasi pengguna (sign in / sign up)
- Penyimpanan data langganan (subscription)
- Manajemen data produk makanan
Jika ingin membuat akun admin, langsung tambahkan email/password melalui dashboard Supabase atau gunakan fitur sign up biasa lalu beri role khusus di tabel users.

## P.S
Beberapa fitur masih dalam tahap pengembangan dan belum semuanya berfungsi seperti yang direncanakan. This is my really first time trying web dev (maaf bapuk). Shout out to indian youtube and AI.
Sebelum bikin website, saya prototyping dulu di figma, ini link figmanya
https://www.figma.com/design/kiB3db8twvhqRcrFIzDbU6/Jgn-Dibuka?node-id=302-2&t=AJSDQ3kMa9z13zuo-1

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
