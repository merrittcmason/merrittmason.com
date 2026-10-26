# Visual audit - merrittmason.com (2026-10-26)
Score 72/100. Live site is the old Vite build (headshot.PNG hero).
- Mobile home: content forces 425px layout width on a 390px viewport; hamburger clipped at right edge (horizontal overflow). /projects and /contact fit (390).
- Above fold mobile: name + intro + headshot visible; "View Resume" CTA top=795 of 844 (barely); Contact only in hamburger.
- Tap targets <44px: theme toggle 36x36, footer links 39-53x20, social icons 36x36, carousel dots 12x12, logo 132x28.
- Headshot.PNG 1254px natural, displayed 248px (oversized PNG). Project images (Unsplash) load OK, alt text present.
- Dark theme: white on ~#222, crimson accent; legible. Base font 16px; 23 text nodes <14px on /projects.
- Desktop: H1, Resume CTA (top 356) visible above fold.
Screenshots: merrittmason.com-audit/screenshots/*.png
