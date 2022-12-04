import push from "./vars/push.js";
import version from "./vars/version.js";
import arr from "./vars/arr.js";
import access from "./core/access.js";
import ascii from "./ascii/ascii.js";
import rentiCache from "./vars/rentiCache.js";
import fdecodeEntity from "./core/fdecodeEntity.js";
import rentCompat from "./vars/rentCompat.js";
import rentQuotes from "./vars/rentQuotes.js";
import fentCompat from "./core/fentCompat.js";
import fentQuotes from "./core/fentQuotes.js";
import rdecCompat from "./vars/rdecCompat.js";
import rdecQuotes from "./vars/rdecQuotes.js";
import fdecCompat from "./core/fdecCompat.js";
import fdecQuotes from "./core/fdecQuotes.js";
import fdecodeHTMLEntity from "./core/fdecodeHTMLEntity.js";

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

Clazzer.decodeEntity = function( uri ) {
   return ( uri + "" ).replace( rentiCache, fdecodeEntity );
};

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

Clazzer.decodeHTMLEntity = function( uri ) {
   return ( uri + "" ).replace( rentiCache, fdecodeHTMLEntity );
};

export default Clazzer;