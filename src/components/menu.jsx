import React from 'react';

function Menu(props) {
    
    return (
        <div>
            <h3>Hello Everyone, We are famous for serving {props.dishes} as Desi Food.</h3>
            <h3>Hello Everyone, We are famous for serving {props.sweet} as Sweet Dish.</h3>
            <h3>Hello Everyone, We are famous for serving {props.drink} as Desi Drink.</h3>
            <h3>Hello Everyone, We are famous for serving {props.naan} as Naan Item.</h3>
        </div>
    );
}

export default Menu;