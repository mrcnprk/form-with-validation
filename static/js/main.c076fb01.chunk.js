(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{14:function(e,s,t){},15:function(e,s,t){},16:function(e,s,t){"use strict";t.r(s);var a=t(0),i=t(1),r=t.n(i),n=t(4),u=t.n(n),l=(t(14),t(3)),c=t(5),m=t(6),o=t(8),h=t(7),d=(t(15),function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=s.call.apply(s,[this].concat(i))).state={userfirstname:"",userlastname:"",useremail:"",rules:!1,message:"",errors:{user:!1,useremail:!1,rules:!1}},e.messages={user_incorrect:"! Imie i nazwisko musi zawiera\u0107 minimum po 3 znaki i nie zawiera\u0107 spacji",useremail_incorrect:"! adres e-mail musi sk\u0142ada\u0107 si\u0119 z @ i domeny dostawcy us\u0142ug e-mail",rules_incorrect:"! Musisz zaakceptowa\u0107 regulami"},e.handleChange=function(s){var t=s.target.id;"rules"===t?e.setState(Object(l.a)({},t,!e.state.rules)):e.setState(Object(l.a)({},t,s.target.value))},e.handleValidation=function(){var s=!0,t=!0,a=!0,i=!1;return e.state.userfirstname.length>=3&&!e.state.userfirstname.includes(" ")&&e.state.userlastname.length>=3&&!e.state.userlastname.includes(" ")&&(s=!1),e.state.useremail.includes("@")&&e.state.useremail.includes(".")&&(t=!1),!0===e.state.rules&&(a=!1),s||t||a||(i=!0),{user:s,useremail:t,rules:a,correct:i}},e.handleSubmit=function(s){s.preventDefault();var t=e.handleValidation();t.correct?(e.setState({userfirstname:"",userlastname:"",useremail:"",rules:!1,message:"Dane zosta\u0142y wys\u0142ane!",errors:{user:!1,useremail:!1,rules:!1}}),setTimeout((function(){e.setState({message:""})}),1e3)):e.setState({errors:{user:t.user,useremail:t.useremail,rules:t.rules}})},e}return Object(m.a)(t,[{key:"render",value:function(){return Object(a.jsx)("section",{className:"formBox",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",noValidate:!0,children:[Object(a.jsx)("label",{htmlFor:"userfirstname",children:"Imi\u0119:"}),Object(a.jsx)("input",{type:"text",id:"userfirstname",name:"username",title:"Imie i nazwisko musi zawiera\u0107 minimum po 3 znaki i nie zawiera\u0107 spacji!",value:this.state.userfirstname,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"userlastname",children:"Nazwisko:"}),Object(a.jsx)("input",{type:"text",id:"userlastname",name:"username",title:"Imie i nazwisko musi zawiera\u0107 minimum po 3 znaki i nie zawiera\u0107 spacji!",value:this.state.userlastname,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"useremail",children:"E-mail:"}),Object(a.jsx)("input",{type:"email",id:"useremail",name:"username",title:"adres e-mail musi sk\u0142ada\u0107 si\u0119 z @ i domeny dostawcy us\u0142ug e-mail!",value:this.state.useremail,onChange:this.handleChange}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",id:"rules",name:"rules",title:"akceptacja regulaminu jest wymagana",checked:this.state.rules,onChange:this.handleChange})," Akceptuje regulamin "]}),Object(a.jsxs)("div",{className:"errorSection",children:[this.state.errors.user?Object(a.jsx)("p",{children:this.messages.user_incorrect}):null,this.state.errors.useremail?Object(a.jsx)("p",{children:this.messages.useremail_incorrect}):null,this.state.errors.rules?Object(a.jsx)("p",{children:this.messages.rules_incorrect}):null]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("span",{children:this.state.message}),Object(a.jsx)("button",{type:"submit",children:"Wy\u015blij"})]})]})})}}]),t}(i.Component)),j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,r=s.getLCP,n=s.getTTFB;t(e),a(e),i(e),r(e),n(e)}))};u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.c076fb01.chunk.js.map