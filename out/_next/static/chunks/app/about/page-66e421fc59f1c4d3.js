(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{8498:(e,r,s)=>{Promise.resolve().then(s.bind(s,9814))},9814:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>h});var t=s(5155),n=s(8173),i=s.n(n),c=s(2115);function h(){let[e,r]=(0,c.useState)([]);return(0,c.useEffect)(()=>{fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>{console.log(e),r(e)}).catch(e=>console.error("Error fetching data:",e))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"About"}),e.length>0?(0,t.jsx)("ul",{children:e.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.description}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Price:"})," $",e.price]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Rating:"})," ",e.rating.rate," (",e.rating.count," ","reviews)"]}),(0,t.jsx)("img",{src:e.image,alt:e.title,style:{maxWidth:"100px"}})]},e.id))}):(0,t.jsx)("p",{children:"Loading data..."}),(0,t.jsxs)("div",{children:["Back to ",(0,t.jsx)(i(),{href:"/",children:"Home"})]})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[173,441,517,358],()=>r(8498)),_N_E=e.O()}]);