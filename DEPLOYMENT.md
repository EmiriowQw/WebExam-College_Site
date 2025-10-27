# Deployment Guide - Engineering College Website

## GitHub Pages Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Repository settings:
   - **Repository name:** `engineering-college-static-site`
   - **Description:** "Static multi-page website for Engineering College - HTML5, CSS3, Bootstrap 5, JavaScript"
   - **Visibility:** Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

Open your terminal in the project directory and run:

```bash
# Set the remote repository
git remote add origin https://github.com/YOUR-USERNAME/engineering-college-static-site.git

# Rename the default branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top navigation)
3. In the left sidebar, click on "Pages"
4. Under "Source":
   - Select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "/ (root)"
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Website

After deployment completes:
- Your site will be available at: `https://YOUR-USERNAME.github.io/engineering-college-static-site/`
- Copy this URL and update the README.md file with your live URL

### Step 5: Update README with Live URL

```bash
# Edit README.md and add your live URL
# Then commit and push the change
git add README.md
git commit -m "Update README with live GitHub Pages URL"
git push origin main
```

## Verification Checklist

After deployment, verify:

- ✅ Home page loads correctly
- ✅ All navigation links work
- ✅ All 6 pages are accessible
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ Forms have validation working
- ✅ Smooth scroll functions properly
- ✅ Back-to-top button appears and works
- ✅ No console errors in browser DevTools
- ✅ All Bootstrap components function (navbar collapse, accordions)

## Testing URLs

Test each page individually:
- `https://YOUR-USERNAME.github.io/engineering-college-static-site/`
- `https://YOUR-USERNAME.github.io/engineering-college-static-site/programs.html`
- `https://YOUR-USERNAME.github.io/engineering-college-static-site/admissions.html`
- `https://YOUR-USERNAME.github.io/engineering-college-static-site/student-life.html`
- `https://YOUR-USERNAME.github.io/engineering-college-static-site/contact.html`
- `https://YOUR-USERNAME.github.io/engineering-college-static-site/registration.html`

## Common Issues & Solutions

### Issue: 404 Page Not Found
**Solution:** Ensure you selected the "main" branch and "/ (root)" folder in GitHub Pages settings.

### Issue: CSS/JS Not Loading
**Solution:** Check that file paths are relative (no leading slash). GitHub Pages is case-sensitive.

### Issue: Changes Not Appearing
**Solution:** 
1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Wait a few minutes for GitHub Pages to rebuild
3. Check the Actions tab on GitHub for deployment status

### Issue: Links Not Working
**Solution:** Ensure all internal links use relative paths without leading slashes.

## Alternative Deployment Options

### Netlify
1. Sign up at [Netlify](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or use `/`)
5. Click "Deploy site"

### Vercel
1. Sign up at [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Framework: Select "Other"
5. Click "Deploy"

### Surge.sh (Quick Deploy)
```bash
# Install Surge globally
npm install -g surge

# Navigate to project directory
cd engineering-college-static-site

# Deploy
surge
```

## Updating the Live Site

After making changes:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

## Performance Optimization Tips

For best performance:
1. Compress images before adding to `images/` folder
2. Use WebP format for images when possible
3. Keep total page weight under 2MB
4. Test with Google Lighthouse for performance metrics

## Maintenance

### Regular Updates
- Keep Bootstrap CDN links updated
- Test across different browsers regularly
- Monitor for broken links
- Update content as needed

### Security
- Use HTTPS (automatic with GitHub Pages)
- Keep dependencies updated
- Review form submissions if backend is added later

## Support

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review [GitHub Community Forum](https://github.community)
3. Contact: info@engineeringcollege.edu

---

**Deployment Date:** October 27, 2025

**Last Updated:** October 27, 2025

