import React,{Component}from 'react';
import './App.css';
export default class Dash extends Component

{

constructor(){
    super();
    this.state={
        text:"",
        store:[]
    };
    
}
my=e=>{
    this.setState({
        text:e.target.value
        
    });
    console.log(this.state.text)
}
ppp=e=>{
    const{text}=this.state;
    const all=this.state.store;
    all.push(text);

    this.setState({
        store:all  
       })

    console.log(this.state.store)
}
    
    render(){
        const {text,store}=this.state;
        return(
            <div>
            <div className="left">
                <button>Dashboard</button>
                <br/>
                <button>Lorem</button>
                <br/>
                <button>lpsum</button>
                <br/>
        
                <div>
                    <input className="mes" type="text" placeholder="Share something with your class"/>
                    <input className="mesim" type="image" src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254002/85-512.png" alt="sdfs"/>
                    <input className="mesimm" type="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADn5+cPDw9OTk7u7u6EhITHx8eUlJStra1iYmLAwMBISEi5ubnExMTLy8tubm709PQ5OTn5+fne3t4uLi51dXU0NDSOjo7h4eFZWVlUVFSmpqaxsbFnZ2ednZ3U1NQYGBhycnJ/f39AQEAeHh4ip6wBAAADCElEQVR4nO3c63KqMBRAYYLVqrVe66VW67Xv/4pneso2KBBKDUlw1vfTgZm9RkUubaIIAAAAAAAAAAAAAAAAAAAAQN1Gp/V463uIOo3Vt+nE9xy1Oaof85nvSWqyU2Lte5R6vCit43uYOryptI3vcexrt64K1cj3QNYN1I133xNZNr4NfLQDajcTqNTA91A2veYEKrXwPZY9+9xApXa+B7OlfSgoVC++R7NkWRSo1Jvv2azoFweq1iOchK8MgUqdfY93v60xUKmj7wHvNSk8yoimn75tygJV3/eId0p/C/UhZzDXr059j3injk7p6TObz1i/vPQ94p30Ze8p6qU+menXm202TUI+oqtCfS7e+B/9+OfKtz+7KZTP76vvAS3oDqYf/++RXhdGo/XyPI79zmbZTeEDorD5KAxfPHrJGKXuqOUXxsPMTsMgfyPfFyrf4PKDkFc4LNhrPfRSYdApmPSbJOYU9or3Wrc9peT7MARenjRlC2PDXuorpLviplsx+k3MFpqvHg/h3BUvu1ORXMZnC4u+u4lPb0U3ZnPzoHL5kC0036UK57pjVDJnKzlmZAuLjqQilAepp5I55WlozrHUeIQK517jp3nMlWyXU9jOPFa88hXIDWP9RkwHt9Ydfbcw95xme3rK7KQTA7l8fLoM9Gzc7rfnpakH4hQ6QqGgUFDoHoWCQkGhexQKCgWF7lEoKBQUukehoFBQ6B6FgkJBoXsUCgoFhe5RKCgUFLpHoaBQUOgeheLxC7cPX6j/ab1r3K65hZPL5Hvjds0tvHxMS/4ytsGFySpDZX/62+TCKO4dd/uyjRpd+CsUukdhVRS6R2FVFLpHYVUUukdhVRS6R2FVFLpHYVUUukdhVRS6pwvtrPI4Cbhw0bVhFVxhycomdzgEskbNsXzUP1oGsn5L/mrdNox9pyXatRUGs1hU2TIzfxXQ4q2HegpDWYAnKlnR6s+CWvgzPtsPDOZLmOi1ymeuohPI4jtp+023Y8dqE9r7BwAAAAAAAAAAAAAAAAAAAAAAougfhSEte2vinh0AAAAASUVORK5CYII=" alt="sdfs"/>
                <input type="text" onChange={this.my} value={text} className="text"  placeholder="I want a comment"/>
        
        <table className="type">
            {store.map((data,key)=>(
                <tr className="li" key={key}>
                    {data}
                
           
           </tr> )
            )}
        </table>
        
                </div>
                
            </div>
            <input type="image" src="https://cdn4.iconfinder.com/data/icons/media-buttons-1/200/761-512.png" alt="subin" className="to" onClick={this.ppp}/>
         
            </div>
             
        );
    }
 
}