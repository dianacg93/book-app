import '../App.css'

const Book = (props) => {
    console.log("props: ", props)
    
    return (
        <div id="book-container">
            <h1>{props.book.title}</h1>
            <div className="bookinfo">
            <img className="bookimg" src={props.book.image}/>
            <p className="bookdesc">{props.book.description}</p>
            </div>
        </div>
    )
}
export default Book;