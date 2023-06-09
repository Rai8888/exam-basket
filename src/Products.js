import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./App";

const Products = (props) => {
  const context = useContext(BooksContext);
  const totalCardCount=context.state.card.reduce((total,book)=>total+=(book.count),0)

  return (
    <>
      <h2 style={{display:"flex",justifyContent:"space-around"}}>
        <span>Список книг</span>
        <Link className="basket-link" to="/card"> &#128722; ({totalCardCount})</Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div key={book.id} >
          <div className="book">
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Автор: {book.author}</p>
              <p>Цена: {book.price}</p>
              <button onClick={()=>{context.addToCard(book)}}>Купить книгу</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
