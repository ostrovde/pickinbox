/* PickInbox outbound-link registry.
 *
 * Every vendor link on this site is written as:
 *     <a data-out="kit" href="https://kit.com/">Kit</a>
 * The href is a plain, honest vendor URL that works with JavaScript disabled.
 *
 * When an affiliate programme is approved, put the tracking URL in `affiliate`
 * below. Every matching link on every page upgrades automatically, gains
 * rel="sponsored nofollow noopener" and the page keeps its plain fallback href.
 * This is the only file that has to change — see LINKS.md.
 */
window.PICKINBOX_LINKS = {
  kit:         { url: "https://kit.com/",                   affiliate: null },
  getresponse: { url: "https://www.getresponse.com/",       affiliate: null },
  mailerlite:  { url: "https://www.mailerlite.com/",        affiliate: null },
  aweber:      { url: "https://www.aweber.com/",            affiliate: null },
  omnisend:    { url: "https://www.omnisend.com/",          affiliate: null },
  teachable:   { url: "https://teachable.com/",             affiliate: null },
  beehiiv:     { url: "https://www.beehiiv.com/",           affiliate: null },
  mailchimp:   { url: "https://mailchimp.com/",             affiliate: null }
};

(function () {
  "use strict";

  function upgrade() {
    var registry = window.PICKINBOX_LINKS || {};
    var links = document.querySelectorAll("a[data-out]");
    var marked = 0;

    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var entry = registry[a.getAttribute("data-out")];
      if (!entry) { continue; }

      if (entry.affiliate) {
        a.href = entry.affiliate;
        a.rel = "sponsored nofollow noopener";
        marked++;
      } else {
        a.href = entry.url;
        a.rel = "noopener";
      }
      a.target = "_blank";
    }

    // One visible disclosure line only when a sponsored link is actually on the page.
    if (marked > 0) {
      var notes = document.querySelectorAll(".sponsored-note");
      for (var j = 0; j < notes.length; j++) { notes[j].hidden = false; }
      var boxes = document.querySelectorAll(".note .js-sponsored");
      for (var k = 0; k < boxes.length; k++) { boxes[k].hidden = false; }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", upgrade);
  } else {
    upgrade();
  }
})();
