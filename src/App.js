import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import './App.css';
import Pages from './pages';

function App() {
  // const user = { "basics": { "name": "Jai Kumar Dewani", "picture": "https://avatars1.githubusercontent.com/u/33520257?v=4", "label": "Final Year Student at IIIT Naya Raipur ", "headline": "Pythonista | Django | Learning  Js (It never Ends) | Competitive Programmer | Otaku - Anime Fanboi", "summary": "A tech head-geek aiming to become a Software Developer. I have a great interest in Competitive Programming, qualified for ICPC Regionals in 2019 and 2020. I love coding in but not limited to Python, sometimes ends up using Nodejs and React.\nHuge anime fanboi, dream to own a Tesla", "website": "http://jai-dewani.github.io/", "blog": null, "yearsOfExperience": null, "id": "bf40a91d-925d-4d44-a82b-b47aee9d633d", "username": "jai-dewani", "karma": 11, "email": "jai.dewani.99@gmail.com", "region": "IIIT Naya Raipur", "location": {}, "phone": "", "followers": 47, "following": 46, "profiles": [{ "network": "gitconnected", "username": "jai-dewani", "url": "https://gitconnected.com/jai-dewani" }, { "network": "GitHub", "username": "jai-dewani", "url": "https://github.com/jai-dewani" }] }, "skills": [{ "name": "React", "level": "Beginner", "rating": 2, "yearsOfExperience": 0, "keywords": [] }, { "name": "Python", "level": "Advanced", "rating": 4, "yearsOfExperience": 3, "keywords": [] }, { "name": "Node.js", "level": "Advanced", "rating": 4, "yearsOfExperience": 1, "keywords": [] }, { "name": "JavaScript", "level": "Intermediate", "rating": 3, "yearsOfExperience": 1, "keywords": [] }, { "name": "Django", "level": "Advanced", "rating": 4, "yearsOfExperience": 1, "keywords": [] }, { "name": "Passport", "level": "Intermediate", "rating": 3, "yearsOfExperience": 1, "keywords": [] }, { "name": "Heroku", "level": "Advanced", "rating": 4, "yearsOfExperience": 0, "keywords": [] }, { "name": "Git(Github)", "level": "Intermediate", "rating": 3, "yearsOfExperience": 2, "keywords": [] }], "projects": [{ "name": "fun-mark", "displayName": "Fun-Mark", "summary": "Created an easy to use python package for benchmarking functions. It allows for graphical comparisons. ", "website": "https://blogs.jaid.tech/fun-mark/", "githubUrl": "https://github.com/jai-dewani/fun-mark", "primaryLanguage": "", "languages": ["Python"], "libraries": [], "images": [], "videos": [] }, { "name": "lab-works", "displayName": "Lab-Works", "summary": "An application made to ease the lab assessments for technical institutes.", "website": "", "githubUrl": "https://github.com/jai-dewani/Lab-Works", "primaryLanguage": "Python", "languages": ["CSS", "HTML", "Python"], "libraries": ["Django"], "images": [], "videos": [] }, { "name": "deepneural net visualiser", "displayName": "DeepNeural Net Visualiser", "summary": "A Neural Net Visualizer which helps to visualize the hidden layers of Black Boxes a.k.a Neural Networks", "website": "https://visualize-neural-network.herokuapp.com/", "githubUrl": "https://github.com/jai-dewani/Visualize-Neural-Networks", "primaryLanguage": "", "languages": ["Python"], "libraries": ["tensorflow", "flask", "streamlit"], "images": [{ "resolutions": { "micro": { "url": "https://project-images.gitconnectedcontent.com/a32aecc2-a95f-4bab-bcc0-f078ce4c6da3-micro", "size": 1043, "width": 32, "height": 16 }, "thumbnail": { "url": "https://project-images.gitconnectedcontent.com/a32aecc2-a95f-4bab-bcc0-f078ce4c6da3-thumbnail", "size": 5785, "width": 224, "height": 112 }, "mobile": { "url": "https://project-images.gitconnectedcontent.com/a32aecc2-a95f-4bab-bcc0-f078ce4c6da3-mobile", "size": 12993, "width": 600, "height": 300 }, "desktop": { "url": "https://project-images.gitconnectedcontent.com/a32aecc2-a95f-4bab-bcc0-f078ce4c6da3-desktop", "size": 33359, "width": 1200, "height": 600 } } }], "videos": [] }, { "name": "yelpcamp", "displayName": "YelpCamp", "summary": "Created a social website where for hikers to view different camps.", "website": "https://yelpcamp-jai.herokuapp.com/", "githubUrl": "https://github.com/jai-dewani/YelpCamp", "primaryLanguage": "JavaScript", "languages": ["JavaScript"], "libraries": ["HTML", "Express", "Bootstrap", "Node.js", "MongoDB", "CSS", "Passport"], "images": [], "videos": [] }], "work": [{ "company": "TSOC", "position": "Co-Founder", "website": "", "location": "IIIT Naya Raipur", "summary": "Co-founded the first coder’s club at IIIT-NR, organized various hackathons and events to promote\ncompetitive programming among the students, and improve the coding environment of the Institute.", "isCurrentRole": true, "startDate": "2018-02-01", "endDate": "", "start": { "year": 2018, "month": 2 }, "end": {}, "highlights": [] }, { "company": "Directi", "position": "Workshop Trainer Intern", "website": "https://www.codechef.com/school/workshop", "location": "IIIT Naya Raipur", "summary": "Trained 18 school students about Python programming using code visualization techniques in the\nCodechef sponsored summer camp of 2 weeks, learned and improved upon various pedagogy techniques.", "isCurrentRole": false, "startDate": "2019-05-01", "endDate": "2019-06-01", "start": { "year": 2019, "month": 5 }, "end": { "year": 2019, "month": 6 }, "highlights": [] }], "publications": [], "education": [{ "institution": "International Institute of Information Technology, Naya Raipur", "area": "Computer Science and Engineering", "studyType": "B.Tech", "website": "http://iiitnr.ac.in/", "startDate": "2017-08-01", "endDate": "2021-06-01", "start": { "year": 2017, "month": 8 }, "end": { "year": 2021, "month": 6 }, "description": "", "activities": "", "gpa": "7.54", "courses": [] }], "volunteer": [], "awards": [], "languages": [], "interests": [], "references": [] }
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/jai-dewani")
    .then(res => res.json())
    .then(user => {
      setUser(user);
      console.log(user);
    });
  }, []);

  if (!user) {
    return <div />
  }
  return <Pages user={user} />
  // return (
  //   <div>
  //     <BrowserRouter>
  //       <div className="app">
  //         <Navbar />
  //       </div>
  //     </BrowserRouter>
  //   </div>
  // )

}

export default App;
