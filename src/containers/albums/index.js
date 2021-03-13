import { Menu } from 'antd';
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BookOutlined } from "@ant-design/icons";
import { get_albums_data, set_selected_album } from "./actions";
const UserComponent = ({ albums, albumsLoading, albumsLoadingError, selectedAlbum, selectedUser }) => {
    const dispatch = useDispatch();
    console.log(selectedAlbum);
    useEffect(() => {
        if (selectedUser) {
            const { id } = selectedUser;
            dispatch(get_albums_data(id));
            if (selectedAlbum) {
                dispatch(set_selected_album(selectedAlbum));
            }
        }
    }, [selectedUser]);
    const albumClick = (album) => {
        dispatch(set_selected_album(album));
    };
    if (albums) {
        return (
            <Menu theme={"light"} mode="inline" defaultSelectedKeys={[selectedAlbum ? selectedAlbum.id : '']}>
                {
                    albums.map(album => <Menu.Item key={album.id} id={album.id} onClick={() => albumClick(album)} icon={<BookOutlined />}>
                        {album.title}
                    </Menu.Item>)
                }
            </Menu>
        );
    } else {
        return (<></>);
    }
};

const mapStateToProps = ({ albumsReducer: { albums, albumsLoading, albumsLoadingError, selectedAlbum },
    userReducer: { selectedUser } }) => {
    return {
        albums, albumsLoading, albumsLoadingError, selectedAlbum, selectedUser
    };
};

export default connect(mapStateToProps)(UserComponent);