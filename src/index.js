	import {Button, ImageView, TextView, contentView ,Composite,Font,ScrollView,ToggleButton,ui } from 'tabris';

	const HeartSutra = require('./books/HeartSutra');
	//const Heart2 = require('./books/HeartSutra');
	const fontS = Font.from('normal 22px');
	const fontM = Font.from('normal 26px');
	const fontL = Font.from('normal 32px');


	var font = fontS;

	let bg = new Composite({
		left: 0, top: 0, right: 0, bottom: 0, visible: true,
		background: 'rgba(75, 75, 75, 0.35)'})
		.appendTo(contentView);
		
	let scrollView = new ScrollView({
		left: 0, top: 30, right: 0, bottom: 0})
		.appendTo(bg);

	var toppixel= 28;
	
	// 心經		
	var book1 = new ImageView({top:0+toppixel, centerX:0 , height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(1) )
		.appendTo(scrollView);
	
	var string1 = new TextView({top:0+toppixel, left:150, text: '般若波羅蜜多心經', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	// 十小咒_如意寶輪王陀羅尼
	var book2 = new ImageView({top:110+toppixel, centerX:0 , height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(2) )
		.appendTo(scrollView);

	var string2 = new TextView({top:110+toppixel, left:150, right:10, text: '如意寶輪王陀羅尼', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	// 十小咒_消災吉祥神咒
	var book3 = new ImageView({top:220+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(3) )
		.appendTo(scrollView);

	var string3 = new TextView({top:220+toppixel, left:150, text: '消災吉祥神咒', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	// 十小咒_功德寶山神咒
	var book4 = new ImageView({top:330+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(4) )
		.appendTo(scrollView);

	var string4 = new TextView({top:330+toppixel, left:150, text: '功德寶山神咒', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	// 十小咒_准提神咒
	var book5 = new ImageView({top:440+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(5) )
		.appendTo(scrollView);

	var string5 = new TextView({top:440+toppixel, left:150, text: '准提神咒', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	// 十小咒_聖無量壽決定光明王陀羅尼
	var book6 = new ImageView({top:550+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(6) )
		.appendTo(scrollView);

	var string6 = new TextView({top:550+toppixel, left:150, right: 10, text: '聖無量壽決定光明王陀羅尼', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	// 十小咒_藥師灌頂真言
	var book7 = new ImageView({top:660+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(7) )
		.appendTo(scrollView);

	var string7 = new TextView({top:660+toppixel, left:150, text: '藥師灌頂真言', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	// 十小咒_七佛滅罪真言
	var book8 = new ImageView({top:770+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(8) )
		.appendTo(scrollView);

	var string8 = new TextView({top:770+toppixel, left:150, text: '七佛滅罪真言', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	// 十小咒_往生咒
	var book9 = new ImageView({top:880+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(9) )
		.appendTo(scrollView);

	var string9 = new TextView({top:880+toppixel, left:150, text: '往生淨土神咒', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	// 十小咒_大吉祥天女咒
	var book10 = new ImageView({top:990+toppixel, centerX:0, height: 100, cornerRadius: 20, image: 'images/item_background.jpg'})
		.on("tap", () => goLevel(10) )
		.appendTo(scrollView);

	var string10 = new TextView({top:990+toppixel, left:150, text: '大吉祥天女咒', alignment: 'left', textColor:'white',font})
	.appendTo(scrollView);
	
	
	//
	let Heart = new HeartSutra( bg ,"經文內容","images/tree1.jpg");

	// 頂部空間 (最後生成才可遮蓋住)
	var TopSpace = new ImageView({id:'topspace',top:0, centerX:0, height:52, image: 'images/topspace2.jpg'})
		.appendTo(bg);
		
	// 大中小按鈕
	var btnFontLarge = new ToggleButton({right: 130, top: 6, textColor:'red'   , width:50, text: '大'})
		.onSelect( () => ChangeFontSize('L') )
		.appendTo(bg);
	var btnFontMiddle = new ToggleButton({right: 70, top: 6, textColor:'yellow', width:50, text: '中'})
		.onSelect( () => ChangeFontSize('M') )
		.appendTo(bg);
	var btnFontSmall  = new ToggleButton({right: 10, top: 6, textColor:'black' , width:50, text: '小'})
		.onSelect( () => ChangeFontSize('S') )
		.appendTo(bg);	
		

goStart();

function goStart() {
	btnFontSmall.checked  = true;
}

function ChangeFontSize(size) {
	switch (size)
	{
		case 'L':	
			font = fontL;
			btnFontLarge.checked  = true;
			btnFontMiddle.checked = false;
			btnFontSmall.checked  = false;
		break;
		
		case 'M':
			font = fontM;
			btnFontLarge.checked  = false;
			btnFontMiddle.checked = true;
			btnFontSmall.checked  = false;
		break;
		
		case 'S':
			font = fontS;
			btnFontLarge.checked  = false;
			btnFontMiddle.checked = false;
			btnFontSmall.checked  = true;
		break;
		
		default:
		break;
	}
	
	// update display
	string1.font = font;
	string2.font = font;
	string3.font = font;
	string4.font = font;
	string5.font = font;
	string6.font = font;
	string7.font = font;
	string8.font = font;
	string9.font = font;
	string10.font = font;
	
}


function goLevel(index)
{
	switch (index)
	{
		case 1:		
			Heart.init("觀自在菩薩，行深般若波羅密多時，照見五蘊皆空，度一切苦厄。舍利子！色不異空，空不異色；色即是空，空即是色。受想行識，亦復如是。舍利子！諸法空相，不生不滅、不垢不淨、不增不減。是故，空中無色，無受想行識、無眼耳鼻舌身意、無色聲香味觸法。無眼界乃至無意識界，無無明亦無無明盡，乃至無老死亦無老死盡。無苦集滅道，無智亦無得。以無所得故，菩提薩埵，依般若波羅密多故，心無罣礙；無罣礙故，無有恐怖，遠離顛倒夢想，究竟涅槃。三世諸佛，依般若波羅密多故，得阿耨多羅三藐三菩提。故知般若波羅密多，是大神咒、是大明咒、是無上咒、是無等等咒，能除一切苦真實不虛。故說般若波羅密多咒。即說咒曰：揭諦揭諦，波羅揭諦，波羅僧揭諦，菩提薩婆訶。","images/try1.jpg",font);
			break;
			
		case 2:
			Heart.init("南無佛馱耶。南無達摩耶。南無僧伽耶。南無觀自在菩薩摩訶薩。具大悲心者。怛姪他。唵。斫羯囉伐底。震多末尼。摩訶跋蹬迷。嚕嚕嚕嚕。底瑟吒。爍囉阿羯利。沙夜吽。婆莎訶。唵。鈸蹋摩。震多末尼。爍囉吽。唵。跋喇陀。跋亶謎吽。","images/try2.jpg",font);
			break;
			
		case 3:
			Heart.init("南無三滿哆。母馱喃。阿跋囉底。賀多舍。娑曩喃。怛姪他。唵。佉佉。佉呬佉呬。吽吽。入縛囉。入縛囉。跋囉入縛囉。跋囉入縛囉。底瑟宅。底瑟宅。瑟致哩。瑟致哩。娑癹吒。娑癹吒。扇底迦。室哩曳。娑縛訶。","images/try3.jpg",font);
			break;
			
		case 4:
			Heart.init("南無佛馱耶。南無達摩耶。南無僧伽耶。唵。悉帝護嚕嚕。悉都嚕。只利波。吉利波。悉達哩。布嚕哩。娑婆訶。","images/try4.jpg",font);
			break;
			
		case 5:
			Heart.init("稽首皈依蘇悉帝。頭面頂禮七俱胝。我今稱讚大準提。惟願慈悲垂加護。南無颯哆喃。三藐三菩陀俱胝喃。怛姪他。唵折戾。主戾。準提。娑婆訶。","images/try5.jpg",font);
			break;
			
		case 6:
			Heart.init("唵。捺摩巴葛瓦帝。阿巴囉密沓。阿優哩阿納。蘇必你。實執沓。牒左囉宰也。怛塔哿達也。阿囉訶帝。三藥三不達也。怛你也塔。唵。薩哩巴。桑斯葛哩。叭哩述沓。達囉馬帝。哿哿捺。桑馬兀哿帝。莎巴瓦。比述帝。馬喝捺也。叭哩瓦哩娑喝。","images/try6.jpg",font);
			break;
			
		case 7:
			Heart.init("南無薄伽伐帝。鞞殺社窶嚕。薜琉璃跋喇婆喝囉闍也。怛他揭多也。阿囉喝帝。三藐三勃陀耶。怛姪他。唵。鞞剎逝。鞞剎逝。鞞剎社。三沒揭帝莎訶。","images/try7.jpg",font);
			break;
			
		case 8:
			Heart.init("離婆離婆帝。求訶求訶帝。陀羅尼帝。尼訶囉帝。毘離尼帝。摩訶伽帝。真陵乾帝。娑婆訶。","images/try8.jpg",font);
			break;
			
		case 9:
			Heart.init("南無阿彌多婆夜哆。他伽哆。夜哆地。夜他阿彌唎。都婆毗。阿彌唎哆。悉耽婆毗。阿彌唎哆。毗迦蘭帝。阿彌唎哆。毗迦蘭多。伽彌膩。伽伽那。枳多迦利。娑婆訶。","images/try9.jpg",font);
			break;
			
		case 10:
			Heart.init("南無佛陀。南無達摩。南無僧伽。南無室利。摩訶提鼻耶。怛你也他。波利富樓那。遮利三曼陀。達舍尼。摩訶毗訶羅伽帝。三曼陀。毗尼伽帝。摩訶迦利野。波禰。波囉。波禰。薩利縛他。三曼陀。修拔黎帝。富隸那。阿利那。達摩帝。摩訶毗鼓畢帝。摩訶彌勒帝。婁簸僧祗帝。醯帝徙。僧祗醯帝。三曼陀。阿他阿耨。婆羅尼。","images/try10.jpg",font);
			break;
			
		default:
		break;
		
		
	}
	
	Heart.showWindow();
	bg.visible = false;
}

