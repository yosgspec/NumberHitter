"use strict";
const rl=require("readline").createInterface(process.stdin);

const g=function*(res){
	var args=(yield rl.once("line",res))
		.trim()
		.split(/ /);
	var hint=args.shift();

	var i=0|(hint!="START"? args[0]: 0);
	console.log(`${i+1}`);
	process.exit();
}(v=>g.next(v));
g.next();