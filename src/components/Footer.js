import React from 'react'

export default function Footer() {
    return (
        <div className="container">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                        <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://randomuser.me/">Cool stuff</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Random feature</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Team feature</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Stuff for developers</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Another one</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://randomuser.me/">Resource</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Resource name</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Another resource</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://randomuser.me/">Team</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Locations</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Privacy</a></li>
                            <li><a className="text-muted" href="https://randomuser.me/">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}
