import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Studentlist from './Component/Studentlist';
import Favourite from './Component/Favourite';
import { useState } from 'react';

function App() {

    const [studentlist, setStudentList] = useState( [ 
        {
            name : "Gokul",
            id : 1,
            fav : false
        },
        {
            name : "Kumar",
            id : 2,
            fav : false
        },
        {
            name : "Kiran",
            id : 3,
            fav : false
        },
        {
            name : "Karthik",
            id : 4,
            fav : false
        },
        {
            name : "Rajan",
            id : 5,
            fav : false
        },
    ])

    const [favStudent, setFavStudent] = useState([])

    return (
        <>
        
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Studentlist studentlist={studentlist} setStudentList={setStudentList} favStudent={favStudent} setFavStudent={setFavStudent} />}></Route>
                    <Route path='/favourite' element={<Favourite studentlist={studentlist} setStudentList={setStudentList} favStudent={favStudent} setFavStudent={setFavStudent}/>}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;