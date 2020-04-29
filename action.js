InboxSDK.load('1', 'sdk_app_check_ebe9d01b93').then(function(sdk){

	
	sdk.Compose.registerComposeViewHandler(function(composeView){
		
		composeView.addButton({
			title: "MailEnc AES",
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

		composeView.addButton({
		    title: "KeyEnc RSA",
            iconUrl: 'https://img.icons8.com/cotton/64/000000/key--v3.png',
            onClick: function(event) {
                //Get Message from compose box.
                var temp = event.composeView.getHTMLContent();

                var N = '009afdccef68a56efc68669b498af90bd7cf3466646a853138a8e83d43072687be55575fd3dc15c0a39880389b07148dcbe175ab0f6e971b0638b69dad947d60fd';
                var E = '0x010001';
                //exponent
                var encObj = new RSAKey();
                encObj.setPublic(N,E);
                var msg = encObj.encrypt(temp);
                event.composeView.setBodyText(msg);
            },
		});
	});

	sdk.Conversations.registerMessageViewHandler(function(messageView){
		
		messageView.addToolbarButton({
			section: sdk.Conversations.MessageViewToolbarSectionNames.MORE,
			title: "Mail Decrypt AES",
			iconUrl: 'https://img.icons8.com/cotton/64/000000/lock.png',
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

		messageView.addToolbarButton({
		    section: sdk.Conversations.MessageViewToolbarSectionNames.MORE,
            title: "Key Decrypt RSA",
            iconUrl: 'https://img.icons8.com/cotton/64/000000/key--v3.png',
            onClick: function(event) {
                    //Get Message from compose box.
                    var cipher = messageView.getBodyElement().textContent;

                    var N = '009afdccef68a56efc68669b498af90bd7cf3466646a853138a8e83d43072687be55575fd3dc15c0a39880389b07148dcbe175ab0f6e971b0638b69dad947d60fd';
                    var D = '052b760c7e47165ea0f4db3526c78bd794f7c07a94fb005b4d7701a41cb6f24c1fae798447b8e82346ce47a53dcc26ed9fc37aa8508bc587040a64cf58fed999';
                    var E = '0x010001';

                    var encObj = new RSAKey();
                    encObj.setPrivate(N,E,D);

                    var plaintxt = encObj.decrypt(cipher);

                    var opened = window.open("");
                    var htmlstring = "<html><head><title>Decrypted text : </title></head><body>";
                    htmlstring = htmlstring.concat(plaintxt);
                    htmlstring = htmlstring.concat("</body></html>")
                    opened.document.write(htmlstring);
            },
		});
	});
});
