InboxSDK.load('1', 'sdk_Akshay_0b1daa8634').then(function(sdk){

	
	sdk.Compose.registerComposeViewHandler(function(composeView){
		
		composeView.addButton({
			title: "MailEnc",
			iconUrl: 'https://img.icons8.com/cotton/64/000000/lock.png',
			onClick: function(event) {
				//Get Message from compose box.
				var temp=event.composeView.getHTMLContent();
				
				var enc = "Encrypted with AES :\n\n";
				enc = enc.concat(encrypt(temp));
							
				event.composeView.setBodyText(enc);
			},
		});

	});

	sdk.Conversations.registerMessageViewHandler(function(messageView){
		
		messageView.addToolbarButton({
			section: sdk.Conversations.MessageViewToolbarSectionNames.MORE,
			title: "Decrypt",
			iconUrl: 'https://image.flaticon.com/icons/svg/2471/2471529.svg',
			onClick: function(event) {
				//Get Message from compose box.
				var test = messageView.getBodyElement();
				
				window.alert(test);
			},
		});
	});
});
