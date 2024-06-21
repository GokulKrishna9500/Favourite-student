import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate()

    const handleStudent = (evt) => {
        evt.preventDefault()
        return(
            
            navigate("/")
        )
    }

    const handleFavourite = (evt) =>{
        evt.preventDefault()
        return(
            navigate("/favourite")
        )
    }


    return(
        <>
            <div className='flex bg-pink-300 text-2xl font-medium p-2 m-2'>
                <a onClick={handleStudent} href='' className=" p-2 underline">Student List</a>
                <a onClick={handleFavourite} href='' className=" p-2 underline">Favourite</a>
            </div>
        </>
    )
}

export default Header