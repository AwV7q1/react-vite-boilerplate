
const listData = [1,2,3,4,5,6]

const ListTransaction = () => {
    return (
        <div>
            {listData.map((item, i) => (
                <div key={i}>
                    <div>name {item}</div>
                    <div>description {item}</div>
                    <div>age {item}</div>
                    <div>day of birth {item}</div>
                </div>
            ))}
        </div>
    );
};

export default ListTransaction;