/*
 * Get selection or select line
 */
var line;
var eol = "\r\n";
if (UltraEdit.activeDocument.isSel()) {
    line = UltraEdit.activeDocument.selection;
    
//    if (UltraEdit.outputWindow.visible == false) 
//        UltraEdit.outputWindow.showWindow(true);
//    UltraEdit.outputWindow.write("line="+line);
    UltraEdit.activeDocument.findReplace.mode=1;
    UltraEdit.activeDocument.findReplace.replace(line, "[" + line + "]("+ UltraEdit.clipboardContent + ")");
}
