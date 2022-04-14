import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props){
    return(
        <FontAwesomeIcon icon={props.icon} className={props.className}/>
    );
}