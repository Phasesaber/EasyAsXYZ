function loadEditor(language, fileName){
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/cobalt");
	editor.setValue("jQuery not loading file!\nMake sure you're at http://learn.5th.xyz/");
	var fontSize = 18;
	editor.setFontSize(fontSize);
	$.get("http://learn.5th.xyz/docs/" + fileName , function(data){
		editor.setValue(data);
		editor.getSession().setMode("ace/mode/" + language);
	});
	var lineBreaks = (editor.getValue().match(/\n/gm)||[]).length;
	document.getElementById("editor").style.height = ((fontSize * (lineBreaks + 1)) + 6) + "px";
	editor.gotoLine(1);
	//editor.setReadOnly(true);
}
