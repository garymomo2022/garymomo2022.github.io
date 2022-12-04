$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var passTarget = null;
	var passLock = false;

	// initial tab for IE problem
	$(".nav-tabs a:eq(0)").trigger("click");
	$(".nav-tabs a:eq(1)").trigger("blur");

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
//			setheight = $(window).height();
//			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
				$(".music-intro-dummy-1").show();
				$(".music-intro-dummy-2").show();
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$(".music-intro-dummy-1").hide();
				$(".music-intro-dummy-2").hide();
			}
		}
		ori_width = width;
	}

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 12;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	$(".music-cover").on("click tap", function() {

		if (passLock) {
			return;
		}
		passLock = true;
		passTarget = $(this);
		var coverTL1 = new TimelineMax({ onComplete:nextCover });
		coverTL1.to(passTarget, 0.5, { scale: 0.2 })
		.to(passTarget, 0.3, { x: -200, autoAlpha: 0 });
	});

	function nextCover() {

		passTarget.hide();
		var coverTL2 = new TimelineMax({ onComplete:finishCover });
		var target = passTarget.parents(".music-items").find(".music-intro-1");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 });
		target = passTarget.parents(".music-items").find(".music-intro-2");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 }, "-=1");
		target = passTarget.parents(".music-items").find(".music-intro-3");
		target.show();
		coverTL2.from(target, 1, { x: 200, autoAlpha: 0 }, "-=1");
		resize();
		$("html, body").animate({scrollTop: $("#" + passTarget.parents(".music-items").attr("id")).offset().top}, 500);
	}

	function finishCover() {
		passLock = false;
	}

	$(".music-extra-back a").on("click tap", function() {
		var urlParam = window.location.search.split("back=")[1] ? window.location.search.split("back=")[1] : "no";

		if (urlParam != "no") {
			var mainClass = urlParam.split("-")[0] ? urlParam.split("-")[0] : "no";
			var subClass = urlParam.split("-")[1] ? urlParam.split("-")[1] : "no";
			var itemClass = urlParam.split("-")[2] ? urlParam.split("-")[2] : "no";
			if (mainClass != "no" && subClass != "no" && itemClass != "no") {
				var targetClass = "";
				if (mainClass == "") {
					
				} else {
					targetClass = "music";
				}
				if (subClass == "2016") {
					location.replace("https://garymomo" + subClass + ".github.io/redirection/" + targetClass + "?item=" + itemClass);
				} else {
					location.replace("https://garymomo" + subClass + ".github.io/" + targetClass + "?item=" + itemClass);
				}
			} else {
				location.replace("https://garymomoindex.github.io/?visit=true");
			}
		} else {
			location.replace("https://garymomoindex.github.io/?visit=true");
		}
	});

	$(".btn-modal").on("click tap", function() {
		var htmlIframe1 = '<iframe src="https://www.youtube.com/embed/';
		var htmlIframe2 = '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		var htmlIframeSrc = '';
		var chkId = $(this).attr("id");
		if (chkId == 'adModala1-1') {
			htmlIframeSrc = '6RPHlfZ4a88';
		} else if (chkId == 'adModala1-2') {
			htmlIframeSrc = 'g0omjoPij9Q';
		} else if (chkId == 'adModala1-3') {
			htmlIframeSrc = 'RExz15-LYlI';
		} else if (chkId == 'adModala1-4') {
			htmlIframeSrc = 'kSDkh0FjapI';
		} else if (chkId == 'adModala2-1') {
			htmlIframeSrc = 'Eu8Jh6CFvVY';
		} else if (chkId == 'adModala2-2') {
			htmlIframeSrc = 'Ln6HHRqLvMw';
		} else if (chkId == 'adModala2-3') {
			htmlIframeSrc = 'dKMDjGsMAJQ';
		} else if (chkId == 'adModala2-4') {
			htmlIframeSrc = 'FwpeB3K98eY';
		} else if (chkId == 'adModala2-5') {
			htmlIframeSrc = 'qu0oZlvhgvQ';
		} else if (chkId == 'adModala2-6') {
			htmlIframeSrc = 'Mi-YlX9PPhI';
		} else if (chkId == 'adModala2-7') {
			htmlIframeSrc = 'UJ35XZIfGHo';
		} else if (chkId == 'adModala2-8') {
			htmlIframeSrc = 'ZJ0rzND8qH4';
		} else if (chkId == 'adModala2-9') {
			htmlIframeSrc = 'EjBdBsYCu8c';
		} else if (chkId == 'adModala2-10') {
			htmlIframeSrc = '1WWbM1BpPEk';
		} else if (chkId == 'adModala2-11') {
			htmlIframeSrc = 'LCDX4yc5HrI';
		} else if (chkId == 'adModala2-12') {
			htmlIframeSrc = 'n6QbMGmgxtk';
		} else if (chkId == 'adModala2-13') {
			htmlIframeSrc = 'p4hCIwYTWdw';
		} else if (chkId == 'adModala2-14') {
			htmlIframeSrc = 'bYprCMfX_sQ';
		} else if (chkId == 'adModala2-15') {
			htmlIframeSrc = 'KpuRLpznd8g';
		} else if (chkId == 'adModala2-16') {
			htmlIframeSrc = 'TgUJcekLM5M';
		} else if (chkId == 'adModala2-17') {
			htmlIframeSrc = 'laH_8opPLG0';
		} else if (chkId == 'adModala2-18') {
			htmlIframeSrc = 'mFj9OPaJ4K8';
		} else if (chkId == 'adModala2-19') {
			htmlIframeSrc = 'BrCrtgmTF9g';
		} else if (chkId == 'adModala2-20') {
			htmlIframeSrc = 'EZp1y21yze0';
		} else if (chkId == 'adModala2-21') {
			htmlIframeSrc = 'NjI6JpJG-u0';
		} else if (chkId == 'adModalb3-1') {
			htmlIframeSrc = 'ncMZKdq1tZE';
		} else if (chkId == 'adModalb3-2') {
			htmlIframeSrc = 'lh0ruNq0R7g';
		} else if (chkId == 'adModalb4-1') {
			htmlIframeSrc = 'Lu7LhbTvPE8';
		} else if (chkId == 'adModalb4-2') {
			htmlIframeSrc = 'Ag8ynQKyL6U';
		} else if (chkId == 'adModalb4-3') {
			htmlIframeSrc = '0MCcdirW4Es';
		} else if (chkId == 'adModalc1-1') {
			htmlIframeSrc = 'prmaxrEouBc';
		} else if (chkId == 'adModalc2-1') {
			htmlIframeSrc = 'R0BXPeFLZMA';
		}
		$("#adModal").find("#video-block").append(htmlIframe1 + htmlIframeSrc + htmlIframe2);
	});

	$("#adModal").on("hide.bs.modal", function() {
		$(this).find("#video-block").empty();
	});
});

$(window).on("load", function() {

	$(".loader").hide();

	var extraTL = new TimelineMax();

	extraTL.from($(".music-extra-title"), 1, { y: -200, autoAlpha: 0 })
	.from($(".music-extra-audit"), 1, { x: 400, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-video"), 1, { scale: 0.1, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-detail"), 1, { x: -200, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-line-ext"), 0.3, { autoAlpha: 0 })
	.from($(".music-extra-line"), 1, { autoAlpha: 0 });
});