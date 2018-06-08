var demo = new Vue({

	el: "#main",

	data: {
		show_tooltip: false,
		text_content: 'Edit me!'
	},

	methods: {
		hideTooltip: function() {
			console.log("Running hideTooltip!");
			this.show_tooltip = false;
		},
		toggleTooltip: function() {
			console.log("Running toggleTooltip");
			this.show_tooltip = !this.show_tooltip;
		}
	}

});