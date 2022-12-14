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
                data: "This Website is a netflix clone , you can use it to know trends and watch what's coming up , this project done in 3 days .",
                skills: ["react", "tailwindcss", "firebase", "javascript"],
                title: "netflix clone ",
                img: netflix,
                link: "https://netflix-react-7c644.web.app",
                github: "https://github.com/khaleda-02/netflix-clone",
                preferd: true
            },
            {
                id: 2,
                data: "This Website was a template on internet , I liked it , and challenge my self to build it to see it and learn more .",
                skills: ["html5", "css3", "javascript"],
                title: "kasper",
                img: kasper,
                link: "https://kasper-khaled.netlify.app",
                github: "https://github.com/khaleda-02/Kasper",
                preferd: true
            },
            {
                id: 3,
                data: "Website to show the new games and sell it online to the users to see it and learn more . ",
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
                data: "a social media website have most features for sccail media and this project take 6 days to be done .",
                skills: ["react", "MUI 5", "Github", "javascript"],
                title: "social media ",
                img: sm,
                link: "https://khaled-socialmedia.netlify.app",
                github: "https://github.com/khaleda-02/social-media",
                preferd: false
            },
            {
                id: 5,
                data: "Website for playing Rock , Paper and Scisser Game using pure javascript to see it and learn more .",
                skills: ["html5", "css3", "javascript"],
                title: "Rock Paper & Scisser Game ",
                img: rps,
                link: "https://khaleda-02.github.io/GSG-game/",
                github: "https://github.com/khaleda-02/GSG-game",
                preferd: false
            },  {
                id: 6,
                data: "Website to show my profile , contain some of my projects , my scoial media accounts and some ways to content my to see it and learn more .",
                skills: ["html5", "css3", "javascript"],
                title: "dev Portfolio",
                img: mainPortfolio,
                link: "https://khaledayman-myportfilio.netlify.app",
                github: "https://github.com/khaleda-02/main-portfolio",
                preferd: false

            },
            {
                id: 7,
                data: "Website to show my profile , contain some of my projects , my scoial media accounts and some ways to content my to see it and learn more .",
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