import { Menu } from 'antd';
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { get_allusers_data, set_selected_user } from "./actions";
const UserComponent = ({ users, usersLoading, userLoadingError, selectedUser, get_allusers_data }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_allusers_data);
        if (selectedUser) {
            dispatch(set_selected_user(selectedUser));
        }
    }, []);
    const loadAlbums = (user) => {
        dispatch(set_selected_user(user));
    };
    if (users) {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    users.map(user => <Menu.Item key={user.id} onClick={() => loadAlbums(user)} icon={<UserOutlined />}>
                        {user.name}
                    </Menu.Item>)
                }
            </Menu>
        );
    } else {
        return (<></>);
    }
};

const mapStateToProps = ({ userReducer: { users, userLoadingError, usersLoading, selectedUser } }) => {
    return {
        users, userLoadingError, usersLoading, selectedUser
    };
};

const mapStateToActions = { get_allusers_data };

export default connect(mapStateToProps, mapStateToActions)(UserComponent);