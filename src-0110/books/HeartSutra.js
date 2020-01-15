const { Button, ImageView, ui, WebView, contentView, Composite, TextView, TextInput, Font} = require('tabris');
//const common = require('../../compones/common');


const font = Font.from('normal 28px');

let hsView;
//'images/try1.jpeg'
module.exports = class HeartSutra {

    constructor( myParent, content, picture) {
		
		this.Parent = myParent;
		this.displayContent = content;
		this.diaplayBgPicture = picture;
		
		this.el = new Composite({
			left: 10, top: 10, right: 10, bottom: 10, visible: false,
			background: 'rgba(0, 0, 0, 0.9)'})
			.appendTo(contentView);
			
		console.log(this.el);
		
		this.btn = new Button({right: 10, bottom: 10, text: '返回'})
			.onSelect( () => this.hideWindow() )
			.appendTo(this.el);
			
		this.bgpicture = new ImageView({left: 0, top: 0, image: this.diaplayBgPicture})
			.appendTo(this.el);
		
		this.bgbuler = new Composite({left: 0, top: 0, right: 0, bottom: 0,background: 'rgba(0, 0, 0, 0.6)'})
			.appendTo(this.el);
			
		this.textstring1 = new TextInput({top:50, left:30, type: "multiline", editable: false, 
		text: this.displayContent , alignment: 'left', textColor:'yellow', font})
		.appendTo(this.el);
			
    }
		
    destory() {
        this.el.dispose();
    }
	
	hideWindow (){
		this.el.visible = false;
		console.log(this.el);
		this.Parent.visible = true;
	}
	
	showWindow () {
//		this.bgpicture.image = picture;
		this.el.visible = true;
		console.log(this.el);
	}
	
	showlayout() {
        this.showWindow();
    }
	
    init ( myParent, content, picture) {
		this.Parent = myParent;
		this.displayContent = content;
		this.diaplayBgPicture = picture;
    }
};

/*
module.exports = {
	
    init: function ( myParent, content, picture) {
		new HeartSutra(myParent, content, picture);
    },
    destory: function () {
    },
    showlayout: function (picture) {
    },
	hideWindow: function (el)
	{
		
	}

};
*/
