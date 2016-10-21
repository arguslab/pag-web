/**
 * Created by fgwei on 10/20/16.
 */

// (function () {
//   $('body').scrollspy({
//     target: '.bs-docs-sidebar',
//     offset: 40
//   });
//   // "use strict";
//   // $(function () {
//   //   tryInitializePage();
//   // });
//   //
//   // function tryInitializePage() {
//   //   try {
//   //     initializePage();
//   //
//   //   } catch (ex) {
//   //     //notifyUserOfProblem
//   //     document.getElementById('loading').style.display = 'none';
//   //     alert('An error occured while loading data from Google.');
//   //   }
//   // }
//   //
//   // function initializePage() {
//   //   tryCreatePage();
//   // }
//   //
//   // function tryCreatePage() {
//   //   try {
//   //     createPage();
//   //
//   //   } catch (ex) {
//   //     //notifyUserOfProblem
//   //     document.getElementById('loading').style.display = 'none';
//   //     alert('An error occured while creating the page.');
//   //   }
//   // }
//   //
//   // function createPage() {
//   //   addMenuNavBarHandler();
//   //
//   //   addScrollSpy();
//   //
//   //   addSmoothScrollingToAnchors();
//   //
//   //   goToCurrentAnchor();
//   // }
//   //
//   // function addMenuNavBarHandler() {
//   //   $('body').click(function (e) {
//   //     var toggleClicked = ($(e.target).closest(".navbar-header").length > 0);
//   //     var $openParent = $(".navbar-default .parentMenu.in");
//   //     var $openChildren = $(".navbar-default .childMenu.in");
//   //     var hasOpenChildren = ($openChildren.length > 0);
//   //
//   //     //always close child menus
//   //     $openChildren.removeClass("in").addClass("collapse");
//   //
//   //     // if toggle clicked, open parent will automatically close,
//   //     if (!toggleClicked) {
//   //       // otherwise close manually
//   //       $openParent.removeClass("in").addClass("collapse");
//   //     }
//   //
//   //     // if toggle was clicked, and something was open
//   //     if (toggleClicked && hasOpenChildren) {
//   //       //quickly open menu so it can be closed by toggle click
//   //       $(".navbar-default .parentMenu.collapse")
//   //         .removeClass("collapse").addClass("in");
//   //     }
//   //
//   //   });
//   // }
//   //
//   // function addScrollSpy() {
//   //   $('body').scrollspy({
//   //     target: '.bs-docs-sidebar',
//   //     offset: 40
//   //   });
//   // }
//   //
//   // function addSmoothScrollingToAnchors() {
//   //   // when menu item clicked
//   //   $("a[href^='#']").click(function () {
//   //     // get href attribute
//   //     var idSelector = $(this).attr('href');
//   //     // scroll to position
//   //     navigateToElement(idSelector);
//   //   });
//   // }
//   //
//   // function goToCurrentAnchor() {
//   //   //wait until page is rendered to scroll to location
//   //   setTimeout(function () {
//   //     navigateToElement(window.location.hash);
//   //   }, 100);
//   // }
//   //
//   // function navigateToElement(idSelector) {
//   //   // make sure we have a valid id
//   //   if ($(idSelector).length > 0) {
//   //     // scroll down page
//   //     scrollToElement(idSelector);
//   //     // reset url hash
//   //     setHash(idSelector);
//   //   }
//   // }
//   //
//   // function scrollToElement(idSelector) {
//   //   $('html, body').animate({
//   //     scrollTop: $(idSelector).offset().top
//   //   }, 1000);
//   // }
//   //
//   // function setHash(hash) {
//   //   window.location.hash = hash;
//   // }
//
// }());

// (function(a){
//   "use strict";
//   a(function(){
//     var b=a(window),c=a(document.body);
//     c.scrollspy({
//       target:".bs-docs-sidebar"
//     }),
//     b.on("load",function(){
//       c.scrollspy("refresh")
//     }),
//     a('.bs-docs-container [href="#"]').click(function(a){
//       a.preventDefault()
//     }),
//     setTimeout(function(){
//       var b=a(".bs-docs-sidebar");
//       b.affix({
//         offset:{
//           top:function(){
//             var c=b.offset().top,d=parseInt(b.children(0).css("margin-top"),10),e=a(".bs-docs-nav").height();
//             return this.top=c-e-d
//           },
//           bottom:function(){
//             return this.bottom=a(".bs-docs-footer").outerHeight(!0)
//           }
//         }
//       })
//     },100);
//   });
// }(jQuery));

/*!

 Holder - client side image placeholders
 Version 2.6.0+51ebp
 © 2015 Ivan Malopinsky - http://imsky.co

 Site:     http://holderjs.com
 Issues:   https://github.com/imsky/holder/issues
 License:  http://opensource.org/licenses/MIT

 */
function AnchorJS(a) {
  "use strict";

  function b(a) {
    a.icon = a.hasOwnProperty("icon") ? a.icon : "", a.visible = a.hasOwnProperty("visible") ? a.visible : "hover", a.placement = a.hasOwnProperty("placement") ? a.placement : "right", a["class"] = a.hasOwnProperty("class") ? a["class"] : "", a.truncate = a.hasOwnProperty("truncate") ? Math.floor(a.truncate) : 64
  }

  function c(a) {
    var b;
    if ("string" == typeof a || a instanceof String) b = [].slice.call(document.querySelectorAll(a));
    else {
      if (!(Array.isArray(a) || a instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
      b = [].slice.call(a)
    }
    return b
  }

  function d() {
    if (null === document.head.querySelector("style.anchorjs")) {
      var a, b = document.createElement("style"),
        c = " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",
        d = " *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",
        e = ' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',
        f = " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";
      b.className = "anchorjs", b.appendChild(document.createTextNode("")), a = document.head.querySelector('[rel="stylesheet"], style'), void 0 === a ? document.head.appendChild(b) : document.head.insertBefore(b, a), b.sheet.insertRule(c, b.sheet.cssRules.length), b.sheet.insertRule(d, b.sheet.cssRules.length), b.sheet.insertRule(f, b.sheet.cssRules.length), b.sheet.insertRule(e, b.sheet.cssRules.length)
    }
  }
  this.options = a || {}, this.elements = [], b(this.options), this.isTouchDevice = function() {
    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
  }, this.add = function(a) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q = [];
    if (b(this.options), p = this.options.visible, "touch" === p && (p = this.isTouchDevice() ? "always" : "hover"), a || (a = "h1, h2, h3, h4, h5, h6"), e = c(a), 0 === e.length) return !1;
    for (d(), f = document.querySelectorAll("[id]"), g = [].map.call(f, function(a) {
      return a.id
    }), i = 0; i < e.length; i++)
      if (this.hasAnchorJSLink(e[i])) q.push(i);
      else {
        if (e[i].hasAttribute("id")) h = e[i].getAttribute("id");
        else {
          l = this.urlify(e[i].textContent), m = l, k = 0;
          do void 0 !== j && (m = l + "-" + k), j = g.indexOf(m), k += 1; while (-1 !== j);
          j = void 0, g.push(m), e[i].setAttribute("id", m), h = m
        }
        n = h.replace(/-/g, " "), o = document.createElement("a"), o.className = "anchorjs-link " + this.options["class"], o.href = "#" + h, o.setAttribute("aria-label", "Anchor link for: " + n), o.setAttribute("data-anchorjs-icon", this.options.icon), "always" === p && (o.style.opacity = "1"), "" === this.options.icon && (o.style.fontFamily = "anchorjs-icons", o.style.fontStyle = "normal", o.style.fontVariant = "normal", o.style.fontWeight = "normal", o.style.lineHeight = 1, "left" === this.options.placement && (o.style.lineHeight = "inherit")), "left" === this.options.placement ? (o.style.position = "absolute", o.style.marginLeft = "-1em", o.style.paddingRight = "0.5em", e[i].insertBefore(o, e[i].firstChild)) : (o.style.paddingLeft = "0.375em", e[i].appendChild(o))
      }
    for (i = 0; i < q.length; i++) e.splice(q[i] - i, 1);
    return this.elements = this.elements.concat(e), this
  }, this.remove = function(a) {
    for (var b, d, e = c(a), f = 0; f < e.length; f++) d = e[f].querySelector(".anchorjs-link"), d && (b = this.elements.indexOf(e[f]), -1 !== b && this.elements.splice(b, 1), e[f].removeChild(d));
    return this
  }, this.removeAll = function() {
    this.remove(this.elements)
  }, this.urlify = function(a) {
    var c, d = /[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;
    return this.options.truncate || b(this.options), c = a.trim().replace(/\'/gi, "").replace(d, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
  }, this.hasAnchorJSLink = function(a) {
    var b = (" " + a.firstChild.className + " ").indexOf(" anchorjs-link ") > -1,
      c = (" " + a.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
    return b || c
  }
}
var anchors = new AnchorJS;
/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */
! function(a) {
  "use strict";
  a(function() {
    var b = a(window),
      c = a(document.body);
    c.scrollspy({
      target: ".bs-docs-sidebar"
    }), b.on("load", function() {
      c.scrollspy("refresh")
    }), a('.bs-docs-container [href="#"]').click(function(a) {
      a.preventDefault()
    }), setTimeout(function() {
      var b = a(".bs-docs-sidebar");
      b.affix({
        offset: {
          top: function() {
            var c = b.offset().top,
              d = parseInt(b.children(0).css("margin-top"), 10),
              e = a(".bs-docs-nav").height();
            return this.top = c - e - d
          },
          bottom: function() {
            return this.bottom = a(".bs-docs-footer").outerHeight(!0)
          }
        }
      })
    }, 100), setTimeout(function() {
      a(".bs-top").affix()
    }, 100);
  })
}(jQuery),
  function() {
    "use strict";
    anchors.options.placement = "left", anchors.add(".bs-docs-section > h1, .bs-docs-section > h2, .bs-docs-section > h3, .bs-docs-section > h4, .bs-docs-section > h5")
  }();
