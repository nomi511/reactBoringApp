
import useFetch from "./useFetch";


const Home = ( { arr, array } ) => {

    const {data, load, err} = useFetch('http://www.boredapi.com/api/activity/');
    
    const update = () => {
        array([...arr, {
            id: array.length,
            value: data.activity,
            done: false
        }])
    }

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

                        <div className="sbtn">
                            <button className="likebtn"  onClick={ () => {update() }} > <i className="icon-heart"></i></button>
                        </div>
                        
                        </div>
                        
                    }

                </div>

            </div>
            

        </div>
    
    );
}
 
export default Home;