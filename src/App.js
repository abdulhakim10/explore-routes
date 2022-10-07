import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
        {path: '/', element: <Main></Main>, children: [
          {path: '/home', element: <Home></Home> },
          {path: '/products', element: <Products></Products>},
          {path: '/about', element: <About></About> },
          {path:'/posts', 
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>},

          {path: '/posts/:postsId',
            loader: async({params}) => {
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`)
            },
            element: <PostDetails></PostDetails>
          }
        ] },

          {path: '/friends', 
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>},

        {path:'/friends/:friendsId', 

        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsId}`)
        },
          element: <FriendDetails></FriendDetails>
        },

        {path: '*', element:'This page not found: 404'}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
