function access( obj, search, searchWith, accessWith ) {
   var i = 0, matched,
      cur,
      length = obj.length;

   for ( ; i < length; i++ ) {
      cur = obj[ i ];
      if ( cur[ searchWith ] === search && 
         ( matched = cur[ accessWith ] ) ) {
         return matched;
      }
   }

   return search;
}

export default access;