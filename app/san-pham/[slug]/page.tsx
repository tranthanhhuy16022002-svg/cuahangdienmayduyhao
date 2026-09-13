import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/data";

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export default async function ProductPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return <><Header /><main className="container section"><h1>Không tìm thấy sản phẩm</h1><a className="btn blue" href="/san-pham/">Quay lại</a></main></>;
  return <><Header /><ProductDetail product={product} /></>;
}