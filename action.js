InboxSDK.load('1', 'sdk_app_check_ebe9d01b93').then(function(sdk){

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence, do something with it!
		composeView.addButton({
			title: "MailEnc",
			iconUrl: 'https://img.icons8.com/cotton/64/000000/lock.png',
			onClick: function(event) {
				var temp="hi there";
				event.composeView.insertTextIntoBodyAtCursor('Hello World!');
				//event.composeView.getText(temp);
				console.log(temp);			},
		});

	});

});
