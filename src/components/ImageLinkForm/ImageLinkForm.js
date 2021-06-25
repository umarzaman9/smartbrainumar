import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

	return (
		<div>
			<p className= "f3">
				{'This App will detect faces that you provide. Give it a try.'}
			</p>
				<div className="center ">
					<div className="center form pa4 br3 shadow-5" > 
						<input className='tc f4 pa2 w-70 center'  onChange = {onInputChange} type="text"/> 
						<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onButtonSubmit} >Detect</button>	 
					</div>
				</div>
			</div>
		);
	}

export default ImageLinkForm;	