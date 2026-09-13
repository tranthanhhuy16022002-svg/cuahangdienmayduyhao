export type Product = {
 id:number; slug:string; name:string; brand:string; category:string; referencePrice:number; price:number; discount:number; saving:number; image:string; description:string; specs:Record<string,string>;
};

const img=(q:string)=>`https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80`;
const raw=[
["Smart TV Samsung 55 inch 4K UHD","Samsung","TV - Âm thanh",15990000,"photo-1593359677879-a4bb92f829d1"],
["Tủ lạnh LG Inverter 335L","LG","Tủ lạnh - Tủ đông",10990000,"photo-1571175443880-49e1d25b2bc5"],
["Máy giặt LG Inverter 9kg","LG","Máy giặt - Máy sấy",9990000,"photo-1626806787461-102c1bfaaea1"],
["Máy lạnh Daikin 1.5HP","Daikin","Máy lạnh - Điều hòa",12990000,"photo-1631545806609-44b4f0c5c6e1"],
["Nồi cơm điện Sharp 1.8L","Sharp","Bếp - Gia dụng",1690000,"photo-1585515320310-259814833e62"],
["Máy lọc nước RO Karofi","Karofi","Máy lọc nước",6990000,"photo-1603033172159-3c3a2f4f6f09"],
["Robot hút bụi Ecovacs","Ecovacs","Gia dụng",11990000,"photo-1558317374-067fb5f30001"],
["Loa Bluetooth JBL","JBL","TV - Âm thanh",3490000,"photo-1608043152269-423dbba4e7e1"],
["Bếp từ đôi Panasonic","Panasonic","Bếp - Gia dụng",5990000,"photo-1556911220-e15b29be8c8f"],
["Máy nước nóng Ariston","Ariston","Máy lọc nước",4990000,"photo-1607472586893-edb57bdc0e39"],
["Tủ đông Sanaky 400L","Sanaky","Tủ lạnh - Tủ đông",10990000,"photo-1584568694244-14fbdf83bd30"],
["Smart TV Sony 50 inch 4K","Sony","TV - Âm thanh",13990000,"photo-1593784991095-a205069470b6"],
["Máy sấy Electrolux 8kg","Electrolux","Máy giặt - Máy sấy",12990000,"photo-1610557892470-a18e5b8ba5d0"],
["Ghế sofa vải cao cấp","Duy Hảo","Đồ nội thất",8990000,"photo-1555041469-a586c61ea9bc"],
["Đèn thả trần hiện đại","Duy Hảo","Đèn trang trí",1890000,"photo-1540932239986-30128078f3c5"],
["Bàn ăn gỗ 6 ghế","Duy Hảo","Đồ nội thất",12990000,"photo-1616486338812-3dadae4b4ace"],
["Điều hòa Panasonic 1HP","Panasonic","Máy lạnh - Điều hòa",10490000,"photo-1631545806609-44b4f0c5c6e1"],
["Máy hút bụi cầm tay","Philips","Gia dụng",2990000,"photo-1558317374-067fb5f30001"],
["Nồi chiên không dầu Philips","Philips","Bếp - Gia dụng",3990000,"photo-1585515320310-259814833e62"],
["Tủ quần áo hiện đại","Duy Hảo","Đồ nội thất",7990000,"photo-1616486338812-3dadae4b4ace"]
] as const;

export const products:Product[]=raw.map((r,i)=>{const referencePrice=r[3];const price=Math.round(referencePrice*0.9/1000)*1000; return {id:i+1,slug:r[0].toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),name:r[0],brand:r[1],category:r[2],referencePrice,price,discount:10,saving:referencePrice-price,image:img(r[4]),description:`${r[0]} chính hãng, phù hợp nhu cầu gia đình. Giá trên website là giá demo được tính bằng 90% giá tham chiếu; khi vận hành thật cần thay bằng giá nhập/giá bán thực tế của Duy Hảo.`,specs:{"Thương hiệu":r[1],"Tình trạng":"Mới 100%","Bảo hành":"Theo chính sách hãng","Giao hàng":"Toàn quốc"}}});
export const categories=[{name:"TV - Âm thanh",icon:"📺",count:120},{name:"Tủ lạnh - Tủ đông",icon:"🧊",count:80},{name:"Máy giặt - Máy sấy",icon:"🧺",count:75},{name:"Máy lạnh - Điều hòa",icon:"❄️",count:65},{name:"Bếp - Gia dụng",icon:"🍳",count:180},{name:"Máy lọc nước",icon:"💧",count:40},{name:"Đồ nội thất",icon:"🛋️",count:150},{name:"Đèn trang trí",icon:"💡",count:90}];