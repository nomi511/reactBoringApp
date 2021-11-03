import { useState } from "react";
import useFetch from "./useFetch";

const Home = () => {


    
    const {data, load, err} = useFetch('http://www.boredapi.com/api/activity/');



    return ( 

        <div className="homecnt">
            
            <div className="center">

                <h1>Search for Activities to do </h1>
                <button className="searchbtn"  onClick={ () => {window.location.reload();} } >Search</button>

                <div className="activities">
                    {load && <p>Loading...</p>}
                    {err && <p> {err} </p>}
                    {data && <div className="activityflex">

                        <div className="content">
                            <h3> {data.activity} </h3>
                        </div>

                        <button className="likebtn"> <i class="icon-heart"></i></button>

                        </div>
                        
                    }

                </div>

            </div>
            

        </div>
    
    );
}
 
export default Home;