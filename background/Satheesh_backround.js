(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AITjBQgDACgDACQiEBigxAiQhUA7hVAxQidBbizBKAoejJQAEgBAFgBQC0grFSATQC/AMBeAGQCXAJBlAAQAEAAAFAAQAAAAAAAAQAGAAAGAAAoVjIICBCKIAMARIAvBGIA5BGIBqCBIAAABIgCAJQAEgCAMgEQAHgCAAgKQgJAFgMADIAAABAIJjEQizA2keAxQkdAxhhAYQgKADgJACIgIgDQAFABAKgBQAHgCAFAAAmaghQgDAKgCADQgFAGgFgCIg3DKQAugEAvgZQA2ggAcgQ");
	this.shape.setTransform(-58.9,23.395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkbBjIg5hFIgwhGIgLgRIiBiKIgBgDQC0grFTASIEcATQCYAJBkAAIgBAEIAFAHQiEBigxAiQhVA6hUAxQidBcizBKIgVAIIAAAAgAlUgLIATgEQBhgYEcgyQEegwCzg2QizA2keAwQkcAyhhAYQgFgBgIACQgJACgFgBgAmlgLQAGABAFgFQACgDACgKIASgMIAwBGIA5BFIgRAOIhSAwQgvAZguAFg");
	this.shape_1.setTransform(-59.3875,22.9075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AHWiaIgyAAQhPAbiJArQhMAYiTAuQgCABgDAAQg0APimAdQiOAZhLAnIAABGAnLiuINvAAIA8AAAnLC5QADgBADgBQABAAAAAAQBRgfCEg5QCNg9BPgdAnLiuIAAENAnfiuIAUAAAnLi4IAAAK");
	this.shape_2.setTransform(-51,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Am3ChIAAhGIAAkNINvAAIAAAUQhPAciJArIjgBFIgEACQg0APimAdQiOAZhLAmQBLgmCOgZQCmgdA0gPIAEARQhOAeiNA8QiEA5hRAfg");
	this.shape_3.setTransform(-53,18.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.6,-2.5,115.1,51.8);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgMCBQgNgEgOgDIgDgEIgOgHIgFgEIgZgGIgDgBIgFgFIgIgIIgRgHIgIgPIgEgIIgHgIQgBgDAAgEIAAgHQgBgEgCgCIgOgIIgDgEIAAgVIAAgPIAAgPIABgIIABgHIAIgIIAIgHIACgIIACgHIAFgIIADgHIAGgIIAGgHIAPgGIAGgEQAMgDAMgEQADgBACgCIADgCQAVgBAVACQADABADACIAEAIIADAHQACAEgCADQgBAEgEAEIgKAIIAFAHIAFAFIAHgDQADgDABgEIADgGQACgDADgBIAIgBQAdgDAcACQAAAAABAAQAAAAAAAAQABABAAAAQAAABABAAIAOAGIAGAEIAHAIIAHAIIADAHIAEAGIANAKQACACABAEIAFAIIAFAHIAAAIIAAAHIAFAIIAEAHIABAHIAHAIIADAHIAAAHIAAAIIAAAHIgFAIQgDADgBAEQgBAEAAAEIAAAHIAAAIIgBAHIgBAIIgcABIAAgBIgFgFQgDgEgFgCQgDgBgEACIgOAFIgDACIgGAFIgHAIIgOAFIgEACIgEAFIgIAIIguACQgDgCgDgBg");
	this.shape.setTransform(0,-0.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apple, new cjs.Rectangle(-16,-13.2,32,26.4), null);


(lib.paperPlane_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-24,-5.95,1,1,0,0,0,-58.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-58.1,rotation:5.0193,x:7,y:-21.95},0).wait(1).to({rotation:9.7289,x:39.95,y:-35.85},0).wait(1).to({rotation:14.0152,x:75.5,y:-47.7},0).wait(1).to({rotation:17.8912,x:113.55,y:-57.55},0).wait(1).to({rotation:21.3825,x:154.3,y:-65.3},0).wait(1).to({rotation:24.5215,x:197.75,y:-70.95},0).wait(1).to({rotation:27.3428,x:243.7,y:-74.55},0).wait(1).to({rotation:29.8806,x:292.3,y:-76.1},0).wait(1).to({rotation:32.1671,x:343.55,y:-75.6},0).wait(1).to({rotation:34.2316,x:397.4,y:-73},0).wait(1).to({rotation:36.1003,x:453.85,y:-68.4},0).wait(1).to({rotation:37.7964,x:513,y:-61.65},0).wait(1).to({rotation:39.3402,x:574.7,y:-52.9},0).wait(1).to({rotation:40.7494,x:639.1,y:-42},0).wait(1).to({rotation:42.0394,x:706.1,y:-29.1},0).wait(1).to({rotation:43.2237,x:775.65,y:-14.2},0).wait(1).to({rotation:44.3138,x:847.95,y:2.85},0).wait(1).to({rotation:45.3198,x:922.8,y:21.95},0).wait(1).to({rotation:46.2506,x:1000.3,y:43.2},0).wait(1).to({rotation:47.1139,x:1080.5,y:66.4},0).wait(1).to({rotation:47.9165,x:1163.3,y:91.75},0).wait(1).to({rotation:48.6643,x:1248.8,y:119.15},0).wait(1).to({rotation:49.3625,x:1336.9,y:148.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-124.5,1470.2,303.1);


(lib.fronttree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.apple();
	this.instance.setTransform(66,-125.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:66.8803,y:-121.8998},0).wait(1).to({x:67.6803,y:-117.1189},0).wait(1).to({x:68.4001,y:-111.5581},0).wait(1).to({x:69.0398,y:-105.2176},0).wait(1).to({x:69.5994,y:-98.0979},0).wait(1).to({x:70.0789,y:-90.199},0).wait(1).to({x:70.4785,y:-81.5211},0).wait(1).to({x:70.7981,y:-72.0643},0).wait(1).to({x:71.0378,y:-61.8286},0).wait(1).to({x:71.1976,y:-50.8138},0).wait(1).to({x:71.2775,y:-39.0198},0).wait(1).to({y:-26.4464},0).wait(1).to({x:71.1977,y:-13.0932},0).wait(1).to({x:71.038,y:1.0401},0).wait(1).to({x:70.7983,y:15.954},0).wait(1).to({x:70.4788,y:31.6491},0).wait(1).to({x:70.0792,y:48.1259},0).wait(1).to({x:69.5997,y:65.3852},0).wait(1).to({x:69.0401,y:83.4278},0).wait(1).to({x:68.4004,y:102.2545},0).wait(1).to({x:67.6806,y:121.8661},0).wait(1).to({x:66.8805,y:142.2638},0).wait(1).to({x:66,y:163.45},0).wait(1));

	// apple
	this.instance_1 = new lib.apple();
	this.instance_1.setTransform(-52.5,-74.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AguCGIgIgIIgFgFIgDgCIgZgFIgHgIIgFgFIgCgCIgQgFIgHgIIgIgHIgHgIIgBgHIgEgIIgDgIIgCgHIgHgHIgHgIIgGgHIAAgIIAAgOIAAgWIAAgIIAAgHQAAgEABgDIAGgIIAHgJIAGgOIAHgHIADgIIADgHIAHgIIAIgHIAEgFIADgCIAOgHIAGgEIAZgFIAFgDIAAgCIArADIAHAHIAHAIIAGAHIABAFIAFAAIBJADIAEAHIAIAFIACADQAIACAGAFQADABABAEIADAHIAEAIIAKAIIAIAHIAEAIIABAHIAIAIIACAHIAAAIIAHAIIADAHIABAGIACAHIAFAIIABAIIABAHIAAAIIgBAHIgEAIIgFAHIAAAIIAAAHIAAAIIAAAHIgDAHIgFAIQgCADgCAAQgSABgRgBIgDgIIgDgHIgHAEIgSAIIgHAHIgKAIIgHAIIgPAHQgDADgDAAQgqAAgpgKgAhAiBIgCABQgDADgDABQgMAEgNACIgFAEIgPAGIgHAIIgEAHIgEAHIgEAIIgDAIIgDAHIgHAIIgHAHIgCAIIgBAHIAAAPIAAAPIAAAWIAEADIAMAJQADABABAEIAAAIQAAADACADIAFAJIAFAHIAIAPIASAIIAHAHIAFAFIADACIAYAGIAGAEIAOAHIADAEQAOACANAEQADABACADIAvgDIAHgHIAFgFIADgCIAPgGIAIgHIAEgFIAEgCIAOgGQAEgBADABQAEABAEAEIAFAFIAAABIAcgBIACgHIAAgIIAAgHIAAgIQAAgEABgDQACgEACgEIAFgHIAAgIIAAgHIAAgIIgDgHIgHgIIgBgHIgEgHIgFgHIAAgIIAAgHIgFgIIgFgHQgBgEgDgCIgMgLIgEgGIgDgHIgHgIIgIgHIgFgEIgPgGQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgdgBgcACIgIACQgEABgBACIgCAGQgCAEgDADIgHAEIgFgGIgFgHIAKgIQAEgDABgFQACgDgCgDIgDgIIgFgHQgCgDgCAAIgcgCIgPABg");
	this.shape.setTransform(-52.5,-75.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(24));

	// tree
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AkemWIr4AAIAA1PMAgtAAAIAAVPIuzAAAkemWIGCAAMAAAAh8ImCAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AjAQ/MAAAgh9IGBAAMAAAAh9g");
	this.shape_2.setTransform(-9.325,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FF00").s().p("ABkKoImBAAIr5AAIAA1PMAgtAAAIAAVPg");
	this.shape_3.setTransform(0,-108.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-177.6,211.3,355.29999999999995);


(lib.backtree2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.apple();
	this.instance.setTransform(62.15,-17.05,1.6875,1.6875,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.apple();
	this.instance_1.setTransform(-19.15,-171.05,1.625,1.625,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(20));

	// Layer_3
	this.instance_2 = new lib.apple();
	this.instance_2.setTransform(-62,14.05,1.625,1.625,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:0,x:-63.6447,y:13.4773},0).wait(1).to({x:-65.0696,y:18.1636},0).wait(1).to({x:-66.2748,y:27.5733},0).wait(1).to({x:-67.2605,y:41.3223},0).wait(1).to({x:-68.0271,y:59.0279},0).wait(1).to({x:-68.5745,y:80.3087},0).wait(1).to({x:-68.903,y:104.7844},0).wait(1).to({x:-69.0125,y:132.0755},0).wait(1).to({x:-68.9031,y:161.8031},0).wait(1).to({x:-68.5748,y:193.5888},0).wait(1).to({x:-68.0275,y:227.0547},0).wait(1).to({x:-67.2611,y:261.8227},0).wait(1).to({x:-66.2754,y:297.5148},0).wait(1).to({x:-65.0701,y:333.7524},0).wait(1).to({x:-63.6451,y:370.1568},0).wait(1).to({x:-62,y:406.35},0).wait(4));

	// apple
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAK8IwIAAMAAAg5fMAgRAAAMAAAA5fImdAAgAJsK8MAAAAjoIpsAAMAAAgjo");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("AJscwIpsAAIwIAAMAAAg5fMAgRAAAMAAAA5fg");
	this.shape_1.setTransform(0,-113.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Ak1R0MAAAgjnIJrAAMAAAAjng");
	this.shape_2.setTransform(31,183.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-298.9,208.6,726.7);


(lib.backtree1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.apple();
	this.instance.setTransform(62,-67.05,1.625,1.625,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,x:62.5772,y:-69.6625},0).wait(1).to({x:63.1549,y:-70.618},0).wait(1).to({x:63.7332,y:-69.7678},0).wait(1).to({x:64.3119,y:-67.113},0).wait(1).to({x:64.891,y:-62.6547},0).wait(1).to({x:65.4704,y:-56.3936},0).wait(1).to({x:66.0501,y:-48.3302},0).wait(1).to({x:66.6299,y:-38.4646},0).wait(1).to({x:67.2098,y:-26.7968},0).wait(1).to({x:67.7897,y:-13.3266},0).wait(1).to({x:68.3696,y:1.9468},0).wait(1).to({x:68.9495,y:19.024},0).wait(1).to({x:69.5291,y:37.9063},0).wait(1).to({x:70.1086,y:58.5949},0).wait(1).to({x:70.6877,y:81.0914},0).wait(1).to({x:71.2665,y:105.3977},0).wait(1).to({x:71.8448,y:131.516},0).wait(1).to({x:72.4227,y:159.4487},0).wait(1).to({x:73,y:189.2},0).wait(5));

	// apple
	this.instance_1 = new lib.apple();
	this.instance_1.setTransform(21,-189.05,1.625,1.625,0,0,0,0,-0.1);

	this.instance_2 = new lib.apple();
	this.instance_2.setTransform(-50,-93.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqMhcIpLAAIAA/dMAmvAAAIAAfdI1CAAgAhqhcMAAAAiWIoiAAMAAAgiW");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("AhqPvIoiAAIpLAAIAA/dMAmvAAAIAAfdg");
	this.shape_1.setTransform(0.025,-109.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AkQRMMAAAgiXIIhAAMAAAAiXg");
	this.shape_2.setTransform(-37.975,100.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-211.6,249.9,423.29999999999995);


// stage content:
(lib.Satheesh_backround = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.instance = new lib.paperPlane_flying();
	this.instance.setTransform(338.2,240.4,1,1,0,0,0,508.8,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// front_tree
	this.instance_1 = new lib.fronttree();
	this.instance_1.setTransform(504.8,463.55,1.7775,1.7775,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back_tree2
	this.instance_2 = new lib.backtree2();
	this.instance_2.setTransform(912.55,356.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back_tree1
	this.instance_3 = new lib.backtree1();
	this.instance_3.setTransform(56,357.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hills
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA8eASgMgsmAAAMAAAgk/MAsmAAAIAAIcIQJAAIAAcjIwJAAIAA8jEg6ygQnMA/aAAAMAAAAgzMhRNAAAIAArPIRzAAg");
	this.shape.setTransform(422.3,536.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("EA8eASgIAA8jIAAcjMgsmAAAMAAAgk/MAsmAAAIAAIcIQIAAIAAcjgEhMmAQMIAArPIR0AAIAA1kMA/aAAAMAAAAgzg");
	this.shape_1.setTransform(422.3,536.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// sky
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EhRrg0yMCjXAAAMAAABplMijXAAAg");
	this.shape_2.setTransform(484.85,323.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C2FAB","#FFFFFF"],[0,1],189.8,486.5,-189.8,-486.4).s().p("EhRrA0zMAAAhplMCjXAAAMAAABplg");
	this.shape_3.setTransform(484.85,323.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(228.7,305,787.7,473.29999999999995);
// library properties:
lib.properties = {
	id: '6DB24D5DBE6B864D90FCE46593C78E32',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6DB24D5DBE6B864D90FCE46593C78E32'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;