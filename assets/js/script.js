<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>ASCII Table Generator &ndash; Quickly format ASCII table. Great for source code comments and markdown!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="assets/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="assets/css/font-awesome.min.css" rel="stylesheet">
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/script.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <style>
  div {
	/*border:1px solid black;*/
  }
  </style>
</head>

<body class="dashboard" onload="createTable()">
  <div class="container-fluid" id="main">
    <div class="row">
      <header class="jumbotron">
        <div class="row">
          <div class="col-xs-1 col-xs-offset-1 text-right">
            <h1><a href=""><i id="icon" class="fa fa-table"></i><span id="title">ASCII Table Generator</span></a></h1>
          </div>
          <div class="col-xs-10">
            <h1><a href=""><pre>    _             _ _   _____     _     _
   / \   ___  ___(_|_) |_   _|_ _| |__ | | ___
  / _ \ / __|/ __| | |   | |/ _` | '_ \| |/ _ \
 / ___ \\__ \ (__| | |   | | (_| | |_) | |  __/
/_/   \_\___/\___|_|_|   |_|\__,_|_.__/|_|\___|</pre></a></h1>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-11 col-xs-offset-1">
            <p>Quickly format ASCII table. Great for <span>source code comments</span> and <span>Github Markdown</span>!</p>
          </div>
        </div>
      </header>
    </div>
    <div class="row">
      <div class="col-xs-3 col-sm-2 text-center">
        <h2>Input</h2>
        <div class="row">
          <button class="btn btn-lg btn-danger" id="loadDefault" onclick="loadDefault()">Reset <i class="fa fa-table"></i></button>
        </div>
      </div>
      <div class="col-xs-9">
        <div class="row">
          <textarea class="form-control fixed-width " rows="5" wrap="off" id="input" onchange="createTable()" onkeyup="createTable()">Col1	Col2	Col3	Numeric Column
Value 1	Value 2	123	10.0
Separate	cols    with a tab or 4 spaces	-2,027.1
This is a row with only one cell</textarea>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="well well-sm col-xs-10 col-xs-offset-1 col-sm-9 col-md-8 col-lg-offset-2 col-lg-6 col-lg-offset-3">
        <div class="col-xs-1">
		  <h2 title="Settings" id="settings"><i class="fa fa-gear"></i></h2>
		</div>
        <div class="col-xs-6">
          <div class="row">
            <label for="hdr-style" class="control-label" title="Select what should be used as a header">Header Location:
				<select id="hdr-style" onchange="createTable()" onselect="createTable()">
					<option value="none">None</option>
					<option value="top" selected="true">First Row</option>
					<option value="ssheet">Spreadsheet</option>
				</select>
			</label>
          </div>
          <div class="row">
            <label for="style" class="control-label" title="Select the output format of the table">Output Style:
				<select id="style" onchange="createTable()">
					<option value="mysql">ASCII (mysql style)</option>
					<option value="separated">ASCII (separated)</option>
					<option value="compact">ASCII (compact)</option>
					<option value="gfm">Github Markdown</option>
					<option value="rounded">ASCII (rounded)</option>
					<option value="bubbles">ASCII (bubbles)</option>
					<option value="girder">ASCII (girder)</option>
					<option value="dots">ASCII (dots)</option>
					<option value="unicode">Unicode</option>
					<option value="restructured">reStructuredText</option>
					<option value="wikim">Wikimedia</option>
					<option value="html">HTML</option>
				</select>
			</label>
          </div>
        </div>
        <div class="col-xs-5">
          <div class="row">
            <label for="auto-format" class="control-label" title="Center the headers and right-align numbers in the output table">Auto-Format: 
            <input id="auto-format" checked="true" type="checkbox" title="Center the headers and right-align numbers in the output table" onchange="createTable()"></label>
          </div>
          <div class="row">
            <label for="separator" class="control-label" title="Identify character for custom separator, default is the tab character">Custom Separator: 
            <input id="separator" type="text" name="separator" maxlength="1" size="1" onfocus="this.value = '';createTable()" onkeyup="createTable()"
            /></label>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-3 col-sm-2 text-center">
        <div class="row">
          <h2>Output</h2>
        </div>
        <div class="row">
          <button class="btn btn-lg btn-primary" onclick="parseTableClick()">Parse <i class="fa fa-table"></i></button>
        </div>
      </div>
      <div class="col-xs-9">
        <div id="outputText" class="row">
          <textarea id="output" class="form-control fixed-width" rows="8" wrap="off"></textarea>
        </div>
      </div>
    </div>

    <div id="outputTbl" class="row"></div>
    <div class="row">
      <footer>
        Idea and code base by <a href="http://www.sensefulsolutions.com/2010/10/format-text-as-table.html">Senseful Solutions</a>. Forked by <a href="https://github.com/ozh">Ozh</a> to tweak a few stuff and to add <abbr title="Github Flavored Markdown">GFM</abbr>.
        See on <a href="https://github.com/ozh/ascii-tables">Github</a>.
      </footer>
    </div>
  </div>
</body>
</html>
