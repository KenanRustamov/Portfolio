# Portfolio Content Management Guide

This portfolio uses a JSON-based content management system that allows you to update all text, projects, work experience, and social links without touching the code.

## 📁 Content Files Location

All content files are located in `src/data/`:

```
src/data/
├── profile.json       # Profile info, intro text, contact details
├── projects.json      # Project showcase data
├── timeline.json      # Work experience timeline
├── social.json        # Social media links
└── dataLoader.ts      # Auto-loads all data (don't modify)
```

## 🎨 How to Update Content

### 1. Profile Information (`profile.json`)

Update your personal information, intro text, and contact details:

```json
{
  "profile": {
    "title": "Your Name",
    "introText": "Hello, my name is",
    "subtitle": "Your Professional Title",
    "description": "Your bio description...",
    "profileImage": "/your-image.webp",
    "profileImageSrcSet": "/your-image-300.webp 300w, /your-image.webp 1160w",
    "profileImageSizes": "(max-width: 768px) 300px, (max-width: 1024px) 400px, 480px",
    "profileImageAlt": "Your profile picture description"
  },
  "contact": {
    "email": "your-email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "resume": "/your-resume.pdf"
  },
  "metadata": {
    "footerText": "Created By Your Name",
    "sectionTitles": {
      "workExperience": "Work Experience",
      "projects": "Projects"
    }
  }
}
```

### 2. Projects (`projects.json`)

Add, edit, or reorder your projects:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Name",
      "subtitle": "Tech stack used",
      "description": "Detailed project description...",
      "url": "https://your-project-demo.com",
      "githubUrl": "https://github.com/yourusername/project-repo",
      "skills": ["React", "Node.js", "MongoDB"],
      "image": "/project-image.webp",
      "imageSrcSet": "/project-image-250.webp 250w, /project-image.webp 554w",
      "imageSizes": "(max-width: 768px) 250px, (max-width: 1024px) 350px, 450px",
      "alt": "Screenshot of project",
      "featured": true,
      "order": 1
    }
  ],
  "metadata": {
    "title": "Projects",
    "primaryButtonText": "View Demo",
    "secondaryButtonText": "View Code",
    "imageOverlayText": "View Project"
  }
}
```

**To add a new project:**
1. Copy an existing project object
2. Change the `id` to something unique
3. Update all the details
4. Set `order` to control display sequence
5. Set `featured: true` to show it on the homepage

### 3. Work Experience (`timeline.json`)

Add, edit, or reorder your work experience:

```json
{
  "experiences": [
    {
      "id": "unique-company-id",
      "company": "Company Name",
      "position": "Your Job Title",
      "description": "What you did at this company...",
      "url": "https://company-website.com",
      "dates": "2022 - 2024",
      "skills": ["Java", "Spring Boot", "AWS"],
      "featured": true,
      "order": 1
    }
  ],
  "metadata": {
    "title": "Work Experience"
  }
}
```

**To add a new experience:**
1. Copy an existing experience object
2. Change the `id` to something unique
3. Update all the details
4. Set `order` to control timeline sequence (1 = most recent)
5. Set `featured: true` to show it on the homepage

### 4. Social Links (`social.json`)

Manage social media links for both the intro section and footer:

```json
{
  "socialLinks": {
    "intro": [
      {
        "id": "unique-link-id",
        "label": "Email",
        "href": "mailto:your-email@example.com",
        "icon": "emailLogo.svg",
        "alt": "Email",
        "isExternal": false,
        "order": 1
      }
    ],
    "footer": [
      {
        "id": "unique-footer-link-id",
        "label": "GitHub Profile",
        "href": "https://github.com/yourusername",
        "icon": "gitHubLogo.svg",
        "alt": "GitHub",
        "isExternal": true,
        "order": 1
      }
    ]
  },
  "metadata": {
    "iconPath": "/src/images/",
    "defaultExternal": true
  }
}
```

## 🖼️ Adding Images

### Project Images
1. Add your image files to the `public/` folder
2. Use WebP format for best performance
3. Create responsive versions:
   - `your-project.webp` (main image)
   - `your-project-250.webp` (small screens)
4. Update the `image` and `imageSrcSet` fields in your project JSON

### Profile Images
1. Add your profile image to the `public/` folder
2. Create responsive versions:
   - `your-profile.webp` (main image)
   - `your-profile-300.webp` (small screens)
3. Update the profile image fields in `profile.json`

## 🎯 Content Tips

### Writing Descriptions
- **Projects**: Focus on what the project does and key technologies
- **Work Experience**: Highlight your achievements and impact
- **Bio**: Keep it concise but informative (2-3 sentences)

### SEO & Accessibility
- Always include descriptive `alt` text for images
- Use meaningful `id` values for content items
- Keep skill lists relevant and current

### Order & Display
- Use the `order` field to control display sequence
- Lower numbers appear first (1, 2, 3...)
- Use `featured: true/false` to control what appears on the homepage

## 🚀 Publishing Changes

After updating any JSON file:

1. **Test locally:**
   ```bash
   npm start
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Deploy your changes** (method depends on your hosting)

## 🛠️ Available Icons

Current available icons (in `src/images/`):
- `emailLogo.svg`
- `gitHubLogo.svg` 
- `linkedInLogo.svg`
- `instagramLogo.svg`
- `pdf.svg`

To add new icons:
1. Add the SVG file to `src/images/`
2. Update the icon mapping in `src/data/dataLoader.ts`
3. Reference it by filename in your JSON

## 🔧 Advanced Configuration

### Custom Button Text
Update button text in project metadata:
```json
"metadata": {
  "primaryButtonText": "View Live Demo",
  "secondaryButtonText": "Source Code",
  "imageOverlayText": "Explore Project"
}
```

### Section Titles
Change section headings in profile metadata:
```json
"metadata": {
  "sectionTitles": {
    "workExperience": "Professional Experience",
    "projects": "Featured Work"
  }
}
```

## ❓ Troubleshooting

**Build fails after JSON changes:**
- Check JSON syntax with a validator
- Ensure all required fields are present
- Verify image paths are correct

**Images not loading:**
- Check files are in the `public/` folder
- Verify file paths start with `/`
- Ensure WebP format is supported by your browser

**Social links not working:**
- Verify URLs are complete with `https://`
- Check `isExternal` is set correctly
- Ensure icon files exist

## 📝 Content Checklist

When updating content:
- [ ] Update profile information
- [ ] Add/update projects with correct order
- [ ] Update work experience timeline
- [ ] Verify all social links work
- [ ] Check all images load correctly
- [ ] Test responsive behavior
- [ ] Build successfully
- [ ] Deploy changes

---