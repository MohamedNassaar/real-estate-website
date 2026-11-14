# Helcoo Real Estate

A polished, responsive, bilingual real-estate website for Helcoo, built with HTML, CSS and vanilla JavaScript. No build step or package installation is required.

## Run locally

Open `index.html` in a browser or serve the project folder with VS Code Live Server or another static web server. A local server is recommended for testing language preference and favourites, which use browser storage.

## Pages

- `index.html` — homepage, featured homes and neighbourhoods
- `pages/properties.html` — searchable property collection
- `pages/property-details.html` — property details selected by the `id` query parameter
- `pages/about.html` — the Helcoo approach
- `pages/contact.html` — contact details and an enquiry form that opens the visitor's email app

## Features

- English and Arabic language selection with saved preference and right-to-left layout.
- Property filtering by neighbourhood, type and maximum price.
- Property details pages and browser-local favourites.
- Responsive navigation, reveal animations and reduced-motion support.
- Locally stored property, neighbourhood, editorial and agent-illustration imagery.

## Project structure

```text
index.html
pages/
  properties.html
  property-details.html
  about.html
  contact.html
assets/
  fonts/
  icons/
  images/
    agents/
    hero/
    locations/
    properties/
    editorial/
css/
  styles.css
  responsive.css
  components.css
js/
  script.js
  properties.js
  search.js
  favorites.js
  navigation.js
screenshots/
README.md
.gitignore
LICENSE
```

The `screenshots/` folder contains `homepage.png`, `properties.png`, and `mobile-view.png`.

## Assets and launch notes

The site uses stock photography stored in `assets/images/` and an illustrative advisor graphic rather than fabricated agent portraits. Fonts are self-hosted in `assets/fonts/`; each family includes its SIL Open Font License notice.

The properties and prices are illustrative only. Before launch, replace them with verified inventory and approved photography, confirm contact and office details, add reviewed privacy and regulatory disclosures, and connect enquiries to a monitored business workflow. The contact form uses `mailto:` and does not send data to a backend. Review the MIT license attribution before publication.
