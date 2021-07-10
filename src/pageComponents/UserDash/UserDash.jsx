import UtilityBar from "../../reusableComponents/UtilityBar/UtilityBar";
import classes from './UserDash.module.css';

const UserDash = () => {
    return (
        <div className={classes['user-dash-wrapper']} >
            <UtilityBar></UtilityBar>
        </div>
    );
};

export default UserDash;