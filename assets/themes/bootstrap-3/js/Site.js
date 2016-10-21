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

(function(a){
  "use strict";
  a(function(){
    var b=a(window),c=a(document.body);
    c.scrollspy({
      target:".bs-docs-sidebar"
    }),
    b.on("load",function(){
      c.scrollspy("refresh")
    }),
    a('.bs-docs-container [href="#"]').click(function(a){
      a.preventDefault()
    }),
    setTimeout(function(){
      var b=a(".bs-docs-sidebar");
      b.affix({
        offset:{
          top:function(){
            var c=b.offset().top,d=parseInt(b.children(0).css("margin-top"),10),e=a(".bs-docs-nav").height();
            return this.top=c-e-d
          },
          bottom:function(){
            return this.bottom=a(".bs-docs-footer").outerHeight(!0)
          }
        }
      })
    },100)
  })
}(jQuery))
