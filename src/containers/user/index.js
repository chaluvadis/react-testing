const user = ({ name }) => {
    if (name) {
        return <>Hello, {name} !</>;
    } else {
        return <span>Hello, Stranger</span>;
    }
};
export default user;