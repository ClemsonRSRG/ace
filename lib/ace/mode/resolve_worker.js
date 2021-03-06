define(function(require, exports, module) {
    
var oop = require("ace/lib/oop");
var Mirror = require("ace/worker/mirror").Mirror;
//var lint = require("ace/worker/jslint").JSLINT;
var lint = require("ace/worker/jshint").JSHINT;
    
var ResolveWorker = exports.ResolveWorker = function(sender) {
    Mirror.call(this, sender);
    this.setTimeout(500);
};

oop.inherits(ResolveWorker, Mirror);

(function() {
    
    this.onUpdate = function() {
        /*var value = this.doc.getValue();
        value = value.replace(/^#!.*\n/, "\n");
        
//        var start = new Date();
        var parser = require("ace/resolve_antlr/RParser");
        try {
            parser.module();
        } catch(e) {
            console.log("parser exception")
            console.log(e);*/
            /*this.sender.emit("narcissus", {
                row: e.lineno-1,
                column: null, // TODO convert e.cursor
                text: e.message,
                type: "error"
            });*/
            /*return;
        } finally {
//            console.log("parse time: " + (new Date() - start));
        }
        
//        var start = new Date();
//        console.log("jslint")
        //lint(value, {undef: false, onevar: false, passfail: false});
        //this.sender.emit("jslint", lint.errors);        
//        console.log("lint time: " + (new Date() - start));*/
    }
    
}).call(ResolveWorker.prototype);

});
