import Header from "./Header";

function Studentlist({ studentlist, setStudentList, setFavStudent, favStudent }) {

    const handleFav = (name , fav) => {
        setFavStudent([...favStudent, name])
        studentlist.map(function(student){
            if(student.name === name){
                student.fav = true
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
                            return (
                                <li key={student.id}>
                                    <div className="flex gap-10 justify-between m-2 w-80">
                                        <h1>{student.id}. {student.name}</h1>
                                        {
                                            student.fav ? "":<button onClick={()=>{handleFav(student.name, student.fav)}} className="bg-red-300 Border rounded-md px-2" disabled={student.fav}>favourite</button>
                                        }
                                        
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </>
    )
}

export default Studentlist;