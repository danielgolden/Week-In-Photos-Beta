$(function () {
	
	// Youtube Mods
	$('#user-navbar-sections').empty().append('<li>Romans 6:21 - What fruit had ye then in those things whereof ye are now ashamed? for the end of those things is <em>death</em>.</li>');
	$('#watch-share').after('<button class="audio_only_button yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip">Audio Only</button>');

	$('.audio_only_button').toggle(function() {
		$('#watch-video-container').addClass('hidden');
		$('#watch-video-container').after('<h3 class="audio_only_text">Audio Only</h3>');
	},function () {
		$('.audio_only_text').remove();
		$('#watch-video-container').removeClass('hidden');
	});

	$('.audio_only_text').click(function() {
		$(this).remove();
		$('#watch-video-container').removeClass('hidden');
	});

	if($('.feed-item-rec').length != 0) {
		$('.feed-item-rec').parentsUntil('.context-data-container').hide();
	}

	// Dribbble Mods
	$('.compact').empty().append('<strong>Philippians 3:8</strong> - For whom I suffer the loss of <em>all things</em> and do count them but <em>dung</em>…');

	//$('body#shots').replaceWith('<h1 class="body_replacement">Find some place more pleasing to God to find inspiration.</h1> <div id="verses"><p><strong>Philippians 3:7-8</strong> - But what things were gain to me, those I counted loss for Christ. <em>Yea doubtless, and I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord: for whom I have suffered the loss of all things, and do count them but dung, that I may win Christ,</em></p> <p><strong>Ephesians 5:11 - </strong>And have no fellowship with the unfruitful works of darkness, but rather reprove them.</p> <p><strong>1 Thessalonians 5:22 - </strong> Abstain from all appearance of evil.</p></div>');

	// Ebible Mods
	$('#global-header .left-sidebar').remove();
	
});

// Names & shots to remove from dribbble
// Steve Hamaker (user-346)
// Ben Reffie (user-3613)
// Daniel Watson (user-27356)
// Daniel Lindskog (user-5274)
// Bobby Dixon (user-45377)
// Daryl Ginne (user-21845)
// Joshua Bullock (user-5675)
// Shed Labs (user-5502)