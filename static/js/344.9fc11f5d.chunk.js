"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{344:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(607),i=r(87),p="Home_trendingHeader__KY1em",v="Home_trendingList__TQLCA",l=r(184),f=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,u.useEffect)((function(){(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.getTrendingMovies();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{className:p,children:"Trending today"}),(0,l.jsx)("ul",{className:v,children:r.map((function(e){var t=e.id,r=e.title;return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/movies/".concat(t),children:r})},t)}))})]})}},607:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(243),u="ab8de7f6cd80f554f73acd2ad893d2dd",o="https://api.themoviedb.org/3",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:u}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"/reviews?page=1"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/search/movie?&page=1"),{params:{query:t,api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d={getTrendingMovies:i,getMovieById:p,getMovieCast:v,getMovieReviews:l,getMoviesByQuery:f};t.Z=d}}]);
//# sourceMappingURL=344.9fc11f5d.chunk.js.map