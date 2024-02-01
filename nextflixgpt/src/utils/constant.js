export const photoUrl = "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
export const netflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const loginBackgroundPhoto = "https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const Image_CDN_URL = "https://image.tmdb.org/t/p/w500"

//for movies
export const API_CONSTANTS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY
    }
  };
  
export const SUPPORTED_LANGUAGES = [
  {
    identifier : "en",
    name : "English"
  },
  {
    identifier : "hindi",
    name : "Hindi"
  },
  {
    identifier : "spanish",
    name : "Spanish"
  }
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY