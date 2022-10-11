import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
                    <Link className="navbar-brand" to="/">
						ITSA - IEEE
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-mdb-toggle="collapse"
						data-mdb-target="unavbarCenteredExample"
						aria-controls="navbarCenteredExample"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-bars"></i>
					</button>

					<div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
						<ul className="navbar-nav mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/events">
                                    Events
								</Link>
							</li>
                            <li className="nav-item">
								<Link className="nav-link" to="/team">
                                    Our Team
								</Link>
							</li>
                            <li className="nav-item">
								<Link className="nav-link" to="/faculty">
									Faculty Mentors
								</Link>
							</li>
							
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
