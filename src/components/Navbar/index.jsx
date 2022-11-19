import UserBadge from '../UserBadge';
import './styles/style.css'

const Navbar = (props) => {
    return (
        <div className="cnNavbarRoot">
            <div className="cnNavbarWrapper">
                <span>Instacopy</span>
                <UserBadge 
                    nickName={props.nickName}
                    avatarUrl={props.avatarUrl}
                    id={props.id}/>
            </div>
           
        </div>
    );
};

export default Navbar;