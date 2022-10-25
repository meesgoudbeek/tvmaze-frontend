import { useContext } from 'react'
import ShowsContext from '../context/shows/showsContext'
import Searchbar from '../components/Searchbar'
import ListItem from '../components/ListItem'
import Loader from '../components/Loader'

const Home = () => {
    const showsContext = useContext(ShowsContext)
    const { loading, shows } = showsContext

    return (
        <div className="homepage">
            <Searchbar />
            {loading ? (
                <Loader />
            ) : shows.length !== 0 ? (
                <div className="homepage__list">
                    {shows.map((item, index) => (
                        <ListItem
                            key={index}
                            id={item.show.id}
                            image={
                                item.show.image
                                    ? item.show.image.medium
                                    : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                            }
                            name={item.show.name}
                            rating={
                                item.show.rating.average
                                    ? item.show.rating.average
                                    : 'No rating'
                            }
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <h1>No tv show found with this input</h1>
                </div>
            )}
        </div>
    )
}

export default Home
