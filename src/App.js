import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './components/adminPage';
import ChangeAdmin from './components/ChangeAdmin';
import ChangeLinks from './components/ChangeLinks';
import MainPage from './components/MainPage';


function App() {
  const initialMentors = [
    {
      name: "Marin Thomas",
      desc: "UX Designer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "Jack Sparow",
      desc: "UX Designer",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "John cena",
      desc: "UI Developer",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "Lizo mac",
      desc: "Backend Developer",
      img: "https://plus.unsplash.com/premium_photo-1664541336535-b73fc8ef74a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "Dino Dev",
      desc: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "Brad Pitt",
      desc: "UX Designer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
      name: "Angelina jolie",
      desc: "UI Developer",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    }
  ]
  const initalUserData = [{
    name: "yash5chandrakar@gmail.com",
    password: "123@abc"
  }]

  const newUserData = JSON.parse(localStorage.getItem("userData"))
  console.log(newUserData)

  const [userData, setuserData] = useState((newUserData) ? newUserData : initalUserData)

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [mentors,] = useState(initialMentors)

  const [links, setLinks] = useState({
    facebook: "https://www.facebook.com/",
    linkedIn: "https://in.linkedin.com/"
  })


  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData))
  }, [userData])






  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage links={links} mentors={mentors} />}>
        </Route>
        <Route path='/admin' element={<AdminPage data={userData} setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn} links={links} />}>
        </Route>
        const [userData, setuserData] = useState(initalUserData)
        <Route path='/admin/changeAdmins' element={<ChangeAdmin setuserData={setuserData} data={userData} isLoggedIn={isLoggedIn} />}></Route>
        <Route path='/admin/changeLinks' element={<ChangeLinks setLinks={setLinks} links={links} isLoggedIn={isLoggedIn} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
