# Cửa Hàng Điện Máy - Trang Trí Nội Thất Duy Hảo

Đây là bộ source khởi đầu chạy được cho `cuahangdienmayduyhao.com`.

## 1. Yêu cầu
- Windows 10/11
- Node.js 20.9 trở lên (Next.js hiện tại yêu cầu tối thiểu Node 20.9)
- VS Code

## 2. Chạy trên máy
Mở PowerShell tại thư mục dự án:

```powershell
npm install
npm run dev
```

Mở:
http://localhost:3000

## 3. Build kiểm tra production

```powershell
npm run build
```

Website tĩnh sẽ được xuất ra thư mục `out`.

## 4. Deploy miễn phí Cloudflare Pages

- Tạo repository GitHub và push source.
- Cloudflare Dashboard → Workers & Pages → Create application → Pages → Import existing Git repository.
- Framework preset: Next.js (Static HTML Export)
- Build command: `npx next build`
- Build directory: `out`

## 5. Domain
Sau khi có domain, thêm custom domain trong Cloudflare Pages.

## 6. Dữ liệu sản phẩm
File:
`lib/data.ts`

Hiện có 20 sản phẩm mẫu. Giá demo được tính:
`giá Duy Hảo = giá tham chiếu × 90%`

Không nên tự động sao chép toàn bộ hình ảnh, mô tả, dữ liệu độc quyền từ website khác. Khi bán thật, thay dữ liệu bằng catalogue/hình ảnh được phép sử dụng của Duy Hảo.

## 7. Giai đoạn tiếp theo để thành website bán hàng thật
Bản này đã có giao diện, danh mục, tìm kiếm, lọc, chi tiết sản phẩm và giỏ hàng localStorage. Để có hệ thống vận hành thật cần thêm:
- Supabase database
- Admin đăng nhập
- CRUD sản phẩm
- tồn kho
- đơn hàng
- khách hàng
- email/Zalo thông báo
- thanh toán
- upload ảnh
- phân quyền
- backup
- SEO/Google Search Console
