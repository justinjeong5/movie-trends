import CONSTANTS from "lib/constants";
import arrToMap from "lib/arrToMap";

const { BOOTSTRAP } = CONSTANTS;

const OPTIONS = {
    VARIANT: arrToMap(BOOTSTRAP.VARIANT),
    SIZE: arrToMap(BOOTSTRAP.SIZE),
};

export default OPTIONS;