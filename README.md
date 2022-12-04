# Clazzer

![Author](https://codingmodassir.000webhostapp.com/badges/author/Author-coding-modassir.svg)
![Language](http://codingmodassir.000webhostapp.com/badges/lang/language-Javascript.svg)
![License](http://codingmodassir.000webhostapp.com/badges/license/license-MIT.svg)
![Version](./module/Clazzer-v1.0.svg)
![Release](http://codingmodassir.000webhostapp.com/badges/releases/releases-1.svg)

**Clazzer is pure Javascript HTMLEntity parser encoder/decoder plugin easily encode/decode HTML chars v1.0.0**

* [Source Repositry](https://github.com/jqeurys/clazzer/)
* [Project Homepage](https://github.com/jqeurys/clazzer/wiki)
* [Coding Modassir](https://codingmodassir.com)
* [jQeury Library](https://jqeury.com)
* [Browser Support](https://support.jqeury.com)

## How to Build Clazzer
Clone a copy of the main clazzer git repo by running:
```
git clone git://github.com/jquery/clazzer.git
```
In the clazzer/plugin folder you will find build version of clazzer along with the minified copy and associated map file.

## Download Clazzer using npm
```
npm install clazzer
```

## Implement Clazzer on you webpage
**Note:** We suggesst You implement Clazzer always in under head section. or body of last section. use only

### Script tag
```
<script src="https://jqeurys.github.io/clazzer/plugin/clazzer-min.js" defer></script>
```

## How to use Clazzer Methods
### encodeEntity:
* #### `Clazzer.encodeEntity(String uri);`
* #### `Clazzer(String uri).encodeEntity();`

**Note:** encodeEntity method will be encode HTML-Special characters in named `&amp;` Clazzer format. But encodeEntity method will be not encode single ` ' ` cots and double ` " ` cots. encodeEntity encode only HTML-Special characters.

### Use
```
Clazzer("<h1>The first of Header</h1>").encodeEntity();

// OR

Clazzer.encodeEntity("<h1>The first of Header</h1>");
```

***@Parameters***

**uri:** A HTML-Characters or HTML-String &lt;h1&gt;The first of Header&lt;/h1&gt;

**Outputs:** `&lt;h1&gt;The first of Header&lt;/h1&gt;`

### `decodeEntity:`
* #### `Clazzer.decodeEntity(String uri);`
* #### `Clazzer(String uri).decodeEntity();`

**Note:** decodeEntity method will be decode HTML-Special characters in named `&amp;` to ` & ` Clazzer format. But decodeEntity method will be not decode single ` ' ` cots and double ` " ` cots. decodeEntity decode only HTML-Special characters.

### Use
```
Clazzer.decodeEntity("&lt;h1&gt;The first of Header&lt;/h1&gt;");

// OR

Clazzer("&lt;h1&gt;The first of Header&lt;/h1&gt;").decodeEntity();
```

***@Parameters***

**uri:** A HTML-Characters or HTML-String `&lt;h1&gt;The first of Header&lt;/h1&gt;`

**Outputs:** `<h1>The first of Header</h1>`

### `encodeHTMLEntity:`
* #### `Clazzer(String uri).encodeHTMLEntity();`
* #### `Clazzer.encodeHTMLEntity();`

**Note:** encodeHTMLEntity method will be encode HTML-Special characters or All char in code ` ' ` to ` &#39; ` Clazzer format. encodeHTMLEntity encode by All ASCII char and All keyboard char Clazzer code format.

### Use
```
// Before initialize new Clazzer(String uri); and use after
var ent = new Clazzer("<h1>Encode Clazzer<h1>");
ent.encodeHTMLEntity();

// OR 

Clazzer.encodeHTMLEntity("<h1>Encode Clazzer<h1>");

// OR
Clazzer().encodeHTMLEntity("<h1>Encode Clazzer<h1>");
```

***@Parameters***

**uri** A HTML-Special characters, ASCII chars, Keyboard chars or any chars String.

**Outputs:** `&#60;&#104;&#49;&#62;&#69;&#110;&#99;&#111;&#100;&#101;&#160;&#101;&#110;&#116;&#105;&#116;&#121;&#60;&#104;&#49;&#62;`

### `decodeHTMLEntity:`
* #### `Clazzer(String uri).decodeHTMLEntity();`
* #### `Clazzer.decodeHTMLEntity();`

**Note:** decodeHTMLEntity method will be decode HTML-Special characters or All char in code ` &#39; ` to ` ' ` Clazzer format. decodeHTMLEntity decode by All ASCII char and All keyboard char Clazzer code format.

### Use
```
Clazzer.decodeHTMLEntity("&#60;&#104;&#49;&#62;&#69;&#110;&#99;&#111;&#100;&#101;&#160;&#101;&#110;&#116;&#105;&#116;&#121;&#60;&#104;&#49;&#62;");

// OR
Clazzer().decodeHTMLEntity("&#60;&#104;&#49;&#62;&#69;&#110;&#99;&#111;&#100;&#101;&#160;&#101;&#110;&#116;&#105;&#116;&#121;&#60;&#104;&#49;&#62;");
```

***@Parameters***

**uri** A encoded Clazzer uri code format `&#69;&#110;&#116;&#105;&#116;&#121;` String.

**Outputs:** `<h1>Encode Clazzer<h1>`

### `encodeSpecEntity:`
* #### `Clazzer.encodeSpecEntity(String uri, String flags);`
* #### `Clazzer(String uri).encodeSpecEntity(String flags);`

**Note:** encodeSpecEntity method will be encode always HTML-Special characters ` & ` to ` &amp; ` Only. If pass parameter `String flags` in use keywords `ENT_QUOTES` | `ENT_NOQUOTES` | `ENT_COMPAT` If use `ENT_QUOTES` keywords so encodeSpecEntity will be encode single ` ' ` and double ` " ` cots. If use `ENT_COMPAT` keywords so encodeSpecEntity will be encode only double ` " ` cots. And if use `ENT_NOQUOTES` so encodeSpecEntity method will be not encode single ` ' ` and double ` " ` cots. encode only HTML-Special characters.

***@Parameters***

**uri** Use `HTML-Special` characters, `ASCII` characters, `keyboards` char or HTML-Code `<h1 class="raw">'Clazzer'</h1>`

**flags** Accept flags 3 types String keywords
1. `ENT_QUOTES`
2. `ENT_NOQUOTES`
3. `ENT_COMPAT`

### Use
```
var entityCode = "<h1 class="raw">'Clazzer'</h1>";

Clazzer.encodeSpecEntity(entityCode, "ENT_QUOTES"); // Outputs: &lt;h1&nbsp;class=&quot;raw&quot;&gt;&#39;Clazzer&#39;&lt;/h1&gt;
Clazzer.encodeSpecEntity(entityCode, "ENT_NOQUOTES"); // Outputs: &lt;h1&nbsp;class="raw"&gt;'Clazzer'&lt;/h1&gt;
Clazzer.encodeSpecEntity(entityCode, "ENT_COMPAT"); // Outputs: &lt;h1&nbsp;class=&quot;raw&quot;&gt;'Clazzer'&lt;/h1&gt;

// OR
// If not pass any flags keywords so encodeSpecEntity
// SET: auto by default keywords "ENT_QUOTES"
Clazzer.encodeSpecEntity(entityCode); // Outputs: &lt;h1&nbsp;class=&quot;raw&quot;&gt;&#39;Clazzer&#39;&lt;/h1&gt;
Clazzer(entityCode).encodeSpecEntity(); // Outputs: &lt;h1&nbsp;class=&quot;raw&quot;&gt;&#39;Clazzer&#39;&lt;/h1&gt;

// OR 
Clazzer(entityCode).encodeSpecEntity("ENT_QUOTES"); // Outputs: &lt;h1&nbsp;class=&quot;raw&quot;&gt;&#39;Clazzer&#39;&lt;/h1&gt;
Clazzer(entityCode).encodeSpecEntity("ENT_NOQUOTES"); // Outputs: &lt;h1&nbsp;class="raw"&gt;'Clazzer'&lt;/h1&gt;
Clazzer(entityCode).encodeSpecEntity("ENT_COMPAT"); // Outputs: &lt;h1&nbsp;class=&quot;raw&quot;&gt;'Clazzer'&lt;/h1&gt;
```


### `decodeSpecEntity:`
* #### `Clazzer.decodeSpecEntity(String uri, String flags);`
* #### `Clazzer(String uri).decodeSpecEntity(String flags);`

**Note:** decodeSpecEntity method will be decode always HTML-Special characters ` &amp; ` to ` & ` Only. If pass parameter `String flags` in use keywords `ENT_QUOTES` | `ENT_NOQUOTES` | `ENT_COMPAT` If use `ENT_QUOTES` keywords so decodeSpecEntity will be decode single ` ' ` and double ` " ` cots. If use `ENT_COMPAT` keywords so decodeSpecEntity will be decode only double ` " ` cots. And if use `ENT_NOQUOTES` so decodeSpecEntity method will be not decode single ` ' ` and double ` " ` cots. decode only HTML-Special characters.

***@Parameters***

**uri** A encoded Clazzer uri code format `&lt;h1&nbsp;class=&quot;raw&quot;&gt;&#39;Clazzer&#39;&lt;/h1&gt;` String.

**flags** Accept flags 3 types String keywords
1. `ENT_QUOTES`
2. `ENT_NOQUOTES`
3. `ENT_COMPAT`

### Use
```
var entityCode = "&lt;h1&nbsp;class=&quot;raw&quot;&gt;&#39;Clazzer&#39;&lt;/h1&gt;";

Clazzer.encodeSpecEntity(entityCode, "ENT_QUOTES"); // Outputs: <h1 class="raw">'Clazzer'</h1>
Clazzer.encodeSpecEntity(entityCode, "ENT_NOQUOTES"); // Outputs: <h1 class=&quot;raw&quot;>&#39;Clazzer&#39;</h1>
Clazzer.encodeSpecEntity(entityCode, "ENT_COMPAT"); // Outputs: <h1 class="raw">&#39;Clazzer&#39;</h1>

// OR
// If not pass any flags keywords so encodeSpecEntity
// SET: auto by default keywords "ENT_QUOTES"
Clazzer.encodeSpecEntity(entityCode); // Outputs: <h1 class="raw">'Clazzer'</h1>
Clazzer(entityCode).encodeSpecEntity(); // Outputs: <h1 class="raw">'Clazzer'</h1>

// OR 
Clazzer(entityCode).encodeSpecEntity("ENT_QUOTES"); // Outputs: <h1 class="raw">'Clazzer'</h1>
Clazzer(entityCode).encodeSpecEntity("ENT_NOQUOTES"); // Outputs: <h1 class=&quot;raw&quot;>&#39;Clazzer&#39;</h1>
Clazzer(entityCode).encodeSpecEntity("ENT_COMPAT"); // Outputs: <h1 class="raw">&#39;Clazzer&#39;</h1>
```

## Main Clazzer Implement ROOT Folder Location `external/Clazzer/`
* **Root Folder** `external/Clazzer/`
* `external/Clazzer/Clazzer.js`
* `external/Clazzer/Clazzer-min.js`

## Access Clazzer Source API
* [Source code the compressed Clazzer-v1.0.0](https://)
* [Source code the uncompressed Clazzer-v1.0.0](https://)

# Module or React Import Clazzer
**Import Uncompressed Clazzer Source**
```
// uncompressed Clazzer 1.0.0
import Sizzles from "https://jqeurys.github.io/Clazzer/exports/Clazzer.js";
```

**Import Compressed Clazzer Source**
```
// compresssed Clazzer 1.0.0
import Sizzles from "https://jqeurys.github.io/Clazzer/exports/Clazzer-min.js";
```
