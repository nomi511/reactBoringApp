


const Like = ({ arr, array }) => {


    let newarray = (el) => {

        console.log(arr[el.id])
        console.log(el.id)

        let newarr = arr.filter( elem => elem.id !== el.id)

        localStorage.setItem("Tasks", JSON.stringify(newarr))

        array( newarr )

        window.location.reload()
       
    }




    

    return ( 
        <div className="likedpage">

            <h2>All Tasks</h2>

            <div className="valuescenter">

                {/* {arr && console.log(arr)} */}
                { arr && arr.map ( val => (<div className="values" key={val.id}>

                    {/* <p>{val.id}</p> */}
                    <div className="taskcontent">
                        <p> {val.value} </p>
                    </div>

                    <div>
                        <button onClick={ () => {newarray(val) } } >X</button>
                    </div>
                    



                </div> )
                )}

            </div>

            
            
        </div>
     );
}
 
export default Like;