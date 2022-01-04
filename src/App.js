
function App() {
  return (
    <nav class="bg-black">
      <div class="max-w-9xl h-24 mx-auto">
        <div class="flex justify-between pt-6">
          <div class="pl-6">
            <a href="https:www.youtube.com">
              <img src="https://img.icons8.com/material-outlined/48/ffffff/death-insurance.png" alt="home" />
            </a>
          </div>

          <div class="hidden md:flex">
            <div class="pr-6">
              <a href="https://github.com/HarryZYH">
                <img src="https://img.icons8.com/material-outlined/48/ffffff/github.png" alt="github" />
              </a>
            </div>

            <div class="pr-4">
              <a href="https://www.instagram.com/harry.zyh/">
                <img src="https://img.icons8.com/material-outlined/48/ffffff/instagram-new--v1.png" alt="ins" />
              </a>
            </div>
          </div>

          <div class="md:hidden flex items-center text-white pr-4">
            <button>
              <img src="https://img.icons8.com/material-outlined/48/ffffff/menu--v1.png" alt="bar" />
            </button>
          </div>

        </div>
      </div>

      <div class="hidden">
        <a href="https://github.com/HarryZYH" class="block py-2 px-4 text-sm hover:bg-gray-200 text-white">GITHUB</a>
        <a href="https://www.instagram.com/harry.zyh/" class="block py-2 px-4 text-sm hover:bg-gray-200 text-white">INSTAGRAM</a>
      </div>
    </nav>
  );
}

export default App;
