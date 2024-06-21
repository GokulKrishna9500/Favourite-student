import Header from "./Header";
function Favourite({ studentlist, setStudentList, setFavStudent, favStudent }) {


    const handleFav = (name, fav) => {
        setFavStudent([...favStudent, name])
        studentlist.map(function (student) {
            if (student.name === name) {
                student.fav = false
            }
        })



    }

    return (
        <>

            <Header />
            <div className="text-2xl font-medium p-2 m-2">
                <ul>
                    {
                        studentlist.map(function (student) {

                            if (student.fav === true) {
                                return (
                                    <li key={student.id}>
                                        <div className="flex gap-10 justify-between m-2 w-80">
                                            <h1>{student.name}</h1>
                                            <button onClick={() => { handleFav(student.name) }} className="bg-red-300 Border rounded-md px-2" >Remove</button>
                                        </div>
                                    </li>
                                )
                            }

                        })
                    }

                </ul>
            </div>

        </>
    )
}

export default Favourite;