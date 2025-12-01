# 🎬 Movie App

A modern, responsive movie search application built with React that allows users to search and browse movies and TV series using the OMDb API.

![Movie App](https://img.shields.io/badge/React-18.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## ✨ Features

- **🔍 Real-time Search** - Search for movies and TV series instantly
- **🎯 Advanced Filtering** - Filter results by type (All, Movies, Series)
- **🖼️ Smart Image Loading** - Lazy loading with shimmer effects and fallback placeholders
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI** - Clean interface with Material Design components
- **⚡ Performance Optimized** - Image preloading and efficient rendering
- **🌐 Sticky Navigation** - Transparent blurred header with smooth scrolling
- **💫 Smooth Animations** - Fade-in effects and loading states
- **🚫 Error Handling** - Graceful error states and user feedback
- **🎭 Telegram-style Image Preview** - Blurred background with contained images

## 🚀 Demo

[Live Demo](https://movie-app-gilt-pi.vercel.app/) 

## 🛠️ Technologies Used

- **React** (18.x) - JavaScript library for building user interfaces
- **Materialize CSS** - Modern responsive CSS framework
- **clsx** - Utility for conditionally joining classNames
- **OMDb API** - Movie database API
- **CSS Modules** - Scoped and modular CSS
- **Material Icons** - Google's Material Design icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abbosbek-cloud/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get your OMDb API key**
   - Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Register for a free API key
   - Copy your API key

4. **Configure API key**
   - Open `src/pages/Main.jsx`
   - Replace the API_KEY constant with your key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
movie-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── Movie.jsx
│   │   ├── Movies.jsx
│   │   ├── Search.jsx
│   │   └── styles/
│   │       ├── loader.module.css
│   │       ├── movie.module.css
│   │       ├── not-found.module.css
│   │       └── search.module.css
│   ├── pages/
│   │   ├── Main.jsx
│   │   └── Page404.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```

## 🎯 Core Components

### Main Component
The main container that handles:
- API requests to OMDb
- Search functionality
- Loading states
- Error handling

### Search Component
Provides:
- Search input with Enter key support
- Filter options (All, Movies, Series)
- Responsive design

### Movie Component
Features:
- Image lazy loading with shimmer effect
- Telegram-style image preview (blurred background)
- Fallback for missing images
- Text truncation with tooltips

### Loader Component
Displays:
- Skeleton loading cards
- Grid layout matching actual content
- Shimmer animation effect

## 🎨 Styling Approach

The project uses a hybrid styling approach:

1. **Materialize CSS** - Base framework for layout and components
2. **CSS Modules** - Component-scoped styles
3. **clsx** - Dynamic className composition

### Example Usage
```javascript
import clsx from 'clsx';
import classes from './styles/component.module.css';

<div className={clsx('materialize-class', classes.customClass)}>
  Content
</div>
```

## 🔌 API Integration

### OMDb API

**Base URL:** `https://www.omdbapi.com`

**Parameters:**
- `apikey` - Your API key (required)
- `s` - Search query (required)
- `type` - Filter by type: movie, series, episode (optional)

**Example Request:**
```javascript
https://www.omdbapi.com/?apikey=YOUR_KEY&s=inception&type=movie
```

**Response Structure:**
```json
{
  "Search": [
    {
      "Title": "Inception",
      "Year": "2010",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "totalResults": "1",
  "Response": "True"
}
```

## 🎭 Key Features Implementation

### 1. Image Lazy Loading
Uses the `Image` constructor for preloading:
```javascript
const img = new Image();
img.onload = () => setImageLoaded(true);
img.onerror = () => setImageError(true);
img.src = posterUrl;
```

### 2. Telegram-Style Image Preview
```css
.blurredBackground {
  filter: blur(20px);
  transform: scale(1.1);
  opacity: 0.8;
}

.movieImage {
  object-fit: contain;
  z-index: 1;
}
```

### 3. Sticky Transparent Header
```css
nav {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}
```

## 📱 Responsive Design

The app is fully responsive with breakpoints:

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

Key responsive features:
- Flexible grid layout
- Collapsible filters
- Optimized touch targets
- Readable typography at all sizes

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://abbosbek-cloud.github.io/movie-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🧪 Testing

### Run Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
```bash
npm test -- --coverage
```

## 🐛 Known Issues

- API rate limiting (1000 requests per day on free tier)
- Some movie posters may not be available
- Search requires minimum 3 characters for best results

## 🔮 Future Enhancements

- [ ] Add movie details modal/page
- [ ] Implement pagination for search results
- [ ] Add favorites/watchlist functionality
- [ ] Implement user authentication
- [ ] Add dark mode toggle
- [ ] Include movie ratings and reviews
- [ ] Add advanced filters (year, genre, rating)
- [ ] Implement infinite scroll
- [ ] Add PWA support
- [ ] Include trailer integration (YouTube API)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use functional components with hooks
- Follow React best practices
- Use CSS Modules for component styles
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abbosbek**
- Full-stack Developer
- 4+ years of experience
- Specializes in React, Next.js, TypeScript, Node.js

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing movie data
- [Materialize CSS](https://materializecss.com/) for the UI framework
- [Material Icons](https://fonts.google.com/icons) for the icon set
- [React](https://reactjs.org/) for the amazing library
- All contributors and users of this project

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email: [abek01sulaymonov@example.com]
- Visit the [documentation](https://github.com/Abbosbek-cloud/movie-app/blob/main/README.md)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
