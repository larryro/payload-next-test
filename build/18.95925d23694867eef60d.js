"use strict";(self.webpackChunknext_auth_cms=self.webpackChunknext_auth_cms||[]).push([[18],{26018:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var s=t(13578),a=t(9980),l=t(28630),i=t(39599),n=t(37276),o=t(93313),c=t(5590),d=t(25896),u=t(46268);t(26325);const m=e=>{const{setInitialized:r}=e,{setToken:t}=(0,l.a)(),{admin:{user:m},collections:p,serverURL:f,routes:{admin:w,api:h}}=(0,a.Z)(),k=p.find((e=>e.slug===m));return s.createElement(i.Z,{className:"create-first-user"},s.createElement("h1",null,"Welcome"),s.createElement("p",null,"To begin, create your first user."),s.createElement(n.Z,{title:"Create First User",description:"Create first user",keywords:"Create, Payload, CMS"}),s.createElement(o.Z,{onSuccess:e=>{var s;(null===(s=null==e?void 0:e.user)||void 0===s?void 0:s.token)&&t(e.user.token),r(!0)},method:"post",redirect:w,action:`${f}${h}/${m}/first-register`,validationOperation:"create"},s.createElement(c.Z,{fieldSchema:[{name:"email",label:"Email Address",type:"email",required:!0},{name:"password",label:"Password",type:"password",required:!0},{name:"confirm-password",label:"Confirm Password",type:"confirmPassword",required:!0},...k.fields],fieldTypes:d.Z}),s.createElement(u.Z,null,"Create")))}}}]);