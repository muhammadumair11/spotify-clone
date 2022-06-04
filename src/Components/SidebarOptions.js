import "../assets/scss/components-scss/sidebaroptions.scss";

function SidebarOptions({title, Icon, onClickPlaylist}) {
    return (
        <div className="sidebaroptions">
            {Icon && <Icon className="sidebaroptions__icon" />}
            {
                Icon ? (
                    <h4 className="sidebaroptions__title">
                        {title}
                    </h4>
                ) : (
                        <p onClick={onClickPlaylist} className="sidebaroptions__title">{ title }</p>
                )
            }
        </div>
    )
}

export default SidebarOptions