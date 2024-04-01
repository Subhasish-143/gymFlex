

const Position = ({image, imgLeft, children}) => {
  return (
    <div className="about_sub_container">
        {
            imgLeft && 
            <>
            <div className="about_section-image">
                <img src={image} alt=" image" />
            </div>
            <div className="about_section-content">
                {children}
            </div>
            </>
        }
        {
            !imgLeft && 
            <>
            <div className="about_section-content">
                {children}
            </div>
            <div className="about_section-image">
                <img src={image} alt=" image" />
            </div>
            </>
        }
    </div>
  )
}

export default Position