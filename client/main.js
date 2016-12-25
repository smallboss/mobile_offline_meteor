setHeader = function(header) {
	Session.set("headerData", header)
}

getHeader = function(header) {
	return Session.get("headerData") || {title: "Franklin", isBackVisible: false}
}