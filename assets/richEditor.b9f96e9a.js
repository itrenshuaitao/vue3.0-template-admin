import{_ as e}from"./richEditor.3b767f18.js";import{d as a,r as l,p as t,a as o,i as d,o as s,c as n,b as r,w as i,A as c}from"./vendor.84e6cf37.js";var u=a({components:{RichEditor:e},setup(){const e=l(),a=l();return{handleUpdateValue:e=>{console.log(e),a.value=e},editorValue:e}}});const p=i();t("data-v-a3c28f02");const f={class:"editorWrapper"},v={class:"info"},m=c("富文本编辑器"),_=r("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1),V={class:"grid-content bg-purple-dark"},g={style:{"text-align":"left"}},h=r("span",null,"富文本编辑器",-1);o();const b=p(((e,a,l,t,o,i)=>{const c=d("el-divider"),u=d("RichEditor",!0),b=d("el-card"),x=d("el-col"),U=d("el-row");return s(),n("div",f,[r("div",v,[r(c,{"content-position":"left"},{default:p((()=>[m])),_:1}),_]),r("div",null,[r(U,null,{default:p((()=>[r(x,{offset:1,span:22},{default:p((()=>[r("div",V,[r(b,{class:"box-card"},{default:p((()=>[r("div",g,[h,r(c)]),r(u,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])),_:1})])])),_:1})])),_:1})])])}));u.render=b,u.__scopeId="data-v-a3c28f02";export default u;