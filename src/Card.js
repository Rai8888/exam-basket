import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./App";

const Card = () => {
  const context = useContext(BooksContext);
  const totalCardAmount=context.state.card.reduce((total,book)=> total+=(book.price*book.count),0).toFixed(2);
  const totalCardCount=context.state.card.reduce((total,book)=>total+=(book.count),0)
  return (
    <div>
      <h2 style={{display:"flex",justifyContent:"space-around"}}>
        <Link to="/">Список книг</Link> <span>Корзина({totalCardCount})</span>
      </h2>
      <h3 className="card-text" >Общая сумма: {totalCardAmount} сом</h3>
      {context.state.card.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Автор: {book.author}</p>
            <p>Цена: {book.price} сом</p>
            <p>Общая сумма: {(book.price * book.count).toFixed(2)}</p>
            <p>Всего книг в вашей корзине: {book.count} шт.</p>
            <button onClick={()=>{context.decrease(book.id)}}>-</button>
            <button onClick={()=>{context.removeCard(book.id)}}>Удалить из корзины</button>
            <button onClick={()=>{context.increase(book.id)}}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
