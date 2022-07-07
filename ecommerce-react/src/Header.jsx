const Header = () => {
    return ( 
        <div id='header'>
            <p className='headeritem' id='left'>Library</p>
            <div id='right'>
                <p className='headeritem'>Home</p>
                <p className='headeritem'>Books</p>
                <div id='cartContainer'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" alt="cart" />
                    <div id='cartcount'>0</div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;