import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import { categories, products } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="container section">
          <div className="section-title"><h2>Danh mục sản phẩm</h2><a href="/san-pham/">Xem tất cả →</a></div>
          <div className="category-grid">
            {categories.map((c) => <a className="category-card" href={`/san-pham/?category=${encodeURIComponent(c.name)}`} key={c.name}><span>{c.icon}</span><b>{c.name}</b><small>{c.count} sản phẩm</small></a>)}
          </div>
        </section>
        <ProductSection title="Sản phẩm bán chạy" items={products.slice(0, 8)} />
        <section className="container promo">
          <div><span>DUY HẢO</span><h2>Không gian sống tiện nghi hơn</h2><p>Điện máy & nội thất — giá tốt mỗi ngày.</p><a className="btn yellow" href="/san-pham/">Khám phá ngay</a></div>
          <div className="promo-art">🏠 📺 🧊 🛋️</div>
        </section>
        <ProductSection title="Sản phẩm khuyến mãi" items={products.slice(8, 16)} />
      </main>
      <footer className="footer"><div className="container footer-grid"><div><div className="logo footer-logo">D<span>H</span> DUY HẢO</div><p>Điện máy - Nội thất</p></div><div><b>Hỗ trợ khách hàng</b><p>Chính sách giao hàng</p><p>Chính sách bảo hành</p><p>Liên hệ / Zalo</p></div><div><b>Liên hệ</b><p>Hotline: 0987 123 456</p><p>Phục vụ toàn quốc</p></div></div><div className="copyright">© 2026 Cửa Hàng Điện Máy - Trang Trí Nội Thất Duy Hảo</div></footer>
    </>
  );
}