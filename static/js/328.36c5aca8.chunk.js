"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[328],{328:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(689),i=r(607),p="Cast_castList__ARoWn",l="Cast_castItem__-Jcfe",v="Cast_noPhoto__XJsaI",f="Cast_castDescription__7tx+N",d="Cast_castImg__T4WbF",h=r(184),m=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],m=(0,o.UO)().movieId;return(0,u.useEffect)((function(){(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.getMovieCast(m);case 3:t=e.sent,c(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[m]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:p,children:r.map((function(e){var t=e.name,r=e.character,n=e.profile_path,a=e.id;return(0,h.jsxs)("li",{className:l,children:[n?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,className:d,width:"200"}):(0,h.jsx)("div",{className:v,children:"No photo :("}),(0,h.jsx)("p",{className:f,children:t}),(0,h.jsx)("p",{className:f,children:"Character: ".concat(r)})]},a)}))})})}},607:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(243),u="ab8de7f6cd80f554f73acd2ad893d2dd",o="https://api.themoviedb.org/3",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:u}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"/reviews?page=1"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/search/movie?&page=1"),{params:{query:t,api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d={getTrendingMovies:i,getMovieById:p,getMovieCast:l,getMovieReviews:v,getMoviesByQuery:f};t.Z=d}}]);
//# sourceMappingURL=328.36c5aca8.chunk.js.map