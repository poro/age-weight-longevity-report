# Age, Weight, and Longevity Interactive Website
## Deployment Instructions

This document provides instructions for deploying the interactive website version of the "Age, Weight, and Longevity: Beyond BMI" report.

## What's Included

The `age-weight-longevity-website.zip` file contains a fully built, static website with:

- Interactive navigation between report sections
- Professional formatting and responsive design
- All data visualizations integrated
- Downloadable markdown version of the full report
- Complete references with clickable links

## Deployment Options

### Option 1: Simple Web Hosting (Recommended)

1. **Extract the zip file** to your local computer
2. **Upload the contents of the `dist` folder** to any web hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Amazon S3
   - Any standard web hosting provider

The site is completely static and requires no server-side processing, making it compatible with virtually any hosting service.

### Option 2: Local Viewing

1. **Extract the zip file** to your local computer
2. **Open the `dist` folder**
3. **Double-click on `index.html`** to open the website in your default browser

## Customization

If you wish to customize the website:

1. The original React source code is available in the project repository
2. Make your desired changes to the content in `src/App.tsx`
3. Modify styling in `src/App.css` and `src/index.css`
4. Run `pnpm run build` to generate a new production build
5. Deploy the updated `dist` folder

## Technical Details

- Built with React and TypeScript
- Uses modern CSS for styling
- Fully responsive design works on mobile, tablet, and desktop
- All visualizations are included as static PNG files
- No external dependencies or API calls required after deployment

## Support

If you have any questions about deployment or customization, please reach out for assistance.
