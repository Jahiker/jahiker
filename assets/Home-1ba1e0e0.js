import{r as p,A as c,j as a,a as e,m as t,L as s,F as x}from"./index-e8135792.js";import{b as m}from"./index-eb948c08.js";const h="https://jahiker.github.io/jahiker/assets/avatar-1f0bf45f.jpeg",f=()=>{const{personalData:r,socialNetworks:i,darkTheme:l,lang:o}=p.useContext(c);return a("div",{className:"hero-wrapper flex flex-col justify-between gap-5",children:[a("div",{className:"flex justify-between items-center gap-5",children:[e(t.h1,{initial:{x:"-100%",opacity:0},whileInView:{x:0,opacity:1},transition:{ease:"linear",duration:1},viewport:{once:!0},className:"uppercase text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[90px] md:leading-[90px] font-bold dark:text-primary",children:r.name}),e(t.p,{initial:{x:"100%",opacity:0},whileInView:{x:0,opacity:1},transition:{ease:"linear",duration:1},viewport:{once:!0},className:"uppercase text-[30px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[85px] md:leading-[70px] font-bold dark:text-primary",children:"</>"})]}),e("div",{className:"flex justify-center",children:e(t.div,{initial:{width:"80px"},whileInView:{width:"100%"},transition:{ease:"linear",duration:.6,delay:.5},viewport:{once:!0},className:"p-2 my-5 bg-dark-op-300 flex gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-[40px] overflow-hidden",children:e(m.LazyLoadImage,{src:h,alt:r.name,className:"w-[50px] h-[50px] rounded-full z-10",width:"50",height:"50"})})}),e("hr",{className:"hr"}),a("div",{className:"py-3 mb-5 text-[18px] font-extralight",children:[e(t.p,{initial:{y:"100%",opacity:0},whileInView:{y:0,opacity:1},transition:{ease:"linear",duration:1},viewport:{once:!0},className:"mb-5 font-medium dark:text-light",children:r.description}),e("div",{className:"flex justify-center my-5",children:l?e(s,{size:"30px",fill:"#d5ff40",rotation:!0}):e(s,{size:"30px",rotation:!0})}),a(t.div,{initial:{y:"100%",opacity:0},whileInView:{y:0,opacity:1},transition:{ease:"linear",duration:1},viewport:{once:!0},className:"flex justify-start flex-wrap items-center gap-4 glass-element p-4 mad:p-3 rounded-[40px] overflow-hidden",children:[i==null?void 0:i.map((n,d)=>a("a",{href:n.url,className:"flex justify-center items-center gap-3 border-2 border-dark-mid border-solid px-5 py-1 rounded-[20px] bg-dark text-primary hover:bg-primary hover:text-dark w-full md:w-auto dark:bg-gray",target:"_blank",rel:"noopener noreferrer",children:[e(n.icon,{size:"16px"}),e("span",{className:"text-[16px]",children:n.title})]},d)),o==="es"?e("hr",{className:"hr hidden md:w-[30vw] sm:flex"}):e("hr",{className:"hr hidden md:w-[40vw] sm:flex"})]})]})]})},y=()=>e(x,{children:e(f,{})});export{y as default};
