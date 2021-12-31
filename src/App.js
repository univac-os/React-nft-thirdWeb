import React, { useState, useEffect } from "react";

// Styles
import "./App.css";

// Components
import Header from "./Components/Header";
import Punklist from "./Components/Punklist/Punklist";
import Main from "./Components/Main/Main";

// Axios  --for api req
import axios from "axios";

function App() {
	// Data from OpenSea
	//axios send api req and Store them punkListData using setPunkListData
	const [punkListData, setPunkListData] = useState([]);

	///here we need to slected punk to display so take from punklistdata from PunkList.js
	const [selectedPunk, setSelectedPunk] = useState(0);

	useEffect(() => {
		//using axios we fetch api req and get data
		//asset_contract_address :"nft module addr not wallet"
		//order:get ascending order
		const getNFTs = async () => {
			const options = {
				method: "GET",
				url: "https://testnets-api.opensea.io/api/v1/assets",
				params: {
					order_direction: "asc",
					offset: "0",
					limit: "20",
					asset_contract_address: "0xEb9278Ff741c67880cbD61852A31f4f5BE7B5F46"
				}
			};

			axios
				.request(options)
				.then(function (response) {
					setPunkListData(response.data.assets);
				})
				.catch(function (error) {
					console.error("err: ", error);
				});
		};

		//calling
		return getNFTs();
	}, []); //no dependency

	return (
		<div className="app">
			<Header />

			{punkListData.length > 0 && (
				///we need to 1st api call is made and store in arr so we see length
				<>
					<Main selectedPunk={selectedPunk} punkListData={punkListData} />
					# send selected punk and punklistData to show name ,id
					<Punklist
						//now send those as parameter to punkList.js
						punkListData={punkListData}
						setSelectedPunk={setSelectedPunk}
					/>
				</>
			)}
		</div>
	);
}

export default App;

//total 3 parts
//1.header
//2. collection card
//3.main
