import {Link} from "react-router";

const Home = () => {
    return (
        <main>
            <div>
               <h2>
                   <Link to="/posts">Blogs</Link>
               </h2>
            </div>
            <div>
                <h2><Link to="/users">Users</Link></h2>
            </div>
        </main>
    )
}
export default Home;