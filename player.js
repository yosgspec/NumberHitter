"use strict";
const rl=require("readline").createInterface(process.stdin);

function line(h,args){
	var i=0|(hint!="START"? args[0]: 0);
	return `${i+1}`;
}

function herf(hint,args){
	var ans,rangeMin,rangeMax;
	if(hint=="START"){
		rangeMin=0;
		rangeMax=100000000;
	}
	else{
		ans=0|args[0];
		rangeMin=0|args[1];
		rangeMax=0|args[2];
	}
	if(hint=="LOW") rangeMin=ans+1;
	if(hint=="HIGH") rangeMax=ans-1;
	return `${0|(rangeMin+rangeMax)/2} ${rangeMin} ${rangeMax}`;
}

const g=function*(res){
	var args=(yield rl.once("line",res))
		.trim()
		.split(/ /);
	var hint=args.shift();
	console.log(herf(hint,args));
	process.exit();
}(v=>g.next(v));
g.next();
