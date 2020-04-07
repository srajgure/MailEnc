InboxSDK.load('1', 'sdk_Akshay_0b1daa8634').then(function(sdk){

	
	sdk.Compose.registerComposeViewHandler(function(composeView){
		
		composeView.addButton({
			title: "MailEnc",
			iconUrl: 'https://img.icons8.com/cotton/64/000000/lock.png',
			onClick: function(event) {
				//Get Message from compose box.
				var temp=event.composeView.getHTMLContent();
				
				var enc = "Encrypted with AES : ";
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
					var cipher = messageView.getBodyElement().textContent;
					
					cipher = cipher.substring(22, cipher.length-1);
					
					var plaintxt = decrypt(cipher);

					//open a new html page containing decrypted text
					var opened = window.open("");
					var htmlstring = "<html><head><title>Decrypted text : </title></head><body>";
					htmlstring = htmlstring.concat(plaintxt);
					htmlstring = htmlstring.concat("</body></html>")
					opened.document.write(htmlstring);
					
					},
				});
	});
});
