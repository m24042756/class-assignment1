import Link from 'next/link'
import react from 'react'
import service from "../service.module.css"
const page = () => {
    return(
        <div className={service.p}>
            <h1 className={service.p}>THIS IS SERVICE PAGE</h1>
             <b className={service.b}>
             <Link href="/service/App-development" >.APP DEVELOPMENT</Link>
             <br />
             <Link href="/service/website-development" >.WEBSITE DEVELOPMENT</Link>
             </b>
             <br />
             <Link className={service.color} href="/"> HOME</Link>
    
        </div>
    )
}
export default page;