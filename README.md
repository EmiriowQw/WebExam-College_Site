# Engineering College - Static Multi-Page Website

A professional, responsive brochure-style website for Engineering College, built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## 🎓 Project Overview

This project is a comprehensive static website designed to showcase Engineering College's programs, admissions information, student life, and provide easy contact and registration options for prospective students. The website follows modern web development best practices with a focus on accessibility, responsive design, and user experience.

**Live URL:** [To be added after GitHub Pages deployment]

**Repository:** https://github.com/[username]/engineering-college-static-site

## 📄 Page Map

The website consists of 6 main pages:

### 1. **Home (index.html)**
   - Hero section with college tagline and primary call-to-action
   - Three key highlights of the institution (cards)
   - Statistics section showcasing student numbers, programs, faculty, and employment rate
   - Programs preview with links to detailed program pages
   - Call-to-action section encouraging application

### 2. **Programs (programs.html)**
   - Introduction to Engineering College with mission statement
   - Detailed information about four engineering programs:
     - Computer Engineering
     - Mechanical Engineering
     - Electrical Engineering
     - Civil Engineering
   - Each program includes focus areas, duration, and credits
   - Features section highlighting program benefits

### 3. **Admissions (admissions.html)**
   - Comprehensive admissions overview
   - Step-by-step application process (6 steps)
   - Detailed tuition and fees table with full-time and part-time pricing
   - Important dates for Fall and Spring intakes
   - Academic and standardized test requirements
   - Call-to-action for starting the application

### 4. **Student Life (student-life.html)**
   - Campus life overview with statistics
   - Nine student clubs and organizations across different categories:
     - Technical (Programming, Robotics, Automotive)
     - Entrepreneurship (Innovation Lab)
     - Cultural (International Students, Music & Arts)
     - Social (Community Service)
     - Media (Photography & Film, Engineering Magazine)
   - Recent events and news section (6 articles)
   - Student testimonials (3 testimonials)
   - Sports and recreation information

### 5. **Contact (contact.html)**
   - Contact form with client-side validation
   - Anti-spam math captcha (5 + 3 = 8)
   - Complete contact information (address, phone, email, office hours)
   - Department contacts (4 key departments)
   - Campus visit information
   - FAQ accordion section (5 questions)

### 6. **Registration (registration.html)**
   - Advanced registration form with comprehensive validation
   - Personal information section (name, email, phone)
   - Program selection and study mode (full-time/part-time)
   - Intended intake date selection
   - Password creation with strength indicator
   - Optional scholarship interest checkbox
   - Terms and conditions acceptance
   - Application tips and next steps information

## ✨ Features Implemented

### Core Features

1. **Fixed Top Navigation Bar**
   - Present on all pages
   - Responsive hamburger menu on mobile devices (<992px)
   - Active state highlighting for current page
   - Smooth collapse/expand animation

2. **Responsive Design**
   - Mobile-first approach using Bootstrap 5 breakpoints
   - Tested on 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px (desktop)
   - No horizontal scrolling on any breakpoint
   - Images use responsive classes (img-fluid)
   - Grid layouts adapt from 1 column (mobile) to multiple columns (desktop)

3. **Accessibility Features**
   - Semantic HTML5 elements (header, nav, main, section, article, footer)
   - Proper heading hierarchy (h1 → h6)
   - Form labels properly associated with inputs using `for` attribute
   - Alt text for all decorative and informative images
   - ARIA labels for icon buttons and interactive elements
   - Keyboard navigation support (Tab, Enter, Space)
   - Visible focus states on all interactive elements
   - Color contrast ratio meets WCAG 2.1 AA standards (≥4.5:1)
   - Skip-to-content link for keyboard users

### Form Features

#### Contact Form (Basic)
- **Fields:** Name, Email, Subject, Message
- **Anti-spam:** Simple math captcha (5 + 3)
- **Validation:** Client-side validation with inline error messages
- **Feedback:** Success/error alerts
- **Accessibility:** Proper labels, error associations, keyboard accessible

#### Registration Form (Advanced)
- **Fields:** 
  - Full Name (text validation, letters and spaces only)
  - Email (email format validation)
  - Phone (10+ digits validation)
  - Program selection (dropdown with 4 options)
  - Study mode (radio buttons: Full-time/Part-time)
  - Intended intake date (date picker)
  - Password (minimum 8 characters)
  - Confirm password (must match)
  - Terms & conditions (checkbox, required)
  - Scholarship interest (optional checkbox)
- **Real-time Validation:**
  - Validates on blur/input events
  - Inline error messages (is-invalid class)
  - Success states (is-valid class)
  - Password strength indicator (weak/medium/strong)
  - Submit button disabled until all required fields are valid
- **Success Confirmation:**
  - Form container hidden on successful submission
  - Success message displayed with next steps
  - Links to return home or view admissions info

### JavaScript Interactive Features

#### 1. **Smooth Scroll Navigation**
   - Intercepts anchor link clicks
   - Smooth scroll behavior to target sections
   - Accounts for fixed navbar height
   - Enhances in-page navigation experience
   - Progressive enhancement (works without JS)

#### 2. **Back-to-Top Button**
   - Fixed position button in bottom-right corner
   - Shows after scrolling 300px down the page
   - Smooth scroll animation back to top
   - Fully keyboard accessible (Tab, Enter, Space)
   - ARIA label for screen readers
   - Responsive sizing (45px mobile, 50px desktop)

#### 3. **Form Validation (Both Forms)**
   - Real-time validation on blur and input events
   - Comprehensive validation rules
   - Dynamic error/success messaging
   - Password strength indicator
   - Submit prevention until valid
   - Success/error alerts

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5.3.2** - Responsive framework and components
- **Bootstrap Icons 1.11.1** - Icon library
- **JavaScript ES6+** - Interactive functionality (vanilla, no frameworks)

## 🎨 Design System

### Color Palette (Modern Professional)
- **Primary:** #0056b3 (Professional Blue)
- **Secondary:** #6c757d (Gray)
- **Accent:** #17a2b8 (Teal)
- **Background:** #ffffff, #f8f9fa (Light Gray)
- **Text:** #212529 (Dark Gray)
- **Success:** #28a745
- **Danger:** #dc3545

### Typography
- **Font Family:** System font stack (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)
- **Heading Weights:** 600-700
- **Body Text:** 400
- **Line Height:** 1.6

### Spacing System
- Based on 8px unit system
- Consistent padding and margins using Bootstrap utilities
- Sections: 80px padding on desktop, 60px on tablet, 40px on mobile

## 📱 Responsive Breakpoints

- **Mobile:** < 576px (1 column layouts)
- **Tablet:** 768px - 991px (2 column layouts)
- **Desktop:** ≥ 992px (3-4 column layouts)
- **Large Desktop:** ≥ 1200px (optimized spacing)

## ♿ Accessibility Highlights

- **WCAG 2.1 Level AA Compliant**
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Form error handling
- Focus visible states
- Skip links for main content
- Descriptive link text
- Alt text for all images

## 📦 File Structure

```
engineering-college-static-site/
├── index.html              # Home page
├── programs.html           # Programs/About page
├── admissions.html         # Admissions information
├── student-life.html       # Student life and activities
├── contact.html            # Contact form and info
├── registration.html       # Registration form
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   └── main.js            # JavaScript functionality
├── images/                 # Image assets (to be added)
├── README.md              # This file
└── .gitignore             # Git ignore file
```

## 🚀 Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Running Locally

#### Option 1: Direct File Opening
1. Clone the repository
   ```bash
   git clone https://github.com/[username]/engineering-college-static-site.git
   cd engineering-college-static-site
   ```

2. Open `index.html` in your web browser
   - Double-click the file, or
   - Right-click → Open with → Browser

#### Option 2: Using Python's HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

#### Option 3: Using Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Testing Responsiveness
- Use browser DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
- Test on actual devices when possible

## 🔍 Browser Compatibility

Tested and working on:
- Chrome 120+ ✅
- Firefox 120+ ✅
- Safari 17+ ✅
- Edge 120+ ✅

## 🎯 Known Limitations

1. **Static Content:** No backend server or database; forms perform client-side validation only
2. **Form Submission:** Forms display success messages but don't actually send data (demo purposes)
3. **External Links:** Social media and some navigation links are placeholder anchors (#)
4. **Images:** Using SVG data URIs and icon fonts; actual photos would enhance visual appeal
5. **Search Functionality:** No search feature implemented
6. **Multi-language Support:** English only
7. **Authentication:** Registration form creates client-side validation but no actual user accounts

## 📝 Asset Credits & Attributions

- **Bootstrap 5.3.2:** Licensed under MIT - https://getbootstrap.com
- **Bootstrap Icons 1.11.1:** Licensed under MIT - https://icons.getbootstrap.com
- **Color Palette:** Custom design based on modern web design principles
- **Typography:** System font stack (no external fonts)
- **Code:** Original implementation by [Your Name]

### Third-Party Resources
- CDN services provided by jsDelivr for Bootstrap and Bootstrap Icons
- No external images used; all visual elements created with CSS and icons

## 🚢 Deployment

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Engineering College website"
   git branch -M main
   git remote add origin https://github.com/[username]/engineering-college-static-site.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: main / (root)
   - Click Save

3. **Access Your Site:**
   - URL will be: `https://[username].github.io/engineering-college-static-site/`
   - May take a few minutes to deploy

### Alternative Deployment Options
- **Netlify:** Drag and drop folder or connect GitHub repository
- **Vercel:** Import GitHub repository
- **Surge.sh:** Use CLI for quick deployment
- **Any static hosting service**

## 📈 Performance Considerations

- Minimal external dependencies (Bootstrap and Icons from CDN)
- Optimized CSS with reusable classes
- Efficient JavaScript with event delegation
- No large images or media files
- Total page weight: < 500KB per page
- Fast load times on 3G networks

## 🔐 Security Considerations

- Client-side validation only (not sufficient for production)
- No sensitive data storage
- No authentication system
- HTTPS recommended for deployment
- Form submission would require backend validation in production

## 📧 Contact & Support

For questions or issues related to this project:

**Engineering College**
- Email: info@engineeringcollege.edu
- Phone: (555) 123-4567
- Address: 123 Engineering Boulevard, Tech City, TC 12345

## 📄 License

This project is created for educational purposes as part of a web development midterm examination.

---

**Built with ❤️ for Engineering College**

*Last Updated: October 27, 2025*

