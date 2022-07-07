import reading from './Images/reading.png';
import backward from './Images/back.png';
import forward from './Images/forward.png';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
const Home = ({books}) => {
    const [counter, setCounter] = useState(0);
    const circles = useRef();
    function front() {
        if (counter === 3) {
            return 0;
        }
        return counter + 1;
    }
    function back() {
        if (counter === 0) {
            return 3;
        }
        return counter - 1;
    }
    useEffect(() => {
        console.log(circles.current);
        for (let i = 0; i < 4; i++) {
            circles.current.children[i].style.backgroundColor = 'rgb(193, 189, 189)';
        }
        circles.current.children[counter].style.backgroundColor = 'orange';
    }, [counter])
    return ( 
        <div>
            <div id='welcome'>
                <p style={{fontSize: "3rem", height: '1rem', fontWeight: 'bold'}}>Welcome to the Bookstore!</p>
                <p style={{fontSize: '2rem'}}>Find your dream book</p>
                <button className="button">Browse Books</button>
                <img src={reading} style={{width: '50%', height: '50%'}}></img>
            </div>
            <div id='featured'>
                <p id="featuredtitle">Featured Books</p>
                <div id='frontbackbtns'>
                    <img onClick={() => setCounter(back())} id='back' className='frontbackbtn' src={backward}></img>
                    <img onClick={() => setCounter(front())} id='front' className='frontbackbtn' src={forward}></img>
                </div>
                <div key={books[counter].id} id='featuredbook'>
                    <img id='featuredbookimg' src={books[counter].image}></img>
                    <div style={{marginTop: '2%'}} className='featuredbookinfo'>{books[counter].title}</div>
                    <div className='featuredbookinfo'>{books[counter].price}</div>
                </div>
                <div ref={circles} id='circles'>
                    <circle className='circle'></circle>
                    <circle className='circle'></circle>
                    <circle className='circle'></circle>
                    <circle className='circle'></circle>
                </div>
            </div>
            <div id='discount'>
                <p>Discount Books</p>
            </div>
            <footer>
                <p style={{height: '1rem'}}>Library</p>
                <div>
                    <p>Home</p>
                    <p>About</p>
                    <p>Cart</p>
                </div>
            </footer>
        </div>
     );
}
 
export default Home;