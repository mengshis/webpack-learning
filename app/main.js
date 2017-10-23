import ReactDOM from 'react-dom';
import React from 'react';
import Header from './js/component/header';
import Footer from './js/component/footer';
export default class Root extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}
ReactDOM.render(
    <Root/>,
    document.getElementById('app')
);


