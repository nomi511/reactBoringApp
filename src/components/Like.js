
import { useState, useEffect } from "react"

const Like = ({ arr, array }) => {


    let newarray = (el) => {

        console.log(arr[el.id])
        console.log(el.id)

        //localStorage.removeItem("Tasks")

        array( arr.filter( elem => elem.id !== el.id  ) )

        localStorage.setItem("Tasks", JSON.stringify(arr))
       
       
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