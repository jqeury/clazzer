import access from "./access.js";
import ascii from "../ascii/ascii.js";

function fdecodeHTMLEntity( letter, _pos ) {
   return access( ascii, letter, "entityCode", "entityChar" );
}

export default fdecodeHTMLEntity;