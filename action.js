InboxSDK.load('1', 'sdk_app_check_ebe9d01b93').then(function(sdk){

	
	sdk.Compose.registerComposeViewHandler(function(composeView){

		
		composeView.addButton({
			title: "MailEnc",
			iconUrl: 'https://img.icons8.com/cotton/64/000000/lock.png',
			onClick: function(event) {
				//Get Message from compose box.
				var temp=event.composeView.getHTMLContent();
				//var obj=new encryption(temp);
				//Put encrpted message to compose box.
				event.composeView.setBodyText(encrypt(temp));
				//window.alert(encrypted);			
			},
		});

	});

});
