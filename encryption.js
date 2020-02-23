function encrypt(message)
 {
				
				
                var encrypted="";
				var pubkey=`-----BEGIN PGP PUBLIC KEY BLOCK-----
				Version: OpenPGP.js v2.5.4
				Comment: http://openpgpjs.org

				xsBNBF14iwUBCADM/BgynIW7mEXkMvN2U9lTag77MoOzLStFk+MrBrDTDMcW
				UcK9zJYboQ4pKpMSPutULOCvgiTefmj8wQeXIBf0vM2yuHYUfMZBdo+1FyfW
				xU4cc+JHUKuKBiTW98W9kd29i9JUL0t5h7cFzVAKtog0x5dPUQ1NO9woqLm2
				j+a73QogXKTS9eY1VtOaKDjMqsRxVev+AS7NfBW6TYNtfnT7wU0Q71CBrZ0M
				HMmr30T5qaMXyEjtb7UdtRN6z6+OGpEe1s5xPrEFACuJLy4qbah8DwnHmRJR
				/ZQPJW5teoH2MVgRm8p3e9ydhhFsJZ8GgNQMxpuNMup05X3Dg6M5+GTpABEB
				AAHNG1N1bWl0MSA8c3VtaXQxQHBncGNvcnAuZW9uPsLAdQQQAQgAKQUCXXiL
				BgYLCQcIAwIJEHGfdhY0mmGtBBUICgIDFgIBAhkBAhsDAh4BAAAFMggAsk+/
				Ckja7Fx4UXwIuqxef653UG/w1vptpoMIdoSU/jX5+HJpLmmjhzUORYmZJogh
				IjZAvDhUCyT2ZfoNaimtPTxcVYri3PxLwsvoxVYWvHQ/+U2wfzRvTx5wI15Y
				4tPILsYW42yM3MogXbtoBeJFq3abuG5wrF4AZVGSDh0XA4gFBX3xBcUbyAgS
				vpzc/G8Vsfm6XM+YxllSweAXyu1kx2tcE4dND4VtBsVGvLNeIvHeyiBPbEEo
				ZVbs09yEvpuajrX41RZqAtrVcbx/lH7+vAE1OGIWrLqQV2BCwYEAVVXPSL1S
				NCCE3aMHU3XcxLunxfVuDTghbPaMK1sZDOCIls7ATQRdeIsFAQgAsC916Ale
				um/P4AT4b5LzgrRMe8r7Q498FDxyJGfi5skcV7FEBwXnZ59v4w5j4qcjohhi
				nHyqIKNkA4iA77sh47JUPd6nSdwZjajJOdxcGyGYuh5zLPDqaAByFV1oHHCF
				dGqK8ZmLRFN/4RJP4Tq2WG5QOpfwsNiy604cIUueGwarIEHj+lX2UplDf62A
				IhA69/UccP4gieFg+NW4S/x5/RhNDyhLW4ztWg9Ny3M+cycKbYZrKzJt9pBt
				aWskXBJQVr3oCBgPVRJ7O0O9uAbTUFvt+/RtZ5FZkigaIHge8j4aFgTOTaj1
				QKeB45xS5Cw8BIzyrXsbouUvQV9lBXYONQARAQABwsBfBBgBCAATBQJdeIsG
				CRBxn3YWNJphrQIbDAAAA/4H/RNb8BMtz4aVTfVwq13l520YE5aR0h+rDpJG
				mnt5YLLgSS2brFMk0lZOrZqEqt88BrCKeyg8fTPuziki1m1NUqM7Qw4t/K79
				JVs6UQh9wfDq6Q39LsYoEkq9uiND6YtBVK+F6SpfffLIZ9GyXJ6P8KoBa/Mp
				gXR2aCd4b3sLvdmDtaJWoO0834/4HOEi+OaLvEeQc3MhhioXLP1b75LllC+x
				y/Rnv0MorN0XEF7YmswqaMD8ullp7F4WTY1MKLZAzbCljG7bB6HZ9PA/H5Nh
				XQ4U2HCntFPzCd5ZXr3hvW/24GhChqdFRhATX48idUQiBaVpL1W1EStHx5Jf
				O+FpBsI=
				=PuMo
				-----END PGP PUBLIC KEY BLOCK-----`;
				

				const encryptMessage = async () => {
					window.alert("In function");
					if (message != "") {
						const publicKeyString = pubkey;

						var options = {
							message: openpgp.message.fromText(message),
							publicKeys: (await openpgp.key.readArmored(publicKeyString)).keys
						};


						openpgp.encrypt(options).then(ciphertext => {
							encrypted=ciphertext.data;
							//console.log(ciphertext.data);

						})


					}
					else {
						console.log("This browser does not support basic cryptography!");
					}
					
					//window.alert(encrypted);
				}

                encryptMessage();

	return encrypted;
				
                

}