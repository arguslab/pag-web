/**
 * Created by fgwei on 10/20/16.
 */

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
    anchors.options.placement = "left",
      anchors.add(),
      anchors.add(".bs-docs-section > h1, .bs-docs-section > h2, .bs-docs-section > h3, .bs-docs-section > h4, .bs-docs-section > h5")
  }();
