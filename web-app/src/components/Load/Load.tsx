import './style.scss'

function Load(){
    return(
        <div className="load">
            <div className="load__banner">
                <img src="./extremeXP_logo.png" alt="logo" className="load__banner__logo"/>
                <div className="load__banner__title">ExtremeXP Graphical Editor</div>
            </div>
            <div className="load__file">
                <div className= "load__file__button">
                    <div>New Deployment</div>
                </div>
                <div className="load__file__button">
                    Open Deployment from ... 
                </div>
            </div>
            
        </div>
    )
}

export default Load;