(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Tze0:function(t,e,n){"use strict";n("qncB")("trim",(function(t){return function(){return t(this,3)}}))},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return u}));var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),c=n("EVdn"),i=n.n(c),s=n("Bl7J"),l=n("vrFN");var m=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=a.prototype;return c.componentDidMount=function(){var t=this.props.pageContext,e=t.previous,n=t.next;i()(document).on("keydown",(function(t){t.stopPropagation();var a=t.keyCode;37===a&&(n?Object(r.navigate)(n.fields.slug):Object(r.navigate)("/comics")),39===a&&(e?Object(r.navigate)(e.fields.slug):Object(r.navigate)("/comics"))}))},c.componentWillUnmount=function(){i()(document).off("keydown")},c.render=function(){var t=this.props,e=t.data,n=t.pageContext,a=t.location,c=e.markdownRemark,i=e.site.siteMetadata.title,m=n.previous,u=n.next;return o.a.createElement(s.a,{location:a,title:i},o.a.createElement(l.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),o.a.createElement("div",{className:"comic"},o.a.createElement("div",{className:"comic__navigation"},m?o.a.createElement(r.Link,{to:m.fields.slug,rel:"prev",className:"btn btn-default"},"← Previous"):o.a.createElement(r.Link,{to:"/comics",rel:"prev",className:"btn btn-default"},"← Comics"),u?o.a.createElement(r.Link,{to:u.fields.slug,rel:"next",className:"btn btn-default"},"Next →"):o.a.createElement(r.Link,{to:"/comics",rel:"next",className:"btn btn-default"},"Comics →")),o.a.createElement("div",{className:"comic__title"},c.frontmatter.title),o.a.createElement("div",{className:"comic__date"},c.frontmatter.date),o.a.createElement("section",{dangerouslySetInnerHTML:{__html:c.html}})))},a}(o.a.Component);e.default=m;var u="2868899261"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3a98f8d0c31aa30846cc.js.map