# Outbound links and affiliate activation

All vendor links on this site are **plain, untracked URLs**. Nothing is monetised yet.
This file explains how to switch monetisation on without touching any article.

## How it works

An outbound vendor link is written like this:

```html
<a data-out="kit" href="https://kit.com/">Kit</a>
```

* `href` — the plain vendor URL. Works with JavaScript disabled, no tracking parameters.
* `data-out` — the key looked up in `assets/links.js`.

On page load, `assets/links.js` rewrites `href` from the registry. If the registry entry has an
`affiliate` value, the link also gets `rel="sponsored nofollow noopener"` and a visible
disclosure line is unhidden.

## To activate an affiliate link

1. Open `assets/links.js`.
2. Put the tracking URL in the `affiliate` field of that vendor:

   ```js
   kit: { url: "https://kit.com/", affiliate: "https://kit.com/affiliates/XXXX" }
   ```

3. Commit and push. Every page that links to that vendor is updated — no HTML edits.

To switch monetisation off again, set `affiliate` back to `null`.

## Registry keys in use

| key | vendor | status |
|---|---|---|
| `kit` | Kit (ex ConvertKit) | not registered |
| `getresponse` | GetResponse | not registered |
| `mailerlite` | MailerLite | not registered |
| `aweber` | AWeber | not registered |
| `omnisend` | Omnisend | not registered |
| `teachable` | Teachable | not registered |
| `beehiiv` | beehiiv | not registered |
| `mailchimp` | Mailchimp | not registered |

## Rules this site follows

* Never invent prices, limits or features — link to the vendor’s own pricing page instead.
* Never place an affiliate link before a plain link to the same vendor where a reader simply needs
  the official site.
* Affiliate status never changes ranking; a vendor can be described negatively in the same page that
  links to it.
* `rel="sponsored nofollow"` on every monetised link, and a visible disclosure on the page.
