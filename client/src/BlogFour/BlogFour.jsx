import React from 'react'

const BlogFour = () => {

  return (
      <div className="max-w-2xl px-6 h-screen border rounded-md py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-black  dark:text-gray-50">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracki md:text-5xl">Eternity Solutions</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
				<div className="flex items-center md:space-x-2">
					
					<p className="text-sm pl-2">Mary Thomas • Nov 15th, 2023</p>
				</div>
				<p className="flex-shrink-0 mt-3 pr-2 text-sm md:mt-0"> 1,570 views</p>
			</div>
		</div>
		<div className="dark:text-gray-100 pl-2 pb-2">
			<p>Exploring the Wonders of You</p>
		</div>
	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-orange-400 dark:text-gray-900">#leaders</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-orange-400 dark:text-gray-900">#creators</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-orange-400 dark:text-gray-900">#tech</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Recommended</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Profile</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Learn More</a>
				</li>
			</ul>
		</div>
	</div>
    </div>
  )
}
export default BlogFour