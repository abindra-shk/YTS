import close from "../../assets/close.png"

export const Dialog = (props)=>{
    return props.open ? <div className="dialog-screen">
        <div className="backdrop" ></div>
        <div className="dialog">
            <div className="close" onClick={props.close}><span class="material-symbols-outlined">close</span></div>
            <div className="dialog-box">
            {props.children}
            </div>
        </div>
    </div>:<></>
    
    
}