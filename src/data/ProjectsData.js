import rps from '../asseste/projects images/game .png'
import gaming from '../asseste/projects images/gamming.png'
import kasper from '../asseste/projects images/kasper.png'
import mainPortfolio from '../asseste/projects images/main portfolio.png'
import portfolio from '../asseste/projects images/portfolio.png'
import netflix from '../asseste/projects images/netflix.png'
import sm from '../asseste/projects images/social media.png'

const ProjectsData = [
    {
        id:1  , 
        title: "Featured Project",
        projects: [
            {
                id: 1,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["react", "tailwindcss", "firebase", "javascript"],
                title: "netflix clone ",
                img: netflix,
                link: "https://netflix-react-7c644.web.app",
                github: "https://github.com/khaleda-02/netflix-clone",
                preferd: true
            },
            {
                id: 2,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["html5", "css3", "javascript"],
                title: "kasper",
                img: kasper,
                link: "https://kasper-khaled.netlify.app",
                github: "https://github.com/khaleda-02/Kasper",
                preferd: true
            },
            {
                id: 3,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["html5", "css3", "javascript"],
                title: "games store",
                img: gaming,
                link: "https://gaming-khaled.netlify.app",
                github: "https://github.com/khaleda-02/Gaming",
                preferd: true
            },
        ]
    },
    {
        id:2,
        title: "Other projects ",
        projects: [
            {
                id: 4,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["react", "MUI 5", "Github", "javascript"],
                title: "social media ",
                img: sm,
                link: "https://khaled-socialmedia.netlify.app",
                github: "https://github.com/khaleda-02/social-media",
                preferd: false
            },
            {
                id: 5,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["html5", "css3", "javascript"],
                title: "Rock Paper & Scisser Game ",
                img: rps,
                link: "https://khaleda-02.github.io/GSG-game/",
                github: "https://github.com/khaleda-02/GSG-game",
                preferd: false
            },  {
                id: 6,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["html5", "css3", "javascript"],
                title: "dev Portfolio",
                img: mainPortfolio,
                link: "https://khaledayman-myportfilio.netlify.app",
                github: "https://github.com/khaleda-02/main-portfolio",
                preferd: false

            },
            {
                id: 7,
                data: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                skills: ["html5", "css3", "javascript"],
                title: "portfolio ",
                img: portfolio,
                link: "https://profile-khlaed.netlify.app",
                github: "https://github.com/khaleda-02/portfilio",
                preferd: false

            },
        ]
    }
]

export default ProjectsData; 