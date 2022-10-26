function saveStaticDataToFile() {
  var blob = new Blob(["test"],
      { type: "text/plain;charset=utf-8" });
  
  saveAs(blob, "static.txt");
}
