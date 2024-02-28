import { useEffect, useState } from "react"

const Route = ({path, component}) => {
    const [curPath, setCurPath] = useState(window.location.pathname)
    useEffect(()=>{
        const navigate = () => {
        setCurPath(window.location.pathname)
        }
        window.addEventListener('navigate', navigate)
        window.addEventListener('popstate', navigate)
    })
    return curPath === path ? component() : null;
}
  
const Link = ({href, children, state}) => {
    const updateHistory = (e) => {
        e.preventDefault();
        window.history.pushState(state, "", href)
        const LocationChange = new PopStateEvent('navigate')
        window.dispatchEvent(LocationChange)
    }
    
    return <a href={href} onClick={(e)=>updateHistory(e)}>{children}</a>
}

const getState = () => window.history.state

export {Link, Route, getState};