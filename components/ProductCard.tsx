 "use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/data";
import { useStore } from "./StoreProvider";

export default function ProductCard({p}:{p:Product}){ const {add}=useStore(); return <article className="product-card"><Link href={`/san-pham/${p.slug}/`}><div className="product-image" style={{backgroundImage:`url(${p.image})`}}><span className="discount">-{p.discount}%</span></div><div className="product-body"><small>{p.brand}</small><h3>{p.name}</h3><div className="price">{p.price.toLocaleString("vi-VN")}đ</div><del>{p.referencePrice.toLocaleString("vi-VN")}đ</del><div className="save">Tiết kiệm {p.saving.toLocaleString("vi-VN")}đ</div></div></Link><button className="add-cart" onClick={()=>add(p)}><ShoppingCart size={16}/> Thêm giỏ</button></article> }