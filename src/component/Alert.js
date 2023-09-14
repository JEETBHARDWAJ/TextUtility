
export default function Alert(props) {

    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt[0].toUpperCase() + lower.slice(1);
    // } 

    return (
        
            <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
                    <strong>{props.alert.type}</strong>{props.alert.msg}
                </div>
            </div>
        
    )
}

