import{r as a,j as e,a as x,b,M as w,C as f,B as v,s as j}from"./index-50683e59.js";import{I as l}from"./InputField-2916e54c.js";const k=t=>{switch(t){case"primary":return"bg-blue-100 dark:text-blue-400";case"secondary":return"bg-gray-100 dark:text-gray-400";case"danger":return"bg-red-100 dark:text-red-400";case"warning":return"bg-yellow-100 dark:text-yellow-400";case"info":return"bg-white-100 dark:text-white-400";default:return"bg-green-100 dark:text-green-400"}},_=t=>{const n=a.useMemo(()=>k(t.variant),[t.variant]);return t.message?e.jsx("div",{className:`mb-4 rounded-lg py-5 px-6 text-base ${n} ${t.className?t.className:""}`,role:"alert",id:`alert-${t.id}`,children:t.message}):e.jsx(e.Fragment,{})},C=_,I="_login_68j7y_1",E="_actions_68j7y_15",c={login:I,"form-group":"_form-group_68j7y_12",actions:E,"_button-primary":"__button-primary_68j7y_15"};function M(){const t=x(),{security:{loading:n},errorBag:{error:d}}=b(s=>s),m=a.useContext(w),[r,u]=a.useState(""),[i,g]=a.useState(""),p=s=>{u(s.target.value)},o=s=>{g(s.target.value)},y=()=>{m.onOpen("Please accept privacy policy","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")},h=s=>{s.preventDefault(),r.trim()&&i.trim()&&t(j.authenticate({email:r,password:i}))};return e.jsxs(f,{className:c.login,children:[e.jsx(C,{message:d.message}),e.jsxs("form",{onSubmit:h,children:[e.jsx(l,{id:"email",name:"email",type:"email",label:"E-mail",value:r,onChange:p}),e.jsx(l,{id:"password",name:"password",type:"password",label:"Password",value:i,onBlur:o,onChange:o}),e.jsxs("div",{className:c.actions,children:[e.jsxs("span",{onClick:y,children:["Agree with ",e.jsx("strong",{children:"Privacy Policy"})," ?"]}),e.jsx(v,{id:"login",type:"submit",variant:"primary",label:"Login",loading:n})]})]})]})}export{M as default};
