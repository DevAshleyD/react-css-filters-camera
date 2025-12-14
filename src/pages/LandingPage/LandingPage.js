import React, { useState } from "react"
import { Link } from 'react-router-dom'
import "./App.css"
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai"

const userPrefersDark = localStorage.darkMode
	? localStorage.darkMode === "true"
	: window.matchMedia &&
	  window.matchMedia("(prefers-color-scheme: dark)").matches;

function LandingPage() {
	const [darkMode, setDarkMode] = useState(userPrefersDark);

	const handleDarkModeToggle = (e) => {
		setDarkMode(e.target.checked);
		localStorage.setItem("darkMode", e.target.checked);
	};
	return (
		<div className={`app ${darkMode ? "dark-theme" : ""}`}>
			<header className="app__header">
				<h1 className="app__heading">
					<span className="app__logo">
						<AiOutlineMail />
					</span>
				</h1>
				<nav className="app__nav">
					<ul className="app__nav-list">
						<li className="app__nav-item"> Works </li>
						<li className="app__nav-item"> Resume </li>
						<li className="app__nav-item"> Services </li>
						<li className="app__nav-item"> Contact </li>
					</ul>

					<button className="app__menu-btn">
						<AiOutlineMenu size={30} />
					</button>

					<label className="switch">
						<input
							type="checkbox"
							aria-label="toggle dark mode"
							defaultChecked={darkMode}
							onChange={handleDarkModeToggle}
						/>
						<span className="slider round" />
					</label>
				</nav>
			</header>
			<main className="app__body">
				
			</main>
		</div>
	);
}

export default LandingPage;
