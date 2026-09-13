import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data";
export default function ProductSection({title,items}:{title:string,items:Product[]}){return <section className="container section"><div className="section-title"><h2>{title}</h2><a href="/san-pham/">Xem tất cả →</a></div><div className="product-grid">{items.map(p=><ProductCard key={p.id} p={p}/>)}</div></section>}