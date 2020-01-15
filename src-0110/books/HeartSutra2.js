const { Button, ImageView, ui, WebView, contentView, Composite, TextView} = require('tabris');
//const common = require('../../compones/common');


let hsView2;

class HeartSutra2 {

    constructor( myParent) {
		this.Parent = myParent;
		this.el = new Composite({
			left: 10, top: 10, right: 10, bottom: 10, visible: false,
			background: 'rgba(200, 0, 0, 0.9)'})
			.appendTo(contentView);
			
		console.log(this.el);
		this.btn = new Button({right: 10, bottom: 10, text: '返回'})
			.onSelect( () => this.hideWindow() )
			.appendTo(this.el);
			
//		this.book1 = new ImageView({right: 10, bottom: 10, width: 100, height: 100, cornerRadius: 20, image: 'images/tree1.jpg'})
//			.on("tap", () => this.hideWindow() )
//			.appendTo(this.el);
    }
		
    destory() {
        this.el.dispose();
    }
	
	hideWindow (){
		this.el.visible = false;
		console.log(this.el);
		this.Parent.visible = true;
	}
	
	showWindow() {
		this.el.visible = true;
		console.log(this.el);
	}
};

module.exports = {
	
    init: function ( myParent) {
		hsView2 = new HeartSutra2(myParent);
    },
    destory: function () {
    },
    showlayout: function () {
        hsView2.showWindow();
    },
	hideWindow: function (el)
	{
		
	}

};
