"use strict";

var debug=module.id==="repl";
var log=debug?console.log:function(){};

var fpItem=require("fproxy");

var fProxy=module.exports=function fProxy(media,parser) {
  var fpHome={};
  media=media||fpItem.mediaDescriptors.mem;
  return function itemStor(tag) {
    var key=media.tag(tag);
    if (fpHome[key]) log("existing");
    return fpHome[key]||(fpHome[key]=fpItem(media,parser).apply(media,arguments));
  }
}

module.exports.mediaDescriptors=fpItem.mediaDescriptors;

if (debug) {
  var file=fProxy(fpItem.mediaDescriptors.file,o=>o.toString());
  var text=file("test/resources/test.txt");
  log(text());
}
