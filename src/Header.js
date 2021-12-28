const Header = ({ reqUrl, handleClick }) => {

    return (
        <header>
            <form className="butt">
                {/* <button value="user" onClick={() => alert("hehe")}>users</button>  */}
                <input
                    type="button" 
                    value="users"
                    onClick={(e) => { handleClick(reqUrl(e.target.value));e.preventDefault() }}
                />
                {/* <button>posts</button> */}
                <input
                    type="button"
                    value="posts"
                    onClick={(e) => { handleClick(reqUrl(e.target.value)) ;e.target.focus()}}
                />
                {/* <button>comments</button> */}
                <input
                    type="button"
                    value="comments"
                    onClick={(e) => { handleClick(reqUrl(e.target.value)) }}
                />
            </form>
        </header>
    )
}

export default Header
