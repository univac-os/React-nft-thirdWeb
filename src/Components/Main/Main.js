import React, { useEffect, useState } from "react";

// Styles
import "./Main.css";

// Icons
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
	//take selected punk and store it in activePunk
	//take default value as 1st element in arr
	const [activePunk, setActivePunk] = useState(punkListData[0]);

	useEffect(() => {
		//storing the all data of selected punk from punklistData
		setActivePunk(punkListData[selectedPunk]);
	}, [punkListData, selectedPunk]); //this is dependent on punklist and selectedPunk to execute

	return (
		<div className="main">
			<div className="main-content">
				<div className="punk-highlight">
					<div className="punk-container">
						<img
							className="selected-punk"
							src={activePunk.image_original_url}
							alt="bandana punk"
						/>
					</div>
				</div>

				<div className="punk-details">
					<div className="title">
						{activePunk.name} {"."}
						<span className="item-number">#{activePunk.token_id}</span>
					</div>

					<div className="owner">
						<div className="owner-image-container">
							<img src={activePunk.owner.profile_img_url} alt="owner" />
						</div>
						<div className="owner-details">
							<div className="owner-name-and-handle">
								<div>{activePunk.owner.address}</div>
								<div className="owner-handle">@UNIVAC</div>
							</div>
							<div className="owner-link">
								<img src={instagramLogo} alt="instagram" />
							</div>
							<div className="owner-link">
								<img src={twitterLogo} alt="twitter" />
							</div>
							<div className="owner-link">
								<img src={moreIcon} alt="more" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
