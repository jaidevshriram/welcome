import React from 'react';
import ProgressBar from './ProgressBar';

export default class Intro extends React.Component {
	render() {
		return (
			<React.Fragment>
	        
				<ProgressBar {...this.props} />

		        <div className="container-fluid h-75 pt-5">
		        	<div className="row h-100">
		        		<div className="col-5 text-left">
							<div className="card text-center h-100">
							  <div className="card-header">
							    <span className="h5 font-weight-bold">1.&nbsp;&nbsp;</span> This is your abbreviation or <span className="font-weight-bold">Snippet</span>
							  </div>
							  <div className="card-body d-flex align-items-center">
							  	<div>
							    <h5 className="card-title">Snippet Name: <span className="font-weight-bold"><mark>Demo</mark></span></h5>
							    <p className="card-text pt-4"><i>Snippet names expand into the text you want it to!</i></p>
							  	</div>
							  </div>
							  <div className="card-footer text-muted">
							    Snippet names are case insensitive!
							  </div>
							</div>
		        		</div>
		        		<div className="col-2 d-flex align-items-start flex-column bg-light">
		        			<span className="h5 font-weight-bold">2.&nbsp;&nbsp;</span> 
		        			<span className="my-auto">
		        				Type the snippet and press the default hotkey:<br/><br/>
		        				<kbd className="h3">Tab</kbd>
		        			</span>
		        		</div>
		        		<div className="col-5 text-left">
							<div className="card text-center h-100">
							  <div className="card-header">
							    <span className="h5 font-weight-bold">3.&nbsp;&nbsp;</span> You now expand your snippet!
							  </div>
							  <div className="card-body align-items-center">
							  	Type <mark>Demo</mark> and hit <kbd>Tab</kbd> in the box to below to see the magic happen!
							  	<form className="pt-5">
								  	<div className="form-group">
								    	<textarea className="form-control" rows="5">
								    	</textarea>
								  	</div>
							  	</form>
							  </div>
							  <div className="card-footer text-muted">
							    You can change the Tab key to any combination in <i>Settings</i>
							  </div>
							</div>
		        		</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}