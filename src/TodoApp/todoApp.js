import React, {useEffect, useState} from 'react';
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";


const TodoApp = () => {
    const firstName = "Tony";

    const todoItems = [
        {
            id:1,
        itemName : "Get the milk!",
        isDone: false
    },
        {
            id:2,
        itemName : "Wash the car!",
        isDone: true
    },
        {
            id:3,
        itemName : "Eat some chocolate",
        isDone: false
    }];


    return (
        <div>
            <Header/>
            <h1>TodoApp</h1>
            {
                todoItems.map((todoItem) => {

                    return (
                        <div key={todoItem.id}>
                            {
                            <label
                                style={ todoItem.isDone === true ?
                                {textDecoration: "line-through"}
                            : {}
                            }
                            >
                                <p>{todoItem.itemName}</p>

                            </label>
                            }


                        </div>
                    )
                })
            }
            <Footer/>
        </div>
            );
};

export default TodoApp;