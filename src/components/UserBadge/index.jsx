import { useNavigate } from 'react-router-dom';
import './style/style.css'

const UserBadge = (props) => {
    const navigate = useNavigate();

    const onUserBadgeClick = () => {
        navigate(`/${props.id}`);
    };

    return (
        <div className="cnUserBadgeRoot" onClick={onUserBadgeClick}>
            {props.avatarUrl ? <img src={props.avatarUrl} alt="logo" className='cnUserBadgeAvatar' /> : <div className='cnUserBadgePlaceholder'/> }
            <span className='cnUserBadgeName'>{props.nickName}</span>
        </div>
    );
};

export default UserBadge;