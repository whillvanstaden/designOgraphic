# designOgraphic

A responsive static homepage based on the supplied four-page Homepage.pdf layout. No build step, framework or package installation is needed.

## Preview

Open `index.html` in a browser, or serve this folder with `python -m http.server 8080`.

## Edit

- `content.js`: email, city, portfolio images, showreel, founder photo, approved testimonials, client logos and social URLs.
- `index.html`: page copy and section order.
- `styles.css`: sizes, spacing, colours and mobile breakpoints.
- `assets/logo.png`: the supplied original logo.
- `assets/logo-transparent.svg`: original logo with an SVG transparency filter that removes its white background without regenerating its lettering. Image-tool candidates were discarded because they changed the edges.
- `privacy.html`: privacy policy describing the current static site and email-draft form.
- `assets/clients/`: six original client PNGs supplied through Drive and SVG display wrappers that fit their visible artwork without changing the original image data. Dark tiles keep the supplied white logos visible.

The PDF page boundaries are removed to make a continuous website. The wide hero frame follows the PDF's displayed proportions and uses a 4:5 phone frame. The supplied logo establishes orange and dark ink colours. The owner's October 13 revisions combine the four process steps into one panel, replace pricing with a project enquiry form, remove the orange contact section and add a privacy page.

Portfolio previews, logo spaces and testimonial spaces are explicitly marked. No client endorsements, project results, location or prices have been invented. `info@designOgraphic.co.za` is a dummy address provided by the owner. Confirm or replace it and set `emailIsPreview: false` before accepting real enquiries. Update the privacy page with verified business contact and retention details at that time.

The form opens from the "Tell us about your project" button and starts collapsed to save space. The native disclosure supports keyboard use and retains entered values when closed and reopened. The form validates required name, phone, email, service, future-or-today deadline and project description. It prepares an email draft with all fields; the visitor reviews and sends it in their email app. No submission is sent automatically and no form content is saved to a website database, cookies or local storage. A copyable on-page fallback is available if no email app opens. Adding automatic delivery will require a working destination and a separate form service or backend, with an updated privacy policy. Add actual MP4 content to enable the video player.

## GitHub Pages

The included GitHub Actions workflow publishes the static site from `main`.
In repository **Settings â†’ Pages â†’ Build and deployment**, select **GitHub Actions** as the source. Then run the **Deploy website to GitHub Pages** workflow in the Actions tab (or push a change to `main`).

Expected address after a successful deployment: https://whillvanstaden.github.io/designOgraphic/

All asset paths are relative so they work under the repository URL.
