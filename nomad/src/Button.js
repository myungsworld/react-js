import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button(props) {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
