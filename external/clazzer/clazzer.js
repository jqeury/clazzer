/*!
 * Clazzer is pure Javascript HTMLEntity parser v1.0.0
 * https://entityjs.ml/
 * 
 * No Copyright JS Foundation and other contributors
 * No Released under the MIT any license
 * 
 * Author: Modassir: JS - Library developer
 * Date: 03-12-2022 AT GMT 2:28 PM
 */
( function( _window ) {

var arr = [],
   push = arr.push,

   // Clazzer identifier of Regular Expressions
   rentiCache = /&(?:\w+|#\d+);/g,
   rentCompat = /(")/g,
   rentQuotes = /(?:'|")/g,

   rdecCompat = /(&quot;)/g,
   rdecQuotes = /&(?:quot|#39);/g,

   // Define The current version of HTMLEntity
   version = "1.0.0",

   // ASCII Clazzer char, name, code vars
   ascii = [
      {entityChar: " ", entityName: "", entityCode: "&#32;"},
      {entityChar: "!", entityName: "", entityCode: "&#33;"},
      {entityChar: "\"", entityName: "", entityCode: "&#34;"},
      {entityChar: "#", entityName: "", entityCode: "&#35;"},
      {entityChar: "$", entityName: "", entityCode: "&#36;"},
      {entityChar: "%", entityName: "", entityCode: "&#37;"},
      {entityChar: "&", entityName: "&amp;", entityCode: "&#38;"},
      {entityChar: "\'", entityName: "", entityCode: "&#39;"},
      {entityChar: "(", entityName: "", entityCode: "&#40;"},
      {entityChar: ")", entityName: "", entityCode: "&#41;"},
      {entityChar: "*", entityName: "", entityCode: "&#42;"},
      {entityChar: "+", entityName: "", entityCode: "&#43;"},
      {entityChar: ",", entityName: "", entityCode: "&#44;"},
      {entityChar: "-", entityName: "", entityCode: "&#45;"},
      {entityChar: ".", entityName: "", entityCode: "&#46;"},
      {entityChar: "/", entityName: "", entityCode: "&#47;"},
      {entityChar: "0", entityName: "", entityCode: "&#48;"},
      {entityChar: "1", entityName: "", entityCode: "&#49;"},
      {entityChar: "2", entityName: "", entityCode: "&#50;"},
      {entityChar: "3", entityName: "", entityCode: "&#51;"},
      {entityChar: "4", entityName: "", entityCode: "&#52;"},
      {entityChar: "5", entityName: "", entityCode: "&#53;"},
      {entityChar: "6", entityName: "", entityCode: "&#54;"},
      {entityChar: "7", entityName: "", entityCode: "&#55;"},
      {entityChar: "8", entityName: "", entityCode: "&#56;"},
      {entityChar: "9", entityName: "", entityCode: "&#57;"},
      {entityChar: ":", entityName: "", entityCode: "&#58;"},
      {entityChar: ";", entityName: "", entityCode: "&#59;"},
      {entityChar: "<", entityName: "&lt;", entityCode: "&#60;"},
      {entityChar: "=", entityName: "", entityCode: "&#61;"},
      {entityChar: ">", entityName: "&gt;", entityCode: "&#62;"},
      {entityChar: "?", entityName: "", entityCode: "&#63;"},
      {entityChar: "@", entityName: "", entityCode: "&#64;"},
      {entityChar: "A", entityName: "", entityCode: "&#65;"},
      {entityChar: "B", entityName: "", entityCode: "&#66;"},
      {entityChar: "C", entityName: "", entityCode: "&#67;"},
      {entityChar: "D", entityName: "", entityCode: "&#68;"},
      {entityChar: "E", entityName: "", entityCode: "&#69;"},
      {entityChar: "F", entityName: "", entityCode: "&#70;"},
      {entityChar: "G", entityName: "", entityCode: "&#71;"},
      {entityChar: "H", entityName: "", entityCode: "&#72;"},
      {entityChar: "I", entityName: "", entityCode: "&#73;"},
      {entityChar: "J", entityName: "", entityCode: "&#74;"},
      {entityChar: "K", entityName: "", entityCode: "&#75;"},
      {entityChar: "L", entityName: "", entityCode: "&#76;"},
      {entityChar: "M", entityName: "", entityCode: "&#77;"},
      {entityChar: "N", entityName: "", entityCode: "&#78;"},
      {entityChar: "O", entityName: "", entityCode: "&#79;"},
      {entityChar: "P", entityName: "", entityCode: "&#80;"},
      {entityChar: "Q", entityName: "", entityCode: "&#81;"},
      {entityChar: "R", entityName: "", entityCode: "&#82;"},
      {entityChar: "S", entityName: "", entityCode: "&#83;"},
      {entityChar: "T", entityName: "", entityCode: "&#84;"},
      {entityChar: "U", entityName: "", entityCode: "&#85;"},
      {entityChar: "V", entityName: "", entityCode: "&#86;"},
      {entityChar: "W", entityName: "", entityCode: "&#87;"},
      {entityChar: "X", entityName: "", entityCode: "&#88;"},
      {entityChar: "Y", entityName: "", entityCode: "&#89;"},
      {entityChar: "Z", entityName: "", entityCode: "&#90;"},
      {entityChar: "[", entityName: "", entityCode: "&#91;"},
      {entityChar: "\\", entityName: "", entityCode: "&#92;"},
      {entityChar: "]", entityName: "", entityCode: "&#93;"},
      {entityChar: "^", entityName: "", entityCode: "&#94;"},
      {entityChar: "_", entityName: "", entityCode: "&#95;"},
      {entityChar: "`", entityName: "", entityCode: "&#96;"},
      {entityChar: "a", entityName: "", entityCode: "&#97;"},
      {entityChar: "b", entityName: "", entityCode: "&#98;"},
      {entityChar: "c", entityName: "", entityCode: "&#99;"},
      {entityChar: "d", entityName: "", entityCode: "&#100;"},
      {entityChar: "e", entityName: "", entityCode: "&#101;"},
      {entityChar: "f", entityName: "", entityCode: "&#102;"},
      {entityChar: "g", entityName: "", entityCode: "&#103;"},
      {entityChar: "h", entityName: "", entityCode: "&#104;"},
      {entityChar: "i", entityName: "", entityCode: "&#105;"},
      {entityChar: "j", entityName: "", entityCode: "&#106;"},
      {entityChar: "k", entityName: "", entityCode: "&#107;"},
      {entityChar: "l", entityName: "", entityCode: "&#108;"},
      {entityChar: "m", entityName: "", entityCode: "&#109;"},
      {entityChar: "n", entityName: "", entityCode: "&#110;"},
      {entityChar: "o", entityName: "", entityCode: "&#111;"},
      {entityChar: "p", entityName: "", entityCode: "&#112;"},
      {entityChar: "q", entityName: "", entityCode: "&#113;"},
      {entityChar: "r", entityName: "", entityCode: "&#114;"},
      {entityChar: "s", entityName: "", entityCode: "&#115;"},
      {entityChar: "t", entityName: "", entityCode: "&#116;"},
      {entityChar: "u", entityName: "", entityCode: "&#117;"},
      {entityChar: "v", entityName: "", entityCode: "&#118;"},
      {entityChar: "w", entityName: "", entityCode: "&#119;"},
      {entityChar: "x", entityName: "", entityCode: "&#120;"},
      {entityChar: "y", entityName: "", entityCode: "&#121;"},
      {entityChar: "z", entityName: "", entityCode: "&#122;"},
      {entityChar: "{", entityName: "", entityCode: "&#123;"},
      {entityChar: "|", entityName: "", entityCode: "&#124;"},
      {entityChar: "}", entityName: "", entityCode: "&#125;"},
      {entityChar: "~", entityName: "", entityCode: "&#126;"},
      {entityChar: " ", entityName: "&nbsp;", entityCode: "&#160;"},
      {entityChar: "¡", entityName: "&iexcl;", entityCode: "&#161;"},
      {entityChar: "¢", entityName: "&cent;", entityCode: "&#162;"},
      {entityChar: "£", entityName: "&pound;", entityCode: "&#163;"},
      {entityChar: "¤", entityName: "&curren;", entityCode: "&#164;"},
      {entityChar: "¥", entityName: "&yen;", entityCode: "&#165;"},
      {entityChar: "¦", entityName: "&brvbar;", entityCode: "&#166;"},
      {entityChar: "§", entityName: "&sect;", entityCode: "&#167;"},
      {entityChar: "¨", entityName: "&uml;", entityCode: "&#168;"},
      {entityChar: "©", entityName: "&copy;", entityCode: "&#169;"},
      {entityChar: "ª", entityName: "&ordf;", entityCode: "&#170;"},
      {entityChar: "«", entityName: "&laquo;", entityCode: "&#171;"},
      {entityChar: "¬", entityName: "&not;", entityCode: "&#172;"},
      {entityChar: "­", entityName: "&shy;", entityCode: "&#173;"},
      {entityChar: "®", entityName: "&reg;", entityCode: "&#174;"},
      {entityChar: "¯", entityName: "&macr;", entityCode: "&#175;"},
      {entityChar: "°", entityName: "&deg;", entityCode: "&#176;"},
      {entityChar: "±", entityName: "&plusmn;", entityCode: "&#177;"},
      {entityChar: "²", entityName: "&sup2;", entityCode: "&#178;"},
      {entityChar: "³", entityName: "&sup3;", entityCode: "&#179;"},
      {entityChar: "´", entityName: "&acute;", entityCode: "&#180;"},
      {entityChar: "µ", entityName: "&micro;", entityCode: "&#181;"},
      {entityChar: "¶", entityName: "&para;", entityCode: "&#182;"},
      {entityChar: "¸", entityName: "&cedil;", entityCode: "&#184;"},
      {entityChar: "¹", entityName: "&sup1;", entityCode: "&#185;"},
      {entityChar: "º", entityName: "&ordm;", entityCode: "&#186;"},
      {entityChar: "»", entityName: "&raquo;", entityCode: "&#187;"},
      {entityChar: "¼", entityName: "&frac14;", entityCode: "&#188;"},
      {entityChar: "½", entityName: "&frac12;", entityCode: "&#189;"},
      {entityChar: "¾", entityName: "&frac34;", entityCode: "&#190;"},
      {entityChar: "¿", entityName: "&iquest;", entityCode: "&#191;"},
      {entityChar: "×", entityName: "&times;", entityCode: "&#215;"},
      {entityChar: "÷", entityName: "&divide;", entityCode: "&#247;"},
      {entityChar: "∀", entityName: "&forall;", entityCode: "&#8704;"},
      {entityChar: "∂", entityName: "&part;", entityCode: "&#8706;"},
      {entityChar: "∃", entityName: "&exist;", entityCode: "&#8707;"},
      {entityChar: "∅", entityName: "&empty;", entityCode: "&#8709;"},
      {entityChar: "∇", entityName: "&nabla;", entityCode: "&#8711;"},
      {entityChar: "∈", entityName: "&isin;", entityCode: "&#8712;"},
      {entityChar: "∉", entityName: "&notin;", entityCode: "&#8713;"},
      {entityChar: "∋", entityName: "&ni;", entityCode: "&#8715;"},
      {entityChar: "∏", entityName: "&prod;", entityCode: "&#8719;"},
      {entityChar: "∑", entityName: "&sum;", entityCode: "&#8721;"},
      {entityChar: "−", entityName: "&minus;", entityCode: "&#8722;"},
      {entityChar: "∗", entityName: "&lowast;", entityCode: "&#8727;"},
      {entityChar: "√", entityName: "&radic;", entityCode: "&#8730;"},
      {entityChar: "∝", entityName: "&prop;", entityCode: "&#8733;"},
      {entityChar: "∞", entityName: "&infin;", entityCode: "&#8734;"},
      {entityChar: "∠", entityName: "&ang;", entityCode: "&#8736;"},
      {entityChar: "∧", entityName: "&and;", entityCode: "&#8743;"},
      {entityChar: "∨", entityName: "&or;", entityCode: "&#8744;"},
      {entityChar: "∩", entityName: "&cap;", entityCode: "&#8745;"},
      {entityChar: "∪", entityName: "&cup;", entityCode: "&#8746;"},
      {entityChar: "∫", entityName: "&int;", entityCode: "&#8747;"},
      {entityChar: "∴", entityName: "&there4;", entityCode: "&#8756;"},
      {entityChar: "∼", entityName: "&sim;", entityCode: "&#8764;"},
      {entityChar: "≅", entityName: "&cong;", entityCode: "&#8773;"},
      {entityChar: "≈", entityName: "&asymp;", entityCode: "&#8776;"},
      {entityChar: "≠", entityName: "&ne;", entityCode: "&#8800;"},
      {entityChar: "≡", entityName: "&equiv;", entityCode: "&#8801;"},
      {entityChar: "≤", entityName: "&le;", entityCode: "&#8804;"},
      {entityChar: "≥", entityName: "&ge;", entityCode: "&#8805;"},
      {entityChar: "⊂", entityName: "&sub;", entityCode: "&#8834;"},
      {entityChar: "⊃", entityName: "&sup;", entityCode: "&#8835;"},
      {entityChar: "⊄", entityName: "&nsub;", entityCode: "&#8836;"},
      {entityChar: "⊆", entityName: "&sube;", entityCode: "&#8838;"},
      {entityChar: "⊇", entityName: "&supe;", entityCode: "&#8839;"},
      {entityChar: "⊕", entityName: "&oplus;", entityCode: "&#8853;"},
      {entityChar: "⊗", entityName: "&otimes;", entityCode: "&#8855;"},
      {entityChar: "⊥", entityName: "&perp;", entityCode: "&#8869;"},
      {entityChar: "⋅", entityName: "&sdot;", entityCode: "&#8901;"},
      {entityChar: "Α", entityName: "&Alpha;", entityCode: "&#913;"},
      {entityChar: "Β", entityName: "&Beta;", entityCode: "&#914;"},
      {entityChar: "Γ", entityName: "&Gamma;", entityCode: "&#915;"},
      {entityChar: "Δ", entityName: "&Delta;", entityCode: "&#916;"},
      {entityChar: "Ε", entityName: "&Epsilon;", entityCode: "&#917;"},
      {entityChar: "Ζ", entityName: "&Zeta;", entityCode: "&#918;"},
      {entityChar: "Η", entityName: "&Eta;", entityCode: "&#919;"},
      {entityChar: "Θ", entityName: "&Theta;", entityCode: "&#920;"},
      {entityChar: "Ι", entityName: "&Iota;", entityCode: "&#921;"},
      {entityChar: "Κ", entityName: "&Kappa;", entityCode: "&#922;"},
      {entityChar: "Λ", entityName: "&Lambda;", entityCode: "&#923;"},
      {entityChar: "Μ", entityName: "&Mu;", entityCode: "&#924;"},
      {entityChar: "Ν", entityName: "&Nu;", entityCode: "&#925;"},
      {entityChar: "Ξ", entityName: "&Xi;", entityCode: "&#926;"},
      {entityChar: "Ο", entityName: "&Omicron;", entityCode: "&#927;"},
      {entityChar: "Π", entityName: "&Pi;", entityCode: "&#928;"},
      {entityChar: "Ρ", entityName: "&Rho;", entityCode: "&#929;"},
      {entityChar: "Σ", entityName: "&Sigma;", entityCode: "&#931;"},
      {entityChar: "Τ", entityName: "&Tau;", entityCode: "&#932;"},
      {entityChar: "Υ", entityName: "&Upsilon;", entityCode: "&#933;"},
      {entityChar: "Φ", entityName: "&Phi;", entityCode: "&#934;"},
      {entityChar: "Χ", entityName: "&Chi;", entityCode: "&#935;"},
      {entityChar: "Ψ", entityName: "&Psi;", entityCode: "&#936;"},
      {entityChar: "Ω", entityName: "&Omega;", entityCode: "&#937;"},
      {entityChar: "α", entityName: "&alpha;", entityCode: "&#945;"},
      {entityChar: "β", entityName: "&beta;", entityCode: "&#946;"},
      {entityChar: "γ", entityName: "&gamma;", entityCode: "&#947;"},
      {entityChar: "δ", entityName: "&delta;", entityCode: "&#948;"},
      {entityChar: "ε", entityName: "&epsilon;", entityCode: "&#949;"},
      {entityChar: "ζ", entityName: "&zeta;", entityCode: "&#950;"},
      {entityChar: "η", entityName: "&eta;", entityCode: "&#951;"},
      {entityChar: "θ", entityName: "&theta;", entityCode: "&#952;"},
      {entityChar: "ι", entityName: "&iota;", entityCode: "&#953;"},
      {entityChar: "κ", entityName: "&kappa;", entityCode: "&#954;"},
      {entityChar: "λ", entityName: "&lambda;", entityCode: "&#955;"},
      {entityChar: "μ", entityName: "&mu;", entityCode: "&#956;"},
      {entityChar: "ν", entityName: "&nu;", entityCode: "&#957;"},
      {entityChar: "ξ", entityName: "&xi;", entityCode: "&#958;"},
      {entityChar: "ο", entityName: "&omicron;", entityCode: "&#959;"},
      {entityChar: "π", entityName: "&pi;", entityCode: "&#960;"},
      {entityChar: "ρ", entityName: "&rho;", entityCode: "&#961;"},
      {entityChar: "ς", entityName: "&sigmaf;", entityCode: "&#962;"},
      {entityChar: "σ", entityName: "&sigma;", entityCode: "&#963;"},
      {entityChar: "τ", entityName: "&tau;", entityCode: "&#964;"},
      {entityChar: "υ", entityName: "&upsilon;", entityCode: "&#965;"},
      {entityChar: "φ", entityName: "&phi;", entityCode: "&#966;"},
      {entityChar: "χ", entityName: "&chi;", entityCode: "&#967;"},
      {entityChar: "ψ", entityName: "&psi;", entityCode: "&#968;"},
      {entityChar: "ω", entityName: "&omega;", entityCode: "&#969;"},
      {entityChar: "ϑ", entityName: "&thetasym;", entityCode: "&#977;"},
      {entityChar: "ϒ", entityName: "&upsih;", entityCode: "&#978;"},
      {entityChar: "ϖ", entityName: "&piv;", entityCode: "&#982;"},
      {entityChar: "Œ", entityName: "&OElig;", entityCode: "&#338;"},
      {entityChar: "œ", entityName: "&oelig;", entityCode: "&#339;"},
      {entityChar: "Š", entityName: "&Scaron;", entityCode: "&#352;"},
      {entityChar: "š", entityName: "&scaron;", entityCode: "&#353;"},
      {entityChar: "Ÿ", entityName: "&Yuml;", entityCode: "&#376;"},
      {entityChar: "ƒ", entityName: "&fnof;", entityCode: "&#402;"},
      {entityChar: "ˆ", entityName: "&circ;", entityCode: "&#710;"},
      {entityChar: "˜", entityName: "&tilde;", entityCode: "&#732;"},
      {entityChar: " ", entityName: "&ensp;", entityCode: "&#8194;"},
      {entityChar: " ", entityName: "&emsp;", entityCode: "&#8195;"},
      {entityChar: " ", entityName: "&thinsp;", entityCode: "&#8201;"},
      {entityChar: "‌", entityName: "&zwnj;", entityCode: "&#8204;"},
      {entityChar: "‍", entityName: "&zwj;", entityCode: "&#8205;"},
      {entityChar: "‎", entityName: "&lrm;", entityCode: "&#8206;"},
      {entityChar: "‏", entityName: "&rlm;", entityCode: "&#8207;"},
      {entityChar: "–", entityName: "&ndash;", entityCode: "&#8211;"},
      {entityChar: "—", entityName: "&mdash;", entityCode: "&#8212;"},
      {entityChar: "‘", entityName: "&lsquo;", entityCode: "&#8216;"},
      {entityChar: "’", entityName: "&rsquo;", entityCode: "&#8217;"},
      {entityChar: "‚", entityName: "&sbquo;", entityCode: "&#8218;"},
      {entityChar: "“", entityName: "&ldquo;", entityCode: "&#8220;"},
      {entityChar: "”", entityName: "&rdquo;", entityCode: "&#8221;"},
      {entityChar: "„", entityName: "&bdquo;", entityCode: "&#8222;"},
      {entityChar: "†", entityName: "&dagger;", entityCode: "&#8224;"},
      {entityChar: "‡", entityName: "&Dagger;", entityCode: "&#8225;"},
      {entityChar: "•", entityName: "&bull;", entityCode: "&#8226;"},
      {entityChar: "…", entityName: "&hellip;", entityCode: "&#8230;"},
      {entityChar: "‰", entityName: "&permil;", entityCode: "&#8240;"},
      {entityChar: "′", entityName: "&prime;", entityCode: "&#8242;"},
      {entityChar: "″", entityName: "&Prime;", entityCode: "&#8243;"},
      {entityChar: "‹", entityName: "&lsaquo;", entityCode: "&#8249;"},
      {entityChar: "›", entityName: "&rsaquo;", entityCode: "&#8250;"},
      {entityChar: "‾", entityName: "&oline;", entityCode: "&#8254;"},
      {entityChar: "€", entityName: "&euro;", entityCode: "&#8364;"},
      {entityChar: "™", entityName: "&trade;", entityCode: "&#8482;"},
      {entityChar: "←", entityName: "&larr;", entityCode: "&#8592;"},
      {entityChar: "↑", entityName: "&uarr;", entityCode: "&#8593;"},
      {entityChar: "→", entityName: "&rarr;", entityCode: "&#8594;"},
      {entityChar: "↓", entityName: "&darr;", entityCode: "&#8595;"},
      {entityChar: "↔", entityName: "&harr;", entityCode: "&#8596;"},
      {entityChar: "↵", entityName: "&crarr;", entityCode: "&#8629;"},
      {entityChar: "⌈", entityName: "&lceil;", entityCode: "&#8968;"},
      {entityChar: "⌉", entityName: "&rceil;", entityCode: "&#8969;"},
      {entityChar: "⌊", entityName: "&lfloor;", entityCode: "&#8970;"},
      {entityChar: "⌋", entityName: "&rfloor;", entityCode: "&#8971;"},
      {entityChar: "◊", entityName: "&loz;", entityCode: "&#9674;"},
      {entityChar: "♠", entityName: "&spades;", entityCode: "&#9824;"},
      {entityChar: "♣", entityName: "&clubs;", entityCode: "&#9827;"},
      {entityChar: "♥", entityName: "&hearts;", entityCode: "&#9829;"},
      {entityChar: "♦", entityName: "&diams;", entityCode: "&#9830;"}
   ];


// Initialize a Clazzer #object
function Clazzer( uri ) {
   if ( !( this instanceof Clazzer ) ) {
      return new Clazzer( uri );
   }

   // HANDLE: If Clazzer(); Clazzer(undefined); Clazzer(null);
   if ( !uri ) {
      return this;
   }

   return push.call( this, ( uri + "" ) );
}

/**
 * Returns access matched values ascii in [entityChar, entityName, entityCode]
 * where searching command [entityChar, entityName, entityCode] use keywords
 * @param {Object} obj ASCII Array objects only:
 * @param {String} search ASCII characters, code, name, Only:
 * @param {String} searchWith entityChar | entityName | entityCode use keywords
 * @param {String} accessWith entityChar | entityName | entityCode use keywords
 * @returns matched values
 */
access = Clazzer.access = function( obj, search, searchWith, accessWith ) {
   var i = 0, matched,
      cur,
      length = obj.length;

   for ( ; i < length; i++ ) {
      cur = ascii[ i ];
      if ( cur[ searchWith ] === search && 
         ( matched = cur[ accessWith ] ) ) {
         return matched;
      }
   }

   return search;
};

Clazzer.prototype = {

   // The current version of Clazzer being use Latest: v1.0.0
   version: version,

   // The default length of a Clazzer object is eq 0
   length: 0,

   // ? Define Clazzer constructor
   constructor: Clazzer,

   encodeEntity: function() {
      return Clazzer.encodeEntity( this[ 0 ] );
   },

   decodeEntity: function() {
      return Clazzer.decodeEntity( this[ 0 ] );
   },

   encodeSpecEntity: function( flags ) {
      return Clazzer.encodeSpecEntity( this[ 0 ], flags );
   },

   decodeSpecEntity: function( flags ) {
      return Clazzer.decodeSpecEntity( this[ 0 ], flags );
   },

   encodeHTMLEntity: function() {
      return Clazzer.encodeHTMLEntity( this[ 0 ] );
   },

   decodeHTMLEntity: function() {
      return Clazzer.decodeHTMLEntity( this[ 0 ] );
   },

   // For internal use only.
   // Behaves like an Array's method, not like a Clazzer method.
   push: push,

   // Set sort method like in Clazzer method Internal use Only
   sort: arr.sort,

   // Set splice method like in Clazzer method Internal use Only
   splice: arr.splice
};

// encodeEntity encode only HTML Special characters and symbols
// encoder type encoding from named input:&, outputs: &amp;
Clazzer.encodeEntity = function( uri ) {
   var ret = "",
      i = 0,
      chars = ( uri + "" ).split( "" ),
      length = chars.length;

   for ( ; i < length; i++ ) {
      ret += access( ascii, chars[ i ], "entityChar", "entityName" );
   }

   return ret;
};

// Used by decodeEntity as callback to replace()
function fdecodeEntity( letter, _pos ) {
   return access( ascii, letter, "entityName", "entityChar" );
}

// decodeEntity decode only HTML Special characters and symbols
// decoder type decoding from named input:&amp;, outputs: &;
Clazzer.decodeEntity = function( uri ) {
   return ( uri + "" ).replace( rentiCache, fdecodeEntity );
};

// Used by encodeSpecEntity as callback to replace()
// Used by encodeSpecEntity replace (") double cots
function fentCompat( _quotes, _pos ) {
   return "&quot;";
}

// Used by encodeSpecEntity as callback to replace()
// Used by encodeSpecEntity replace ("|') double & cots
function fentQuotes( quotes, _pos ) {
   return quotes === "'" ? "&#39;" : "&quot;";
}

// Used by decodeSpecEntity as callback to replace()
// Used by encodeSpecEntity replace (&quot;) double cots
function fdecCompat( _quotes, _pos ) {
   return ( '"' );
}

// Used by decodeSpecEntity as callback to replace()
// Used by encodeSpecEntity replace (&quot|&#39;) double cots
function fdecQuotes( quotes, _pos ) {
   return quotes === "&quot;" ? '"' : "'";
}

/* encodeSpecEntity
 * encodeSpecEntity always encode HTMLSpecial characters and symbols
 * ?But encodeSpecEntity in more one features includes Quotes encode
 * encodeSpecEntity encoding single "'" cots and double "\"" cots
 * 1) if pass in flags keywords ENT_COMPAT so encodeSpecEntity
 *    - encode only double "\"" to "&quote;"
 * 2) if pass in flags keywords ENT_QUOTES so encodeSpecEntity
 *    - encode double "\"" and single "'" cots "&quote;" and "&#39;"
 * 3) if pass in flags "ENT_NOQUOTES" so encodeSpecEntity encode
 *    - Only double "\"" cots.
 */
Clazzer.encodeSpecEntity = function( uri, flags ) {
   var encstr = Clazzer.encodeEntity( uri ),

      flagsHandler = {
         "ENT_NOQUOTES": encstr,
         "ENT_COMPAT": encstr.replace( rentCompat, fentCompat ),
         "ENT_QUOTES": encstr.replace( rentQuotes, fentQuotes )
      };

   // Force Clazzer flags to be an (valid) #flags
   flags = flags || "ENT_QUOTES";

   return flagsHandler[ flags ];
};

/* decodeSpecEntity
 * decodeSpecEntity always decode HTMLSpecial characters and symbols
 * ?But decodeSpecEntity in more one features includes Quotes decode
 * decodeSpecEntity encoding single "'" cots and double "\"" cots
 * 1) if pass in flags keywords ENT_COMPAT so decodeSpecEntity
 *    - decode only double "\"" to "&quote;"
 * 2) if pass in flags keywords ENT_QUOTES so decodeSpecEntity
 *    - decode double "\"" and single "'" cots "&quote;" and "&#39;"
 * 3) if pass in flags "ENT_NOQUOTES" so decodeSpecEntity decode
 *    - Only double "\"" cots.
 */
Clazzer.decodeSpecEntity = function( uri, flags ) {

   var decstr = Clazzer.decodeEntity( uri ),

      flagsHandler = {
         "ENT_NOQUOTES": decstr,
         "ENT_COMPAT": decstr.replace( rdecCompat, fdecCompat ),
         "ENT_QUOTES": decstr.replace( rdecQuotes, fdecQuotes )
      };
  
   // Force Clazzer flags to be an (valid) #flags
   flags = flags || "ENT_QUOTES";

   return flagsHandler[ flags ];
};

// encodeHTMLEntity encode ASCII and All string & characters
// :Inputs $.encodeHTMLEntity("jQeury");
// :Outputs: '&#106;&#81;&#101;&#117;&#114;&#121;'
Clazzer.encodeHTMLEntity = function( uri ) {
   var ret = "",
      i = 0,
      chars = ( uri + "" ).split( "" ),
      length = chars.length;

   for ( ; i < length; i++ ) {
      ret += access( ascii, chars[ i ], "entityChar", "entityCode" );
   }

   return ret;
};

// Used by decodeHTMLEntity as callback to replace()
function fdecodeHTMLEntity( letter, _pos ) {
   return access( ascii, letter, "entityCode", "entityChar" );
}

// decodeHTMLEntity decode ASCII and All string & characters
// :Inputs $.decodeHTMLEntity("&#106;&#81;&#101;&#117;&#114;&#121;");
// :Outputs: "JQeury"
Clazzer.decodeHTMLEntity = function( uri ) {
   return ( uri + "" ).replace( rentiCache, fdecodeHTMLEntity );
};

// Sizzle requires that there be a global window in Common-JS like environments
if ( typeof define === "function" && define.amd ) {
   define( function() {
      return Clazzer;
   } );

// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module === "object" && typeof module.exports ) {
   module.exports = Clazzer;
} else {
   window.Clazzer = Clazzer;
}

// EXPOSE

} )( window );