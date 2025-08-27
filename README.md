# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features a modern glass-morphism design with smooth animations and interactive project showcases.

## 🚀 Features

- **Modern Design**: Glass-morphism UI with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Projects**: Hover effects and detailed project modals
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **TypeScript**: Full type safety and better development experience
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar with smooth scrolling
│   ├── Hero.tsx            # Hero section with animated content
│   ├── About.tsx           # About section with personal info
│   ├── Skills.tsx          # Skills section with progress bars
│   ├── Projects.tsx        # Projects showcase with modals
│   └── Contact.tsx         # Contact form and information
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Background**: Dark gradient with glass effects
- **Text**: White and gray variations for hierarchy

### Animations
- Smooth scroll animations
- Hover effects on cards and buttons
- Floating background elements
- Progress bar animations
- Modal transitions

### Components
- **Navigation**: Fixed header with active section highlighting
- **Hero**: Animated text and call-to-action buttons
- **About**: Personal information and work experience timeline
- **Skills**: Categorized skills with progress indicators
- **Projects**: Interactive project cards with detailed modals
- **Contact**: Contact form with social media links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, and description
- `components/About.tsx` - Personal details and experience
- `components/Contact.tsx` - Contact information and social links

### Projects
Edit the projects array in `components/Projects.tsx` to showcase your work:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description...",
    // ... other properties
  }
]
```

### Skills
Modify the skills data in `components/Skills.tsx` to reflect your expertise.

### Styling
- Colors: Update the primary color palette in `tailwind.config.js`
- Fonts: Change fonts in `app/globals.css`
- Animations: Customize animations in component files

## 🎯 Key Features Explained

### Project Showcase
- **Hover Effects**: Cards scale and show overlay with action buttons
- **Modal Details**: Click any project to see detailed information
- **Technology Tags**: Visual representation of tech stack
- **Live Links**: Direct links to live demos and source code

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Responsive grid layouts
- **Touch Friendly**: Optimized for touch interactions

### Performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better loading
- **SEO Ready**: Meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect to Git repository
- **AWS Amplify**: Connect to Git repository
- **Manual**: Build and upload to any hosting service

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Unsplash](https://unsplash.com/) - Project images

---

Made with ❤️ using Next.js 15 