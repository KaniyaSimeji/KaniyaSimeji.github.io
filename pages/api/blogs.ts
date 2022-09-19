import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), 'pages/blog')
const md_file_extension = ".md"
const mdx_file_extension = ".mdx"

function getContentSlug() {
	return fs.readdirSync(postsDirectory)
	
}

export function getContentFilesInDirectory() {
	const allFiles = getContentSlug().map((fileName) => {
		return path.parse(fileName)
	})

	return allFiles.filter(parsedFile => parsedFile.ext == md_file_extension || parsedFile.ext == mdx_file_extension)
}

