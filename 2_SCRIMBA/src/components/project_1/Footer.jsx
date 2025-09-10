import React from 'react'

function Footer() {
  return (
    <footer className="w-full text-center py-4 mb-0 mt-24 bg-transparent px-[64px]">
      <small className="text-gray-600">
        &copy; {new Date().getFullYear()} Developed with ❤️ by{" "}
        <a 
          href="http://" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline"
        >
          Spencer Wawaku
        </a>
      </small>
    </footer>
  )
}

export default Footer
