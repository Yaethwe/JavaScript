const body = document.querySelector('body');


const list = {
	apple:{
		color:"red",
		info:`
		Apples are the most popular fruit in the world and everyone know about that.
		`,
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HySrCJe7ATbkNjvwko8rwQHaIZ%26pid%3DApi%26h%3D160&f=1",
	},
	orange:{
		color:"orange",
		info:"Orange is a fruit which sour and sweet.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QfvAfyfZD7CgTSgRa7BJXQHaFj%26pid%3DApi&f=1",
	},
	lime:{
		color:"lime",
		info:"Lime are very sour fruit.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.glm8djGXktPeckLacH25BgHaGB%26pid%3DApi&f=1",
	},
	peach:{
		color:"pink",
		info:"I don't know about peach very much.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fLeW4FUGSVvYG7Z9h0168wHaHa%26pid%3DApi&f=1",
	},
	gold:{
		color:"gold",
		info:"Gold is the most precious mineral in the world.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V2-7onvis1ExsV4DDqNKSAHaEc%26pid%3DApi&f=1",
	},
	silver:{
		color:"silver",
		info:"Silver bars are good for producing prize and trophy",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qErKQ-NVGJXJEvMk1b0-oAAAAA%26pid%3DApi&f=1",
	},
	rose:{
		color:"red",
		info:"Rose is popular flower.",
		img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EgTtn1GwwUhPfFFXVTgPPAHaGd%26pid%3DApi&f=1",
	},
}

for (i in list) {
	let box = document.createElement('div');
	let br = document.createElement('br');
	box.className='box01';
	
	if (list[i].img==""){
		box.innerHTML=`
	<h3>${i}</h3>
	<label>The color of ${i} is <span style="color:${list[i].color}">${list[i].color}</span>.\n <span style='color:black;font-family:elephant;'> ${list[i].info}</span></label>
	`;
	}
	else{
		box.innerHTML=`
	<h3>${i}</h3>
	<center><img src="${list[i].img}" alt="${i}'s photo" width="200px"></center>
	<label>The color of ${i} is <span style="color:${list[i].color}">${list[i].color}</span>.\n <span style='color:black;font-family:elephant;'> ${list[i].info}</span></label>
	`;
	}
	body.appendChild(box);
	body.appendChild(br);
}
let n = JSON.stringify(list);

let txt = document.createElement('label');
txt.style=`
color:blue;
background-color:white;
border-radius:10px;
padding:10px;
margin:10px;
`;
txt.textContent=n;
body.appendChild(txt);