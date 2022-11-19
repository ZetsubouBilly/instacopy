import Navbar from '../Navbar';
import './styles/style.css'

const Layout = (props) => {
    return (
        <div className="cnLayoutRoot">
            <Navbar nickName={props.nickName}
             avatarUrl={props.avatarUrl}
             id={props.id}/>
            <div className="cnLayoutBody">
                {props.children}
            </div>
        </div>
    );
};


export default Layout;

