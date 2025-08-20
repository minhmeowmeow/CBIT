# CBITV4 - Dự án DCC

## Cài đặt và Sử dụng Tailwind CSS

### Cài đặt Dependencies
```bash
npm install
```

### Build Tailwind CSS

#### Development (với watch mode)
```bash
npm run build
```
Lệnh này sẽ build Tailwind CSS và theo dõi thay đổi, tự động rebuild khi có thay đổi.

#### Production (minified)
```bash
npm run build:prod
```
Lệnh này sẽ build Tailwind CSS đã được minify cho production.

### Cấu trúc Files

- `styles/input.css` - File CSS input với Tailwind directives
- `styles/output.css` - File CSS output đã được build (tự động tạo)
- `tailwind.config.js` - Cấu hình Tailwind CSS
- `postcss.config.js` - Cấu hình PostCSS

### Sử dụng trong HTML

Tất cả các file HTML trong thư mục `CBIT/html/` đã được cập nhật để sử dụng Tailwind CSS:

```html
<link rel="stylesheet" href="../styles/output.css">
```

### Lưu ý

- Mỗi khi thêm class Tailwind mới vào HTML, cần chạy lại lệnh build để cập nhật file output.css
- Trong development, sử dụng `npm run build` để tự động rebuild khi có thay đổi
- Trong production, sử dụng `npm run build:prod` để có file CSS đã được minify
- File `output.css` đã được thêm vào `.gitignore` vì nó được tạo tự động từ build process

### Troubleshooting

Nếu gặp lỗi khi build:
1. Kiểm tra Node.js và npm đã được cài đặt
2. Chạy `npm install` để cài đặt lại dependencies
3. Xóa thư mục `node_modules` và chạy `npm install` nếu cần
