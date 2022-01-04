const Navbar = () => {
    return (
        <nav className="bg-black">
            <div className="max-w-9xl h-24 mx-auto">
                <div className="flex justify-between pt-6">
                    <div className="pl-6">
                        <a href="https:www.youtube.com">
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/death-insurance.png" alt="home" />
                        </a>
                    </div>

                    <div className="hidden md:flex">
                        <div className="pr-6">
                            <a href="https://github.com/HarryZYH">
                                <img src="https://img.icons8.com/material-outlined/48/ffffff/github.png" alt="github" />
                            </a>
                        </div>

                        <div className="pr-4">
                            <a href="https://www.instagram.com/harry.zyh/">
                                <img src="https://img.icons8.com/material-outlined/48/ffffff/instagram-new--v1.png" alt="ins" />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center text-white pr-4">
                        <button className="mobile-menu-button">
                            <img src="https://img.icons8.com/material-outlined/48/ffffff/menu--v1.png" alt="bar" />
                        </button>
                    </div>

                </div>
            </div>

            <div className="hidden mobile-menu">
                <a href="https://github.com/HarryZYH" className="block py-2 px-4 text-sm hover:bg-gray-200 text-white">GITHUB</a>
                <a href="https://www.instagram.com/harry.zyh/" className="block py-2 px-4 text-sm hover:bg-gray-200 text-white">INSTAGRAM</a>
            </div>
        </nav>
    )
}

export default Navbar
