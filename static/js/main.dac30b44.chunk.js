(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(4),s=a(5),i=a(12),o=a(11),r=a(3),l=a.n(r),d=a(0);var u=function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,s=t.positivePercentage;return Object(d.jsxs)("div",{className:l.a.results,children:[Object(d.jsxs)("p",{children:["Good: ",e]}),Object(d.jsxs)("p",{children:["Neutral: ",a]}),Object(d.jsxs)("p",{children:["Bad: ",c]}),Object(d.jsxs)("div",{className:l.a.statistics,children:[Object(d.jsxs)("p",{children:["TotalFeedbacks: ",n]}),Object(d.jsxs)("p",{children:["Positive feedback: ",s,"%"]})]})]})},b=a(6),j=a.n(b);var h=function(t){var e=t.goodClick,a=t.neutralClick,c=t.badClick;return Object(d.jsxs)("div",{className:j.a.buttons,children:[Object(d.jsx)("button",{type:"button",onClick:e,children:"good"}),Object(d.jsx)("button",{type:"button",onClick:a,children:"neutral"}),Object(d.jsx)("button",{type:"button",onClick:c,children:"bad"})]})},k=a(7),p=a.n(k);var v=function(t){var e=t.title,a=t.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:p.a.title,children:e}),a]})},x=a(8),O=a.n(x);var g=function(t){var e=t.message;return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{className:O.a.message,children:e})})},f=a(9),_=a.n(f),C=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.goodClick=function(){t.setState({good:t.state.good+1})},t.neutralClick=function(){t.setState({neutral:t.state.neutral+1})},t.badClick=function(){t.setState({bad:t.state.bad+1})},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return 0===t.countTotalFeedback()?0:100*t.state.good/t.countTotalFeedback()},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad;return Object(d.jsx)("div",{className:_.a.container,children:Object(d.jsxs)(v,{title:"Please leave feedback",children:[Object(d.jsx)(h,{goodClick:this.goodClick,neutralClick:this.neutralClick,badClick:this.badClick}),this.countTotalFeedback()>0?Object(d.jsx)(u,{good:e,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage().toFixed(0)}):Object(d.jsx)(g,{message:"No feedback given"})]})})}}]),a}(c.Component),m=a(10);a.n(m).a.render(Object(d.jsx)(C,{}),document.querySelector("#root"))},3:function(t,e,a){t.exports={results:"Statistics_results__3X0ww",statistics:"Statistics_statistics__2azc7"}},6:function(t,e,a){t.exports={buttons:"FeedbackOptions_buttons__mw98S"}},7:function(t,e,a){t.exports={title:"Section_title__Ftz9w"}},8:function(t,e,a){t.exports={message:"Notification_message__1sdvC"}},9:function(t,e,a){t.exports={container:"App_container__3U5Fq"}}},[[18,1,2]]]);
//# sourceMappingURL=main.dac30b44.chunk.js.map