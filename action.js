InboxSDK.load('1', 'sdk_Akshay_0b1daa8634').then(function(sdk){

	
	sdk.Compose.registerComposeViewHandler(function(composeView){
		
		composeView.addButton({
			title: "MailEnc",
			iconUrl: 'https://img.icons8.com/cotton/64/000000/lock.png',
			onClick: function(event) {
				//Get Message from compose box.

                do{
                var key = prompt("Please enter your key:", "KEY");

				window.alert(key);
                }while(key.length != 16)

                key = key.split('');
                for(var i=0; i<key.length; i++) { key[i] = +key[i].charCodeAt(0); }

				var temp=event.composeView.getHTMLContent();

				var enc = "Encrypted with AES : ";
				enc = enc.concat(encrypt(temp, key));

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
					
					cipher = cipher.substring(21, cipher.length-1);

					do{
                    var key = prompt("Please enter your key:", "KEY");

                    window.alert(key);
                    }while(key.length != 16)

                    key = key.split('');
                    for(var i=0; i<key.length; i++) { key[i] = +key[i].charCodeAt(0); }

					var plaintxt = decrypt(cipher, key);

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
