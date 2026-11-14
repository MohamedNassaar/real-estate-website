# Helcoo Dubai Real Estate Website

A responsive static real estate website built with HTML, CSS and vanilla JavaScript. No build step or package installation is required.

## Run locally

Open `index.html` in a browser or serve the `real_estate-website` folder with VS Code Live Server or another static web server. Use a local server for deployment checks; browser behavior for storage and `mailto:` links can differ when opening a `file:` URL.

## Included

- Responsive property search and community filters.
- Property detail dialogs, accessible keyboard navigation and a mobile menu.
- Optional browser-local favourites; saved homes are not sent to Helcoo.
- Responsive layouts, reduced-motion support, page metadata and lazy-loaded listing images.
- Contact links that open the visitor's email or phone app.

## Required before launch

This project is a front-end starter, not a complete live listings or lead-management system. The property cards and their pricing are illustrative; do not advertise them as real listings. Before publishing:

1. Replace example listings and stock photography with verified, current inventory and appropriately licensed images. Confirm all prices, descriptions, availability and property disclosures.
2. Verify the business name, telephone number, email address and office address currently shown in the page.
3. Publish a reviewed privacy notice and any applicable UAE licensing, brokerage and regulatory disclosures. The current footer link is only a privacy-enquiry email, not a privacy policy.
4. Connect property search to an authoritative data source and enquiries to a monitored backend or CRM. The current search only filters the four static cards, and contact links depend on the visitor having a configured email or phone app.
5. Test the deployed HTTPS site, image/font availability, contact routes, mobile layouts and keyboard/screen-reader experience. Configure the production domain, canonical URL, social-sharing image and hosting-level security headers when the domain is known.

## Files

- `index.html` — page structure, metadata and illustrative listings
- `styles.css` — responsive visual system
- `script.js` — client-side filters, favourites, navigation and property dialogs
