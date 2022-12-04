import access from "./access.js";
import ascii from "../ascii/ascii.js";

function fdecodeEntity( letter, _pos ) {
   return access( ascii, letter, "entityName", "entityChar" );
}
export default fdecodeEntity;