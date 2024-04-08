import { useState } from "react";
import styles from "./switch.module.css";
import ReactSwitch from "react-switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./customSwitch.css";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";

const Switch = () => {
  const [sliderValue, setSliderValue] = useState(false);

  const dispatch = useDispatch();

  const handleSliderChange = (value) => {
    setSliderValue(value);
    dispatch(changeTheme(value ? "dark" : "light"));
  };

  return (
    <div>
      <ReactSwitch
        checked={sliderValue}
        onChange={handleSliderChange}
        uncheckedIcon={
          <span
            className={styles.modeIcon}
            style={{ position: "relative", right: "-4px" }}
          >
            <DarkModeIcon height={18} width={18} />
          </span>
        }
        checkedIcon={
          <span
            className={styles.modeIcon}
            style={{ position: "relative", left: "4px" }}
          >
            <LightModeIcon height={18} width={18} />
          </span>
        }
        onColor="#000000"
        offColor="#000000"
        height={24}
        width={60}
      />
      {/* <button onClick={toggleSlider}>Toggle Slider</button> */}
    </div>
  );
};

export default Switch;
