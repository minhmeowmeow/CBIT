# Cấu trúc CSS - CBIT Project

## 📁 Cấu trúc thư mục CSS

```
CBIT/styles/
├── base.css (1.7KB) - CSS reset và typography cơ bản
├── components.css (8.2KB) - CSS chung cho header, footer, navbar
├── utilities.css (7.9KB) - Utility classes mở rộng
├── input.css (253B) - File đầu vào (Tailwind + imports)
├── output.css (30KB) - File đầu ra chung (build từ input.css)
└── pages/
    ├── about.css (9.4KB) - CSS riêng cho trang About
    ├── index.css (4.8KB) - CSS riêng cho trang Index
    ├── news.css (172B) - CSS riêng cho trang News
    ├── about.min.css (27KB) - Build từ about.css
    ├── index.min.css (25KB) - Build từ index.css
    └── news.min.css (27KB) - Build từ news.css
```

## 🔄 Quy trình Build CSS

### **1. CSS Chung (Shared Components)**
```bash
input.css → output.css
```
- **input.css**: Chứa Tailwind directives + import các file
- **output.css**: File build cuối cùng cho CSS chung

### **2. CSS Riêng (Page-specific)**
```bash
pages/news.css → pages/news.min.css
```
- **news.css**: CSS riêng + import components.css
- **news.min.css**: File build cuối cùng cho trang news

## 🎯 Chiến lược sử dụng

### **Trang đơn giản (chỉ dùng CSS chung):**
```html
<link rel="stylesheet" href="../styles/output.css">
```

### **Trang phức tạp (có CSS riêng):**
```html
<link rel="stylesheet" href="../styles/pages/news.min.css">
```

## 🛠️ Cách sử dụng

### **Build CSS chung:**
```bash
npm run build        # Watch mode cho development
npm run build:prod   # Production build (minified)
```

### **Build CSS riêng cho từng trang:**
```bash
npm run build:pages  # Build tất cả trang
npm run build:index  # Build chỉ trang index
npm run build:about  # Build chỉ trang about
npm run build:news   # Build chỉ trang news
```

## 📝 Cách thêm CSS cho trang mới

### **Sử dụng script tự động:**
```bash
.\create-page-css.ps1 -PageName "contact"
```

### **Thủ công:**
1. Tạo file `CBIT/styles/pages/contact.css`
2. Thêm nội dung:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   @import '../components.css';
   
   /* Custom styles cho trang contact */
   ```
3. Thêm script vào `package.json`
4. Chạy `npm run build:contact`

## 🔗 Liên kết trong HTML

### **Cho trang sử dụng CSS chung:**
```html
<link rel="stylesheet" href="../styles/output.css">
```

### **Cho trang có CSS riêng:**
```html
<link rel="stylesheet" href="../styles/pages/about.min.css">
```

## 📋 Lưu ý quan trọng

- **output.css**: Chỉ chứa CSS chung (header, footer, navbar, utilities)
- ***.min.css**: Chứa CSS riêng + CSS chung (vì import components.css)
- **Không cần link cả 2 file** - chỉ cần link file .min.css
- **Build process** tự động minify và optimize
- **Watch mode** cho development nhanh chóng
