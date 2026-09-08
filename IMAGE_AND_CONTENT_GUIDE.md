# Ruuzgym image and content guide

## Add or replace product images

The product catalog lives in [`products.js`](./products.js). Each product has an `image` field:

```js
image: "https://your-hosted-image-url.com/product.jpg",
```

Replace the URL with a direct, publicly accessible image URL. For the best result, use a clear landscape or square photo with the equipment centered, good lighting, and no important details cropped out. Cloudinary is recommended because it provides reliable image delivery and resizing. Avoid links that require a login, point to a webpage instead of an image, or expire quickly.

After editing `products.js`, refresh the site. The small gear button on the site also opens the admin image manager. That manager is useful for quickly testing a new image URL in the current browser; permanent catalog changes should be made in `products.js` and committed to the repository.

## Update product copy

Within each product object, update `name`, `desc`, `features`, and `wa`. Keep descriptions practical and locally useful: mention whether the item suits a home gym, studio, school, hotel, or commercial gym, and include relevant details such as load capacity, available sizes, installation, or delivery.

## Add a new product

Copy an existing object in `products.js`, give it a new numeric `id` and `num`, choose a `cat` from `benches`, `machines`, `weights`, `cardio`, `accessories`, `services`, or `all`, then update its name, description, features, image, and WhatsApp enquiry text. The storefront and admin manager render new products automatically.

## Daily motivation

The first Ruuzgym Journal post is in the `#journal` section of `index.html`. Add future entries as additional `.journal-card` articles, keeping the tone encouraging, practical, and relevant to Ghanaian homes, businesses, families, schools, hotels, and community gyms. Avoid medical promises; focus on consistency, energy, strength, confidence, and long-term wellbeing.

## Recommended image checklist

- Direct image URL ending in a supported format such as `.jpg`, `.jpeg`, `.png`, or `.webp`.
- Minimum width of 1200 pixels where possible.
- Clean background and enough contrast against the card background.
- Accurate product representation; do not use a different model just because it looks similar.
- Meaningful alt text is generated from the product name automatically.
- Test the image on mobile after publishing.
EOF

cat >> /home/ubuntu/ruuzgym/README.md <<'EOF'

## 2026 storefront update

The storefront now has a Ghana-focused editorial design, a Ruuzgym Daily Journal section, stronger WhatsApp calls to action, responsive layouts, and a maintainable product catalog in `products.js`. See `IMAGE_AND_CONTENT_GUIDE.md` for the image and content workflow.
EOF
