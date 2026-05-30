# Zoe's Portfolio

This is a simple GitHub Pages-ready personal portfolio website for Zoe. It uses only basic HTML, CSS, and vanilla JavaScript, so it can run without npm, build tools, or extra dependencies.

## Files

- `index.html` is the page content.
- `styles.css` controls the colors, layout, and responsive design.
- `script.js` controls smooth scrolling, artwork filters, missing image fallbacks, and the back-to-top button.
- `assets/art/` is where artwork images go.
- `assets/files/` is where PDFs, documents, and downloads go.
- `assets/images/` is for decorative site images, such as the hero image.
- `assets/photos/` is where photos taken by Zoe go.

## How To Edit Website Text

Open `index.html` and look for comments such as:

```html
<!-- Edit this paragraph to describe Zoe's creative interests. -->
```

Change the text between the HTML tags. For example, to edit the About section, change the paragraph inside the About section.

Keep public text safe and first-name-only. Use "Zoe" instead of a full name.

## How To Add Artwork Images

1. Put PNG or JPG files inside `assets/art/`.
2. Use simple file names, such as `art-1.png`, `rainbow-garden.jpg`, or `paper-flowers.png`.
3. Open `index.html`.
4. Find an artwork card in the Art Gallery section.
5. Update the image `src`.

Example:

```html
<img class="art-image" src="assets/art/rainbow-garden.jpg" alt="Rainbow Garden, a colorful drawing by Zoe.">
```

You can copy and paste an entire artwork `<article>` block to add more gallery cards. Update the title, medium, description, image path, and `data-category`.

Available gallery categories are:

- `drawing`
- `painting`
- `craft`
- `digital`

## How To Add Photos Zoe Took

1. Put JPG, PNG, or WebP photos inside `assets/photos/`.
2. Use simple file names, such as `photo-2.jpg`, `flower-closeup.jpg`, or `favorite-view.webp`.
3. Open `index.html`.
4. Find the Photos I Took section.
5. Update the image `src`, `alt`, title, category, and caption.

Example:

```html
<img class="photo-image" src="assets/photos/flower-closeup.jpg" alt="A close-up photo of a flower.">
```

You can copy and paste an entire photo `<article>` block to add more photo cards.

## How To Add Downloadable Files

1. Put PDFs, documents, or approved images inside `assets/files/`.
2. Open `index.html`.
3. Find the Files and Downloads section.
4. Update the link `href`.

Example:

```html
<a class="text-link" href="assets/files/story-example.pdf" target="_blank" rel="noopener">Open story-example.pdf</a>
```

Use `target="_blank"` for PDFs or files that should open in a new browser tab.

## How To Preview Locally

Open `index.html` in a web browser. You can double-click the file or right-click it and choose a browser.

No local server is required.

## How To Publish With GitHub Pages

1. Make sure the repository is named `<github-username>.github.io` for a personal site.
2. Push these files to the `main` branch.
3. Open the repository on GitHub.
4. Go to `Settings` -> `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select branch `main` and folder `/root`.
7. Save the settings.

After GitHub finishes publishing, the site should be available at:

```text
https://<github-username>.github.io
```

## Privacy Reminders

Because this is a public website for a child, do not post:

- Full name
- School name
- Home address
- Phone number
- Email address
- Birthday
- Daily schedule
- Photos with visible addresses, school badges, name tags, license plates, or other identifying details

Prefer first name only. Review every image and file before uploading it.
