## Goal

Make the LinkedIn, Instagram, and Discord links in the Contact section actually open the destination profiles in a new browser tab (not inside the Lovable preview iframe, which Instagram/LinkedIn block).

## Changes

**`src/components/portfolio/Contact.tsx`**

1. Add `target="_blank"` and `rel="noopener noreferrer"` to each social `<a>` card so clicks open in a new tab and bypass the iframe restriction.
2. Update the `socials` array with the confirmed handles:
   - LinkedIn → `https://www.linkedin.com/in/harshit-sharma` *(placeholder — needs your real profile URL, see question below)*
   - Instagram → `https://instagram.com/harshit_sharma_xvr`
   - Discord → leave as `#` until you share a handle/invite, or remove the card.

## Need from you

I need your **exact LinkedIn profile URL** (open LinkedIn → your profile → copy the URL from the address bar; it looks like `https://www.linkedin.com/in/your-slug/`). The current value is a guess and is probably why LinkedIn says it can't connect.

Once you approve, I'll apply the fix and you can paste the LinkedIn URL in your next message (or I'll use the guessed one if you confirm it's correct).
