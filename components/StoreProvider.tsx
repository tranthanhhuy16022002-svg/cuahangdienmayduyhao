 "use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/lib/data";

type CartItem = Product & { qty: number };
type Ctx = { cart: CartItem[]; add: (p: Product)=>void; remove:(slug:string)=>void; clear:()=>void };
const StoreContext = createContext<Ctx | null>(null);

export function StoreProvider({children}:{children:React.ReactNode}) {
  const [cart,setCart] = useState<CartItem[]>([]);
  useEffect(()=>{ try { const x=localStorage.getItem("duyhao-cart"); if(x) setCart(JSON.parse(x)); } catch {} },[]);
  useEffect(()=>{ localStorage.setItem("duyhao-cart", JSON.stringify(cart)); },[cart]);
  const add=(p:Product)=>setCart(old=>{ const x=old.find(i=>i.slug===p.slug); return x?old.map(i=>i.slug===p.slug?{...i,qty:i.qty+1}:i):[...old,{...p,qty:1}]});
  const remove=(slug:string)=>setCart(old=>old.flatMap(i=>i.slug===slug?(i.qty>1?[{...i,qty:i.qty-1}]:[]):[i]));
  const clear=()=>setCart([]);
  return <StoreContext.Provider value={{cart,add,remove,clear}}>{children}</StoreContext.Provider>;
}
export function useStore(){ const c=useContext(StoreContext); if(!c) throw new Error("StoreProvider missing"); return c; }