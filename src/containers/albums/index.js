import { Menu } from 'antd';
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { get_allusers_data } from "./actions";
const UserComponent = ({ users, usersLoading, userLoadingError, get_allusers_data }) => {
    const dispatch = useDispatch();
    console.log(users, usersLoading, userLoadingError);
    useEffect(() => {
        dispatch(get_allusers_data);
    }, []);
    if (users) {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    users.map(user => <Menu.Item key={user.id} icon={<UserOutlined />}>
                        {user.name}
                    </Menu.Item>)
                }
            </Menu>
        );
    } else {
        return (<></>);
    }

};

const mapStateToProps = ({ userReducer: { users, userLoadingError, usersLoading } }) => {
    return {
        users, userLoadingError, usersLoading
    };
};

const mapStateToActions = { get_allusers_data };

export default connect(mapStateToProps, mapStateToActions)(UserComponent);