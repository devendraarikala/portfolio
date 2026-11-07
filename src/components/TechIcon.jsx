import { FaJava, FaDatabase, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiPython, SiHtml5, SiReact, SiNodedotjs, SiExpress, SiMysql, SiGit, SiGithub } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Network, Boxes, Puzzle, Cloud, Code2 } from 'lucide-react'

// Ordered: first match wins (so "JavaScript" is tested before "Java").
const map = [[/javascript/i, SiJavascript], [/java/i, FaJava], [/python/i, SiPython], [/html/i, SiHtml5], [/css/i, FaCss3Alt],
  [/react/i, SiReact], [/node/i, SiNodedotjs], [/express/i, SiExpress], [/mysql/i, SiMysql], [/sql/i, FaDatabase],
  [/data structures/i, Network], [/object/i, Boxes], [/problem/i, Puzzle], [/github/i, SiGithub], [/git/i, SiGit],
  [/vs code/i, VscVscode], [/api/i, Cloud]]

export default function TechIcon({ name, size = 22 }) {
  const Icon = (map.find(([re]) => re.test(name)) || [null, Code2])[1]
  return <Icon size={size} aria-hidden="true" focusable="false" />
}
