# Movie Search App

A React application that allows users to search for movies, view details, and manage their favorite movies. The app integrates with the **OMDB API** to fetch movie data dynamically.

## Features
- 🔍 **Search Movies**: Fetch movie details from the OMDB API.
- 📄 **Movie Details**: View more information about a selected movie.
- ⭐ **Favorites Management**: Add or remove movies from favorites.
- 📌 **Pagination**: Navigate through multiple pages of search results.
- 🎛 **Dropdown Filters**: Filter movies dynamically using API-based filtering.
- 🚀 **React Router**: Navigate between search and favorite movie pages.
- ❌ **Error Handling**: Friendly messages when search fails.
- 🎨 **Tailwind CSS**: Modern styling with responsive design.

## Tech Stack
- **React** (Frontend)
- **OMDB API** (Movie Data)
- **React Router** (Navigation)
- **Tailwind CSS** (Styling)
- **Netlify** (Hosting & Deployment)

## Installation & Setup
### 1️⃣ Clone the Repository
```sh
https://github.com/sharavanakumar2/React--Movie--Search---App.git
cd movie-search-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up API Key
- Get an **OMDB API Key** from [OMDB API](https://www.omdbapi.com/apikey.aspx).
- Create a `.env` file in the root directory and add:
```sh
REACT_APP_OMDB_API_KEY=your_api_key_here
```

### 4️⃣ Start Development Server
```sh
npm start
```
The app will run at `http://localhost:3000/`.

## Deployment (Netlify)
### **1️⃣ Build the App**
```sh
npm run build
```
### **2️⃣ Deploy to Netlify**
- Go to [Netlify](https://www.netlify.com/) and create an account.
- Drag and drop the `build/` folder into Netlify OR connect your GitHub repository.
- Make sure the **publish directory** is set to `build/`.
- Add the environment variable in **Netlify Settings → Environment Variables**:
  - `REACT_APP_OMDB_API_KEY=your_api_key_here`

## Troubleshooting
### **Blank Screen on Netlify?**
- Ensure the **build folder** is deployed.
- Create a `_redirects` file in `public/` and add:
  ```
  /* /index.html 200
  ```
- Clear **Netlify Cache** and redeploy.

## Contributing
Feel free to fork, open issues, or submit pull requests!

## License
MIT License.

