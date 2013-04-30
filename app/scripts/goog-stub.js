var goog = {};

goog.global = this;
goog.provide = function(name) {

	var parts = name.split('.');
	var cur = goog.global;
	for (var part; part = parts.shift(); ) {
		if (!cur[part]) {
			cur[part] = {};
		}
		cur = cur[part];
	}
};

goog.require = function(name) {
};