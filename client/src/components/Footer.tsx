const Footer = () => {
	return (
		<footer className='footer p-10 border-t-[1px]  text-base-content'>
			<nav>
				<header className='footer-title'>Services</header>
				<a className='link link-hover'>Branding</a>
				<a className='link link-hover'>Design</a>
				<a className='link link-hover'>Marketing</a>
				<a className='link link-hover'>Advertisement</a>
			</nav>
			<nav>
				<header className='footer-title'>Company</header>
				<a className='link link-hover'>About us</a>
				<a className='link link-hover'>Contact</a>
				<a className='link link-hover'>Jobs</a>
				<a className='link link-hover'>Press kit</a>
			</nav>
			<nav>
				<header className='footer-title'>Legal</header>
				<a className='link link-hover'>Terms of use</a>
				<a className='link link-hover'>Privacy policy</a>
				<a className='link link-hover'>Cookie policy</a>
			</nav>
			<form>
				<header className='footer-title'>Newsletter</header>
				<fieldset className='form-control'>
					<label className='label'>
						<span className='label-text'>Enter your email address</span>
					</label>
					<div className='join'>
						<input
							type='text'
							placeholder='username@site.com'
							className='input input-bordered join-item w-full'
						/>
						<button className='btn btn-primary join-item'>Subscribe</button>
					</div>
				</fieldset>
			</form>
		</footer>
	);
};

export default Footer;
