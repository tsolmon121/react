import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,coverImg, title,year, summary, genres}){
    return (
        // <div>
        //     <img src={coverImg} alt={title}/>
        //     <h2>
        //         {/* <Link to="/m">{title}</Link> */}
        //         <Link to={`/m/${id}`}>{title}</Link>
        //     </h2>
        //     <p>{summary}</p>
        //     <ul>
        //         {genres.map((g)=>(
        //             <li key={g}>{g}</li>
        //         ))}
        //     </ul>
            <div className={styles.m}>
                <img src={coverImg} alt={title} className={styles.img}></img>
                <div>
                    <h2 className={styles.title}>
                    <Link to ={`/m/${id}`}>{title}</Link></h2>
                    <h3 className={styles.year}>{year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
                    <ul className={styles.genres}>
                        {genres.map((g)=> (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div> 
       
    
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;