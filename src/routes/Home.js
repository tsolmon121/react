import Movie from "../components/Movie";
import { useState,useEffect } from "react";
import styles from "./Home.module.css";
function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies]=useState([])

    // useEffect (()=> {
    //     fetch ('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    //     .then((response)=> response.json())
    //     .then((json)=>{
    //         setMovies(json.data.movies);setLoading(false);
    //     }); 
    // },[]);

    // console.log(movies)

    const getMovies = async()=>{
        const json = await(
            await fetch (
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year'
        )
    ).json();
        
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[])
    console.log(movies)


    return (
       <div className={styles.container}>
            {loading ?( 
            
                <div className={styles.loader}>
                    <span>Loading...</span> 
                </div>
            ):(
               
                    <div className={styles.movies}>
                    {movies.map((m) =>(
                    <Movie 
                     key ={m.id}
                     id={m.id}
                     coverImg={m.medium_cover_image} 
                     title ={m.title} 
                     summary={m.summary}
                     genres={m.genres} 
                    />
                    ))}
            </div>
            )}
        </div>
            );
            
            
}
export default Home;