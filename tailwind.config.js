/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./CBIT/html/**/*.html",
    "./CBIT/js/**/*.js",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Tạo nhiều file output cho từng trang
  output: {
    files: {
      './styles/pages/index.css': './styles/pages/index.css',
      './styles/pages/about.css': './styles/pages/about.css',
      './styles/pages/news.css': './styles/pages/news.css',
      './styles/pages/contact.css': './styles/pages/contact.css',
      './styles/pages/contact1.css': './styles/pages/contact1.css',
      './styles/pages/activities.css': './styles/pages/activities.css',
      './styles/pages/documents.css': './styles/pages/documents.css',
      './styles/pages/video.css': './styles/pages/video.css',
      './styles/pages/events.css': './styles/pages/events.css',
      './styles/pages/detail.css': './styles/pages/detail.css',
      './styles/pages/document-library.css': './styles/pages/document-library.css'
    }
  }
}
