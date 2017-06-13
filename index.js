var emailList = require("./ejercicioEmails.js").emails;

console.log(
	emailList
		.map(getDataFromEmails)
		.map(getContentFromSubject)
		.map(getRelevantData)
		.reduce(transformData, [])
);

function getDataFromEmails(emails) {
	return {
		subject: emails.data["Subject"],
		content: emails.data["body-plain"]
	};
}

function getContentFromSubject(mail) {
	mail["content"] = mail["content"].replace(/\n|\r/g, "");
	if (/Cotiza/g.test(mail["subject"])) {
		return mail["content"].match(/(seguimiento.*[Modelo|Comentario])/g)[0].split(":");
	} else {
		return mail["content"].match(/(Nombre.*\.com)/g)[0].split(":");
	}
}

function getRelevantData (wordList, index) {
	return [
		wordList[
			index === 0 ? 4 :
			index === 1 ? 2 : 1
		],
		wordList[
			index === 0 ? 5 :
			index === 1 ? 3 : 12
		],
		wordList[
			index === 0 ? 7 :
			index === 1 ? 7 : 13
		],
	]
}

function transformData(data, wordList, index) {
	var buffer = {};
	if (index === 0) {
		buffer["Nombre"] = wordList[0].match(/^(.*)Email$/)[1].toUpperCase();
		buffer["Email"] = wordList[1].match(/^(.*)\<mailto$/)[1];
		buffer["Telefono"] = wordList[2].match(/^(.*)V.*$/)[1];
	}
	if (index === 1) {
		buffer["Nombre"] = wordList[0].match(/^(.*)Email$/)[1].toUpperCase();
		buffer["Email"] = wordList[1].match(/^(.*)Estado$/)[1];
		buffer["Telefono"] = wordList[2].match(/^(.*)Modelo/)[1];
	}
	if (index === 2) {
		buffer["Nombre"] = wordList[0].match(/^(.*)\sFecha/)[1].toUpperCase();
		buffer["Email"] = wordList[2];
		buffer["Telefono"] = wordList[1].split(" ")[1];
	}
	data.push(buffer);
	return data;
}