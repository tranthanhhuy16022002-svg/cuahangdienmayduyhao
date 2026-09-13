 "use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, products } from "@/lib/data";

export default function ProductCatalog(){
 const [q,setQ]=useState(""); const [category,setCategory]=useState("");
 const [brand,setBrand]=useState(""); const [sort,setSort]=useState("default");
 const brands=[...new Set(products.map(p=>p.brand))];
 const list=useMemo(()=>{let a=products.filter(p=>(!q||`${p.name} ${p.brand}`.toLowerCase().includes(q.toLowerCase()))&&(!category||p.category===category||p.category.includes(category))&&(!brand||p.brand===brand)); if(sort==="asc")a.sort((x,y)=>x.price-y.price); if(sort==="desc")a.sort((x,y)=>y.price-x.price); return a},[q,category,brand,sort]);
 return <main className="container section"><div className="breadcrumbs">Trang chủ / Sản phẩm</div><div className="catalog-head"><h1>Tất cả sản phẩm</h1><span>{list.length} sản phẩm</span></div><div className="catalog-layout"><aside className="filters"><b>Danh mục</b><button onClick={()=>setCategory("")}>Tất cả</button>{categories.map(c=><button key={c.name} onClick={()=>setCategory(c.name)}>{c.name}</button>)}<hr/><b>Thương hiệu</b><button onClick={()=>setBrand("")}>Tất cả hãng</button>{brands.map(b=><button key={b} onClick={()=>setBrand(b)}>{b}</button>)}</aside><section><div className="catalog-tools"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm sản phẩm..."/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="default">Sắp xếp</option><option value="asc">Giá thấp → cao</option><option value="desc">Giá cao → thấp</option></select></div><div className="product-grid">{list.map(p=><ProductCard key={p.id} p={p}/>)}</div>{!list.length&&<div className="empty">Không tìm thấy sản phẩm phù hợp.</div>}</section></div></main>
}