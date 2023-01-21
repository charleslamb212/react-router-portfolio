
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Header from './components/partials/header';

import './App.css';
const projects = [
  { title: 'My first project', body: 'This is the first project' },
    { title: 'My second project', body: 'This is the second project' },
    { title: 'My third project', body: 'This is the third project' },
    { title: 'My fourth project', body: 'This is the fourth project' }
];
// routes need to be inside of the app function (and class). All props that are passed to the component are established outside of the function.
const App = () => {
  let posts = [
    { title: 'My first post', body: 'This is the first post' },
    { title: 'My second post', body: 'This is the second post' },
    { title: 'My third post', body: 'This is the third post' },
    { title: 'My fourth post', body: 'This is the fourth post' }
  ];

  return (
    <Router>
      
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About name='John Doe' />} />
          <Route path='/blog' element={<Blog posts={posts} />} />
          <Route path='/projects' element={<Projects projects={projects}/>} />
        </Routes>
      
    </Router>
  );
}

export default App;