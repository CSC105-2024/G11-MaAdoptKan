/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // หรือเปลี่ยนตาม path ที่ใช้จริง
      "./node_modules/primereact/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
  }
  