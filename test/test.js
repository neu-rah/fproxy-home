'use strict';

var fs=require("fs");
var path=require("path");
var should = require('should');

var fProxy;
var textFile;
var myFile;

describe('fproxy-home', function() {
  describe('module load', function() {
    it('should return a setup function', function() {
			fProxy=require("fproxy-home");
			fProxy.should.be.type('function');
		});
	});
  describe('file media', function() {
    it('should return a file media handler function', function() {
			textFile=fProxy(fProxy.mediaDescriptors.file,o=>o.toString());
			textFile.should.be.type('function');
		});
	});

  describe('file reader', function() {
    it('should return functional file reader', function() {
			myFile=textFile("test/resources/test.txt");
      myFile.should.be.type('function');
		});
	});

  describe('read file', function() {
    it('should return the file content', function() {
			myFile().should.be.type('string');
      myFile().should.match(/this is a text file/);
		});
	});

  describe('resuse item', function() {
    it('should return same file item', function() {
      var otherFile=textFile("test/resources/test.txt");
      otherFile.should.be.exactly(myFile);
		});
	});

});
