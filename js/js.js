$(function () { 
		var controller = new ScrollMagic.Controller();
    
		var wipeAnimation = new TimelineMax()
			.fromTo("section.panel.two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("section.panel.three",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("section.panel.four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
//			.addIndicators() 
			.addTo(controller);
	});