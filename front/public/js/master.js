(function ($) {
  "use strict";

  $(document).ready(function () {
    /* ===== jQuery Varibles ===== */
    parallaxEffect();
    parallaxBackground();
    /* ===== REVOLUTION SLIDER LANDING ===== */

    var revapi1078,
      revapi1014,
      tpj = jQuery;

    tpj(document).ready(function () {
      /* ===== REVOLUTION SLIDER MAIN DEMO ===== */

      if (tpj("#rev_slider_landing_custom").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_landing_custom");
      } else {
        $("#rev_slider_landing_custom")
          .show()
          .revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
              keyboardNavigation: "off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation: "off",
              mouseScrollReverse: "default",
              onHoverStop: "off",
              touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false,
              },
              arrows: {
                style: "hades",
                enable: false,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp:
                  '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                left: {
                  h_align: "left",
                  v_align: "center",
                  h_offset: 30,
                  v_offset: 0,
                },
                right: {
                  h_align: "right",
                  v_align: "center",
                  h_offset: 30,
                  v_offset: 0,
                },
              },
              bullets: {
                enable: false,
                hide_onmobile: false,
                hide_under: 600,
                style: "uranus",
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 20,
                tmp: '<span class="tp-bullet-inner"></span>',
              },
            },
            viewPort: {
              enable: false,
              outof: "pause",
              visible_area: "80%",
              presize: false,
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
              type: "mouse",
              origo: "slidercenter",
              speed: 2000,
              levels: [
                2,
                3,
                4,
                5,
                6,
                7,
                12,
                16,
                10,
                50,
                47,
                48,
                49,
                50,
                51,
                55,
              ],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              nextSlideOnWindowFocus: "off",
              disableFocusListener: false,
            },
          });
      }

      /* ===== REVOLUTION SLIDER MAIN ===== */

      if (tpj("#rev_slider_1078_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1078_1");
      } else {
        $("#rev_slider_1078_1")
          .show()
          .revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
              keyboardNavigation: "off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation: "off",
              mouseScrollReverse: "default",
              onHoverStop: "off",
              touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false,
              },
              arrows: {
                style: "hades",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp:
                  '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                left: {
                  h_align: "left",
                  v_align: "center",
                  h_offset: 0,
                  v_offset: 0,
                },
                right: {
                  h_align: "right",
                  v_align: "center",
                  h_offset: 0,
                  v_offset: 0,
                },
              },
              bullets: {
                enable: true,
                hide_onmobile: false,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 15,
                style: "hermes",
                tmp: '<span class="tp-bullet-inner"></span>',
              },
            },
            viewPort: {
              enable: false,
              outof: "pause",
              visible_area: "80%",
              presize: false,
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
              type: "mouse",
              origo: "slidercenter",
              speed: 2000,
              levels: [
                2,
                3,
                4,
                5,
                6,
                7,
                12,
                16,
                10,
                50,
                47,
                48,
                49,
                50,
                51,
                55,
              ],
              type: "mouse",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              nextSlideOnWindowFocus: "off",
              disableFocusListener: false,
            },
          });
      }
    });

    /* ===== REVOLUTION SLIDER MARKETING ===== */

    if (tpj("#rev_slider_1014_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_1014_1");
    } else {
      revapi1014 = tpj("#rev_slider_1014_1")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "revolution/js/",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false,
            },
            arrows: {
              style: "uranus",
              enable: true,
              hide_onmobile: true,
              hide_under: 768,
              hide_onleave: false,
              tmp: "",
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0,
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0,
              },
            },
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1240, 1024, 778, 480],
          gridheight: [868, 768, 960, 600],
          lazyType: "none",
          shadow: 0,
          spinner: "off",
          stopLoop: "on",
          stopAfterLoops: 0,
          stopAtSlide: 1,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAutoWidth: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "60px",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
    }
    RsTypewriterAddOn(tpj, revapi1014);

    /* ===== REVOLUTION SLIDER STUDIO ===== */

    if (tpj("#rev_slider_975_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_975_1");
    } else {
      $("#rev_slider_975_1")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "revolution/js/",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 50,
              swipe_direction: "horizontal",
              drag_block_vertical: false,
            },
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1240, 1024, 778, 480],
          gridheight: [868, 768, 960, 720],
          lazyType: "smart",
          parallax: {
            type: "scroll",
            origo: "enterpoint",
            speed: 400,
            levels: [
              5,
              10,
              15,
              25,
              20,
              30,
              35,
              40,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              55,
            ],
            type: "scroll",
          },
          shadow: 0,
          spinner: "off",
          stopLoop: "on",
          stopAfterLoops: 0,
          stopAtSlide: 1,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAutoWidth: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "60px",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
      jQuery(".lightsensor").on("mousemove", function () {
        var time = Math.round(Math.random() * 20) / 100,
          alpha = 0.7 + (Math.random() * 3) / 10;
        punchgs.TweenLite.to(jQuery(".lighton"), time, {
          autoAlpha: alpha,
          ease: punchgs.Power3.easeOut,
        });
      });
    }

    /* ===== REVOLUTION SLIDER DIGITAL ===== */

    if (tpj("#rev_slider_1078_2").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_1078_2");
    } else {
      $("#rev_slider_1078_2")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "revolution/js/",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false,
            },
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: true,
              hide_under: 600,
              hide_onleave: true,
              hide_delay: 200,
              hide_delay_mobile: 1200,
              tmp:
                '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0,
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0,
              },
            },
            bullets: {
              enable: true,
              hide_onmobile: false,
              hide_under: 600,
              hide_onleave: true,
              hide_delay: 200,
              hide_delay_mobile: 1200,
              direction: "horizontal",
              h_align: "center",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 30,
              space: 15,
              style: "uranus",
              tmp: '<span class="tp-bullet-inner"></span>',
            },
          },
          viewPort: {
            enable: false,
            outof: "pause",
            visible_area: "80%",
            presize: false,
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1240, 1024, 778, 480],
          gridheight: [600, 600, 500, 400],
          lazyType: "none",
          parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
            type: "mouse",
          },
          shadow: 0,
          spinner: "off",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
    }

    /* ===== REVOLUTION SLIDER CREATIVE AGENCY ===== */

    if ($("#rev_slider_347_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_347_1");
    } else {
      $("#rev_slider_347_1")
        .show()
        .revolution({
          sliderType: "hero",
          jsFileLocation: "revolution/js/",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 9000,
          responsiveLevels: [1240, 1240, 778, 480],
          visibilityLevels: [1240, 1240, 778, 480],
          gridwidth: [1240, 1240, 778, 480],
          gridheight: [868, 868, 960, 720],
          lazyType: "none",
          parallax: {
            type: "scroll",
            origo: "slidercenter",
            speed: 1000,
            speedbg: 0,
            speedls: 2000,
            levels: [
              8,
              16,
              24,
              32,
              -8,
              -16,
              -24,
              -32,
              36,
              2,
              4,
              6,
              50,
              -30,
              -20,
              55,
            ],
          },
          shadow: 0,
          spinner: "",
          autoHeight: "off",
          fullScreenAutoWidth: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            disableFocusListener: false,
          },
        });
    }

    /* ===== REVOLUTION SLIDER 3D PARALLAX ===== */

    if (tpj("#rev_slider_1079_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_1079_1");
    } else {
      $("#rev_slider_1079_1")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "revolution/js/",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "uranus",
              enable: false,
              hide_onmobile: false,
              hide_onleave: false,
              tmp: "",
              left: {
                h_align: "center",
                v_align: "bottom",
                h_offset: -30,
                v_offset: 60,
              },
              right: {
                h_align: "center",
                v_align: "bottom",
                h_offset: 30,
                v_offset: 60,
              },
            },
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1240, 1024, 778, 480],
          gridheight: [768, 668, 960, 720],
          lazyType: "single",
          parallax: {
            type: "3D",
            origo: "slidercenter",
            speed: 400,
            levels: [
              50,
              10,
              8,
              15,
              20,
              30,
              35,
              40,
              0,
              50,
              47,
              48,
              49,
              50,
              51,
              55,
            ],
            ddd_shadow: "off",
            ddd_bgfreeze: "off",
            ddd_overflow: "hidden",
            ddd_layer_overflow: "visible",
            ddd_z_correction: 65,
          },
          spinner: "off",
          stopLoop: "on",
          stopAfterLoops: 0,
          stopAtSlide: 1,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAutoWidth: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "60px",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
    }

    /* ===== ONE PAGE SCROLLER ===== */

    $("a.page-scroll").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 50,
          },
          1000,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    /* ===== PRELOADER  ===== */

    $("#loader-overlay").delay(500).fadeOut();
    $(".loader").delay(1000).fadeOut("slow");

    $(window).trigger("scroll");
    $(window).trigger("resize");

    /* ===== Parallax Stellar ===== */

    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };

    $(window).stellar({
      horizontalScrolling: false,
      hideDistantElements: true,
      verticalScrolling: !isMobile.any(),
      scrollProperty: "scroll",
      responsive: true,
    });

    /* ===== ONE PAGE SCROLLER ===== */

    $("a.page-scroll").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 50,
          },
          1000,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    /* ===== FIT VIDEOS ===== */
    $(".fit-videos").fitVids();

    /* ===== PARALLAX EFFECTS===== */
    function parallaxEffect() {
      $(".parallax-effect").parallax();
    }

    function parallaxBackground() {
      $(".parallax-bg").parallaxBackground();
    }

    /* === MAGNIFIC POPUP === */

    $(".magnific-lightbox").magnificPopup({
      type: "image",
      mainClass: "mfp-fade",
      removalDelay: 160,
      fixedContentPos: false,
      // other options
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
})(jQuery);
