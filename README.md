# PickInbox

Independent comparisons of email marketing and creator tools. Static site published via GitHub Pages.

Live: <https://ostrovde.github.io/pickinbox/>

## Stack

Plain HTML + one stylesheet. No build step, no framework, no tracking scripts.
Push to `main` and GitHub Pages rebuilds automatically (`legacy` build type, `.nojekyll` present).

```
index.html                            hub / start page
best-email-marketing-platforms.html   comparison of five platforms
how-to-choose-email-platform.html     decision guide (four checks)
kit-vs-getresponse.html               head-to-head
kit-review.html                       single-tool review
how-to-build-an-email-list.html       guide
email-deliverability-basics.html      guide
about.html                            who writes this, how affiliate links work
assets/style.css                      design system (single file)
assets/links.js                       outbound-link registry — see LINKS.md
robots.txt, sitemap.xml               indexing
```

## Conventions for a new page

* English, `<html lang="en">`, per-page `<title>`, `<meta name="description">`, canonical URL.
* Link `assets/style.css` and `assets/links.js` (defer), and copy the header/footer block verbatim.
* Every outbound vendor link goes through the registry:
  `<a data-out="kit" href="https://kit.com/">Kit</a>` — never a bare tracking URL in HTML.
* After adding a page, add its URL to `sitemap.xml` and link it from `index.html`.
* No invented prices or limits. If a figure is uncertain, link to the vendor’s pricing page.

## Monetisation

All vendor links are currently plain and untracked — nothing is monetised yet.
Activation is a one-file change, documented in [LINKS.md](LINKS.md).

## Deploy

```powershell
git add -A
git commit -m "..."
git push origin main
```

Then confirm the new URLs return HTTP 200 (Pages takes roughly a minute).
