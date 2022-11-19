import Layout from "../../components/Layout";

let avatar = 'https://sun1-29.userapi.com/s/v1/ig2/w9NcifQqMV5xbQ35NA681HVW7x7dueaieHp27b1mB-p5Uq6uRTiZ21ug1VmwM8-NZ6yqkdk1zKwKcw2yxOE5xi1j.jpg?size=50x50&quality=95&crop=118,128,520,520&ava=1';
const MainPage = (props) => {
    return (
        <>
        <Layout nickName='Vlad F' id={1} avatarUrl={avatar} >
            <div className="">{props.title}</div>
        </Layout>
        
        </>
        
    );
};

export default  MainPage;