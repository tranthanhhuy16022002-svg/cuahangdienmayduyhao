 "use client";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, Phone, MessageCircle } from "lucide-react";
import { useStore } from "./StoreProvider";
import { useState } from "react";

export default function Header(){
 const {cart}=useStore(); const [q,setQ]=useState("");
 return <header>
  <div className="topbar"><div className="container topbar-inner"><span>Miễn phí giao hàng theo chính sách</span><span>Chính hãng • Giá tốt • Bảo hành</span></div></div>
  <div className="header-main container">
   <Link href="/" className="logo"><span className="logo-mark">DH</span><span>DUY HẢO<small>Điện máy - Nội thất</small></span></Link>
   <form className="search" onSubmit={e=>{e.preventDefault();location.href=`/san-pham/?q=${encodeURIComponent(q)}`}}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm kiếm sản phẩm, thương hiệu..." /><button><Search size={21}/></button></form>
   <div className="header-actions"><a href="tel:0987123456"><Phone/> <span>0987 123 456</span></a><a href="#"><MessageCircle/> <span>Zalo</span></a><Link href="/admin/"><User/><span>Quản trị</span></Link><Link href="/gio-hang/" className="cart-link"><ShoppingCart/><span>Giỏ hàng</span><b>{cart.reduce((s,i)=>s+i.qty,0)}</b></Link></div>
  </div>
  <nav className="nav"><div className="container nav-inner"><button className="menu-btn"><Menu/> Danh mục sản phẩm</button><Link href="/">Trang chủ</Link><Link href="/san-pham/">Khuyến mãi</Link><Link href="/san-pham/">Sản phẩm mới</Link><Link href="/san-pham/">Điện máy</Link><Link href="/san-pham/">Nội thất</Link><Link href="/san-pham/">Liên hệ</Link></div></nav>
 </header>
}