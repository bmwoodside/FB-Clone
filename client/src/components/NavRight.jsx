

const NavRight = (props) => {


    return (
        <div className="body-nav-right">
            <div className="body-nav-right-top">
                <div className="info-card">
                    <div className="info-card-row1">
                        <span>ico Birthdays</span>
                        <span><button className="btn-small btn-danger">X</button></span>
                    </div>
                    <p>
                        <strong>NAME</strong>'s birthday is today.
                    </p>
                </div>
            </div>

            <hr />

            <div className="body-nav-right-bottom">
                <div className="body-nav-right-bottom-header">
                    <span>Contacts</span>
                    <span>
                        <button className="btn-small btn-info">cam</button>
                        <button className="btn-small btn-info">search</button>
                        <button className="btn-small btn-info">...</button>
                    </span>
                </div>

                {/* map list of contacts that are online here */}
                <button className="btn btn-info">ico Name</button>
                <button className="btn btn-info">ico Name</button>
                <button className="btn btn-info">ico Name</button>
                <button className="btn btn-info">ico Name</button>
                <button className="btn btn-info">... etc</button>
            </div>
        </div>
    )
}

export default NavRight;