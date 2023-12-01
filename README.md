# MoviesFans

---

# Movie Watchlist App

This React application allows users to view trending movies and manage a personal watchlist by adding or removing movies.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Routing](#routing)
- [Components](#components)
- [Features](#features)
- [Contributing](#contributing)


## Introduction

This application fetches trending movies using an external API and presents them to users. Users can add movies they are interested in to their watchlist and also remove movies from the watchlist.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/movie-watchlist.git`
2. Move into the project directory: `cd movie-watchlist`
3. Install dependencies: `npm install`

## Usage

Start the application locally:

```bash
npm start
```

Access the app in your browser at `http://localhost:3000`.

## Folder Structure

```
/src
  /Components
    /NavBar
    /Home
    /MovieCard
    /Watchlist
    /Loading
    /Footer
    ...
  /Styles
    index.css
  index.js
```

## Dependencies

- React: `version`
- React Router Dom: `version`
- Axios: `version` (for API requests)
- Bootstrap: `version`
- Font Awesome: `version`

## Routing

The app uses React Router for navigation:

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

<Router>
  <NavBar />
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  </Suspense>
  <Footer />
</Router>
```

## Components

- `NavBar`: Displays navigation links.
- `Home`: Displays trending movies and provides an option to add to the watchlist.
- `MovieCard`: Represents individual movie details.
- `Watchlist`: Shows movies added to the watchlist.
- `Loading`: Component for displaying loading state.
- `Footer`: Footer section.

## Features

- View trending movies.
- Add movies to a watchlist.
- Remove movies from the watchlist.

## Contributing

Feel free to contribute by following these steps:
- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Make changes and commit (`git commit -am 'Add feature'`)
- Push to the branch (`git push origin feature`)
- Create a pull request


---

