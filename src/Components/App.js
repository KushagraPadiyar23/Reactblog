import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {CreatePost, PostDetails, Navbar,Home} from './index.js'
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/posts/:postId' element={<PostDetails/>} />
        <Route  path='/create-post' element={<CreatePost/>} />
      </Routes>    
    </div>
  );
}

export default App;
