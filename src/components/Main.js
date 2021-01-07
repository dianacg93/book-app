import Library from '../Library'
import Book from './Book'

const Main = () => {
    console.log(Library)
    
    return (
        <div>
            {Library.map((book, idx) =>{
                return <Book book={book}/>
            })}
        </div>
    )
}

export default Main;