import{a as e,j as l,m as t}from"./index-9c957e3a.js";import{s}from"./skills.en-1f413767.js";import"./index.esm-72541f3e.js";const o=({motion:i})=>{var r;return e(i.div,{initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0},transition:{ease:"linear",duration:1},className:"glass-element rounded-[40px] z-10 p-5 md:p-10 overflow-hidden flex justify-center items-center flex-wrap gap-10 md:gap-20",children:(r=s)==null?void 0:r.map(a=>l("div",{className:"flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full scale-1 transition-transform hover:scale-110 hover:bg-dark-mid",children:[e(a.icon,{size:"40px",fill:"#d5ff40",color:"#101010"}),e("span",{className:"uppercase text-[8px] font-extralight text-center",children:a.name})]},a.name))})},d=()=>e("div",{className:"skills-wrapper",children:l("div",{className:"p-5 my-5 bg-dark-op-300 flex flex-col gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-[40px] overflow-hidden",children:[e("div",{className:"w-full h-auto z-10",children:e(t.h2,{initial:{y:"-100%",opacity:0},animate:{y:0,opacity:1},transition:{ease:"linear",duration:.5},className:"text-center text-[60px] md:text-[90px] text-primary",children:"My Skills"})}),e(o,{motion:t})]})});export{d as default};
