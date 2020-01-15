import {Button, ImageView, TextView, contentView ,Composite,Font,ScrollView} from 'tabris';

const HeartSutra = require('./books/HeartSutra');
//const Heart2 = require('./books/HeartSutra');
const font = Font.from('normal 22px');

const scrollView = new ScrollView({
  left: 0, top: 0, right: 0, bottom: 0
}).appendTo(contentView);

let bg = new Composite({
	left: 0, top: 0, right: 0, bottom: 0, visible: true,
	background: 'rgba(75, 75, 75, 0.35)'})
	.appendTo(scrollView);
		
// 頂部空間
var TopSpace = new ImageView({id:'topspace',top:0, left:0, right:0, height:34, image: 'images/topspace.jpg'})
	.appendTo(bg);
	
	
// 心經		
var book1 = new ImageView({top:50, left:10, right:10, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel1() )
	.appendTo(bg);
	
	new TextView({top:50, left:150, text: '般若波羅蜜多心經', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
// 十小咒_如意寶輪王陀羅尼
var book2 = new ImageView({top:160, centerX:0 , height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel2() )
	.appendTo(bg);

	new TextView({top:160, left:150, text: '如意寶輪王陀羅尼', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
// 十小咒_消災吉祥神咒
var book3 = new ImageView({top:270, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel3() )
	.appendTo(bg);

	new TextView({top:270, left:150, text: '消災吉祥神咒', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
// 十小咒_功德寶山神咒
var book4 = new ImageView({top:380, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel4() )
	.appendTo(bg);

	new TextView({top:380, left:150, text: '功德寶山神咒', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
// 十小咒_准提神咒
var book5 = new ImageView({top:490, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel5() )
	.appendTo(bg);

	new TextView({top:490, left:150, text: '准提神咒', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
// 十小咒_聖無量壽決定光明王陀羅尼
var book5 = new ImageView({top:600, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel5() )
	.appendTo(bg);

	new TextView({top:600, left:150, text: '聖無量壽決定光明王陀羅尼', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
// 十小咒_藥師灌頂真言
var book5 = new ImageView({top:710, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
	.on("tap", () => goLevel5() )
	.appendTo(bg);

	new TextView({top:710, left:150, text: '藥師灌頂真言', alignment: 'left', textColor:'white',font})
	.appendTo(bg);
	
	
//
let Heart1 = new HeartSutra( bg ,"觀自在菩薩，\x0a行深般若波羅蜜多時，\x0a照見五蘊皆空\x0a度一切苦厄。","images/try1.jpeg");
let Heart2 = new HeartSutra( bg ,"觀自在菩薩","images/try2.jpeg");

goStart();

function goStart() {
}

function goLevel1()
{
	Heart1.showlayout();
	Heart2.visible = false;
	bg.visible = false;
}

function goLevel2()
{
	Heart2.showlayout();
	Heart1.visible = false;
	bg.visible = false;
}

function goLevel3()
{
	Heart2.showlayout();
	bg.visible = false;
}

function goLevel4()
{
	Heart2.showlayout();
	bg.visible = false;
}

function goLevel5()
{
	Heart2.showlayout();
	bg.visible = false;
}

