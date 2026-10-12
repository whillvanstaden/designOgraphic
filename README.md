# designOgraphic

A responsive static homepage based on the supplied four-page Homepage.pdf layout. No build step, framework or package installation is needed.

## Preview

Open `index.html` in a browser, or serve this folder with `python -m http.server 8080`.

## Edit

- `content.js`: email, city, portfolio images, showreel, founder photo, prices, approved testimonials, client logos and social URLs.
- `index.html`: page copy and section order.
- `styles.css`: sizes, spacing, colours and mobile breakpoints.
- `assets/logo.png`: the supplied original logo, displayed with CSS cropping.

The PDF page boundaries are removed to make a continuous website. Desktop spacing, three-column grids, six 4:3 portfolio spaces, 16:9 showreel, square founder space, and section order follow the source. The wide hero frame follows the PDF's displayed proportions and uses a 4:5 phone frame. The supplied logo establishes orange and dark ink colours.

Portfolio previews, logo spaces and testimonial spaces are explicitly marked. No client endorsements, project results, location or prices have been invented. `info@designOgraphic.co.za` is a dummy address provided by the owner; confirm it and set `emailIsPreview: false` before launch. Email links open the visitor's email app; there is no form backend. Add actual MP4 content to enable the video player.

## GitHub Pages

The included GitHub Actions workflow publishes the static site from `main`.
In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Then run the **Deploy website to GitHub Pages** workflow in the Actions tab (or push a change to `main`).

Expected address after a successful deployment: https://whillvanstaden.github.io/designOgraphic/

All asset paths are relative so they work under the repository URL.
