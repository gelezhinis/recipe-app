(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(18),i=c.n(s),o=(c(25),c(8)),j=c(2),u=c(11),l=c.n(u),b=c(14),p=c(7),d=Object(r.createContext)(),h=function(e){var t=e.children,c=Object(r.useState)([]),a=Object(p.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(p.a)(o,2),u=j[0],h=j[1],O=Object(r.useState)(0),x=Object(p.a)(O,2),f=x[0],m=x[1],v=Object(r.useState)(9),g=Object(p.a)(v,2),k=g[0],N=g[1],y=Object(r.useState)(!1),C=Object(p.a)(y,2),S=C[0],w=C[1],R=Object(r.useState)(!1),I=Object(p.a)(R,2),_=I[0],P=I[1],T=Object(r.useState)(!1),q=Object(p.a)(T,2),B=q[0],E=q[1],F="b64bf0b2",M="da044486750a73bfd5d3d6e53e24d059",z="https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=".concat(F,"&app_key=").concat(M,"&from=0&to=9"),H="https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=".concat(u,"&app_id=").concat(F,"&app_key=").concat(M,"&from=").concat(f,"&to=").concat(k),J=function(){var e=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,fetch(z);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,i(c.hits),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!1),E(!0),e.next=4,fetch(H);case 4:return t=e.sent,e.next=7,t.json();case 7:if(c=e.sent,""===u.trim()||c.more){e.next=12;break}return E(!1),P(!0),e.abrupt("return");case 12:i(c.hits),E(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){J()}),[]),Object(r.useEffect)((function(){D()}),[f,k]),Object(n.jsx)(d.Provider,{value:{recipes:s,setRecipes:i,getRecipes:function(e){e.preventDefault(),""!==u.trim()&&(w(!0),D())},search:u,setSearch:h,isHidden:S,error:_,loading:B,handlePage:function(e){if("next"===e)return m((function(e){return e+9})),void N((function(e){return e+9}));"previous"===e&&0!==!f&&(m((function(e){return e-9})),N((function(e){return e-9})))}},children:t})},O=(c(27),function(e){var t=e.children;return Object(n.jsx)("div",{className:"container",children:t})}),x=function(){return Object(n.jsxs)(o.b,{to:"/",className:"logo",children:["Recepies",Object(n.jsx)("span",{children:"."})]})},f=function(){return Object(n.jsx)("nav",{children:Object(n.jsx)(O,{children:Object(n.jsx)(x,{})})})},m=function(){return Object(n.jsx)("div",{className:"loader"})},v=function(e){var t=e.btnText,c=e.handleClick;return Object(n.jsx)("button",{className:"btn",onClick:c,children:t})},g=function(){var e=Object(r.useContext)(d),t=e.search,c=e.setSearch,a=e.getRecipes;return Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsxs)("div",{className:"formContainer",children:[Object(n.jsx)("input",{type:"text",required:!0,value:t,onChange:function(e){return c(e.target.value)}}),Object(n.jsx)("label",{children:"Recipe / Ingredient"})]}),Object(n.jsx)(v,{btnText:"Search"})]})},k=function(){return Object(n.jsx)("h2",{className:"errorMsg",children:"We couldn't find anything by your search.."})},N=function(){var e=Object(r.useContext)(d),t=e.recipes,c=e.error,a=e.loading;return Object(n.jsxs)(n.Fragment,{children:[c&&Object(n.jsx)(k,{}),t&&!c&&!a&&t.map((function(e,t){return Object(n.jsxs)("div",{className:"recipe",children:[Object(n.jsx)("a",{href:e.recipe.url,target:"_blank",rel:"nonopener noreferrer",children:Object(n.jsx)("div",{style:{background:"url(".concat(e.recipe.image,") no-repeat center/cover")},className:"recipeBg"})}),Object(n.jsxs)("div",{className:"recipeInfo",children:[Object(n.jsx)("p",{children:e.recipe.label}),Object(n.jsxs)("p",{children:[Math.floor(e.recipe.calories)," calories"]}),Object(n.jsx)(o.b,{to:"/recipes/".concat(e.recipe.label),children:"View more"})]})]},t)}))]})},y=function(){var e=Object(r.useContext)(d),t=e.isHidden,c=e.error,a=e.loading,s=e.handlePage;return Object(n.jsx)(n.Fragment,{children:t&&!a&&!c&&Object(n.jsxs)("div",{className:"pagination",children:[Object(n.jsx)(v,{btnText:"Prev",handleClick:function(){return s("previous")}}),Object(n.jsx)(v,{btnText:"Next",handleClick:function(){return s("next")}})]})})},C=function(){var e=Object(r.useContext)(d).loading;return Object(n.jsxs)("section",{className:"hero",children:[Object(n.jsx)(O,{children:Object(n.jsx)(g,{})}),e?Object(n.jsx)(m,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{children:Object(n.jsx)(N,{})}),Object(n.jsx)(y,{})]})]})},S=function(){var e=Object(r.useContext)(d).recipes,t=Object(j.e)().recipeId;return Object(n.jsx)("section",{className:"fullRecipe",children:Object(n.jsx)(O,{children:e&&e.filter((function(e){return e.recipe.label===t})).map((function(e,t){return Object(n.jsxs)("div",{className:"fullRecipeCard",children:[Object(n.jsx)("div",{style:{background:"url(".concat(e.recipe.image,") no-repeat center/cover")},className:"fullRecipeBg"}),Object(n.jsxs)("div",{className:"fullRecipeInfo",children:[Object(n.jsx)("h2",{children:e.recipe.label}),e.recipe.ingredientLines.map((function(e,t){return Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:e})},t)}))]})]},t)}))})})};var w=function(){return Object(n.jsx)(h,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(n.jsx)(j.a,{path:"/recipes/:recipeId",component:S})]})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d606f861.chunk.js.map